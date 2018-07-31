const I18n = require('react-i18nify-lite').I18n;
const en = require('./en.json');

if (window.i18n === undefined) {
  I18n.setTranslations({
    en: en
  });

  I18n.setLocale('en');

  window.i18n = I18n;
}

export function translate(key, options) {
  return (options) ? window.i18n.t(key, options) : window.i18n.t(key);
}
