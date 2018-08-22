<template>
  <div>
    <button
    :class="['w-button-'+type,{'w-button-disabled':disabled},{'w-button-circle':circle}]"
    :disabled="disabled"
    @click="handleClick"></button>
  </div>
</template>

<script>
export default {
  name: 'w-button',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    disabled: Boolean,
    circle: Boolean,
    icon: String
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    handleClick() {
      this.count++
      alert(this.count)
    }
  }
}
</script>

<style scoped>
button{
  width: 100%;
  border: 1px solid #dcdfe6;
  background: none;
  padding: 12px 20px;
  border-radius: 5px;
  font-size: 16px;
  outline: 0;
}
.w-button-default{
  border-color: #dcdfe6;
}
/* 背景色 */
.w-button-primary{
background-color: rgb(95, 173, 255);
border-color: rgb(95, 173, 255);
color: white;
}
.w-button-success{
background-color: rgb(103, 194, 58);
border-color: rgb(103, 194, 58);
color: white;
}
.w-button-warning{
background-color: rgb(234, 177, 91);
border-color: rgb(234, 177, 91);
color: white;
}
.w-button-danger{
background-color: rgb(245, 108, 108);
border-color: rgb(245, 108, 108);
color: white;
}
/* 不可用 */
.w-button-disabled{
background-color: rgb(144, 147, 153);
border-color: rgb(144, 147, 153);
color: white;
}
/* 圆角 */
.w-button-round{
border-radius: 50px;
}
/* 圆 */
.w-button-circle{
  border-radius: 50%;
}
</style>
