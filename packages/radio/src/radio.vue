<template>
	<div>
		<!-- <div class="w-radio-item">
			<input type="radio" class="w-radio" :checked="checkVal" :value="label" :name='name' @input="handleChange($event.target.value)">
			<span class="w-radioInput"></span>{{label}}
			<slot></slot>
		</div> -->
		<div class="w-radio-item">
			<input type="radio" class="w-radio" v-model="value" :value="label" :name='name' @change="handleChange">
			<span class="w-radioInput"></span>{{label}}
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
    // value: {
    //   type: String,
    //   default: ''
    // },
    // 'v-model': String,
    label: String
  },
  computed: {
    value: {
      get() {
        // console.log(444, val)
        return this.modeVal
      },
      set(val) {
        console.log(222, val, this.value, this.modeVal)
        // this.value = val
        // this.modeVal = val
        // this.emitVal = val
        this.$emit('input', val)
      }
    }
    // value() {
    //   this.$emit('change', this.value)
    // }
  },
  methods: {
    handleChange() {
      console.log(111, this.value, this.modeVal)
      // this.$emit('change', val)
      this.$emit('change', this.value)
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
	border: 2px solid #ccc;
	border-radius: 50%;
	vertical-align: middle;
	margin: 5px;
	position: relative;
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
	border: 2px solid rgb(64, 158, 255);
}
.w-radio:checked+.w-radioInput::after{
	background-color: rgb(64, 158, 255);
}
</style>
