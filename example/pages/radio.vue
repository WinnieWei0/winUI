<template>
  <div>
<!-- <w-radio :value="value" label="1" @change="handleChange">男生</w-radio>
<w-radio :value="value" label="2" @change="handleChange">女生</w-radio>
<w-radio :value="value" label="3" @change="handleChange">
  <img src="../../src/assets/logo.png" alt="">
</w-radio> -->

<w-radio v-model="value" label="1" @change="handleChange">男生</w-radio>
<w-radio v-model="value" label="2" @change="handleChange">女生</w-radio>
<w-radio v-model="value" label="3" @change="handleChange">
  <img src="../../src/assets/logo.png" alt="">
</w-radio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '1'
    }
  },
  methods: {
    handleChange(val) {
      console.log(333, val, this.value)
    }
  }
};
</script>

<style scoped>
img{
  width: 50px;
  height: 50px;
}
</style>
