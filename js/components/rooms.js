// Rooms Component - Handles all room-related functionality

class RoomsComponent {
    constructor() {
        this.roomsData = roomsData;
        this.roomsContainer = null;
        this.roomModal = null;
        this.modalContent = null;
        this.closeModal = null;
        this.init();
    }

    init() {
        this.cacheDomElements();
        this.loadRooms();
        this.setupEventListeners();
    }

    cacheDomElements() {
        this.roomsContainer = document.getElementById('rooms-container');
        this.roomModal = document.getElementById('roomModal');
        this.modalContent = document.getElementById('roomDetails');
        this.closeModal = document.querySelector('.close');
    }

    loadRooms() {
        if (!this.roomsContainer) return;
        
        this.roomsContainer.innerHTML = '';
        
        this.roomsData.forEach(room => {
            const roomCard = this.createRoomCard(room);
            this.roomsContainer.appendChild(roomCard);
        });
    }

    createRoomCard(room) {
        const card = document.createElement('div');
        card.className = 'room-card fade-in-up';
        
        card.innerHTML = `
            <img src="${room.image}" 
                 alt="${room.name}" 
                 class="room-image" 
                 onerror="this.src='${this.getFallbackImage(room.category)}'"
                 loading="lazy">
            <div class="room-content">
                <div class="room-header">
                    <h3 class="room-title">${room.name}</h3>
                    <div class="room-capacity">
                        <i class="fas fa-users"></i>
                        <span>${room.maxGuests} ${typeof room.maxGuests === 'number' && room.maxGuests === 1 ? 'person' : 'persons'}</span>
                    </div>
                </div>
                <div class="room-amenities">
                    <div class="amenities-list">
                        ${room.amenities.slice(0, 10).map(amenity => 
                            `<span class="amenity-tag">${amenity}</span>`
                        ).join('')}
                    </div>
                </div>
            </div>
        `;
        
        return card;
    }

    getFallbackImage(category) {
        const categoryMap = {
            'suite': 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop',
            'villa': 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
            'standard': 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop',
            'family': 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=600&fit=crop',
            'romance': 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop',
            'luxury': 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop'
        };
        return categoryMap[category] || 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop';
    }

    showRoomDetails(roomId) {
        const room = this.roomsData.find(r => r.id === roomId);
        if (!room) return;
        
        const amenitiesHTML = room.amenities.map(amenity => 
            `<li><i class="fas fa-check"></i> ${amenity}</li>`
        ).join('');
        
        this.modalContent.innerHTML = `
            <div class="room-details-modal">
                <img src="${room.image}" 
                     alt="${room.name}" 
                     class="modal-room-image" 
                     onerror="this.src='${this.getFallbackImage(room.category)}'">
                <div class="modal-room-content">
                    <h2 style="font-family: 'sans serif';">${room.name}</h2>
                    <div class="room-specs">
                        <span><i class="fas fa-expand"></i> ${room.size}</span>
                        <span><i class="fas fa-users"></i> Max ${room.maxGuests} guests</span>
                        <span><i class="fas fa-tag"></i> ${room.category}</span>
                    </div>
                    <div class="room-features">
                        <h3>Amenities & Features</h3>
                        <ul class="amenities-full-list">
                            ${amenitiesHTML}
                        </ul>
                    </div>
                    <div class="modal-actions">
                        <button class="book-now-btn" onclick="roomsComponent.bookRoom(${room.id})">
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        this.roomModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    bookRoom(roomId) {
        const room = this.roomsData.find(r => r.id === roomId);
        if (room) {
            alert(`Booking request for ${room.name} has been sent! Our reservation team will contact you shortly to confirm your booking.`);
            this.closeModal.click();
        }
    }

    setupEventListeners() {
        if (this.closeModal) {
            this.closeModal.addEventListener('click', () => {
                this.roomModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            });
        }

        // Close modal when clicking outside
        window.addEventListener('click', (event) => {
            if (event.target === this.roomModal) {
                this.roomModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Public method to refresh rooms
    refreshRooms() {
        this.loadRooms();
    }

    // Public method to filter rooms by category
    filterRoomsByCategory(category) {
        if (!this.roomsContainer) return;
        
        const filteredRooms = category === 'all' 
            ? this.roomsData 
            : this.roomsData.filter(room => room.category === category);
        
        this.roomsContainer.innerHTML = '';
        filteredRooms.forEach(room => {
            const roomCard = this.createRoomCard(room);
            this.roomsContainer.appendChild(roomCard);
        });
    }
}

// Initialize the rooms component
let roomsComponent;

document.addEventListener('DOMContentLoaded', function() {
    roomsComponent = new RoomsComponent();
});