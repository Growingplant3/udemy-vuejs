<template>
  <div>
    <p>いいねの半分({{ halfNumber }})</p>
    <button @click='increment'>+1</button>
  </div>
</template>

<script>
export default {
  props: {
    totalNumber: {
      type: Number,
      default: 1000
    },
    testProps: {
      type: String
    }
  },
  computed: {
    halfNumber() {
      return this.totalNumber / 2;
    }
  },
  methods: {
    increment() {
      this.$emit('my-click', this.totalNumber + 1);
    }
  }
};
</script>