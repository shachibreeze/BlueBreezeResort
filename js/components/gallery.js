// Gallery Component - Handles single image carousel functionality

class GalleryComponent {
    constructor() {
        this.galleryData = galleryData;
        this.fallbackImages = fallbackImages;
        this.currentIndex = 0;
        this.carouselImage = null;
        this.prevButton = null;
        this.nextButton = null;
        this.indicators = [];
        this.autoPlayInterval = null;
        this.autoPlayDelay = 4000; // 4 seconds
        this.init();
    }

    init() {
        this.cacheDomElements();
        this.loadCarousel();
        this.setupEventListeners();
        this.startAutoPlay();
    }

    cacheDomElements() {
        this.carouselImage = document.querySelector('.carousel-image');
        this.prevButton = document.querySelector('.carousel-prev');
        this.nextButton = document.querySelector('.carousel-next');
    }

    loadCarousel() {
        if (!this.carouselImage || this.galleryData.length === 0) return;
        
        const currentItem = this.galleryData[this.currentIndex];
        const imageSrc = currentItem.image;
        const fallbackSrc = this.fallbackImages[currentItem.category];
        
        // Set image with fallback
        this.carouselImage.src = imageSrc;
        this.carouselImage.onerror = () => {
            this.carouselImage.src = fallbackSrc;
        };
        
        
        // Update indicators
        this.updateIndicators();
        
        // Add fade-in animation
        this.carouselImage.style.opacity = '0';
        setTimeout(() => {
            this.carouselImage.style.opacity = '1';
        }, 50);
    }

    updateIndicators() {
        this.indicators.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentIndex);
        });
    }

    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.galleryData.length;
        this.loadCarousel();
        this.resetAutoPlay();
    }

    prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.galleryData.length) % this.galleryData.length;
        this.loadCarousel();
        this.resetAutoPlay();
    }

    goToSlide(index) {
        this.currentIndex = index;
        this.loadCarousel();
        this.resetAutoPlay();
    }

    setupEventListeners() {
        // Navigation arrows
        if (this.prevButton) {
            this.prevButton.addEventListener('click', () => this.prevSlide());
        }
        
        if (this.nextButton) {
            this.nextButton.addEventListener('click', () => this.nextSlide());
        }
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.prevSlide();
            } else if (e.key === 'ArrowRight') {
                this.nextSlide();
            }
        });
        
        // Touch/swipe support
        let touchStartX = 0;
        let touchEndX = 0;
        
        const carouselContainer = document.querySelector('.carousel-container');
        if (carouselContainer) {
            carouselContainer.addEventListener('touchstart', (e) => {
                touchStartX = e.changedTouches[0].screenX;
            });
            
            carouselContainer.addEventListener('touchend', (e) => {
                touchEndX = e.changedTouches[0].screenX;
                this.handleSwipe();
            });
        }
    }

    handleSwipe() {
        const swipeThreshold = 50;
        const swipeDistance = touchEndX - touchStartX;
        
        if (Math.abs(swipeDistance) > swipeThreshold) {
            if (swipeDistance > 0) {
                this.prevSlide(); // Swipe right - previous
            } else {
                this.nextSlide(); // Swipe left - next
            }
        }
    }

    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, this.autoPlayDelay);
    }

    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }

    resetAutoPlay() {
        this.stopAutoPlay();
        this.startAutoPlay();
    }

    // Public methods for external control
    next() {
        this.nextSlide();
    }

    prev() {
        this.prevSlide();
    }

    goTo(index) {
        this.goToSlide(index);
    }

    getCurrentIndex() {
        return this.currentIndex;
    }

    getTotalSlides() {
        return this.galleryData.length;
    }

    // Method to add new images to carousel
    addImage(imageData) {
        this.galleryData.push(imageData);
    }

    // Method to remove images from carousel
    removeImage(index) {
        if (this.galleryData.length > 1 && index < this.galleryData.length) {
            this.galleryData.splice(index, 1);
            if (this.currentIndex >= this.galleryData.length) {
                this.currentIndex = this.galleryData.length - 1;
            }
            this.loadCarousel();
        }
    }
}

// Initialize the gallery component
let galleryComponent;

document.addEventListener('DOMContentLoaded', function() {
    galleryComponent = new GalleryComponent();
    
    // Make it globally accessible for debugging
    window.galleryComponent = galleryComponent;
});