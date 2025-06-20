
document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('theme-toggle');
  if (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const html = document.documentElement;
      const current = html.getAttribute('data-bs-theme') || 'light';
      const newTheme = current === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-bs-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      const icon = this.querySelector('i');
      if (icon) {
        icon.className = newTheme === 'dark' ? 'bi-sun' : 'bi-moon';
      }
    });
    const saved = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-bs-theme', saved);
    const icon = btn.querySelector('i');
    if (icon) {
      icon.className = saved === 'dark' ? 'bi-sun' : 'bi-moon';
    }
  }
});
