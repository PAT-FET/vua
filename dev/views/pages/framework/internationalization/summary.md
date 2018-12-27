默认英文包， 可使用内置语言包， 或者自己提供语言包进行注册。

```js
import zhHans from '../src/locale/zh-Hans'

Vue.use(Vua, {
  lang: {
    locales: { 'zh-Hans': zhHans }
  }
})

// ... 切换语言包
this.$vua.lang.current = 'zh-Hans'

```
