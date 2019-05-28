<template>
    <div class="col-md-12 col-sm-6">
        <li
            class="list-group-item"
            style="cursor: pointer"
            @click="serverSelected">
           Server #{{ server.id }}
        </li>
    </div>
</template>

<script>
import { servicesBus } from '../../main';
export default {
    data:{
        
    },
    props:['server'],
    methods: {
        serverSelected() {
            servicesBus.$emit('serverSelected', this.server);
        }
    }
}
</script>

<style>

</style>
