<template>
  <div>
    <LikeHeader>
      <h3>初めまして</h3>
    </LikeHeader>

    <LikeNumber v-bind:totalNumber='number' @my-click='incrementNumber'></LikeNumber>
    <LikeNumber :total-number='number' test-props='test'></LikeNumber>

    <button @click="currentComponent = 'Home'">Homeになる</button>
    <button @click="currentComponent = 'About'">Aboutになる</button>

    <keep-alive>
      <component v-bind:is="currentComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import LikeHeader from './components/LikeHeader.vue'; 
import About from './components/About.vue';
import Home from './components/Home.vue'; 

export default {
  data() {
    return {
      number: 100,
      currentComponent: 'Home'
    };
  },
  components: {
    LikeHeader,
    About,
    Home
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