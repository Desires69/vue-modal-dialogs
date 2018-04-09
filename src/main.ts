// The entry must be a .ts file. Otherwise TypeScript in .vue file will not work
// See https://github.com/TypeStrong/ts-loader/issues/505 for more detail

import 'element-ui/lib/theme-chalk/index.css'
import 'highlight.js/styles/color-brewer.css'

import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import * as ModalDialogs from 'vue-modal-dialogs'

Vue.use(ElementUI)
Vue.use(ModalDialogs)
Vue.config.devtools = true
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})