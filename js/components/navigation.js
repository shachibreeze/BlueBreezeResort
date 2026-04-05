// Navigation Component - Handles navigation and mobile menu

class NavigationComponent {
    constructor() {
        this.hamburger = null;
        this.navMenu = null;
        this.isMenuOpen = false;
        this.init();
    }

    init() {
        this.cacheDomElements();
        this.setupEventListeners();
        this.setupSmoothScrolling();
    }

    cacheDomElements() {
        this.hamburger = document.querySelector('.hamburger');
        this.navMenu = document.querySelector('.nav-menu');
    }

    setupEventListeners() {
        if (this.hamburger) {
            this.hamburger.addEventListener('click', () => {
                this.toggleMenu();
            });
        }

        // Close menu when clicking on a nav link (mobile)
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    this.closeMenu();
                }
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (this.isMenuOpen && 
                !this.hamburger.contains(e.target) && 
                !this.navMenu.contains(e.target)) {
                this.closeMenu();
            }
        });

        // Handle window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && this.isMenuOpen) {
                this.closeMenu();
            }
        });
    }

    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    toggleMenu() {
        if (this.isMenuOpen) {
            this.closeMenu();
        } else {
            this.openMenu();
        }
    }

    openMenu() {
        this.navMenu.classList.add('active');
        this.isMenuOpen = true;
        this.animateHamburger(true);
    }

    closeMenu() {
        this.navMenu.classList.remove('active');
        this.isMenuOpen = false;
        this.animateHamburger(false);
    }

    animateHamburger(isOpen) {
        if (!this.hamburger) return;
        
        const spans = this.hamburger.querySelectorAll('span');
        if (spans.length >= 3) {
            spans[0].style.transform = isOpen ? 'rotate(-45deg) translate(-5px, 6px)' : 'none';
            spans[1].style.opacity = isOpen ? '0' : '1';
            spans[2].style.transform = isOpen ? 'rotate(45deg) translate(-5px, -6px)' : 'none';
        }
    }

    // Public method to highlight active section
    highlightActiveSection(sectionId) {
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
                link.classList.add('active');
            }
        });
    }
}

// Initialize Navigation Component
let navigationComponent;

document.addEventListener('DOMContentLoaded', function() {
    navigationComponent = new NavigationComponent();
});