const languagePack = require('./keyboardLangs')

export default function webIME (lang, event) {
  const langKeys = Object.keys(languagePack)
  const interLang = `${lang}Map`
  if (!event || !lang || !langKeys.includes(interLang)) {
    throw new Error('Wrong Parameters;opt1:kz,kk,ug,kg;opt2:event;')
  }
  const { target, key, metaKey, ctrlKey, altKey } = event
  const hasKey = Object.prototype.hasOwnProperty.call(languagePack[interLang], key)
  if (hasKey && !metaKey && !ctrlKey && !altKey) {
    const newChars = String.fromCharCode(languagePack[interLang][key])
    const { selectionStart, selectionEnd } = target
    const strArray = target.value.split('')
    const selectionLength = selectionEnd - selectionStart
    const start = selectionStart + 1
    const end = selectionStart + 1
    strArray.splice(selectionStart, selectionLength > 0 ? selectionLength : 0, newChars)
    target.value = strArray.join('')
    target.setSelectionRange(start, end)
    event.preventDefault()
    return newChars
  }
  return event
}
