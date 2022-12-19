<template>
    <div class="root">
       <h3>Learn Vue-select</h3>
       <v-select :options ="fruits" ></v-select > <hr/><br/>
       <b-form-select v-model="selectedTechnology" :options="technologies"
       style="width: 200px; margin-top: 0px; margin-bottom: 0px; margin-right: 10px;"></b-form-select>
       <hr/><br/>
       <model></model>
    </div>
    
  </template>
  <script>
  import {createApp} from 'vue'
  import vSelect from "vue-select";
  import BootstrapVue3 from 'bootstrap-vue-3'
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
  import model from './bootstrap-model.vue'
  import "vue-select/dist/vue-select.css";
  console.log("vue-select");
  createApp({}).use(BootstrapVue3);

  export default {
    data () {
      return {
        fruits:["Mangoo","Apple","Orange","Melon","Pineapple","Lecy","Blueberry"],
        selectedTechnology: "All Technologies",
        technologies: [
                { text: "All Technologies", value: "All Technologies" },
                { text: "Gas", value: "Gas" }, 
                { text: "Steam", value: "Steam" },
                { text: "Generator", value: "Generator" }
            ],
      }
    },
    components:{
      vSelect,
      model
    }
  }
  </script>
  

<style scoped>
/* @import "vue-select/src/scss/vue-select.scss"; */

/* @import "~vue-select/dist/vue-select.css"; */
/* .root{
      margin: 0 auto;
      max-width: 600px;} */
</style>