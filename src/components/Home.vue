<template>
  <div>
    <p v-border:solid.round.shadow="{width: '10px', color: 'brown'}">Home</p>
    <h2>{{ title | upperCase }}?</h2>
    <h2>{{ upperCaseTitle }}</h2>
    <p>{{ subTitle | upperCase | lowerCase }}</p>
    <p>{{ subTitle | lowerCase | upperCase }}</p>
    <p>{{ number }}</p>
    <button @click='number++'>+1!?</button>
    <hr>
    <CountNumber></CountNumber>
    <hr>
  </div>
</template>

<script>
import CountNumber from './CountNumber.vue';
import { tokyoNumber } from '@/tokyoNumber';

export default {
  mixins: [tokyoNumber],
  data() {
    return {
      temData: 'hello',
    };
  },
  components: {
    CountNumber
  },
  directives: { 
    border(el, binding) {
      // ディレクティブにはthisは使えない
      // this.temData = 'goodbye';
      el.style.borderWidth = binding.value.width; // valueはオブジェクトを取得
      el.style.borderColor = binding.value.color; // valueはオブジェクトを取得
      el.style.borderStyle = binding.arg; // argは引数を取得
      if (binding.modifiers.round) { // modifiersは引数の後ろにある文字列を確認 boolを返す
        el.style.borderRadius = '1rem';
      }
      if (binding.modifiers.shadow) { // modifiersは引数の後ろにある文字列を確認 boolを返す
        el.style.boxShadow = '5px 5px 5px rgba(0, 0, 0, 0.46)';
      }
    }
  }
};
</script>