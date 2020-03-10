/*
 * @Descripttion: 注释
 * @Author: 朱海华
 * @Date: 2020-03-10 21:00:49
 * @LastEditTime: 2020-03-10 22:50:32
 */

  /**
   * 分析过程
   * 0. 首先获取文件内容
   * 1. 利用babel/parser来生成AST
   * 2. 根据AST获取源代码中的依赖和源代码 babel.parse(conent, {sourceType: 'module'})
   * 3. 利用babel/trasverse来分析依赖关系 并转为绝对路径 防止路径问题出现的错误 如下 traverse方法
   * 4. 利用babel/core来分析代码 转为es5 babel.transformFromAst(ast, null, {presets: ["@babel/preset-env"]})
   * 5. 递归调用 moduleAnalyzer() 分析所有代码 并生成对应code对象
   */

const path = require('path')
const fs = require('fs')
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const babel = require('@babel/core')

const  moduleAnalyzer = (filename) => {
  // 0. 通过fs获取文件内容
  const content = fs.readFileSync(filename, 'utf-8')
  // 1. 利用@babel/parser来分析代码 parser.parse接受两个参数 一个是文件内容 一个是规范(通过sourceType配置)
  // https://babeljs.io/docs/en/babel-parser
  const ast = parser.parse(content, {
    sourceType: 'module'
  })
  // console.log(ast.program.body)
  /**
   * 依赖分析过程
   * 1. 解析当前代码的依赖文件 ImportDeclaration下的node对象获取 ImportDeclaration是从上一步AST中获取的
   * 2. 分析完代码中的依赖关系以后 需要做一个路径的转化
   * 3. 存入dependencies依赖对象
   */
  const dependencies = {}
  traverse(ast, {
    // 2. 分析文件依赖关系
    ImportDeclaration({ node }) {
      const dirname = path.dirname(filename)
      const newPath = './' + path.join(dirname, node.source.value)
      // console.log(newPath)  // 获取绝对路径
      dependencies[node.source.value] = newPath
      // console.log(dependencies) // 通过对象存储 key是原有的相对路径 value是转换以后的绝对路径
    }
  })
  // 3. 分析代码 => 对源代码做一次翻译 翻译成浏览器🉑️执行的代码
  const { code } = babel.transformFromAst(ast, null, {
    presets: ["@babel/preset-env"]
  })
  // 4. 导出分析结果
  return {
    filename,
    dependencies,
    code
  }
 }

// 5. 递归调用 分析所有代码
const dependenciesGraph = (entry) => {
  const entryModule = moduleAnalyzer(entry)
  const array = [entryModule]
  for(let i = 0; i < array.length; i++) {
    const item = array[i]
    const { dependencies } = item // 获取入口文件的依赖
    if (dependencies) {
      for(let j in dependencies) {
        array.push(moduleAnalyzer(dependencies[j])) // 再次分析依赖 调用moduleAnalyzer
      }
    }
  }
  // console.log(array)
  const result = {}
  array.forEach((item) => {
    result[item.filename] = {
      dependencies: item.dependencies,
      code: item.code
    }
  })
  return result
}

const generateCode = (entry) => {
  const graphInfo = JSON.stringify(dependenciesGraph(entry))
  return `
  (function(graph){
    function require(module) { 
      function localRequire(relativePath) {
        return require(graph[module].dependencies[relativePath]);
      }
      var exports = {};
      (function(require, exports, code){
        eval(code)
      })(localRequire, exports, graph[module].code);
      return exports;
    };
    require('${entry}')
  })(${graphInfo});
  `
}

const code = generateCode('./src/index.js')
console.log(code)
