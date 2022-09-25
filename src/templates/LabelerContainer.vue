<template>
  <div class="row">
    <div class="col-sm-6 col-md-8 col-xl-9 col-xxl-10 p-0">
      <Config />
    </div>
    <div class="col-sm-6 col-md-4 col-xl-3 col-xxl-2 p-0">
      <Sidebar title="Settings"/>
    </div>
  </div>
</template>

<script>

import { reactive, computed } from 'vue';
import Sidebar from "./Sidebar.vue";
import Config from "./Config.vue";

export default {
  name: 'LabelerContainer',
  components: {Config, Sidebar},

  props: {},

  // emits: ['click'],

  setup(props, { emit }) {
    props = reactive(props);
    return {}
  },
};
</script>
