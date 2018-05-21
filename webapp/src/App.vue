<template>
  <div id="app">
      <dashboard></dashboard>
  </div>
</template>
<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Dashboard from '@/components/dashboard/Dashboard.component';

    @Component({
        components: {
            Dashboard
        }
    })
    export default class App extends Vue {
    }
</script>

