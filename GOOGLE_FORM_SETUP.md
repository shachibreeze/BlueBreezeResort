# Google Form Setup Guide for Blue Breeze Resort

This guide will help you set up a Google Form to collect room enquiries and automatically send responses to your Gmail account.

## Step 1: Create Your Google Form

1. Go to [Google Forms](https://forms.google.com)
2. Click "Create a new form"
3. Give your form a title like "Blue Breeze Resort - Room Enquiry"

## Step 2: Add Form Fields

Add the following fields to your form:

### Required Fields:
1. **Room Name** (Short answer)
   - Pre-filled from the website
   - Field title: "Room Type"

2. **Room Price** (Short answer)
   - Pre-filled from the website
   - Field title: "Price per Night"

3. **Guest Name** (Short answer)
   - Required field
   - Field title: "Your Full Name"

4. **Email Address** (Short answer)
   - Required field
   - Field validation: Email format
   - Field title: "Email Address"

5. **Phone Number** (Short answer)
   - Required field
   - Field title: "Phone Number"

6. **Check-in Date** (Date)
   - Required field
   - Field title: "Check-in Date"

7. **Check-out Date** (Date)
   - Required field
   - Field title: "Check-out Date"

8. **Number of Guests** (Multiple choice)
   - Options: 1 Guest, 2 Guests, 3 Guests, 4+ Guests
   - Field title: "Number of Guests"

9. **Special Requests** (Paragraph)
   - Optional field
   - Field title: "Special Requests or Requirements"

## Step 3: Configure Form Settings

1. Click the "Settings" tab
2. Under "General", make sure "Collect email addresses" is enabled
3. Under "Presentation", customize the confirmation message:
   ```
   Thank you for your enquiry! Our reservation team will contact you within 24 hours to confirm your booking details.
   ```

## Step 4: Set Up Email Notifications

1. Click the "Responses" tab
2. Click the 3-dot menu (⋮) next to the spreadsheet icon
3. Select "Get email notifications for new responses"
4. Enter the Gmail address where you want to receive notifications

## Step 5: Get Your Form URL and Entry IDs

1. Click the "Send" button
2. Click the link tab to get your form URL
3. Click "Copy" to copy the URL
4. To find entry IDs, submit a test response and check the URL parameters

## Step 6: Update the Website Code

Replace the placeholder Google Form URL in `js/components/rooms.js`:

```javascript
const googleFormUrl = `https://docs.google.com/forms/d/e/YOUR_ACTUAL_FORM_ID/viewform?entry.room_name=${encodeURIComponent(room.name)}&entry.room_price=${encodeURIComponent(room.price)}`;
```

Replace `YOUR_ACTUAL_FORM_ID` with your real Google Form ID.

## Testing

1. Click on any "Enquire Now" button on the website
2. Verify that the Google Form opens in a new window
3. Fill out the form and submit it
4. Check that you receive an email notification
5. Check that the form responses are being saved to your Google Forms responses

## Advanced Configuration (Optional)

### Pre-fill More Fields
You can pre-fill additional fields by adding more parameters to the URL:
```javascript
const googleFormUrl = `https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?
  entry.room_name=${encodeURIComponent(room.name)}
  &entry.room_price=${encodeURIComponent(room.price)}
  &entry.checkin_date=${encodeURIComponent('2024-01-01')}
  &entry.guests=${encodeURIComponent('2 Guests')}`;
```

### Custom Thank You Page
You can redirect to a custom thank you page after form submission:
1. In Google Forms settings, go to "Presentation"
2. Under "After submission", select "Redirect to another destination"
3. Enter your thank you page URL

## Support

If you need help setting up your Google Form or finding the correct entry IDs, please contact your web developer or refer to the Google Forms documentation.