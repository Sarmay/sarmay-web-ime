# @Sarmay/Web-IME

## English | [简体中文](https://github.com/Sarmay/sarmay-web-ime/blob/main/readme-CN.md)

### This is a tool that is responsible for converting the content entered by the user in the input box into other characters

[![npm version](https://img.shields.io/npm/v/@sarmay/web-ime.svg?style=flat-square)](https://www.npmjs.org/package/@sarmay/web-ime)
[![Build Status](https://www.travis-ci.com/Sarmay/sarmay-web-ime.svg?branch=main)](https://www.travis-ci.com/Sarmay/sarmay-web-ime)    [![Coverage Status](https://coveralls.io/repos/github/Sarmay/sarmay-web-ime/badge.svg?branch=main)](https://coveralls.io/github/Sarmay/sarmay-web-ime?branch=main)   [![install size](https://packagephobia.now.sh/badge?p=@sarmay/web-ime)](https://packagephobia.now.sh/result?p=@sarmay/web-ime)
[![GitHub issues](https://img.shields.io/github/issues/Sarmay/sarmay-web-ime)](https://github.com/Sarmay/sarmay-web-ime/issues)   [![GitHub forks](https://img.shields.io/github/forks/Sarmay/sarmay-web-ime)](https://github.com/Sarmay/sarmay-web-ime/network)   [![GitHub stars](https://img.shields.io/github/stars/Sarmay/sarmay-web-ime)](https://github.com/Sarmay/sarmay-web-ime/stargazers)


# Installing

### Using npm:

```
$ npm install @sarmay/web-ime
```

### Using yarn:

```
$ yarn add @sarmay/web-ime
```

### Using jsDelivr CDN:

```
<script src="https://cdn.jsdelivr.net/npm/@sarmay/web-ime/dist/index.min.js"></script>
```
### Using unpkg CDN:

```
<script src="https://unpkg.com/@sarmay/web-ime/dist/index.min.js"></script>
```

# Example

### Parameters: LanguageOptions `<String>`

```
kz => kazakh for china;
kk => kazakh for kazakhstan;
ug => Uyghur for china;
kg => Kirgiz for china;
```

### Parameters: $event `<Event>`

```
An event can be triggered by the user action e.g. clicking the mouse button or tapping keyboard
```

### for Vue
-    note: React / Angular  As the same below

```
<template>
  <div>
    <textarea v-model="value" name="sarmay-ime" id="sarmay-ime" cols="30" rows="10" @keydown="keydownHandel"></textarea>
  </div>
</template>
<script>
  import webIME from '@sarmay/web-ime'
  export default {
  name: 'WebIME',
  data() {
    return {
      value: '',
      defaultLang: 'kz',
      langOptions: [{
        value: 'kz',
        label: 'Kazakh for china'
      }, {
        value: 'kk',
        label: 'Kazakh for kazakhstan'
      }, {
        value: 'ug',
        label: 'Uyghur'
      }, {
        value: 'kg',
        label: 'Kirgiz'
      }]
    }
  },

  methods: {
    keydownHandel(event) {
      webIME(this.defaultLang, event)
    }
  }
}
</script>
```
### for Html script

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>@Sarmay/web-ime</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!--  load from unpkg -->
    <script src="https://unpkg.com/@sarmay/web-ime/dist/index.min.js"></script>
    <!--  or load from  jsdelivr
      <script src="https://cdn.jsdelivr.net/npm/@sarmay/web-ime/dist/index.min.js"></script>
    -->
  </head>
  <body>
    <div>
      <textarea name="test" id="test" cols="50" rows="10"></textarea>
    </div>
    <script>
      var defaultLang= 'kz'; /** more option look langOptions */
      var test = document.getElementById('test');
      test.addEventListener("keydown", function(event) {
         sarmayIme(defaultLang, event);
      });
    </script>
  </body>
</html>
```

## License

[MIT](LICENSE)