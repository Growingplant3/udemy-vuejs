<template>
  <p v-border:solid.round.shadow="{width: '10px', color: 'brown'}">Home</p>
</template>

<script>
export default {
  data() {
    return {
      temData: 'hello'
    };
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