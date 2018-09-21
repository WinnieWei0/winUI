<template>
  <div>
    <div class="w-checkbox-item">
      <input type="checkbox" class="w-checkbox" :disabled="disabled" v-model="value" :value="label" :name='name'>
      <span :class="['w-checkboxInput',{'w-checkbox-disabled':disabled}]"></span>
      <slot></slot>
    </div>
  </div>
</template>
<!--
  chechbox多选框：
    一、属性：
      1、disabled：是否可用
    二、事件：
      1、change：一个参数：当前值
-->
<script>
export default {
  name: 'w-checkbox',
  model: {
    prop: 'modeVal',
    event: 'change'
  },
  props: {
    name: {
      type: String,
      default: 'a'
    },
    modeVal: Boolean,
    label: String,
    disabled: Boolean
  },
  computed: {
    value: {
      get() {
        return this.modeVal
      },
      set(val, pro) {
        this.$emit('change', val)
      }
    }
  }
}
</script>

<style scoped>
.w-checkbox-item {
  position: relative;
}
/* 初始样式 */
.w-checkbox {
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.w-checkboxInput {
  width: 15px;
  height: 15px;
  display: inline-block;
  border-radius: 2px;
  vertical-align: middle;
  margin: 5px;
  position: relative;
  border: 2px solid rgb(64, 158, 255);
}
.w-checkboxInput::after {
  content: '';
  width: 10px;
  height: 10px;
  display: inline-block;
  vertical-align: middle;
  margin: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
}
/* 选中样式 */
.w-checkbox:checked + .w-checkboxInput {
  /* border: 2px solid rgb(64, 158, 255); */
}
.w-checkbox:checked + .w-checkboxInput::after {
  background-color: rgb(64, 158, 255);
}
/* 不可选样式 */
.w-checkbox-disabled {
  border: 2px solid #ccc;
}
</style>
