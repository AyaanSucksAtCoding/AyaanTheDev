// Keep the existing theme toggle code
const themeToggle = document.querySelector('.theme-controller');

document.documentElement.setAttribute('data-theme', 'dark');
themeToggle.checked = true;

themeToggle.addEventListener('change', function() {
  const newTheme = this.checked ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', newTheme);
});

// Smooth scroll implementation with custom timing and easing
document.addEventListener('DOMContentLoaded', function() {
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
});