<template>
    <div class="field is-full-width">
        <label class="label_for" for="inputId" :class="{'is-error': errors.has(inputName)}">{{ $t(title) }}</label>
        <input class="input" :name="inputName" :id="inputId" v-validate="validators" :class="{'is-error': errors.has(inputName)}"
               type="number" :value="inputModel" @input="updateInputModel" @keyup="onKeyup($event)">
        <span v-show="errors.has(inputName)" class="help is-error">{{ errors.first(inputName) }}</span>

    </div>
</template>
<script lang="ts">
    import {Component, Prop, Inject, Vue} from 'vue-property-decorator';

    @Component({})
    export default class NumberFieldWidget extends Vue {

        @Inject() $validator:any

        @Prop() private title!: string;
        @Prop() private inputName!: string;
        @Prop() private isRequired!: boolean;
        @Prop() private initialValue!: number;

        private inputModel: number = 0;
        private inputId: string = "";

        mounted() {
            // const uuidv1 = require('uuid/v1');
            this.inputModel = this.initialValue
            this.inputId = "input" + Math.random()
        }

        get validators(): any {
            return {
                required: this.isRequired
            }
        }

        onKeyup(event: any): void {
        }

        updateInputModel($event: any): void {
            this.inputModel = $event.target.value;
            this.$emit('input', this.inputModel);
        }
    }
</script>

<style scoped lang="scss">

</style>
