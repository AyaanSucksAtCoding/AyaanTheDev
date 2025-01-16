document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.getElementById('theme-toggle');
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const body = document.body;

  // Theme toggle functionality
  themeToggle.addEventListener('click', function () {
    body.classList.toggle('dark');
    updateThemeIcon();
  });

  function updateThemeIcon() {
    const icon = themeToggle.querySelector('i');
    if (body.classList.contains('dark')) {
      icon.setAttribute('data-feather', 'sun');
    } else {
      icon.setAttribute('data-feather', 'moon');
    }
    feather.replace();
  }

  // Mobile menu toggle functionality
  mobileMenuToggle.addEventListener('click', function () {
    navLinks.classList.toggle('active');
    updateMobileMenuIcon();
  });

  function updateMobileMenuIcon() {
    const icon = mobileMenuToggle.querySelector('i');
    if (navLinks.classList.contains('active')) {
      icon.setAttribute('data-feather', 'x');
    } else {
      icon.setAttribute('data-feather', 'menu');
    }
    feather.replace();
  }

  // Close mobile menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      updateMobileMenuIcon();
    });
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });

  // Form submission handling
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    // Here you would typically send the form data to a server
    // For this example, we'll just log it to the console
    console.log('Form submitted:', {
      name: this.name.value,
      email: this.email.value,
      message: this.message.value,
    });
    alert("Thank you for your message! I'll get back to you soon.");
    this.reset();
  });

  // Initialize Feather icons
  feather.replace();
});
