(() => {
  function canonicalPath(pathname) {
    const match = pathname.match(/^\/(privacy|terms|support)(?:\/(?:index\.html|privacy\.html|terms\.html|support\.html)?|\.html)?$/);
    if (match) return '/' + match[1];
    return pathname === '/index.html' ? '/' : pathname;
  }
  const button = document.getElementById('language');
  function resolveLanguage() {
    const requested = new URL(location.href).searchParams.get('lang');
    if (requested === 'zh' || requested === 'en') return requested;
    try { if (localStorage.getItem('readable-language') === 'en') return 'en'; } catch {}
    return 'zh';
  }
  let language = resolveLanguage();
  function apply() {
    const currentURL = new URL(location.href);
    currentURL.pathname = canonicalPath(currentURL.pathname);
    currentURL.searchParams.set('lang', language);
    if (currentURL.href !== location.href) history.replaceState(history.state, '', currentURL.href);
    document.documentElement.dataset.language = language;
    document.documentElement.lang = language === 'en' ? 'en' : 'zh-CN';
    document.querySelectorAll('span[lang="zh"], span[lang="en"]').forEach(element => {
      element.hidden = element.lang !== language;
    });
    const title = document.documentElement.getAttribute(language === 'en' ? 'data-title-en' : 'data-title-zh');
    if (title) document.title = title;
    document.querySelectorAll('[data-brand-label]').forEach(element => {
      element.setAttribute('aria-label', language === 'en' ? 'Parse' : '更好读');
    });
    document.querySelectorAll('a[href]').forEach(link => {
      const href = link.getAttribute('href');
      if (!href || href.startsWith('#') || link.hasAttribute('download')) return;
      const destination = new URL(href, location.href);
      if (destination.origin !== location.origin || !['http:', 'https:'].includes(destination.protocol)) return;
      destination.pathname = canonicalPath(destination.pathname);
      if (!['/', '/privacy', '/terms', '/support'].includes(destination.pathname)) return;
      destination.searchParams.set('lang', language);
      link.setAttribute('href', destination.pathname + destination.search + destination.hash);
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
  window.addEventListener('popstate', () => {
    language = resolveLanguage();
    apply();
  });
})();
