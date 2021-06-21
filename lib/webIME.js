'use strict';

var languagePack = require('./keyboardLangs');

var keydownHandel = function keydownHandel(lang, event) {
  var langKeys = Object.keys(languagePack);
  var interLang = lang + 'Map';
  if (!event || !lang || !langKeys.includes(interLang)) {
    throw new Error('Wrong Parameters');
  }
  var key = event.key;

  var hasKey = Object.prototype.hasOwnProperty.call(languagePack[interLang], key);
  var newChars = '';
  if (hasKey && !event.metaKey && !event.ctrlKey && !event.altKey) {
    event.preventDefault();
    event.returnValue = false;
    newChars += String.fromCharCode(languagePack[interLang][key]);
  }
  return newChars;
};

module.exports = keydownHandel;