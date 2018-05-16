<template>
    <router-link class="router-link-widget" :to="to" event="" @click.native.prevent="click">
        <slot></slot>
    </router-link>
</template>

<script lang="ts">
    import {Component, Prop, Inject, Vue} from 'vue-property-decorator';

    @Component({})
    export default class RouterLinkWidget extends Vue {

        @Prop() private to!:any;

        click():void {
            this.$router.push(this.to)
        }
    }
</script>

<style scoped>

</style>