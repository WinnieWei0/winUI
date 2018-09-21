<template>
  <div>
<w-radio>radio</w-radio>
<w-checkbox v-model="a" label='1'>aaaaaaa</w-checkbox>
<w-checkbox v-model="a" label='2'>bbbbbbbbb</w-checkbox>
<w-checkbox v-model="a" label='3'>cccccccccc</w-checkbox>
<w-checkbox disabled>dddddddd</w-checkbox>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: ''
    }
  }
}
</script>

<style scoped>

</style>
