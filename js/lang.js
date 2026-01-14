function setLang(lang) {
  document.querySelectorAll('[data-fr]').forEach(el => {
    el.innerText = el.getAttribute('data-' + lang);
  });
}

setLang('fr');
