<template>
    <div>
        <label>New Message</label>
        <input  v-model="newMessage" @keyup="checkEnter" autofocus>
        <button @click="addMessage">Add Message</button>
        <div class="messages">
            <div v-for="msg in messages" :key="msg">
                {{msg}}
            </div>
        </div>
    </div>
</template>
<script>
import {defineComponent, reactive, ref} from "vue";
 console.log("chat-window");
export default defineComponent({
    props:["background-color"],
    setup(){
        const messages = reactive([]);
        const newMessage = ref("");

        function addMessage(){
            messages.push(newMessage.value);
            newMessage.value="";
        }
        function checkEnter(e)
        {
            if(e.keyCode === 13) addMessage();
        }
        return{
            messages,
            newMessage,
            addMessage,
            checkEnter
        };
    }
})
</script>
