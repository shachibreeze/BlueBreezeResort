# Email Setup Instructions for Blue Breeze Resort

## Current Email Configuration

### Booking Form
- **Service**: FormSubmit.co
- **Target Email**: shachisheth94@gmail.com
- **Form Action**: `https://formsubmit.co/shachisheth94@gmail.com`
- **Method**: POST
- **Features**:
  - Automatic email delivery
  - Spam protection
  - Auto-response to customer
  - Table-formatted emails

### Contact Form
- **Service**: FormSubmit.co
- **Target Email**: shachisheth94@gmail.com
- **Form Action**: `https://formsubmit.co/shachisheth94@gmail.com`
- **Method**: POST
- **Features**:
  - Automatic email delivery
  - Auto-response to customer
  - Table-formatted emails

## How It Works

1. **Form Submission**: User fills out the form and clicks submit
2. **Data Processing**: FormSubmit.co receives the form data
3. **Email Delivery**: FormSubmit.co sends an email to shachisheth94@gmail.com
4. **Auto-Response**: Customer receives an automatic confirmation email
5. **Notification**: You receive the form data in a formatted table

## Form Fields Included

### Booking Form Fields
- Full Name
- Phone Number
- Email Address
- Check-in Date
- Check-out Date
- Number of Guests
- Preferred Room Type
- Special Requests or Questions
- Timestamp (auto-generated)
- Form Type (auto-generated)

### Contact Form Fields
- Your Name
- Email Address
- Message
- Timestamp (auto-generated)
- Form Type (auto-generated)

## Troubleshooting Email Delivery Issues

### If You're Not Receiving Emails:

1. **Check Spam/Junk Folder**
   - Look in your Gmail spam folder
   - Check "All Mail" in Gmail
   - Look for emails from "FormSubmit.co" or "Form Submit"

2. **Check Gmail Filters**
   - Go to Gmail Settings > Filters and Blocked Addresses
   - Ensure no filters are blocking FormSubmit emails

3. **Test the Form**
   - Fill out the form yourself with a different email
   - Use a personal email to test if emails are being sent

4. **Check FormSubmit Status**
   - Visit https://formsubmit.co/status to check service status

5. **Alternative Email Services**
   If FormSubmit.co doesn't work, consider:
   - Formspree.io
   - EmailJS.com
   - Netlify Forms (if hosting on Netlify)

### Form Configuration Options

#### Hidden Fields Added
- `_subject`: Email subject line
- `_template`: Email formatting (table format)
- `_captcha`: Disable captcha for better user experience
- `_autoresponse`: Message sent to customer
- `_confirmation`: Confirmation message
- `_url`: Website URL for reference

#### Email Subject Lines
- Booking: "🌊 New Booking Request - Blue Breeze Resort"
- Contact: "💬 New Contact Message - Blue Breeze Resort"

## Testing Instructions

1. **Test Booking Form**:
   - Click "Book Your Stay" button
   - Fill out test data (use your alternate email)
   - Submit the form
   - Check both your Gmail and the test email

2. **Test Contact Form**:
   - Scroll to Contact section
   - Click "Send Message" or fill out contact form
   - Submit with test data
   - Check email delivery

## Backup Contact Method

If the forms fail, users can directly email:
- **Email**: shachisheth94@gmail.com
- **Subject**: Use descriptive subjects like "Booking Request" or "General Inquiry"

## Monitoring

- Monitor your Gmail for form submissions
- Check spam folder regularly
- Test forms monthly to ensure they're working
- Consider setting up Gmail filters to organize form submissions

## Technical Notes

- Forms use HTTPS for secure submission
- FormSubmit.co is a free service with limitations
- Consider upgrading to a paid service for higher volume
- Forms include basic validation (required fields, email format)
- Date validation ensures check-out is after check-in

## Support

If you continue to have issues:
1. Check FormSubmit.co documentation
2. Test with different email providers
3. Consider implementing a backup email service
4. Monitor browser console for any JavaScript errors