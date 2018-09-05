<template>
	<div>
		<div class="w-radio-item">
			<input type="radio" class="w-radio">
			<span class="w-radioInput"></span>男生
		</div>
	</div>
</template>

<script>
export default {
  name: 'w-radio'
}
</script>

<style scoped>
.w-radio{
	display: none;
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
	/* border: 2px solid blue; */
	background-color: blue;
	border-radius: 50%;
	vertical-align: middle;
	margin: 5px;
	position: absolute;
	top: 50%;
	left:50%;
	transform: translate(-50%,-50%);
}
/* .w-radio:checked+.w-radioInput{
	width: 10px;
	height: 10px;
	background-color: blue;
} */
</style>
