<template>
  <input :class="classes" :type="type" @change="onChange" :placeholder="placeholder" :value="value"/>
</template>

<script>
import './textfield.css';
import { reactive, computed } from 'vue';

export default {
  name: 'TextField',

  props: {
    type: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
  },

  emits: ['change'],

  setup(props, { emit }) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        'storybook-text-field': true,
        [`storybook-text-field--${props.size || 'medium'}`]: true,
      })),
      style: computed(() => ({})),
      onChange() {
        emit('change');
      }
    }
  },
};
</script>
