// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Button from '../packages/button'
import Radio from '../packages/radio'
import RadioGroup from '../packages/radio-group'

Vue.component(Button.name, Button)
Vue.component(Radio.name, Radio)
Vue.component(RadioGroup.name, RadioGroup)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
