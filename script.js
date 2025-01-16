document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    // Theme toggle functionality
    themeToggle.addEventListener('click', function() {
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
    mobileMenuToggle.addEventListener('click', function() {
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

    // Form submission handling
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to a server
        // For this example, we'll just log it to the console
        console.log('Form submitted:', {
            name: this.name.value,
            email: this.email.value,
            message: this.message.value
        });
        alert('Thank you for your message! I\'ll get back to you soon.');
        this.reset();
    });

    // Smooth scroll implementation with custom timing and easing
    const scrollLinks = document.querySelectorAll('a[href^="#"], .smooth-scroll');

    // Configurable animation duration (in milliseconds)
    const SCROLL_DURATION = 900; // Adjust this value to make animation slower/faster

    // Easing function for smoother animation
    function easeInOutCubic(t) {
      return t < 0.5 
        ? 4 * t * t * t 
        : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function smoothScroll(target, duration) {
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      let startTime = null;

      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const easedProgress = easeInOutCubic(progress);
        
        window.scrollTo(0, startPosition + distance * easedProgress);
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      }
      
      requestAnimationFrame(animation);
    }

    scrollLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href') || this.getAttribute('data-target');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          smoothScroll(targetElement, SCROLL_DURATION);
        }
      });
    });


    // Initialize Feather icons
    feather.replace();
});

