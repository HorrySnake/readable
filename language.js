(() => {
  const button = document.getElementById('language');
  let language = 'zh';
  try { if (localStorage.getItem('readable-language') === 'en') language = 'en'; } catch {}
  function apply() {
    document.documentElement.dataset.language = language;
    document.documentElement.lang = language === 'en' ? 'en' : 'zh-CN';
    document.querySelectorAll('span[lang="zh"], span[lang="en"]').forEach(element => {
      element.hidden = element.lang !== language;
    });
    if (button) {
      button.textContent = language === 'en' ? '中文' : 'EN';
      button.setAttribute('aria-label', language === 'en' ? '切换到中文' : 'Switch to English');
    }
  }
  apply();
  button?.addEventListener('click', () => {
    language = language === 'en' ? 'zh' : 'en';
    try { localStorage.setItem('readable-language', language); } catch {}
    apply();
  });
})();
