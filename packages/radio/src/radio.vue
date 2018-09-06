<template>
	<div>
		<div class="w-radio-item">
			<input type="radio" class="w-radio" :name='name'>
			<span class="w-radioInput"></span>
			<slot></slot>
		</div>
		<!-- <div class="w-radio-item">
			<input type="radio" class="w-radio" name="a">
			<span class="w-radioInput"></span>女生
		</div> -->
	</div>
</template>

<script>
export default {
  name: 'w-radio',
  props: {
    name: String
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
