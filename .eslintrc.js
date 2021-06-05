module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/vue3-essential","eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
    sourceType: 'module'
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    /****
     * 规则与 JavaScript 代码中可能的错误或逻辑错误有关
     *
     **/

    "no-control-regex": 0, // 禁止在正则表达式中使用控制字符
    "no-dupe-args": 2, //  	禁止 function 定义中出现重名参数
    "no-dupe-keys": 2, //  	禁止对象字面量中出现重复的 key
    "no-duplicate-case": 2, //禁止出现重复的 case 标签
    "no-empty-character-class": 2, // 	禁止在正则表达式中使用空字符集
    "no-ex-assign": 2, // 禁止对 catch 子句的参数重新赋值
    "no-extra-boolean-cast": 2, // 禁止不必要的布尔转换
    "no-extra-parens": [2, "functions"], // 禁止不必要的括号
    "no-func-assign": 2, // 禁止对 function 声明重新赋值
    "no-inner-declarations": [2, "functions"], //  	禁止在嵌套的块中出现变量声明或 function 声明
    "no-irregular-whitespace": 2, // 禁止不规则的空白
    "no-obj-calls": 2, // 禁止把全局对象作为函数调用
    "no-regex-spaces": 2, // 禁止正则表达式字面量中出现多个空格
    "no-sparse-arrays": 2, // 禁用稀疏数组
    "no-unexpected-multiline": 2, // 禁止出现令人困惑的多行表达式
    "no-unreachable": 2, //  	禁止在 return、throw、continue 和 break 语句之后出现不可达代码
    // 规则是关于最佳实践的，帮助你避免一些问题
    "accessor-pairs": 2, // 	强制 getter 和 setter 在对象中成对出现
    curly: [2, "multi-line"], //  	强制所有控制语句使用一致的括号风格
    "dot-location": [2, "property"], // 强制在点号之前和之后一致的换行
    eqeqeq: ["error", "always", { null: "ignore" }], // 要求使用 === 和 !==
    "no-caller": 2, //  	禁用 arguments.caller 或 arguments.callee
    "no-empty-pattern": 2, // 禁止使用空解构模式
    "no-eval": 2, // 禁用 eval()
    "no-extend-native": 2, // 禁止扩展原生类型
    "no-extra-bind": 2, // 禁止不必要的 .bind() 调用
    "no-fallthrough": 2, //  	禁止 case 语句落空
    "no-floating-decimal": 2, // 禁止数字字面量中使用前导和末尾小数点
    "no-implied-eval": 2, // 禁止使用类似 eval() 的方法
    "no-iterator": 2, // 禁用 __iterator__ 属性
    "no-labels": [
      2,
      {
        allowLoop: false,
        allowSwitch: false
      }
    ], //  禁用标签语句
    "no-lone-blocks": 2, // 禁用不必要的嵌套块
    "no-multi-spaces": 2, // 禁止使用多个空格
    "no-multi-str": 2, // 禁止使用多行字符串
    "no-new-object": 2, // 禁止使用 new 以避免产生副作用
    "no-new-require": 2,
    "no-new-symbol": 2,
    "no-new-wrappers": 2,
    "no-new-wrappers": 2, // 禁止对 String，Number 和 Boolean 使用 new 操作符
    "no-octal": 2, //  	禁用八进制字面量
    "no-octal-escape": 2, // 禁止在字符串中使用八进制转义序列
    "no-proto": 2, //禁用 __proto__ 属性
    "no-redeclare": 2, // 禁止多次声明同一变量
    "no-return-assign": [2, "except-parens"], //禁止在 return 语句中使用赋值语句
    "no-self-assign": 2, // 禁止自我赋值
    "no-self-compare": 2, // 禁止自身比较
    "no-sequences": 2, // 禁用逗号操作符
    "no-throw-literal": 2, // 禁止抛出异常字面量
    "no-unmodified-loop-condition": 2, // 禁用一成不变的循环条件
    "no-useless-call": 2, //禁止不必要的 .call() 和 .apply()
    "no-useless-escape": 0, // 禁用不必要的转义字符
    "no-with": 2, // 禁用 with 语句
    "wrap-iife": [2, "any"], //  	要求 IIFE 使用括号括起来
    yoda: [2, "never"], // 要求或禁止 “Yoda” 条件

    /*
     * 规则与变量声明有关
     **/
    "no-delete-var": 2, //禁止删除变量
    "no-label-var": 2, // 不允许标签与变量同名
    "no-shadow-restricted-names": 2, // 禁止将标识符定义为受限的名字
    "no-undef": 2, // 禁用未声明的变量，除非它们在 global 注释中被提到
    "no-undef-init": 2, //禁止将变量初始化为 undefined
    "no-unused-vars": [
      2,
      {
        vars: "all",
        args: "none"
      }
    ], // 禁止出现未使用过的变量

    /**
     *
     * 规则是关于Node.js 或 在浏览器中使用CommonJS 的
     */
    "handle-callback-err": [2, "^(err|error)$"], // 要求回调函数中有容错处理
    "no-new-require": 2, // 禁止调用 require 时使用 new 操作符
    "no-path-concat": 2, // 禁止对 __dirname 和 __filename 进行字符串连接

    /***
     *  规则是关于风格指南的，而且是非常主观的
     *
     */
    "array-bracket-spacing": [2, "never"], // 强制数组方括号中使用一致的空格
    "block-spacing": [2, "always"], // 禁止或强制在代码块中开括号前和闭括号后有空格
    "brace-style": [
      2,
      "1tbs",
      {
        allowSingleLine: true
      }
    ], //强制在代码块中使用一致的大括号风格

    camelcase: [
      0,
      {
        properties: "always"
      }
    ], // 强制使用骆驼拼写法命名约定
    // "comma-dangle": [2, "never"], // 要求或禁止末尾逗号
    "comma-spacing": [
      2,
      {
        before: false,
        after: true
      }
    ], // 强制在逗号前后使用一致的空格
    "comma-style": [2, "last"], // 强制使用一致的逗号风格
    "eol-last": 2, // 要求或禁止文件末尾存在空行
    indent: [
      2,
      2,
      {
        SwitchCase: 1
      }
    ], // 强制使用一致的缩进
    "jsx-quotes": [2, "prefer-single"], //强制在 JSX 属性中一致地使用双引号或单引号
    "key-spacing": [
      2,
      {
        beforeColon: false,
        afterColon: true
      }
    ], // 强制在对象字面量的属性中键和值之间使用一致的间距

    "keyword-spacing": [
      2,
      {
        before: true,
        after: true
      }
    ], // 强制在关键字前后使用一致的空格
    "new-cap": [
      2,
      {
        newIsCap: true,
        capIsNew: false
      }
    ], //要求构造函数首字母大写
    "new-parens": 2, // 强制或禁止调用无参构造函数时有圆括号
    "no-mixed-spaces-and-tabs": 2, // 禁止空格和 tab 的混合缩进
    "no-multiple-empty-lines": [
      2,
      {
        max: 1
      }
    ], // 禁止出现多行空行
    "no-new-object": 2, //  	禁用 Object 的构造函数
    "no-trailing-spaces": 2, // 禁用行尾空格
    "no-unneeded-ternary": [
      2,
      {
        defaultAssignment: false
      }
    ], // 禁止可以在有更简单的可替代的表达式时使用三元操作符
    "no-whitespace-before-property": 2, // 禁止属性前有空白
    "object-curly-spacing": [
      2,
      "always",
      {
        objectsInObjects: false
      }
    ], // 强制在大括号中使用一致的空格
    "object-property-newline": [2, { allowAllPropertiesOnSameLine: false }], // 强制将对象的属性放在不同的行上
    "one-var": [
      2,
      {
        initialized: "never"
      }
    ], // 强制函数中的变量要么一起声明要么分开声明
    "padded-blocks": [2, "never"], // 要求或禁止块内填充
    quotes: [
      2,
      "double",
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ], //强制使用一致的反勾号、双引号或单引号

    // semi: [2, "never"], //要求或禁止使用分号代替 ASI
    "semi-spacing": [
      2,
      {
        before: false,
        after: true
      }
    ], // 强制分号之前和之后使用一致的空格

    "space-before-blocks": [2, "always"], // 强制在块之前使用一致的空格
    "space-before-function-paren": [2, "never"], //  	强制在 function的左括号之前使用一致的空格
    "space-in-parens": [2, "never"], // 强制在圆括号内使用一致的空格
    "space-infix-ops": 2, //  	要求操作符周围有空格
    "space-unary-ops": [
      2,
      {
        words: true,
        nonwords: false
      }
    ], // 强制在一元操作符前后使用一致的空格
    "spaced-comment": [
      2,
      "always",
      {
        markers: [
          "global",
          "globals",
          "eslint",
          "eslint-disable",
          "*package",
          "!",
          ","
        ]
      }
    ], // 强制在注释中 // 或 /* 使用一致的空格

    /***
     *
     *
     * 规则只与 ES6 有关, 即通常所说的 ES2015
     */
    "arrow-spacing": [
      2,
      {
        before: true,
        after: true
      }
    ], //强制箭头函数的箭头前后使用一致的空格
    "constructor-super": 2, // 要求在构造函数中有 super() 的调用
    "generator-star-spacing": [
      2,
      {
        before: true,
        after: true
      }
    ], //强制 generator 函数中 * 号周围使用一致的空格
    "no-class-assign": 2, // 禁止修改类声明的变量
    "no-const-assign": 2, // 禁止修改 const 声明的变量
    "no-dupe-class-members": 2, // 禁止类成员中出现重复的名称
    "no-new-symbol": 2, // 禁止 Symbolnew 操作符和 new 一起使用
    "no-this-before-super": 2, // 禁止在构造函数中，在调用 super() 之前使用 this 或 super
    "no-useless-computed-key": 2, // 禁止在对象中使用不必要的计算属性
    "no-useless-constructor": 2, //  禁用不必要的构造函数
    "prefer-const": 2, // 要求使用 const 声明那些声明后不再被修改的变量
    // "sort-imports": [
    //   2,
    //   { memberSyntaxSortOrder: ["single", "all", "multiple", "none"] }
    // ], // 强制模块内的 import 排序
    "template-curly-spacing": [2, "never"], //要求或禁止模板字符串中的嵌入表达式周围空格的使用
    "yield-star-spacing": [2, "both"] //  	强制在 yield* 表达式中 * 周围使用空格
  },

  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)"
      ],
      env: {
        mocha: true
      }
    }
  ]
}
