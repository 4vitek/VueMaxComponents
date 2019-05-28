
<template>
    <span>
        <ul class="list-group">
            <li class="list-group-item" v-for="index in 5" v-bind:key="index">
                Server #{{ index }}
            </li>
        </ul>
    </span>
</template>
<script>
export default {
//   data:function(){
//     return {
//       title: "Server status"
//     }
//   },
//   methods:{
//     changeStatus(){
//       this.status = 'נורמלי';
//     }
//   }
}
</script>
<style>
</style>