<template>
  <div>
<w-radio>radio</w-radio>
<w-checkbox v-model="a" label='1' @change="handleChange">aaaaaaa</w-checkbox>
<w-checkbox v-model="a" label='2' @change="handleChange">bbbbbbbbb</w-checkbox>
<w-checkbox v-model="a" label='3' @change="handleChange">cccccccccc</w-checkbox>
<w-checkbox disabled>dddddddd</w-checkbox>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: ''
    }
  },
  methods: {
    handleChange(val) {
      console.log(11111111, val)
    }
  }
}
</script>

<style scoped>

</style>
