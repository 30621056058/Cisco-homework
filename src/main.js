import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import focus from '../fous'
import { Button, Select ,row,col,Container ,Tag ,Image ,Form ,Input ,FormItem,
  Link,Carousel,MenuItemGroup,Menu,Submenu,
  CarouselItem ,Breadcrumb
   ,breadcrumbItem,MenuItem,Radio,RadioGroup,RadioButton ,card } from 'element-ui';

import axios from 'axios'
// import VueAxios from 'vue-axios'

// import $ from 'jquery'

Vue.prototype.$axios = axios;

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.component(row .name, row );
Vue.component(col .name, col );
Vue.component(Container .name, Container );
Vue.component(Tag .name, Tag );
Vue.component(Image .name, Image );
Vue.component(Form .name, Form );
Vue.component(Input .name, Input );
Vue.component(FormItem .name, FormItem );
Vue.component(Link .name, Link );
Vue.component(Carousel .name, Carousel );
Vue.component(CarouselItem .name, CarouselItem );
Vue.component(Breadcrumb .name, Breadcrumb );
Vue.component(breadcrumbItem .name, breadcrumbItem );
Vue.component(MenuItem .name, MenuItem, );
Vue.component(MenuItemGroup .name, MenuItemGroup, );
Vue.component(Menu .name, Menu, );
Vue.component(Submenu .name, Submenu, );
Vue.component(Radio .name, Radio, );
Vue.component(RadioGroup .name, RadioGroup, );
Vue.component(RadioButton .name, RadioButton, );
Vue.component(card .name, card, );


// Vue.component(fous)

Vue.config.productionTip = false
Vue.prototype.$ = window.$

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
