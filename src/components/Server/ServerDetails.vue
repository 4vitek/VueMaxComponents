<template>
    <div class="col-md-12 col-sm-6">
     <p v-if="!server">Please select a Server</p>
        <p v-else>Server #{{ server.id }} selected, Status: {{ server.status }}</p>
        <hr>
        <button @click="resetStatus">Change to Normal</button>
    </div>
</template>

<script>
   import { servicesBus } from '../../main';

    export default {
        data: function() {
            return {
                server: null
            }
        },
        methods: {
          resetStatus() {
              this.server.status = 'Normal';
          }
        },
        created() {
            servicesBus.$on('serverSelected', (server) => {
                this.server = server;
            });
        }
    }
</script>

<style>

</style>
