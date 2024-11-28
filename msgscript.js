/* script.js */
document.getElementById('message-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    // Get the message from the textarea
    const herMessage = document.getElementById('her-message').value.trim();

    // If the message is empty, alert the user
    if (!herMessage) {
        alert('Please write a message before sending.');
        return;
    }

    // Your WhatsApp number (replace with your actual number, including country code)
    const phoneNumber = '+918208007095'; // Replace XXXXXXXXXX with your WhatsApp number

    // Generate the WhatsApp link
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        "Snehal's Message: " + herMessage
    )}`;

    // Open WhatsApp in a new tab
    window.open(whatsappLink, '_blank');
});
