// Main App Component - Initializes and manages all other components

class ResortApp {
    constructor() {
        this.components = {};
        this.data = {};
        this.isInitialized = false;
        this.init();
    }

    init() {
        if (this.isInitialized) return;
        
        // Initialize utilities first
        this.initUtilities();
        
        // Initialize data
        this.initData();
        
        // Initialize components
        this.initComponents();
        
        // Setup global event listeners
        this.setupGlobalListeners();
        
        // Mark as initialized
        this.isInitialized = true;
    }

    initUtilities() {
        // Initialize scroll animations
        if (typeof ScrollAnimations !== 'undefined') {
            ScrollAnimations.init();
        }
        
        // Initialize loading animations
        if (typeof LoadingAnimations !== 'undefined') {
            LoadingAnimations.init();
        }
        
        // Initialize responsive utilities
        if (typeof ResponsiveUtils !== 'undefined') {
            ResponsiveUtils.init();
        }
    }

    initData() {
        // Store data modules in the app
        this.data = {
            rooms: roomsData,
            gallery: galleryData,
            amenities: amenitiesData,
            resort: resortInfo,
            fallbacks: fallbackImages,
            foodMenu: foodMenuData
        };
    }

    initComponents() {
        // Initialize Navigation Component
        if (typeof NavigationComponent !== 'undefined') {
            this.components.navigation = new NavigationComponent();
        }
        
        // Initialize Gallery Component
        if (typeof GalleryComponent !== 'undefined') {
            this.components.gallery = new GalleryComponent();
        }
        
        // Initialize Rooms Component
        if (typeof RoomsComponent !== 'undefined') {
            this.components.rooms = new RoomsComponent();
        }
        
        // Initialize Contact Component
        if (typeof ContactComponent !== 'undefined') {
            this.components.contact = new ContactComponent();
        }
        
        // Initialize CTA Component (only once globally)
        if (typeof CTAComponent !== 'undefined' && !window.ctaComponentInitialized) {
            this.components.cta = new CTAComponent();
            window.ctaComponentInitialized = true;
        }
        
        // Initialize Food Menu Component
        if (typeof FoodMenuComponent !== 'undefined') {
            this.components.foodMenu = new FoodMenuComponent();
        }
    }

    setupGlobalListeners() {
        // Handle window resize with debounce
        window.addEventListener('resize', Utils.debounce(() => {
            this.handleResize();
        }, 250));

        // Handle scroll events
        window.addEventListener('scroll', Utils.throttle(() => {
            this.handleScroll();
        }, 100));
    }

    handleResize() {
        // Notify components about resize
        Object.keys(this.components).forEach(componentName => {
            const component = this.components[componentName];
            if (component && typeof component.handleResize === 'function') {
                component.handleResize();
            }
        });
    }

    handleScroll() {
        // Update active navigation based on scroll position
        this.updateActiveNavigation();
        
        // Notify components about scroll
        Object.keys(this.components).forEach(componentName => {
            const component = this.components[componentName];
            if (component && typeof component.handleScroll === 'function') {
                component.handleScroll();
            }
        });
    }

    updateActiveNavigation() {
        const sections = ['hero', 'gallery', 'rooms', 'amenities', 'food-menu', 'contact'];
        const scrollPosition = window.pageYOffset + 100;
        
        sections.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            if (section) {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    if (this.components.navigation) {
                        this.components.navigation.highlightActiveSection(sectionId);
                    }
                }
            }
        });
    }

    // Public API methods

    getComponent(name) {
        return this.components[name] || null;
    }

    getData(key) {
        return this.data[key] || null;
    }

    addComponent(name, component) {
        this.components[name] = component;
    }

    removeComponent(name) {
        delete this.components[name];
    }

    refreshComponent(name) {
        const component = this.getComponent(name);
        if (component && typeof component.refresh === 'function') {
            component.refresh();
        }
    }

    refreshAllComponents() {
        Object.keys(this.components).forEach(componentName => {
            this.refreshComponent(componentName);
        });
    }

    getVersion() {
        return '1.0.0';
    }

    getInfo() {
        return {
            name: 'Blue Breeze Resort App',
            version: this.getVersion(),
            components: Object.keys(this.components),
            initialized: this.isInitialized
        };
    }

    // Error handling
    handleError(error, context = '') {
        console.error(`❌ Resort App Error ${context}:`, error);
        
        // Could send to error tracking service
        // Could show user-friendly error message
        // Could attempt recovery
    }
}

// Initialize the app when DOM is ready
let resortApp;

document.addEventListener('DOMContentLoaded', function() {
    try {
        resortApp = new ResortApp();
        
        // Make resortApp available globally for debugging
        window.resortApp = resortApp;
    } catch (error) {
        console.error('❌ Failed to initialize Resort App:', error);
    }
});

// Handle any uncaught errors
window.addEventListener('error', function(e) {
    if (window.resortApp) {
        window.resortApp.handleError(e.error, 'Global Error');
    } else {
        console.error('❌ Global Error (App not initialized):', e.error);
    }
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', function(e) {
    if (window.resortApp) {
        window.resortApp.handleError(e.reason, 'Unhandled Promise Rejection');
    } else {
        console.error('❌ Unhandled Promise Rejection (App not initialized):', e.reason);
    }
});