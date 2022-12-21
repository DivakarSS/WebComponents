import { defineCustomElement } from 'vue'
//import Chat from './chat-window.vue'
import vueSelect from './vselect-test1.vue'
//import vSelect from "vue-select"
const element = defineCustomElement(vueSelect);

//customElements.define("chat-window",element);
customElements.define("vue-select",element);