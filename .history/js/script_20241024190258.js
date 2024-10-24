const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');

// Toggle sidebar and animate hamburger
hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close sidebar when scrolling
window.addEventListener('scroll', () => {
    sidebar.classList.remove('active');
    hamburger.classList.remove('active');
});
