<template>
    <div class="col-md-12 col-sm-6">
        <ul class="list-group">
            <app-server
                    class="list-group-item"
                    v-for="server in servers" :key="server.id" :server="server">
                <!-- Server #{{ server.status }} -->
            </app-server>
        </ul>
    </div>
</template>

<script>
import Server from './Server.vue'
export default {
    data(){
        return {
            servers: [
                  { id: 1, status: 'Normal'},
                  { id: 2, status: 'Critical'},
                  { id: 3, status: 'Unknown'},
                  { id: 4, status: 'gopa'}
            ]
        }
    },
    components:{
        appServer: Server
    }
}
</script>

<style>

</style>
