# @Sarmay/Web-IME

## [English](https://github.com/Sarmay/sarmay-web-ime#readme) | 简体中文

### 监听用户输入，转化为其他语言的小助手

[![npm version](https://img.shields.io/npm/v/@sarmay/web-ime.svg?style=flat-square)](https://www.npmjs.org/package/@sarmay/web-ime)
[![Build Status](https://www.travis-ci.com/Sarmay/sarmay-web-ime.svg?branch=main)](https://www.travis-ci.com/Sarmay/sarmay-web-ime)    [![Coverage Status](https://coveralls.io/repos/github/Sarmay/sarmay-web-ime/badge.svg?branch=main)](https://coveralls.io/github/Sarmay/sarmay-web-ime?branch=main)   [![install size](https://packagephobia.now.sh/badge?p=@sarmay/web-ime)](https://packagephobia.now.sh/result?p=@sarmay/web-ime)
[![GitHub issues](https://img.shields.io/github/issues/Sarmay/sarmay-web-ime)](https://github.com/Sarmay/sarmay-web-ime/issues)   [![GitHub forks](https://img.shields.io/github/forks/Sarmay/sarmay-web-ime)](https://github.com/Sarmay/sarmay-web-ime/network)   [![GitHub stars](https://img.shields.io/github/stars/Sarmay/sarmay-web-ime)](https://github.com/Sarmay/sarmay-web-ime/stargazers)


# 安装

### 使用 npm:

```
$ npm install @sarmay/web-ime
```

### 使用 yarn:

```
$ yarn add @sarmay/web-ime
```

### 使用 jsDelivr CDN:

```
<script src="https://cdn.jsdelivr.net/npm/@sarmay/web-ime/dist/index.min.js"></script>
```
### 使用 unpkg CDN:

```
<script src="https://unpkg.com/@sarmay/web-ime/dist/index.min.js"></script>
```

# 怎么用

### 参数一: LanguageOptions `<String>字符串`

```
kz => 哈萨克阿拉伯文键盘;
kk => 哈萨克希尔里文键盘;
ug => 维吾尔阿拉伯文键盘;
kg => 柯尔克孜阿拉伯文键盘;
```

### 参数二: $event `<Event>对象`

```
一个由用户的动作触发的事件，例如点击鼠标按钮或点击键盘

```

###  Vue 中使用
-    提示: React / Angular  用法一样

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
        label: '哈萨克阿拉伯文键盘'
      }, {
        value: 'kk',
        label: '哈萨克希尔里文键盘'
      }, {
        value: 'ug',
        label: '维吾尔阿拉伯文键盘'
      }, {
        value: 'kg',
        label: '柯尔克孜阿拉伯文键盘'
      }]
    }
  },

  methods: {
    keydownHandel(event) {
      this.value += webIME(this.defaultLang, event)
    }
  }
}
</script>
```
### 在Html中使用script引入

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
      var defaultLang= 'kz'; /** 更多选项看上面的语言选项 */
      var test = document.getElementById('test');
      test.addEventListener("keydown", function(event) {
          this.value += window.sarmayIme(defaultLang, event);
      });
    </script>
  </body>
</html>
```

## License

[MIT](LICENSE)