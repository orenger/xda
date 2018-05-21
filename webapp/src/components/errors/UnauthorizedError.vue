<template>
    <div class="error-pages">
        <div class="main-card">
            <div class="error-container">

                <div class="logo">
                    <img src="../../assets/logo.png"/>
                </div>

                <img src="../../assets/logo.png"
                     class="if_212_2661035">

                <h1 class="title">{{$t('unauthorized_error_title')}}</h1>

                <!--<button class="button is-full-width" @click.prevent="">{{$t('main_error_button_text')}}-->
                <!--</button>-->
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from "vue-class-component";
    import {UserId} from "@/models/UserId.model";
    import {Getter} from "vuex-class";

    const namespace: string = 'authentication'

    @Component({})
    export default class UnauthorizedErrorComponent extends Vue {

        @Getter("userId") userId!: UserId;

        mounted(){

        }

    }
</script>
