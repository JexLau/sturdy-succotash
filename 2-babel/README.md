## 总结

一个包含babel、ts、eslint的工程环境配置

### 配置babel

Webpack 场景下，只需使用 babel-loader 即可接入 Babel 转译功能：

- 安装依赖：`npm i -D @babel/core @babel/preset-env babel-loader`

- 添加模块处理规则:

```javascript
module: {
  rules: [
    {
      test: /\.js$/,
      use: ['babel-loader'],
    },
  ],
},
```
接入后，可以使用 .babelrc 文件或 rule.options 属性配置 Babel 功能逻辑，例如：

```javascript
{
  test: /\.js$/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
      },
    },
  ],
},
```

@babel/preset-env 是一种 Babel 预设规则集 —— Preset，这种设计能按需将一系列复杂、数量庞大的配置、插件、Polyfill 等打包成一个单一的资源包，从而简化 Babel 的应用、学习成本。Preset 是 Babel 的主要应用方式之一，社区已经针对不同应用场景打包了各种 Preset 资源，例如：

- babel-preset-react：包含 React 常用插件的规则集，支持 preset-flow、syntax-jsx、transform-react-jsx 等；

- @babel/preset-typescript：用于转译 TypeScript 代码的规则集
@babel/preset-flow：用于转译 Flow 代码的规则集
