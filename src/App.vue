<template>
  <div>
    <LikeHeader v-slot='slotProps'>
      <p>{{ slotProps }}</p>
      <h2>皆さん</h2>
      <h3>初めまして</h3>
      <h4>さようなら</h4>
    </LikeHeader>

    <LikeNumber v-bind:totalNumber='number' @my-click='incrementNumber'></LikeNumber>
    <LikeNumber :total-number='number' test-props='test'></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from './components/LikeHeader.vue';

export default {
  data() {
    return {
      number: 100
    };
  },
  components: {
    LikeHeader
  },
  methods: {
    incrementNumber(value) {
      this.number = value
    }
  }
};
</script>

<style scoped>
  div {
    border: 2px solid blue;
  }
</style>