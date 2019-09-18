import Vue from 'vue';
import WelcomeCraft from '../vue/WelcomeCraft'

new Vue({
  el: '#app',
  delimiters: ['${', '}'],
  components: {
    'welcome-craft': WelcomeCraft
  }
})
