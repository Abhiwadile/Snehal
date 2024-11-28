// script.js
const wishForm = document.getElementById('wish-form');
const wishInput = document.getElementById('wish-input');
const wishList = document.getElementById('wish-list');
const whatsappButton = document.getElementById('whatsapp-button');

// Replace with your phone number in the format 'country code + phone number' (e.g., 919876543210 for India)
const whatsappNumber = '918208007095';

wishForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const wishText = wishInput.value.trim();

  if (wishText) {
    // Add wish to the list
    const listItem = document.createElement('li');
    listItem.textContent = wishText;
    wishList.appendChild(listItem);

    wishInput.value = ''; // Clear the input
  }
});

// WhatsApp button functionality
whatsappButton.addEventListener('click', () => {
  const wishText = wishInput.value.trim();

  if (wishText) {
    const message = encodeURIComponent(`New Wish: ${wishText}`);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  } else {
    alert('Please enter a wish before sending.');
  }
});

