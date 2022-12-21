import { createApp } from 'vue'
//import App from './App.vue'
//import App from './chat-window.vue'
import BootstrapVue3 from 'bootstrap-vue-3'
// import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import App from './vselect-test1.vue'
import router from './router'
import vSelect from "vue-select";

createApp(App).use(router).use(BootstrapVue3).component('v1-select',vSelect).mount('#app')

// import { defineCustomElement } from 'vue'
// //import Chat from './chat-window.vue'
// import vueSelect from './vselect-test1.vue'
// //import vSelect from "vue-select"
// const element = defineCustomElement(vueSelect);

// //customElements.define("chat-window",element);
// customElements.define("vue-select",element);

