// Contact Component - Handles contact form functionality

class ContactComponent {
    constructor() {
        this.contactForm = null;
        this.init();
    }

    init() {
        this.cacheDomElements();
        this.setupEventListeners();
    }

    cacheDomElements() {
        this.contactForm = document.getElementById('contactForm');
    }

    setupEventListeners() {
        if (!this.contactForm) return;

        this.contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleFormSubmit(e);
        });
    }

    handleFormSubmit(e) {
        const form = e.target;
        const formData = new FormData(form);
        
        // Get form values
        const name = form.querySelector('input[type="text"]').value;
        const email = form.querySelector('input[type="email"]').value;
        const message = form.querySelector('textarea').value;

        // Simple validation
        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }

        if (!this.validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Create contact form popup that sends to shachisheth94@gmail.com
        const contactFormWindow = window.open('', '_blank', 'width=600,height=600,scrollbars=yes,resizable=yes');
        
        const contactFormHtml = `
            <!DOCTYPE html>
            <html>
            <head>
                <title>Contact Us - Blue Breeze Resort</title>
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
                        max-width: 500px; 
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
                        font-size: 1.8rem;
                    }
                    .form-header p {
                        margin: 0;
                        opacity: 0.9;
                        font-size: 0.9rem;
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
                    input, textarea {
                        width: 100%;
                        padding: 12px;
                        border: 2px solid #e2e8f0;
                        border-radius: 8px;
                        font-size: 16px;
                        box-sizing: border-box;
                        transition: border-color 0.3s ease;
                    }
                    input:focus, textarea:focus {
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
                        padding: 12px 25px;
                        border: none;
                        border-radius: 25px;
                        font-size: 16px;
                        font-weight: 600;
                        cursor: pointer;
                        width: 100%;
                        margin-top: 15px;
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
                        font-size: 0.85rem;
                        border-top: 1px solid #e2e8f0;
                    }
                    @media (max-width: 768px) {
                        .form-header h2 { font-size: 1.5rem; }
                        .form-container { width: 95%; margin: 10px; }
                        .form-content { padding: 20px; }
                    }
                </style>
            </head>
            <body>
                <div class="form-container">
                    <div class="form-header">
                        <button class="close-btn" onclick="window.close()">&times;</button>
                        <h2>💬 Contact Us</h2>
                        <p>Blue Breeze Resort - We're here to help!</p>
                    </div>
                    <div class="form-content">
                        <form action="https://formsubmit.co/shachisheth94@gmail.com" method="POST">
                            <input type="hidden" name="_subject" value="💬 New Contact Message - Blue Breeze Resort">
                            <input type="hidden" name="_template" value="table">
                            <input type="hidden" name="_captcha" value="false">
                            <input type="hidden" name="_autoresponse" value="Thank you for contacting Blue Breeze Resort! We have received your message and will respond within 24 hours.">
                            <input type="hidden" name="Timestamp" value="">
                            <input type="hidden" name="Form Type" value="Contact Message">
                            
                            <div class="form-group">
                                <label for="name">Your Name <span class="required">*</span></label>
                                <input type="text" id="name" name="name" value="${name}" required>
                            </div>
                            
                            <div class="form-group">
                                <label for="email">Email Address <span class="required">*</span></label>
                                <input type="email" id="email" name="email" value="${email}" required>
                            </div>
                            
                            <div class="form-group">
                                <label for="message">Message <span class="required">*</span></label>
                                <textarea id="message" name="message" rows="5" placeholder="Please tell us how we can help you..." required>${message}</textarea>
                            </div>
                            
                            <button type="submit" class="submit-btn">Send Message</button>
                        </form>
                    </div>
                    <div class="form-footer">
                        <p>Your message will be sent directly to our team at shachisheth94@gmail.com</p>
                        <p>We typically respond within 24 hours. If you don't receive a response, please check your spam folder or contact us directly.</p>
                    </div>
                    
                    <script>
                        // Set timestamp
                        const timestampField = document.querySelector('input[name="Timestamp"]');
                        if (timestampField) {
                            timestampField.value = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
                        }
                    </script>
                </div>
            </body>
            </html>
        `;
        
        contactFormWindow.document.write(contactFormHtml);
        contactFormWindow.document.close();
        
        // Reset the original form
        form.reset();
    }

    validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    showSuccessMessage(name, email, message) {
        alert(`Thank you for your message, ${name}! Our team will get back to you at ${email} within 24 hours.`);
    }

    // Public method to refresh the contact form
    refreshContactForm() {
        if (this.contactForm) {
            this.contactForm.reset();
        }
    }
}

// Initialize the contact component
let contactComponent;

document.addEventListener('DOMContentLoaded', function() {
    contactComponent = new ContactComponent();
});