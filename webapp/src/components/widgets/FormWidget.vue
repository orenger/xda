<template>
    <form class="auth_form">
        <div class="server-error-container">
            {{ serverErrorMessage}}
        </div>
      <slot name="formContent"></slot>
      <button class="button is-full-width" :disabled="errors.any()" @click.prevent="onSubmit()">{{ $t(buttonText)}}</button>
    </form>
</template>

<script lang="ts">
    import {Component, Prop, Inject, Vue, Watch} from 'vue-property-decorator';

    @Component({})

    export default class FormWidget extends Vue {

        @Inject() $validator:any

        @Prop() buttonText!: string;
        @Prop() serverErrorMessage!: string;

        mounted() {
        }

        @Watch('serverErrorMessage')
        onServerErrorChange(newError:string,oldError:string){}

        onSubmit() {
            this.$validator.validateAll().then((result:any) => {
                if (!result) {
                    return;
                }

                this.$emit('submitForm');
            });
        }
    };
</script>

<style lang="scss">

</style>