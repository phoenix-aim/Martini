<template>
  <div class="form-control position-relative">
    <label for="customRange1" class="form-label text-start d-block" v-html="label"></label>
    <span class="position-absolute" style="right:10px;top:10px" v-html="labelValue"></span>
    <span class="position-absolute" style="left:-15px;top:2px;font-size:24px;cursor:help"
      :title="tooltip">
      <i class='bx bxs-info-circle text-primary'></i>
    </span>
    <input type="range" :name="name" class="form-range js-setting" id="customRange1" @change="update" :max="max" v-model="value" :min="min" :step="step">
  </div>
</template>

<script>

import { reactive, computed } from 'vue';

export default {
  name: 'Range',

  props: {
    label: {
      type: String,
      required: true,
    },
    tooltip: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    step: {
      type: String,
      required: true,
    },
    min: {
      type: String,
      required: true,
    },
    max: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      labelValue: this.value,
      value: this.value,
      update: ((event) => {
          this.labelValue = event.target.value
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
