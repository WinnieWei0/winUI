<template>
  <div class="example">
    <div class="btnDetaul">
      <w-button>button</w-button>
    </div>
    <div class="btnDetaul">
      <w-button type="primary"></w-button>
    </div>
    <div class="btnDetaul">
      <w-button type="success" icon='fa fa-camera-retro'></w-button>
    </div>
    <div class="btnDetaul">
      <w-button type="warning">button</w-button>
    </div>
    <div class="btnDetaul">
      <w-button type="danger" @click="handleClick">button</w-button>
    </div>
    <div class="btnDetaul">
      <w-button disabled @click="handleClick">button</w-button>
    </div>
    <div class="btnDetaul">
      <w-button type="default" circle>button</w-button>
    </div>
    <div class="btnDetaul">
      <w-button type="text" circle>button</w-button>
    </div>
    <div class="btnDetaul">
      <w-button type="primary" circle><i class="fa fa-camera-retro"></i></w-button>
    </div>
    <div class="btnDetaul">
      <w-button type="primary" :loading="loading" @click="handleLoading">点击</w-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      loading: false
    };
  },
  methods: {
    handleClick() {
      alert(this.loading)
    },
    handleLoading() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btnDetaul {
  /* width: 100%; */
}
</style>
