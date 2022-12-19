import { defineCustomElement } from 'vue';
import Chat from './chat-window.vue';

const element = defineCustomElement(Chat);

customElements.define("chat-window",element);