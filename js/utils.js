// Utility functions and animations

const Utils = {
    // Debounce function for performance optimization
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Throttle function for scroll events
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    },

    // Check if element is in viewport
    isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },

    // Smooth scroll to element
    smoothScrollTo(element, duration = 1000) {
        const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let start = null;

        function animation(currentTime) {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    },

    // Generate random ID
    generateId() {
        return Math.random().toString(36).substr(2, 9);
    },

    // Format currency
    formatCurrency(amount, currency = 'USD') {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currency,
        }).format(amount);
    },

    // Format date
    formatDate(date, format = 'long') {
        const options = {
            short: { month: 'short', day: 'numeric' },
            long: { year: 'numeric', month: 'long', day: 'numeric' },
            time: { hour: '2-digit', minute: '2-digit' }
        };
        return new Intl.DateTimeFormat('en-US', options[format]).format(date);
    }
};

// Scroll animations and effects

const ScrollAnimations = {
    init() {
        this.setupScrollReveal();
        this.setupParallaxEffect();
    },

    setupScrollReveal() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-up');
                }
            });
        }, observerOptions);
        
        // Observe elements for animation
        const elementsToAnimate = [
            '.gallery-item',
            '.room-card',
            '.amenity-item',
            '.contact-item',
            '.footer-section'
        ];
        
        elementsToAnimate.forEach(selector => {
            document.querySelectorAll(selector).forEach(el => {
                observer.observe(el);
            });
        });
    },

    setupParallaxEffect() {
        const heroSection = document.querySelector('.hero');
        if (!heroSection) return;

        window.addEventListener('scroll', Utils.throttle(() => {
            const scrolled = window.pageYOffset;
            const parallax = heroSection.querySelector('.hero-bg');
            if (parallax) {
                const speed = scrolled * 0.5;
                parallax.style.transform = `translateY(${speed}px)`;
            }
        }, 10));
    }
};

// Loading animations

const LoadingAnimations = {
    init() {
        this.setupImageLoading();
        this.setupPageLoader();
    },

    setupImageLoading() {
        const images = document.querySelectorAll('img');
        
        images.forEach(img => {
            img.addEventListener('load', function() {
                this.classList.add('loaded');
            });
            
            // If image is already loaded (from cache)
            if (img.complete) {
                img.classList.add('loaded');
            }
        });
    },

    setupPageLoader() {
        window.addEventListener('load', () => {
            document.body.classList.add('loaded');
            
            // Remove page loader after a delay
            const pageLoader = document.querySelector('.page-loader');
            if (pageLoader) {
                setTimeout(() => {
                    pageLoader.style.opacity = '0';
                    setTimeout(() => {
                        pageLoader.style.display = 'none';
                    }, 300);
                }, 500);
            }
        });
    }
};

// Responsive utilities

const ResponsiveUtils = {
    init() {
        this.setupResponsiveMenu();
        this.setupResponsiveTables();
    },

    setupResponsiveMenu() {
        const mediaQuery = window.matchMedia('(max-width: 768px)');
        
        function handleTabletChange(e) {
            if (e.matches) {
                // Mobile view
                document.body.classList.add('mobile-view');
            } else {
                // Desktop view
                document.body.classList.remove('mobile-view');
            }
        }
        
        mediaQuery.addListener(handleTabletChange);
        handleTabletChange(mediaQuery);
    },

    setupResponsiveTables() {
        const tables = document.querySelectorAll('table');
        tables.forEach(table => {
            const wrapper = document.createElement('div');
            wrapper.className = 'table-responsive';
            table.parentNode.insertBefore(wrapper, table);
            wrapper.appendChild(table);
        });
    },

    isMobile() {
        return window.innerWidth <= 768;
    },

    isTablet() {
        return window.innerWidth > 768 && window.innerWidth <= 1024;
    },

    isDesktop() {
        return window.innerWidth > 1024;
    }
};

// Export utilities for use in other components
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Utils, ScrollAnimations, LoadingAnimations, ResponsiveUtils };
}