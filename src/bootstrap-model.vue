
<template>
  <BButton @click="modal = !modal">
  Toggle modal
  </BButton>

<BModal v-model="modal">
  Foo bar
</BModal>
</template>

<script setup lang="ts">
import {ref} from 'vue'
// import { createApp } from 'vue'
// import BootstrapVue3 from 'bootstrap-vue-3'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
// createApp({}).use(BootstrapVue3);
const modal = ref(false)
</script>
