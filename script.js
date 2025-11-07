// Navigation Functions
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page-content').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    document.getElementById(pageId).classList.add('active');
    
    // Scroll to top
    window.scrollTo({top: 0, behavior: 'smooth'});
    
    // Close mobile menu if open
    document.getElementById('navLinks').classList.remove('active');
}

function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('active');
}

// Theme Toggle Function
function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('active');
}

// Theme Toggle Function for On/Off Switch
function toggleTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    if (themeToggle.checked) {
        // Purple theme
        body.style.setProperty('--accent-color', '#9b59b6');
        body.classList.add('purple-theme');
        localStorage.setItem('theme', 'purple');
    } else {
        // Green theme
        body.style.setProperty('--accent-color', '#2ecc71');
        body.classList.remove('purple-theme');
        localStorage.setItem('theme', 'green');
    }
}

// Load saved theme on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme') || 'green';
    const themeToggle = document.getElementById('themeToggle');

    if (savedTheme === 'purple') {
        document.body.classList.add('purple-theme');
        themeToggle.checked = true;
        document.body.style.setProperty('--accent-color', '#9b59b6');
    } else {
        document.body.classList.remove('purple-theme');
        themeToggle.checked = false;
        document.body.style.setProperty('--accent-color', '#2ecc71');
    }
    
    // Initialize scroll animations
    const cards = document.querySelectorAll('.card, .list-item');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Modal Functions
function openModal(modalName) {
    document.getElementById(modalName + 'Modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalName) {
    document.getElementById(modalName + 'Modal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Form Handlers
function handleVisitForm(event) {
    event.preventDefault();
    alert('Thank you for planning to visit! We\'ve received your information and look forward to meeting you on Sunday!');
    event.target.reset();
}

function handleContactForm(event) {
    event.preventDefault();
    alert('Thank you for your message! We\'ll get back to you within 24-48 hours.');
    event.target.reset();
}

function handleGivingForm(event) {
    event.preventDefault();
    alert('Thank you for your generosity! In a live environment, this would redirect to a secure payment processor.');
    closeModal('giveOnline');
}

function handlePrayerForm(event) {
    event.preventDefault();
    alert('Your prayer request has been received. Our prayer team will be lifting you up in prayer.');
    event.target.reset();
    closeModal('prayerRequest');
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href') !== '#') {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards for animation
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card, .list-item');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});