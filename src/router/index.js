import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Button from '../../example/pages/button.vue'
import Radio from '../../example/pages/radio.vue'
import RadioGroup from '../../example/pages/radio-group.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/button',
      name: 'Button',
      component: Button
    },
    {
      path: '/radio',
      name: 'Radio',
      component: Radio
    },
    {
      path: '/radiogroup',
      name: 'RadioGroup',
      component: RadioGroup
    }
  ]
})
