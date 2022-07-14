import Vue from "vue";

const mixin_v_model = Vue.extend({
  props: {
    value: {
      required: true
    },
  },
  data() {
    return {
      local_value: this.value,
    }
  },
  watch: {
    local_value(local_value) {
      this.$emit('input', local_value)
    },
    value(value) {
      this.local_value = value
    }
  }
})

export default mixin_v_model