import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store.js'

Vue.config.productionTip = true

new Vue({
  store, //store : store .. ES6 문법.  
  //테스트결과 main.js에 store는 무조건 하나여야하며, 여러개의 store를 등록하고 싶을경우는
  // 모든 store를 받는 store모듈을 하나 만들어서 등록해야한다. 
  // https://velog.io/@skyepodium/VUEX-store-%EC%97%AC%EB%9F%AC-%EA%B0%9C%EB%A5%BC-%EB%AA%A8%EB%93%88%ED%99%94%ED%95%98%EA%B8%B0
  // https://kdydesign.github.io/2019/04/06/vuejs-vuex-helper/ 
 
  //https://www.inflearn.com/course/vue-pwa-vue-js-%EC%A4%91%EA%B8%89/lecture/11569
  render: h => h(App),
}).$mount('#app')
