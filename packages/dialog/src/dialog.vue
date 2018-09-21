<template>
  <div>
    <div class="w-dialog-mask">
      <div class="w-dialog">
        <img src="../../../src/assets/logo.png" alt="">
        <div class="w-btnClose">
          <span class="fa fa-times"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'w-dialog'
}
</script>

<style scoped>
#app>div>div{
  height: 100%;
}
.w-dialog-mask{
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0, 0.1);
  position: fixed;
  top: 0;
}
.w-dialog{
  width: 80%;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
img{
  width: 100%;
}
.w-btnClose{
  height: 40px;
}
</style>
