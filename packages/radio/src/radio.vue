<template>
	<div>
		<div class="w-radio-item">
			<input type="radio" class="w-radio" :disabled="disabled" v-model="value" :value="label" :name='name'>
			<span :class="['w-radioInput',{'w-radio-disabled':disabled}]"></span>
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
  name: 'w-radio',
  data() {
    return {
      emitVal: ''
    }
  },
  model: {
    prop: 'modeVal',
    event: 'change'
  },
  props: {
    name: {
      type: String,
      default: 'a'
    },
    modeVal: String,
    label: String,
    disabled: Boolean
  },
  computed: {
    value: {
      get() {
        return this.modeVal
      },
      set(val) {
        this.$emit('change', val)
      }
    }
  }
}
</script>

<style scoped>
.w-radio-item{
	position: relative;
}
/* 初始样式 */
.w-radio{
	opacity: 0;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 50%;
	left:50%;
	transform: translate(-50%,-50%);
}
.w-radioInput{
	width: 15px;
	height: 15px;
	display: inline-block;
	border-radius: 50%;
	vertical-align: middle;
	margin: 5px;
	position: relative;
  border: 2px solid rgb(64, 158, 255);
}
.w-radioInput::after{
	content: '';
	width: 10px;
	height: 10px;
	display: inline-block;
	border-radius: 50%;
	vertical-align: middle;
	margin: 5px;
	position: absolute;
	top: 50%;
	left:50%;
	transform: translate(-50%,-50%);
	margin: 0;
}
/* 选中样式 */
.w-radio:checked+.w-radioInput{
	/* border: 2px solid rgb(64, 158, 255); */
}
.w-radio:checked+.w-radioInput::after{
	background-color: rgb(64, 158, 255);
}
/* 不可选样式 */
.w-radio-disabled{
	border: 2px solid #ccc;
}
</style>
