// script.js
window.addEventListener('DOMContentLoaded', (event) => {
    adjustImageWidth();
    adjustLinkWidth();
});

// Update image width when window is resized
window.addEventListener('resize', () => {
    adjustImageWidth();
    adjustLinkWidth();
});

function adjustImageWidth() {
    const imageContainer = document.getElementById('image');
    const image = imageContainer.querySelector('img');

    // Set image width to 100% of its container's width
    if (image) {
        image.style.width = '100%';
    }
}

function adjustLinkWidth() {
    const nav = document.querySelector('nav');
    const navWidth = nav.offsetWidth;
    const navLinks = document.querySelectorAll('nav ul li');
    const numLinks = navLinks.length;

    // Calculate the width for each link item
    const linkWidth = navWidth / numLinks;

    // Set the width for each link item
    navLinks.forEach(link => {
        link.style.width = linkWidth + 'px';
    });
}
