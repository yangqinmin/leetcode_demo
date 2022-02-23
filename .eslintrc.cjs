/**
 * 本规则，基于最新的华为前端开发规范，具体可见链接：
 * http://w3.huawei.com/ipd/tsl/#!tsl_new/standard/standard.html?standardId=43549
 */

module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2015,
        // ECMAScript modules 模式
        sourceType: 'module',
        ecmaFeatures: {
            // 不允许 return 语句出现在 global 环境下
            globalReturn: false,
            // 开启全局 script 模式
            impliedStrict: true,
            jsx: true,
        },
        // 即使没有 babelrc 配置文件，也使用 babel-eslint 来解析
        requireConfigFile: false,
        // 仅允许 import export 语句出现在模块的顶层
        allowImportExportEverywhere: false,
    },
    env: {
        browser: true,
        node: true,
        commonjs: true,
        es6: true,
    },
    rules: {

        //------------------------前端规范-排版格式-------------------------------
        /**
          * 规则15	采取一致的空格缩进,只允许使用空格(space)进行缩进。
          */
        indent: [ 'warn', 4 ],

        /**
          * 前端规范规则16	超长代码需要被换行
          * 规则22	每行代码应该少于120个字符（以此为准）
          */
        'max-len': [ 'warn', { code: 120 } ],

        /**
          * 建议5	方法的参数尽量在一行显示
          */
        'function-paren-newline': [ 'warn', 'multiline' ],

        /**
          * 建议6	对象字面量属性超过4个, 需要都换行
          */
        'object-property-newline': [ 'warn', { allowAllPropertiesOnSameLine: false } ],

        /**
          * 建议7	链式调用对象方法时，一行最多调用4次，否则需要换行
          */
        'newline-per-chained-call': [ 'warn', { ignoreChainWithDepth: 4 } ],

        /**
          * 规则20	给if、for、do、while等语句的执行体加花括号 {}
          */
        curly: 'error',

        /**
          * 建议15	使用拖尾逗号
          */
        'comma-dangle': [ 'warn', 'always-multiline' ],

        /**
          * 建议16	每句代码后加分号
          */
        'semi-style': [ 'warn', 'last' ],
        'semi': [ 'error', 'always' ],


        /**
          * 建议19	控制文件的长度，最好不要超过2000行
          */
        'max-lines': [ 'error', 2000 ],

        /**
          * 原则6	方法设计应遵循单一职责原则（SRP），一个方法仅完成一个功能
          */
        'max-lines-per-function': [ 'error', 50 ],

        /**
          * 建议21	圈复杂度不超过20
          * 软件学院统一要求是：10
          */
        complexity: [ 'warn', 10 ],

        /**
          * 建议22	块语句的最大可嵌套深度不要超过4层
          */
        'max-depth': [ 'warn', 4 ],

        /**
          * 建议23	回调函数嵌套的层数不超过4层
          */
        'max-nested-callbacks': [ 'error', 4 ],

        /**
          * 规则25	禁止连续赋值
          */
        'no-multi-assign': 'error',

        /**
          * 规则26	变量不需要用undefined初始化
          */
        'no-undef-init': 'warn',

        /**
          * 规则67	块内变量不能与函数内的其他变量同名，块内函数应该使用函数表达式声明
          */
        'no-shadow': 'error',

        /**
          * 建议26	方法的参数个数不宜超过5个
          */
        'max-params': [ 'warn', 5 ],

        /**
          * 规则28	不要把方法的入参当作工作变量/临时变量
          */
        'no-param-reassign': 'error',

        /**
          * 规则29	不要使用 arguments，可以选择 rest 语法替代
          */
        'prefer-rest-params': 'error',

        /**
          * 建议31	function 声明或表达式的一致性
          */
        'func-style': [ 'warn', 'declaration', { allowArrowFunctions: true } ],

        /**
          * 规则30	用到匿名函数时优先使用箭头函数（或 Function#bind），别保存 this 的引用
          */
        'prefer-arrow-callback': 'error',

        /**
          * 规则31	箭头函数的简写
          */
        'arrow-body-style': [ 'warn', 'as-needed' ],

        /**
          * 规则32	要求使用一致的 return 语句
          */
        'consistent-return': 'error',

        /**
          * 规则35	在构造函数中禁止在调用super()之前使用this或super
          */
        'no-this-before-super': 'error',

        /**
         * 建议36	建议字符串使用单引号
         */
        quotes: [ 'error', 'single' ],

        /**
          * 规则36	使用模板字符串（`）实现字符串拼接
          */
        'prefer-template': 'error',

        /**
          * 建议37	不要使用字符串的行连续符号
          */
        'no-multi-str': 'warn',


        /**
          * 建议43	推荐在对象字面量中使用属性简写
          */
        'object-shorthand': 'warn',

        /**
          * 规则41	使用点号来访问对象的属性，只有属性是动态的时候使用 []
          */
        'dot-notation': 'error',

        /**
          * 规则42	getter和setter应该成对出现在对象中
          */
        'accessor-pairs': 'error',

        /**
          * 规则43	禁止在对象实例上直接使用 Object.prototypes 的内置属性
          */
        'no-prototype-builtins': 'error',

        /**
          * 规则44	需要约束 for-in
          */
        'guard-for-in': 'error',


        /**
          * 建议47	判断相等时使用 === 和 !== ，而不是 == 和 !=
          */
        eqeqeq: 'warn',

        /**
          * 建议50	不要使用否定表达式
          */
        'no-negated-condition': 'warn',

        /**
          * 规则47	每个switch语句都包含一个default语句，即使它不包含任何代码
          */
        'default-case': 'error',

        /**
          * 规则48	在switch语句的每一个有内容的case中都放置一条break语句
          */
        'no-fallthrough': 'error',

        /**
          * 规则49	case语句中需要声明词法时, 花括号{}不能省略
          */
        'no-case-declarations': 'error',


        /**
          * 规则59	禁止在 finally 语句块中出现控制流语句句块中出现控制流语句
          */
        'no-unsafe-finally': 'error',

        /**
          * 原则8	禁止使用eval()
          */
        'no-eval': 'error',

        /**
          * 规则61	禁止使用with() {}
          */
        'no-with': 'error',

        /**
         * 规则65	禁止使用较短的符号实现类型转换
         */
        'no-implicit-coercion': [
            'error',
            {
                allow: [ '!!' ],
            },
        ],

        /**
         * 大括号前后空格
         */
        'array-bracket-spacing': [ 'error', 'always' ],
        'object-curly-spacing': [ 'error', 'always' ],

        'space-before-blocks': 2,  // if function等的大括号之前需要有空格
        'no-trailing-spaces': 2, //一行结束后面有空格就发出警告
        'arrow-parens': [ 'error', 'as-needed' ], //如果只有一个参数不需要括号
        'keyword-spacing': [ 'error', { 'before': true } ], //关键字后面要有一个空格
        'space-before-function-paren': [ 'error', 'always' ], //函数参数列表括号前面要有一个空格
        'space-infix-ops': 'error', //中缀操作符（infix operators）前后要有一个空格
        'block-spacing':'error', //块结构的格式
        'rest-spread-spacing':[ 'error', 'always' ], //解构...格式

        /**
         * 逗号后面有一个空格
         */
        'comma-spacing': [
            'error',
            {
                'before': false,
                'after': true,
            },
        ],

        /**
         * 箭头函数格式
         */
        'arrow-spacing': [
            'error',
            {
                'before': true,
                'after': true,
            },
        ],
    },
};
