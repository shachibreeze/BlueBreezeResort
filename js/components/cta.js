// CTA Component - Handles call-to-action functionality

class CTAComponent {
    constructor() {
        this.ctaButtons = null;
        this.isBookingFormOpen = false; // Flag to prevent multiple form openings
        this.init();
    }

    init() {
        this.cacheDomElements();
        this.setupEventListeners();
    }

    cacheDomElements() {
        this.ctaButtons = document.querySelectorAll('.cta-button');
    }

    setupEventListeners() {
        // Remove any existing event listeners to prevent duplicates
        this.ctaButtons.forEach(button => {
            // Clone the button to remove all existing event listeners
            const newButton = button.cloneNode(true);
            button.parentNode.replaceChild(newButton, button);
        });
        
        // Re-select the buttons after cloning
        this.cacheDomElements();
        
        // Add new event listeners
        this.ctaButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                this.handleCTAClick(e);
            });
        });
    }

    handleCTAClick(e) {
        e.preventDefault();
        
        const button = e.target;
        const buttonText = button.textContent || button.innerText;
        
        // Prevent multiple clicks by disabling the button temporarily
        if (button.disabled) return;
        button.disabled = true;
        
        // Add click animation
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
            button.disabled = false;
        }, 150);
        
        // Handle different CTA types based on button text
        if (buttonText.toLowerCase().includes('book') || buttonText.toLowerCase().includes('reserve')) {
            this.handleBookingCTA();
        } else if (buttonText.toLowerCase().includes('explore') || buttonText.toLowerCase().includes('discover')) {
            this.handleExploreCTA();
        } else {
            this.handleGenericCTA();
        }
    }

    handleBookingCTA() {
        // Prevent multiple form openings
        if (this.isBookingFormOpen) {
            return;
        }
        
        this.isBookingFormOpen = true;
        
        // Create a booking form that sends emails to shachisheth94@gmail.com
        const bookingForm = `
            <!DOCTYPE html>
            <html>
            <head>
                <title>Book Your Stay - Blue Breeze Resort</title>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>
                    * { margin: 0; padding: 0; box-sizing: border-box; }
                    body { 
                        font-family: 'Inter', Arial, sans-serif; 
                        background: linear-gradient(135deg, #f0f8ff 0%, #e6f7ff 100%);
                        padding: 20px;
                        min-height: 100vh;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    .form-container { 
                        background: white; 
                        padding: 40px; 
                        border-radius: 16px; 
                        box-shadow: 0 12px 40px rgba(0,0,0,0.1); 
                        max-width: 600px;
                        width: 100%;
                        position: relative;
                    }
                    .form-header {
                        text-align: center;
                        margin-bottom: 30px;
                        position: relative;
                    }
                    .form-header h2 { 
                        color: #2c5282; 
                        font-family: 'Playfair Display', serif;
                        font-size: 2.2rem;
                        font-weight: 600;
                        margin-bottom: 10px;
                    }
                    .form-header p {
                        color: #64748b;
                        font-size: 1.1rem;
                        margin: 0;
                    }
                    .close-btn {
                        position: absolute;
                        top: -20px;
                        right: -20px;
                        background: rgba(255,255,255,0.9);
                        border: none;
                        color: #2c5282;
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        cursor: pointer;
                        font-size: 1.5rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                        transition: all 0.3s ease;
                    }
                    .close-btn:hover {
                        background: #2c5282;
                        color: white;
                        transform: scale(1.1);
                    }
                    .form-group { 
                        margin-bottom: 25px; 
                    }
                    label { 
                        display: block; 
                        margin-bottom: 8px; 
                        font-weight: 500; 
                        color: #2c3e50;
                        font-size: 1rem;
                    }
                    input, select, textarea { 
                        width: 100%; 
                        padding: 12px 16px; 
                        border: 2px solid #e2e8f0; 
                        border-radius: 8px; 
                        font-size: 1rem; 
                        transition: border-color 0.3s ease, box-shadow 0.3s ease;
                        background: #f8fafc;
                    }
                    input:focus, select:focus, textarea:focus { 
                        outline: none; 
                        border-color: #4299e1; 
                        box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.1);
                        background: white;
                    }
                    .required { 
                        color: #e53e3e; 
                    }
                    .submit-btn { 
                        background: linear-gradient(45deg, #2c5282, #3b82f6); 
                        color: white; 
                        padding: 16px 30px; 
                        border: none; 
                        border-radius: 8px; 
                        font-size: 1.1rem; 
                        font-weight: 500;
                        cursor: pointer; 
                        width: 100%; 
                        margin-top: 10px;
                        transition: all 0.3s ease;
                        box-shadow: 0 4px 15px rgba(44, 82, 130, 0.3);
                    }
                    .submit-btn:hover { 
                        background: linear-gradient(45deg, #2a4e78, #2563eb); 
                        transform: translateY(-2px);
                        box-shadow: 0 6px 20px rgba(44, 82, 130, 0.4);
                    }
                    .submit-btn:active {
                        transform: translateY(0);
                    }
                    .form-footer {
                        text-align: center;
                        padding: 20px;
                        background: #f8fafc;
                        color: #64748b;
                        font-size: 0.9rem;
                        border-top: 1px solid #e2e8f0;
                        border-radius: 0 0 16px 16px;
                        margin: 20px -40px -40px -40px;
                    }
                    @media (max-width: 768px) {
                        .form-container { padding: 30px 20px; }
                        .form-header h2 { font-size: 1.8rem; }
                        .close-btn { top: -15px; right: -15px; width: 35px; height: 35px; }
                    }
                </style>
            </head>
            <body>
                <div class="form-container">
                    <div class="form-header">
                        <button class="close-btn" onclick="window.close(); if(window.opener && window.opener.resortApp && window.opener.resortApp.components.cta) window.opener.resortApp.components.cta.isBookingFormOpen = false;">&times;</button>
                        <h2>🌊 Book Your Stay at Blue Breeze Resort</h2>
                        <p>Ladghar Beach, Konkan Coast</p>
                    </div>
                    
                    <form action="https://formsubmit.co/shachisheth94@gmail.com" method="POST" id="bookingForm">
                        <input type="hidden" name="_subject" value="🌊 New Booking Request - Blue Breeze Resort">
                        <input type="hidden" name="_template" value="table">
                        <input type="hidden" name="_captcha" value="false">
                        <input type="hidden" name="_autoresponse" value="Thank you for your booking request at Blue Breeze Resort! We have received your request and will contact you within 24 hours to confirm your reservation.">
                        <input type="hidden" name="Timestamp" value="">
                        <input type="hidden" name="Form Type" value="Booking Request">
                        <input type="hidden" name="_url" value="https://bluebreeze-resort.com">
                        
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
                    
                    <div class="form-footer">
                        <p>Your booking request will be sent directly to our reservations team at shachisheth94@gmail.com</p>
                        <p>We'll contact you within 24 hours to confirm your reservation.</p>
                    </div>
                </div>
                
                <script>
                    // Set timestamp
                    document.querySelector('input[name="Timestamp"]').value = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
                    
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
                    
                    // Form submission handler
                    document.getElementById('bookingForm').addEventListener('submit', function(e) {
                        // Get form data
                        const formData = new FormData(this);
                        const data = Object.fromEntries(formData);
                        
                        // Simple validation
                        if (!data.name || !data.phone || !data.email || !data.checkin || !data.checkout || !data.guests) {
                            alert('Please fill in all required fields.');
                            e.preventDefault();
                            return;
                        }
                        
                        // Check if check-out is after check-in
                        if (new Date(data.checkout) <= new Date(data.checkin)) {
                            alert('Check-out date must be after check-in date.');
                            e.preventDefault();
                            return;
                        }
                        
                        // Show success message and allow form to submit naturally to FormSubmit.co
                        setTimeout(() => {
                            alert('🎉 Thank you ' + data.name + '! Your booking request has been submitted successfully. Our reservation team will contact you within 24 hours at ' + data.email + ' or ' + data.phone + ' to confirm your reservation.\\n\\nIf you don\\'t receive a confirmation email within 24 hours, please check your spam folder or contact us directly at shachisheth94@gmail.com');
                            // Reset the flag when window is closed
                            if(window.opener && window.opener.resortApp && window.opener.resortApp.components.cta) {
                                window.opener.resortApp.components.cta.isBookingFormOpen = false;
                            }
                            window.close();
                        }, 1500);
                    });
                </script>
            </body>
            </html>
        `;
        
        // Open the form in a new window
        const formWindowMain = window.open('', '_blank');
        if (formWindowMain) {
            formWindowMain.document.write(bookingForm);
            formWindowMain.document.close();
            
            // Reset the flag when the window is closed
            const checkWindowClosed = setInterval(() => {
                if (formWindowMain.closed) {
                    this.isBookingFormOpen = false;
                    clearInterval(checkWindowClosed);
                }
            }, 1000);
        } else {
            // If popup is blocked, reset flag and show alert
            this.isBookingFormOpen = false;
            alert('Booking form popup was blocked. Please allow popups for this site or contact us directly.');
        }
    }

    handleExploreCTA() {
        // Smooth scroll to gallery section
        const gallerySection = document.getElementById('gallery');
        if (gallerySection) {
            Utils.smoothScrollTo(gallerySection, 1000);
        }
    }

    handleGenericCTA() {
        // Scroll to contact section
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            Utils.smoothScrollTo(contactSection, 1000);
        }
    }

    // Public method to update CTA button text
    updateCTAButtonText(buttonSelector, newText) {
        const button = document.querySelector(buttonSelector);
        if (button) {
            button.textContent = newText;
        }
    }

    // Public method to disable/enable CTA buttons
    setCTAButtonsState(disabled) {
        this.ctaButtons.forEach(button => {
            button.disabled = disabled;
            button.style.opacity = disabled ? '0.6' : '1';
            button.style.cursor = disabled ? 'not-allowed' : 'pointer';
        });
    }
}