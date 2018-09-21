// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Button from '../packages/button'
import Radio from '../packages/radio'
import RadioGroup from '../packages/radio-group'
import Checkbox from '../packages/checkbox'
import Dialog from '../packages/dialog'

Vue.component(Button.name, Button)
Vue.component(Radio.name, Radio)
Vue.component(RadioGroup.name, RadioGroup)
Vue.component(Checkbox.name, Checkbox)
Vue.component(Dialog.name, Dialog)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
