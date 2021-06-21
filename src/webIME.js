const languagePack = require('./keyboardLangs')

const keydownHandel = (lang, event) => {
  const langKeys = Object.keys(languagePack)
  const interLang = `${lang}Map`
  if (!event || !lang || !langKeys.includes(interLang)) {
    throw new Error('Wrong Parameters')
  }
  const { key } = event
  const hasKey = Object.prototype.hasOwnProperty.call(languagePack[interLang], key)
  let newChars = ''
  if (hasKey && !event.metaKey && !event.ctrlKey && !event.altKey) {
    event.preventDefault()
    event.returnValue = false
    newChars += String.fromCharCode(languagePack[interLang][key])
  }
  return newChars
}

module.exports = keydownHandel
