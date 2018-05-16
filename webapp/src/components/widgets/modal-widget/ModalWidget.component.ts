import Vue from 'vue';
import Component from 'vue-class-component';
import {Prop} from 'vue-property-decorator';

@Component({})
export default class ModalWidgetComponent extends Vue {
    @Prop() private msgHeader!:string;
    @Prop() private msgBody!:string;

    mounted() {
    }
}

