// script.js
window.addEventListener('DOMContentLoaded', (event) => {
    adjustLinkWidth();
});
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
