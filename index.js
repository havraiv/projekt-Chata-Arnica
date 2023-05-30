// https://dev.to/ananyaneogi/create-a-dark-light-mode-switch-with-css-variables-34l8

const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]',
);
const theme = localStorage.getItem('data-theme');
if (theme === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark');
  document.querySelector('#checkbox').checked = true;
} else {
  document.documentElement.setAttribute('data-theme', 'light');
}

const switchTheme = (e) => {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('data-theme', 'light');
  }
};

toggleSwitch.addEventListener('change', switchTheme, false);
