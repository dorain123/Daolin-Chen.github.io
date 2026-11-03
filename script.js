const languageSwitch = document.querySelector('.language-switch');
const languageButtons = document.querySelectorAll('[data-language]');

function setLanguage(language) {
  const selectedLanguage = language === 'en' ? 'en' : 'zh-CN';
  document.documentElement.lang = selectedLanguage;
  document.title = selectedLanguage === 'en' ? 'Daolin Chen | 陈道林' : '陈道林 | Daolin Chen';
  languageButtons.forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.language === selectedLanguage));
  });
  const url = new URL(window.location.href);
  url.searchParams.set('lang', selectedLanguage === 'en' ? 'en' : 'zh');
  window.history.replaceState(null, '', url);
}

setLanguage(new URLSearchParams(window.location.search).get('lang'));
window.addEventListener('popstate', () => {
  setLanguage(new URLSearchParams(window.location.search).get('lang'));
});
languageButtons.forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.language));
});
languageSwitch.hidden = false;
