// Preloader
window.addEventListener('load', () => {
    document.getElementById('preloader').style.display = 'none';
});

// Smooth Scrolling
document.addEventListener('DOMContentLoaded', () => {
    const scroll = new SmoothScroll('a[href*="#"]');
});

// Header Scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    header.classList.toggle('active', window.scrollY > 0);
});

// AOS Initialization
AOS.init({
    duration: 800,
    easing: 'ease-out-quart',
    once: true
});

window.addEventListener('load', () => {
    document.getElementById('preloader').style.display = 'none';
});

document.addEventListener('DOMContentLoaded', () => {
    const scroll = new SmoothScroll('a[href*="#"]');
});

window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    header.classList.toggle('active', window.scrollY > 0);
});

AOS.init({
    duration: 800,
    easing: 'ease-out-quart',
    once: true
});
window.addEventListener('scroll', function() {
    var link = document.getElementById('error-page-link');
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        // You're at the bottom of the page
        link.style.opacity = '1';
    } else {
        // You're not at the bottom of the page
        link.style.opacity = '0';
    }
});

// Skill Filtering 
const skillFilters = document.querySelectorAll('.skill-filters button');
const skillItems = document.querySelectorAll('.skill-item');

skillFilters.forEach(filter => {
    filter.addEventListener('click', () => {
        const filterValue = filter.dataset.filter; // Get the data-filter value

        // Remove "active" class from all filter buttons
        skillFilters.forEach(btn => btn.classList.remove('active'));
        // Add "active" class to the clicked button
        filter.classList.add('active');

        skillItems.forEach(item => {
            if (filterValue === 'all' || item.dataset.filter === filterValue) {
                item.style.display = 'block'; // Show the skill item
            } else {
                item.style.display = 'none'; // Hide the skill item
            }
        });
    });
});

// Sidebar Toggle Functionality
const sidebarToggle = document.getElementById('sidebar-toggle');
const sidebar = document.getElementById('sidebar');

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});