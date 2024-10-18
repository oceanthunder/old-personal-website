const themeIcon = document.getElementById('themeicon');
const body = document.body;

function enableDarkTheme() {
    body.classList.add('dark-theme');
    themeIcon.src = 'themeIcons/sun.png';
    localStorage.setItem('theme', 'dark');
}

function enableLightTheme() {
    body.classList.remove('dark-theme');
    themeIcon.src = 'themeIcons/moon.png';
    localStorage.setItem('theme', 'light');
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    enableDarkTheme();
} else {
    enableLightTheme();
}

themeIcon.addEventListener('click', function() {
    if (body.classList.contains('dark-theme')) {
        enableLightTheme();
    } else {
        enableDarkTheme();
    }
});
