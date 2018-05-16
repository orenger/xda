<template>
    <div class="auth-pages">
        <div class="main-card">
            <div class="form-side">
                <div class="logo">
                    <img src="../../../../../assets/imgs/logo-2-1.png"/>
                </div>
                <h1 class="title">{{ $t('email_sent_header') }}</h1>
                <div class="email-sent-container">
                    <img class="email-img" src="../../../../../assets/imgs/mail-sent.svg"/>
                    <span class="email-message">
                        {{ $t('email_sent_message') }}
                    </span>
                </div>

            </div>
            <div class="image-side">

            </div>
        </div>
    </div>
</template>
<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';

    @Component({})
    export default class EmailSentComponent extends Vue {

    }
</script>
<style lang="scss" scoped="scoped">

    .auth-pages {
        .main-card {
            .form-side {
                .email-sent-container {
                    text-align: center;
                    .email-img {
                        display: block;
                        margin: 20px auto;
                    }
                    .email-message {
                        display: inline-block;
                        width: 60%;
                    }
                }
            }
        }
    }

</style>