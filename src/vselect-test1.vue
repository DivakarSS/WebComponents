<template>
    <div class="root">
       <h3>Learn Vue-select</h3>
       <v-select :options ="fruits" ></v-select > <hr/><br/>
       <BFormSelect v-model="selectedTechnology" :options="technologies"
       style="width: 200px; margin-top: 0px; margin-bottom: 0px; margin-right: 10px;"></BFormSelect>
       <hr/><br/>
       <BootstrapModel></BootstrapModel>
       <hr/><br/>
       <BDropdown id="dropdown-1" text="Dropdown Button" class="m-md-2">
        <BDropdownItemButton>First Action</BDropdownItemButton>
        <BDropdownItemButton>Second Action</BDropdownItemButton>
        <BDropdownItemButton>Third Action</BDropdownItemButton>
          <BDropdownDivider></BDropdownDivider>
        <BDropdownItemButton active>Active action</BDropdownItemButton>
        <BDropdownItemButton disabled>Disabled action</BDropdownItemButton>
       </BDropdown>
       <hr/><br/>
       <b-button class="mx-1" @click="check()" variant="success">Success</b-button>
    </div>
    
  </template>
  <script>
  // import {createApp} from 'vue'
  import vSelect from "vue-select";
  // import BootstrapVue3 from 'bootstrap-vue-3'
  import {BDropdown} from 'bootstrap-vue-3';
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
  import BootstrapModel from './components/bootstrap-model.vue'
  import "vue-select/dist/vue-select.css";
  console.log("vue-select");
  // createApp({}).use(BootstrapVue3);

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
      BootstrapModel,
      BDropdown
    },
    methods:{
        check:function(){
          console.log("BButton Working");
        }
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
