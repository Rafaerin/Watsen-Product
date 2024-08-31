const checkbox = document.getElementById('theme-toggle');
checkbox.checked = localStorage.getItem('theme') === 'dark';

checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
});
