<template>
  <div>
<ul>
  <li v-for="item in 5" :key="item">这是{{item}}号</li>
</ul>
  </div>
</template>

<script>
export default {
  name: 'w-radio-group'
}
</script>

<style scoped>

</style>
