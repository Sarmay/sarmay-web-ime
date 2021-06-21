module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/essential',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
    'prefer-const': 2, // 尽量使用 const 进行变量定义
    'no-shadow': 2, // 报告变量重定义错误
    'no-shadow-restricted-names': 2, // 报告受限标识符定义错误
    'no-unused-expressions': 0, // 关闭 eslint 默认的不可定义未使用的表达式规则,
    complexity: [1, 15],
    'max-len': [
      1,
      {
        code: 120,
        tabWidth: 2,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreTemplateLiterals: true
      }
    ],
    'security/detect-object-injection': 0, // 忽略对象属性访问注入的安全风险
    'security/detect-non-literal-fs-filename': 0// 忽略非字面量（字符串常量）访问本地文件路径的安全风险
  }
}
