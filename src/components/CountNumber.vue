<template>
  <div>
    <h2>{{ title | upperCase }}?</h2>
    <h2>{{ upperCaseTitle }}</h2>
    <p>{{ subTitle | upperCase | lowerCase }}</p>
    <p>{{ subTitle | lowerCase | upperCase }}</p>
    <p>{{ number }}</p>
    <button @click='number++'>+1!?</button>
  </div>
</template>

<script>
import { tokyoNumber } from '@/tokyoNumber';

export default {
  mixins: [tokyoNumber],
  created() {
    console.log('created in component');
  }
};
</script>