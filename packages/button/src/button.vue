<template>
  <div>
    <button
    :class="['w-button-'+type,{'w-button-disabled':disabled},{'w-button-circle':circle}]"
    :disabled="disabled"
    @click="handleClick">
    <slot v-if="!loading">
      <span>
        <i :class="icon"></i>
      </span>
      <span>搜索</span>
    </slot>
    <div class="btnLoading" v-if="loading">
      <span>
        <i class="fa fa-spinner fa-spin"></i>
      </span>
      <span>加载中</span>
    </div>
    </button>
  </div>
</template>
<!--
button按钮
  一、样式：
    1、type：背景样式(primary、success、warning、danger)；
    2、circle：圆形按钮(传入为圆形)

  二、属性：
    1、disabled：按钮是否可用(传入为不可用，不传则可用)

  三、事件：
    1、点击事件
 -->
<script>
export default {
  name: "w-button",
  props: {
    type: {
      type: String,
      default: "default"
    },
    disabled: Boolean,
    circle: Boolean,
    icon: String,
    loading: Boolean
  },
  data() {
    return {};
  },
  methods: {
    handleClick() {
      this.$emit("click");
    }
  }
};
</script>

<style scoped>
button {
  /* width: 100%; */
  border: 1px solid #dcdfe6;
  background: none;
  padding: 12px 20px;
  border-radius: 5px;
  font-size: 16px;
  outline: 0;
}
.w-button-default {
  border-color: #dcdfe6;
}
/* 背景色 */
.w-button-primary {
  background-color: rgb(95, 173, 255);
  border-color: rgb(95, 173, 255);
  color: white;
}
.w-button-success {
  background-color: rgb(103, 194, 58);
  border-color: rgb(103, 194, 58);
  color: white;
}
.w-button-warning {
  background-color: rgb(234, 177, 91);
  border-color: rgb(234, 177, 91);
  color: white;
}
.w-button-danger {
  background-color: rgb(245, 108, 108);
  border-color: rgb(245, 108, 108);
  color: white;
}
/* 不可用 */
.w-button-disabled {
  background-color: rgb(144, 147, 153);
  border-color: rgb(144, 147, 153);
  color: white;
}
/* 圆角 */
.w-button-round {
  border-radius: 50px;
}
/* 圆 */
.w-button-circle {
  border-radius: 50%;
}
/* 文字按钮 */
.w-button-text {
  border: none;
  color: rgb(95, 173, 255);
  background-color: none;
}
</style>
