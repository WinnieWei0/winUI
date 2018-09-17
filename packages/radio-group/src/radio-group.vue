<template>
  <div>
    <ul>
      <li v-for="item in 5" :key="item">
        这是0{{item}}
      </li>
    </ul>
        <slot name="aa">CCCCCCCCC</slot>
  </div>
</template>

<script>
export default {
  name: "w-radio-group"
};
</script>

<style scoped>
</style>
