/**
 * Food Pages Component
 * Handles individual food menu pages (breakfast, lunch, dinner, etc.)
 */

class FoodPagesComponent {
    constructor(category) {
        this.category = category;
        this.menuData = foodMenuData;
        this.currentCategoryData = this.getCurrentCategoryData();
        this.init();
    }

    init() {
        this.bindEvents();
        this.renderMenuItems();
        this.updatePageTitle();
    }

    bindEvents() {
        // Handle menu item clicks for detailed view
        document.addEventListener('click', (e) => {
            if (e.target.closest('.menu-item-card')) {
                const itemId = e.target.closest('.menu-item-card').dataset.itemId;
                this.showItemDetails(itemId);
            }
        });

        // Handle back button in detail view
        document.addEventListener('click', (e) => {
            if (e.target.closest('.back-to-menu')) {
                this.hideItemDetails();
            }
        });

        // Smooth scrolling for internal links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }

    getCurrentCategoryData() {
        return this.menuData.categories.find(cat => cat.id === this.category);
    }

    renderMenuItems() {
        const container = document.getElementById(`${this.category}-items`);
        if (!container) return;

        const categoryItems = this.menuData.items.filter(item => item.category === this.category);
        
        let html = '';
        categoryItems.forEach(item => {
            html += this.createMenuItemCard(item);
        });

        container.innerHTML = html;
    }

    createMenuItemCard(item) {
        const category = this.menuData.categories.find(cat => cat.id === item.category);
        const categoryIcon = category ? category.icon : 'fas fa-utensils';
        
        return `
            <div class="menu-item-card" data-item-id="${item.id}">
                <div class="item-image">
                    <img src="${item.image}" alt="${item.name}" onerror="this.src='${this.getFallbackImage(item.category)}'">
                    <div class="image-overlay">
                        <span class="prep-time"><i class="fas fa-clock"></i> ${item.preparationTime}</span>
                        ${item.isVegetarian ? '<span class="veg-badge"><i class="fas fa-leaf"></i></span>' : ''}
                        ${item.isSpicy ? '<span class="spicy-badge"><i class="fas fa-fire"></i></span>' : ''}
                    </div>
                </div>
                <div class="item-content">
                    <div class="item-header">
                        <h3 class="item-name">${item.name}</h3>
                        <span class="item-price">${item.price}</span>
                    </div>
                    <p class="item-description">${item.description}</p>
                    <div class="item-meta">
                        <span class="category-label">
                            <i class="${categoryIcon}"></i> ${category ? category.name : item.category}
                        </span>
                        <button class="view-details-btn">View Details</button>
                    </div>
                </div>
            </div>
        `;
    }

    renderItemDetails(item) {
        const modal = document.createElement('div');
        modal.className = 'item-detail-modal';
        modal.innerHTML = `
            <div class="modal-overlay"></div>
            <div class="modal-content">
                <button class="close-modal">&times;</button>
                <button class="back-to-menu"><i class="fas fa-arrow-left"></i> Back to Menu</button>
                <div class="modal-body">
                    <div class="modal-image">
                        <img src="${item.image}" alt="${item.name}" onerror="this.src='${this.getFallbackImage(item.category)}'">
                        <div class="modal-image-overlay">
                            ${item.isVegetarian ? '<span class="veg-indicator"><i class="fas fa-leaf"></i> Vegetarian</span>' : ''}
                            ${item.isSpicy ? '<span class="spicy-indicator"><i class="fas fa-fire"></i> Spicy</span>' : ''}
                        </div>
                    </div>
                    <div class="modal-info">
                        <h2 class="modal-title">${item.name}</h2>
                        <p class="modal-price">${item.price}</p>
                        <p class="modal-description">${item.description}</p>
                        
                        <div class="modal-details">
                            <div class="detail-item">
                                <i class="fas fa-clock"></i>
                                <span><strong>Preparation Time:</strong> ${item.preparationTime}</span>
                            </div>
                            <div class="detail-item">
                                <i class="fas fa-utensils"></i>
                                <span><strong>Category:</strong> ${this.getCategoryName(item.category)}</span>
                            </div>
                            <div class="detail-item">
                                <i class="fas fa-info-circle"></i>
                                <span><strong>Dietary Info:</strong> ${this.getDietaryInfo(item)}</span>
                            </div>
                        </div>
                        
                        <div class="modal-actions">
                            <button class="btn-primary">Order Now</button>
                            <button class="btn-secondary">Add to Favorites</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Close modal events
        modal.querySelector('.close-modal').addEventListener('click', () => this.hideItemDetails());
        modal.querySelector('.modal-overlay').addEventListener('click', () => this.hideItemDetails());
        modal.querySelector('.back-to-menu').addEventListener('click', () => this.hideItemDetails());
        
        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';
        
        return modal;
    }

    showItemDetails(itemId) {
        const item = this.menuData.items.find(item => item.id == itemId);
        if (!item) return;
        
        this.currentModal = this.renderItemDetails(item);
        this.currentModal.style.display = 'block';
        
        // Animate in
        setTimeout(() => {
            this.currentModal.querySelector('.modal-content').classList.add('show');
        }, 10);
    }

    hideItemDetails() {
        if (!this.currentModal) return;
        
        this.currentModal.querySelector('.modal-content').classList.remove('show');
        
        setTimeout(() => {
            this.currentModal.remove();
            this.currentModal = null;
            document.body.style.overflow = '';
        }, 300);
    }

    updatePageTitle() {
        const categoryData = this.currentCategoryData;
        if (categoryData) {
            document.title = `${categoryData.name} Menu - Blue Breeze Resort`;
        }
    }

    getCategoryName(categoryId) {
        const category = this.menuData.categories.find(cat => cat.id === categoryId);
        return category ? category.name : categoryId;
    }

    getDietaryInfo(item) {
        const info = [];
        if (item.isVegetarian) info.push('Vegetarian');
        if (item.isSpicy) info.push('Spicy');
        if (!item.isVegetarian) info.push('Non-Vegetarian');
        return info.length > 0 ? info.join(', ') : 'Regular';
    }

    getFallbackImage(category) {
        const categoryImages = {
            'breakfast': 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&h=400&fit=crop',
            'lunch': 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop',
            'dinner': 'https://images.unsplash.com/photo-1540189549336-6b99c91cb0dc?w=600&h=400&fit=crop',
            'beverages': 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&h=400&fit=crop',
            'desserts': 'https://images.unsplash.com/photo-1551024506-0cf282ab1a3b?w=600&h=400&fit=crop',
            'local-specialties': 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop'
        };
        
        return categoryImages[category] || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop';
    }
}

// Global function to initialize food pages
function initializeFoodPage(category) {
    // Filter the food menu data to only include items for this category
    const filteredData = {
        categories: foodMenuData.categories,
        items: foodMenuData.items.filter(item => item.category === category)
    };
    
    // Temporarily replace the global foodMenuData for this page
    const originalData = window.foodMenuData;
    window.foodMenuData = filteredData;
    
    // Initialize the component
    const foodPageComponent = new FoodPagesComponent(category);
    
    // Restore original data
    window.foodMenuData = originalData;
    
    console.log(`🍽️ ${category.charAt(0).toUpperCase() + category.slice(1)} menu page initialized`);
    
    return foodPageComponent;
}