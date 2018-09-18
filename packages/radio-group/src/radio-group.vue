<template>
  <div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'w-radio-group',
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
</style>
