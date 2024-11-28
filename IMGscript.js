/* script.js */
document.addEventListener('DOMContentLoaded', () => {
    const photos = document.querySelectorAll('.photo img');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeBtn = document.getElementById('close-btn');

    // Open modal on photo click
    photos.forEach(photo => {
        photo.addEventListener('click', () => {
            modalImg.src = photo.src;
            modal.classList.remove('hidden');
        });
    });

    // Close modal on close button click
    closeBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    // Close modal on clicking outside the image
    modal.addEventListener('click', (e) => {
        if (e.target !== modalImg) {
            modal.classList.add('hidden');
        }
    });
});
