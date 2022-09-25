<template>
  <div class="c-sidebar" :class="{ 'c-sidebar--collapsed' : collapsed }">
    <div class="c-sidebar__wrapper">
      <div class="c-sidebar__header row align-items-center">
        <div class="c-sidebar__header__collapse col-2">
          <i class='bx bxs-cog'></i>
        </div>
        <div class="c-sidebar__header__title col-10 text-end" v-text="title"></div>
      </div>
      <div class="row c-sidebar__settings mt-3">

        <div class="c-collapsable-group">
          <h4 class="mb-3 d-block c-collapsable-group__button" @click="collapseGroup">
            Network Size <i class="c-collapsable-group__chevron bx bx-chevron-right float-end"></i>
          </h4>

          <div class="c-collapsable-group__container">
            <div class="col-12 mb-3">
              <Range name="width" label="Width" max="1024" min="32" value="416" step="32" />
            </div>

            <div class="col-12 mb-3">
              <Range name="height" label="Height" max="1024" min="32" value="416" step="32" />
            </div>

            <div class="col-12">
              <Range name="classes" label="Number of Classifiers" max="1000" min="1" value="1" step="1" />
            </div>
          </div>
        </div>


        <div class="c-collapsable-group">
          <h4 class="mb-3 d-block c-collapsable-group__button" @click="collapseGroup">
            Configuration <i class="c-collapsable-group__chevron bx bx-chevron-right float-end"></i>
          </h4>

          <div class="c-collapsable-group__container">
            <div class="col-12 mb-3">
              <Range name="batch" label="Batch Size" max="320" min="8" value="64" step="8" />
            </div>

            <div class="col-12 mb-3">
              <Range name="sub_divisions" label="Sub Divisions" max="320" min="8" value="12" step="2" />
            </div>

            <div class="col-12 mb-3">
              <Range name="channels" label="Channels" max="4" min="1" value="3" step="1" />
            </div>

            <div class="col-12 mb-3">
              <Range name="momentum" label="Momentum" max="10" min="0.01" value="0.9" step=0.01 />
            </div>

            <div class="col-12> mb-3">
              <Range name="decay" label="Decay" max="1" min="0.0001" value="0.0001" step=0.0001 />
            </div>

            <div class="col-12 mb-3">
              <Range name="learning_rate" label="Learning Rate" max="1" min="0.00001" value="0.00261" step=0.00001 />
            </div>

            <div class="col-12 mb-3">
              <Range name="burn_in" label="Burn-In" max="10000" min="1" value="1000" step=1 />
            </div>

            <div class="col-12 mb-3">
              <Toggle name="random" label="My Images are Different Resolutions" checked="false" />
            </div>
          </div>
        </div>

        <div class="c-collapsable-group">
          <h4 class="mb-3 d-block c-collapsable-group__button" @click="collapseGroup">
            Augmentation <i class="c-collapsable-group__chevron bx bx-chevron-right float-end"></i>
          </h4>

          <div class="c-collapsable-group__container">
            <div class="col-12 mb-3">
              <Range name="angle" label="Angle" max="5" min="0.01" value="0.05" step=0.01 />
            </div>

            <div class="col-12 mb-3">
              <Range name="saturation" label="Saturation" max="5" min="0.01" value="0.05" step=0.01 />
            </div>

            <div class="col-12 mb-3">
              <Range name="exposure" label="Exposure" max="5" min="0.01" value="0.05" step=0.01 />
            </div>

            <div class="col-12 mb-3">
              <Range name="hue" label="Hue" max="5" min="0.01" value="0.05" step=0.01 />
            </div>

            <div class="col-12 mb-3">
              <Toggle name="mosaic" label="Mosaic" checked="true" />
            </div>

            <div class="col-12">
              <Toggle name="mixup" label="Mix-up" checked="true" />
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

import { reactive, computed } from 'vue';
import Range from "./Range.vue";
import Toggle from "./Toggle.vue";

export default {
  name: 'Sidebar',
  components: {Toggle, Range},
  props: {
    title: {
      type: String,
      required: true,
    },
  },

  data() {
    return {}
  },

  setup(props, { emit }) {
    props = reactive(props);
    return {}
  },

  methods: {
    collapseGroup: function(event) {
      if (event.target.parentNode.classList.contains('active')) {
        event.target.parentNode.classList.remove('active')
      } else {
        event.target.parentNode.classList.add('active')
      }
    }
  }

};
</script>
