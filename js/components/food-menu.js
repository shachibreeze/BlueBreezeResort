/**
 * Food Menu Component
 * Handles the display and filtering of food menu items
 */

class FoodMenuComponent {
    constructor() {
        this.currentCategory = 'breakfast';
        this.menuData = foodMenuData;
        this.init();
    }

    init() {
        this.bindEvents();
        this.renderCategories();
        this.renderMenuItems();
    }

    bindEvents() {
        // Category filter events
        document.addEventListener('click', (e) => {
            if (e.target.closest('.menu-category-btn')) {
                e.preventDefault();
                const category = e.target.closest('.menu-category-btn').dataset.category;
                this.filterByCategory(category);
            }
        });

        // Smooth scrolling to food menu section
        document.querySelectorAll('a[href="#food-menu"]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector('#food-menu');
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }

    renderCategories() {
        const categoriesContainer = document.getElementById('menu-categories');
        if (!categoriesContainer) return;

        let categoriesHTML = '';

        this.menuData.categories.forEach(category => {
            categoriesHTML += `
                <button class="menu-category-btn" data-category="${category.id}">
                    <i class="${category.icon}"></i>
                    <span>${category.name}</span>
                </button>
            `;
        });

        categoriesContainer.innerHTML = categoriesHTML;
    }

    renderMenuItems(items = null) {
        const menuContainer = document.getElementById('menu-items');
        if (!menuContainer) return;

        const itemsToRender = items || this.menuData.items.filter(item => item.category === 'none');

        let menuHTML = '';
        itemsToRender.forEach(item => {
            const category = this.menuData.categories.find(cat => cat.id === item.category);
            const categoryIcon = category ? category.icon : 'fas fa-utensils';
            
            menuHTML += `
                <div class="menu-item" data-category="${item.category}">
                    <div class="menu-item-image">
                        <img src="${item.image}" alt="${item.name}" onerror="this.src='${this.getFallbackImage(item.category)}'">
                        <div class="menu-item-overlay">                           
                        </div>
                    </div>
                    <div class="menu-item-content">
                        <div class="menu-item-header">
                            <h3 class="menu-item-name">${item.name}</h3>
                        </div>
                    </div>
                </div>
            `;
        });

        if (itemsToRender.length === 0) {
            menuHTML = `
                <div class="no-items-found">
                    <i class="fas fa-utensils"></i>
                    <p>Please select a category to see menu</p>
                </div>
            `;
        }

        menuContainer.innerHTML = menuHTML;
    }

    filterByCategory(category) {
        this.currentCategory = category;
        
        // Update active category button
        document.querySelectorAll('.menu-category-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-category="${category}"]`).classList.add('active');

        // Filter items
        let filteredItems = this.menuData.items.filter(item => item.category === category);

        this.renderMenuItems(filteredItems);
    }

    getFallbackImage(category) {
        // Fallback food images based on category
        const categoryImages = {
            'breakfast': 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=300&fit=crop',
            'lunch': 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
            'dinner': 'https://images.unsplash.com/photo-1540189549336-6b99c91cb0dc?w=400&h=300&fit=crop',
            'beverages': 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop',
            'desserts': 'https://images.unsplash.com/photo-1551024506-0cf282ab1a3b?w=400&h=300&fit=crop',
            'local-specialties': 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop'
        };
        
        return categoryImages[category] || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop';
    }

    // Public method to refresh the menu
    refresh() {
        this.renderCategories();
        this.renderMenuItems();
    }
}

// Initialize the food menu component when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('menu-items')) {
        window.foodMenuComponent = new FoodMenuComponent();
    }
});