import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class AboutComponent extends Vue {

  mounted (){
    console.log('hello from app');
  }
  
}

