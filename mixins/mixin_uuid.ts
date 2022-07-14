import Vue from "vue";

const mixin_uuid = Vue.extend({
  data() {
    return {
      uuid: this.$uuid.v1()
    }
  },
})

export default mixin_uuid