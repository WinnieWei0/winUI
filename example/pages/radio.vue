<template>
  <div>
    <w-radio v-model="value" label="1">男生</w-radio>
    <w-radio v-model="value" label="2">女生</w-radio>
    <w-radio v-model="value" label="3">
      <img src="../../src/assets/logo.png" alt="">
    </w-radio>
    <w-radio v-model="value" label="4" disabled>nonono</w-radio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "1"
    };
  }
};
</script>

<style scoped>
img {
  width: 50px;
  height: 50px;
}
</style>
