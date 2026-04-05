// Blue Breeze Resort - JavaScript Functionality

// Room data structure with local image paths
const roomsData = [
    {
        id: 1,
        name: "Cottages with terrace",
        image: "assets/images/rooms/ocean-view-suite.jpg",
        description: "Luxurious suite with panoramic ocean views, private balcony, and premium amenities. Perfect for couples seeking a romantic getaway.",
        amenities: [
            "King Bed", "Private Terrace",  
            "Cable TV", "WiFi", "Air Conditioning", "Clothes Dryer Stand" ,"Hot Water"
        ],
        category: "suite",
        size: "65 sqm",
        maxGuests: 2 + 1
    },
    {
        id: 2,
        name: "Cottages",
        image: "assets/images/rooms/beach-villa.jpg",
        description: "Exclusive beachfront villa with direct beach access, private pool, and personalized butler service. Ultimate luxury experience.",
        amenities: [
             "King Bed", "Cable TV", "WiFi", "Air Conditioning", "Clothes Dryer Stand" , "Hot Water"
        ],
        category: "villa",
        size: "120 sqm",
        maxGuests: 2 + 1
    },
    {
        id: 3,
        name: "Rooms",
        image: "assets/images/rooms/garden-room.jpg",
        description: "Comfortable room surrounded by tropical gardens, featuring modern amenities and a peaceful atmosphere.",
        amenities: [
             "King Bed", "Cable TV", "WiFi", "Air Conditioning", "Clothes Dryer Stand" , "Hot Water"
        ],
        category: "standard",
        size: "35 sqm",
        maxGuests: 2 + 1
    },
    {
        id: 4,
        name: "Family Room",
        image: "assets/images/rooms/family-suite.jpg",
        description: "Spacious suite perfect for families, featuring separate living area, kitchenette, and kid-friendly amenities.",
        amenities: [
           "King Bed", "Cable TV", "WiFi", "Air Conditioning", "Clothes Dryer Stand" , "Hot Water" 
        ],
        category: "family",
        size: "85 sqm",
        maxGuests: 8
    }
];

// DOM elements
const galleryItems = document.querySelectorAll('.gallery-item');
const filterButtons = document.querySelectorAll('.filter-btn');
const roomsContainer = document.getElementById('rooms-container');
const roomModal = document.getElementById('roomModal');
const modalContent = document.getElementById('roomDetails');
const closeModal = document.querySelector('.close');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    initializeGallery();
    loadRooms();
    setupEventListeners();
    setupScrollAnimations();
    setupImageFallbacks();
});

// Gallery functionality
function initializeGallery() {
    // Add fade-in animation to gallery images
    const galleryImages = document.querySelectorAll('.gallery-item img');
    
    galleryImages.forEach(img => {
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });
        
        // If image is already loaded (from cache)
        if (img.complete) {
            img.classList.add('loaded');
        }
    });
}

// Setup image fallbacks for missing local images
function setupImageFallbacks() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            // Fallback to Unsplash images if local images are missing
            const alt = this.alt.toLowerCase();
            if (alt.includes('beach')) {
                this.src = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop';
            } else if (alt.includes('pool')) {
                this.src = 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&h=600&fit=crop';
            } else if (alt.includes('dining') || alt.includes('restaurant')) {
                this.src = 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop';
            } else if (alt.includes('spa')) {
                this.src = 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600&fit=crop';
            } else if (alt.includes('room') || alt.includes('suite')) {
                this.src = 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop';
            } else if (alt.includes('activity') || alt.includes('sport')) {
                this.src = 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop';
            } else {
                // Generic fallback for hero or other images
                this.src = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop';
            }
        });
    });
}

// Filter functionality
filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        const filter = this.getAttribute('data-filter');
        
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        // Filter gallery items
        filterGalleryItems(filter);
    });
});

function filterGalleryItems(filter) {
    galleryItems.forEach(item => {
        const category = item.getAttribute('data-category');
        
        if (filter === 'all' || category === filter) {
            item.style.display = 'block';
            item.style.animation = 'fadeInUp 0.6s ease-out';
        } else {
            item.style.display = 'none';
        }
    });
}

// Load rooms data
function loadRooms() {
    roomsContainer.innerHTML = '';
    
    roomsData.forEach(room => {
        const roomCard = createRoomCard(room);
        roomsContainer.appendChild(roomCard);
    });
}

function createRoomCard(room) {
    const card = document.createElement('div');
    card.className = 'room-card fade-in-up';
    
    card.innerHTML = `
        <img src="${room.image}" alt="${room.name}" class="room-image" onerror="this.src='https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop'">
        <div class="room-content">
            <div class="room-header">
                <h3 class="room-title">${room.name}</h3>
                <span class="room-price">${room.price}</span>
            </div>
            <p class="room-description">${room.description}</p>
            <div class="room-amenities">
                <h4>Key Amenities</h4>
                <div class="amenities-list">
                    ${room.amenities.slice(0, 6).map(amenity => 
                        `<span class="amenity-tag">${amenity}</span>`
                    ).join('')}
                </div>
            </div>
            <button class="view-details-btn" onclick="showRoomDetails(${room.id})">
                View Details
            </button>
        </div>
    `;
    
    return card;
}

// Show room details in modal
function showRoomDetails(roomId) {
    const room = roomsData.find(r => r.id === roomId);
    if (!room) return;
    
    const amenitiesHTML = room.amenities.map(amenity => 
        `<li><i class="fas fa-check"></i> ${amenity}</li>`
    ).join('');
    
    modalContent.innerHTML = `
        <div class="room-details-modal">
            <img src="${room.image}" alt="${room.name}" class="modal-room-image" onerror="this.src='https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop'">
            <div class="modal-room-content">
                <h2>${room.name}</h2>
                <div class="room-specs">
                    <span><i class="fas fa-expand"></i> ${room.size}</span>
                    <span><i class="fas fa-users"></i> Max ${room.maxGuests} guests</span>
                    <span><i class="fas fa-tag"></i> ${room.category}</span>
                </div>
                <p class="room-full-description">${room.description}</p>
                <div class="room-features">
                    <h3>Amenities & Features</h3>
                    <ul class="amenities-full-list">
                        ${amenitiesHTML}
                    </ul>
                </div>
                <div class="modal-actions">
                    <span class="modal-price">${room.price}</span>
                    <button class="book-now-btn" onclick="bookRoom(${room.id})">
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    `;
    
    roomModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal
closeModal.addEventListener('click', function() {
    roomModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', function(event) {
    if (event.target === roomModal) {
        roomModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Navigation menu toggle
hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    
    // Animate hamburger
    const spans = this.querySelectorAll('span');
    spans[0].style.transform = navMenu.classList.contains('active') ? 'rotate(-45deg) translate(-5px, 6px)' : 'none';
    spans[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
    spans[2].style.transform = navMenu.classList.contains('active') ? 'rotate(45deg) translate(-5px, -6px)' : 'none';
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Close mobile menu if open
            navMenu.classList.remove('active');
        }
    });
});

// Scroll animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.gallery-item, .room-card, .amenity-item').forEach(el => {
        observer.observe(el);
    });
}

// Book room function
function bookRoom(roomId) {
    const room = roomsData.find(r => r.id === roomId);
    if (room) {
        alert(`Booking request for ${room.name} has been sent! Our reservation team will contact you shortly to confirm your booking.`);
        roomModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
 }


// Function to open booking form (also called from HTML onclick)
function openBookingForm() {
    // Create a proper booking form that sends emails to shachisheth94@gmail.com
    // const formWindow = window.open('', '_blank', 'width=700,height=800,scrollbars=yes');
      
    const bookingFormEmbed = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Book Your Stay - Blue Breeze Resort</title>
            <style>
                body { 
                    font-family: 'Inter', Arial, sans-serif; 
                    margin: 0; 
                    padding: 0;
                    background: linear-gradient(135deg, #f0f8ff 0%, #e6f7ff 100%);
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .form-container { 
                    width: 90%;
                    max-width: 600px; 
                    margin: 20px auto; 
                    background: white; 
                    border-radius: 15px; 
                    box-shadow: 0 15px 40px rgba(0,0,0,0.15); 
                    overflow: hidden;
                }
                .form-header {
                    background: linear-gradient(135deg, #0066cc, #00a8cc);
                    color: white;
                    padding: 25px;
                    text-align: center;
                    position: relative;
                }
                .form-header h2 {
                    margin: 0 0 8px 0;
                    font-family: 'Playfair Display', serif;
                    font-size: 2rem;
                }
                .form-header p {
                    margin: 0;
                    opacity: 0.9;
                    font-size: 1rem;
                }
                .form-content {
                    padding: 30px;
                }
                .form-group {
                    margin-bottom: 20px;
                }
                label {
                    display: block;
                    margin-bottom: 5px;
                    font-weight: 600;
                    color: #2c3e50;
                }
                input, select, textarea {
                    width: 100%;
                    padding: 12px;
                    border: 2px solid #e2e8f0;
                    border-radius: 8px;
                    font-size: 16px;
                    box-sizing: border-box;
                    transition: border-color 0.3s ease;
                }
                input:focus, select:focus, textarea:focus {
                    outline: none;
                    border-color: #0066cc;
                    box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.1);
                }
                .required {
                    color: #e53e3e;
                }
                .submit-btn {
                    background: linear-gradient(135deg, #0066cc, #00a8cc);
                    color: white;
                    padding: 15px 30px;
                    border: none;
                    border-radius: 25px;
                    font-size: 18px;
                    font-weight: 600;
                    cursor: pointer;
                    width: 100%;
                    margin-top: 20px;
                    transition: all 0.3s ease;
                }
                .submit-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(0, 102, 204, 0.3);
                }
                .close-btn {
                    position: absolute;
                    top: 15px;
                    right: 15px;
                    background: rgba(255,255,255,0.2);
                    border: none;
                    color: white;
                    width: 35px;
                    height: 35px;
                    border-radius: 50%;
                    cursor: pointer;
                    font-size: 1.1rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .close-btn:hover {
                    background: rgba(255,255,255,0.3);
                }
                .form-footer {
                    text-align: center;
                    padding: 20px;
                    background: #f8fafc;
                    color: #64748b;
                    font-size: 0.9rem;
                    border-top: 1px solid #e2e8f0;
                }
                @media (max-width: 768px) {
                    .form-header h2 { font-size: 1.6rem; }
                    .form-container { width: 95%; margin: 10px; }
                    .form-content { padding: 20px; }
                }
            </style>
        </head>
        <body>
            <div class="form-container">
                <div class="form-content">
                    <form action="https://formsubmit.co/shachisheth94@gmail.com" method="POST">
                        <input type="hidden" name="_subject" value="🌊 New Booking Request - Blue Breeze Resort">
                        <input type="hidden" name="_template" value="table">
                        <input type="hidden" name="_captcha" value="false">
                        <input type="hidden" name="_autoresponse" value="Thank you for your booking request at Blue Breeze Resort! We have received your request and will contact you within 24 hours to confirm your reservation.">
                        <input type="hidden" name="_url" value="https://bluebreeze-resort.com">
                        <input type="hidden" name="Timestamp" value="">
                        <input type="hidden" name="Form Type" value="Booking Request">
                        <input type="hidden" name="_confirmation" value="Thank you for your booking request at Blue Breeze Resort! We have received your request and will contact you within 24 hours to confirm your reservation.">
                        
                        <div class="form-group">
                            <label for="name">Full Name <span class="required">*</span></label>
                            <input type="text" id="name" name="name" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="phone">Phone Number <span class="required">*</span></label>
                            <input type="tel" id="phone" name="phone" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="email">Email Address <span class="required">*</span></label>
                            <input type="email" id="email" name="email" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="checkin">Check-in Date <span class="required">*</span></label>
                            <input type="date" id="checkin" name="checkin" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="checkout">Check-out Date <span class="required">*</span></label>
                            <input type="date" id="checkout" name="checkout" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="guests">Number of Guests <span class="required">*</span></label>
                            <select id="guests" name="guests" required>
                                <option value="">Select Guests</option>
                                <option value="1">1 Guest</option>
                                <option value="2">2 Guests</option>
                                <option value="3">3 Guests</option>
                                <option value="4">4 Guests</option>
                                <option value="5+">5+ Guests</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label for="roomtype">Preferred Room Type</label>
                            <select id="roomtype" name="roomtype">
                                <option value="">Any Room Type</option>
                                <option value="cottages">Cottages with terrace</option>
                                <option value="garden">Garden Room</option>
                                <option value="family">Family Suite</option>
                                <option value="honeymoon">Honeymoon Suite</option>
                                <option value="presidential">Presidential Suite</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label for="message">Special Requests or Questions</label>
                            <textarea id="message" name="message" rows="4" placeholder="Any special requirements, dietary restrictions, or questions?"></textarea>
                        </div>
                        
                        <button type="submit" class="submit-btn">Submit Booking Request</button>
                    </form>
                </div>
                <div class="form-footer">
                    <p>Your booking request will be sent directly to our reservations team at shachisheth94@gmail.com</p>
                    <p>We'll contact you within 24 hours to confirm your reservation.</p>
                </div>
            </div>
            
            <script>
                // Set timestamp
                const timestampField = document.querySelector('input[name="Timestamp"]');
                if (timestampField) {
                    timestampField.value = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
                }
                
                // Set minimum date to today
                const today = new Date().toISOString().split('T')[0];
                document.getElementById('checkin').min = today;
                document.getElementById('checkout').min = today;
                
                // Update checkout min date when checkin changes
                document.getElementById('checkin').addEventListener('change', function() {
                    document.getElementById('checkout').min = this.value;
                    if (document.getElementById('checkout').value && 
                        document.getElementById('checkout').value <= this.value) {
                        document.getElementById('checkout').value = '';
                    }
                });
                
                // Form submission success message
                document.querySelector('form').addEventListener('submit', function(e) {
                    // Add a small delay to ensure form data is processed
                    setTimeout(() => {
                        alert('🎉 Thank you! Your booking request has been submitted successfully. Our reservation team will contact you within 24 hours at the email address you provided.\n\nIf you don\'t receive a confirmation email within 24 hours, please contact us directly at shachisheth94@gmail.com');
                        window.close();
                    }, 1500);
                });
            </script>
        </body>
        </html>
    `;
    
    // if (formWindow) {
    //     formWindow.document.write(bookingFormWindow);
    //     formWindow.document.close();
    // } else {
    //     // If popup is blocked, show alert and redirect
    //     alert('Booking form popup was blocked. Please allow popups for this site or contact us directly.');
    // }
}

// Book room function
function bookRoom(roomId) {
    const room = roomsData.find(r => r.id === roomId);
    if (room) {
        alert(`Booking request for ${room.name} has been sent! Our reservation team will contact you shortly to confirm your booking.`);
        roomModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Setup event listeners
function setupEventListeners() {
    // Gallery item hover effects
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Room card hover effects
    document.addEventListener('mouseover', function(e) {
        if (e.target.closest('.room-card')) {
            const card = e.target.closest('.room-card');
            card.style.transform = 'translateY(-5px)';
        }
    });
    
    document.addEventListener('mouseout', function(e) {
        if (e.target.closest('.room-card')) {
            const card = e.target.closest('.room-card');
            card.style.transform = 'translateY(0)';
        }
    });
}

// Add some CSS for modal styling
const modalStyles = `
    .room-details-modal {
        display: flex;
        flex-direction: column;
    }
    
    .modal-room-image {
        width: 100%;
        height: 300px;
        object-fit: cover;
        border-radius: 12px;
        margin-bottom: 2rem;
    }
    
    .modal-room-content h2 {
        color: var(--text-dark);
        margin-bottom: 1rem;
        font-size: 2rem;
    }
    
    .room-specs {
        display: flex;
        gap: 2rem;
        margin-bottom: 1.5rem;
        flex-wrap: wrap;
    }
    
    .room-specs span {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: var(--text-light);
        font-weight: 500;
    }
    
    .room-specs i {
        color: var(--primary-color);
    }
    
    .room-full-description {
        color: var(--text-light);
        line-height: 1.7;
        margin-bottom: 2rem;
        font-size: 1.1rem;
    }
    
    .room-features h3 {
        margin-bottom: 1rem;
        color: var(--text-dark);
    }
    
    .amenities-full-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 0.8rem;
        margin-bottom: 2rem;
    }
    
    .amenities-full-list li {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: var(--text-dark);
        font-weight: 500;
    }
    
    .amenities-full-list i {
        color: var(--accent-color);
        font-size: 0.9rem;
    }
    
    .modal-actions {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 1rem;
        border-top: 1px solid #e2e8f0;
    }
    
    .modal-price {
        font-size: 1.5rem;
        color: var(--accent-color);
        font-weight: 700;
    }
    
    .book-now-btn {
        background: var(--accent-color);
        color: white;
        border: none;
        padding: 1rem 2rem;
        border-radius: 25px;
        cursor: pointer;
        transition: var(--transition);
        font-weight: 600;
        font-size: 1.1rem;
    }
    
    .book-now-btn:hover {
        background: #ff5252;
        transform: translateY(-2px);
    }
`;

// Add the styles to the page
const styleSheet = document.createElement('style');
styleSheet.textContent = modalStyles;
document.head.appendChild(styleSheet);