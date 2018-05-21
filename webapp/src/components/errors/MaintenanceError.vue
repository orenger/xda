<template>
    <div class="error-pages">
        <div class="main-card">
            <div class="error-container">

                <div class="logo">
                    <img src="../../assets/logo.png"/>
                </div>


                <img src="../../assets/logo.png"
                     class="if_212_2661035">

                <h1 class="title">{{$t('maintenance_error_title')}}</h1>
                <h4 class="title">{{$t('maintenance_error_sub_title')}}</h4>

            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from "vue-class-component";

    @Component({})
    export default class MaintenanceError extends Vue {

    }
</script>
