<template>
  <div class="form-check form-switch">
    <input class="form-check-input js-setting" type="checkbox" id="mySwitch" :name="name" :checked="checked === 'true'">
    <label class="form-check-label" for="mySwitch" v-html="label"></label>
  </div>
</template>

<script>

import { reactive, computed } from 'vue';

export default {
  name: 'Toggle',

  props: {
    label: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    checked: {
      type: String,
      required: false,
    },
  },

  data() {
    return {
      value: this.value,
      update: ((event) => {
          this.value = event.target.value
      })
    }
  },

  setup(props, { emit }) {
    props = reactive(props);
    return {}
  },

  methods: {}
};
</script>
