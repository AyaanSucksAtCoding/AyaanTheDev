// Get the theme toggle element
const themeToggle = document.querySelector('.theme-controller');

// Set initial state based on system preference or default to dark
document.documentElement.setAttribute('data-theme', 'dark');
themeToggle.checked = true;

// Handle theme toggle changes
themeToggle.addEventListener('change', function() {
  const newTheme = this.checked ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', newTheme);
});