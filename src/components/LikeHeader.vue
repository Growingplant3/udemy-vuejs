<template>
  <div>
    <p>タイトル</p>
    <slot v-bind:user='user' text='text'></slot>
    <hr>
    <slot></slot>
    <hr>
    <p>いいね数</p>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: {
          firstName: 'Jack',
          lastName: 'Donald',
        }
      }
    }
  }
</script>

<style scoped>
  h1 {
    color: red;
  }
</style>