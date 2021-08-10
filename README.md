**为了解决项目代码风格校验繁琐、且难以及时同步的问题**

## 快速使用

### 安装依赖

```shell
yarn add @mario34/lint-config -D
```

### js

```js
module.export = {
  extend: ['./node_modules/@mario34/lint-config/src/js'],
  rules: [
    // 自定义规则
  ]
}
```

### ts

```js
module.export = {
  extend: ['./node_modules/@mario34/lint-config/src/ts'],
  rules: [
    // 自定义规则
  ]
}
```

### vue项目

```js
module.export = {
  extend: ['./node_modules/@mario34/lint-config/src/vue'],
  rules: [
    // 自定义规则
  ]
}
```

### vue3.x项目

```js
module.export = {
  extend: ['./node_modules/@mario34/lint-config/src/vue3'],
  rules: [
    // 自定义规则
  ]
}
```

### react项目

```js
module.export = {
  extend: ['./node_modules/@mario34/lint-config/src/react'],
  rules: [
    // 自定义规则
  ]
}
```