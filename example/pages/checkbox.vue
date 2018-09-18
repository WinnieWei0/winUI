<template>
  <div>
<w-radio>radio</w-radio>
<w-checkbox v-model="value" label='1' @change="handleChange">aaaaaaa</w-checkbox>
<w-checkbox v-model="value" label='2' @change="handleChange">bbbbbbbbb</w-checkbox>
<w-checkbox v-model="value" label='3' @change="handleChange">cccccccccc</w-checkbox>
<w-checkbox disabled>dddddddd</w-checkbox>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ''
    }
  },
  methods: {
    handleChange(val) {
      console.log(val)
    }
  }
}
</script>

<style scoped>

</style>
