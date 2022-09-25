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
              <Range name="width" tooltip="Network size (width), so every image will be resized to the network size during Training and Detection" label="Width" max="1024" min="32" value="416" step="32" />
            </div>

            <div class="col-12 mb-3">
              <Range name="height" tooltip="Network size (height), so every image will be resized to the network size during Training and Detection" label="Height" max="1024" min="32" value="416" step="32" />
            </div>

            <div class="col-12">
              <Range name="classes" tooltip="The number of labeled classifiers in your image set." label="Number of Classifiers" max="1000" min="1" value="1" step="1" />
            </div>
          </div>
        </div>


        <div class="c-collapsable-group">
          <h4 class="mb-3 d-block c-collapsable-group__button" @click="collapseGroup">
            Configuration <i class="c-collapsable-group__chevron bx bx-chevron-right float-end"></i>
          </h4>

          <div class="c-collapsable-group__container">
            <div class="col-12 mb-3">
              <Range name="batch" tooltip="The number of samples (images, letters, ...) which will be processed in one batch." label="Batch Size" max="320" min="8" value="64" step="8" />
            </div>

            <div class="col-12 mb-3">
              <Range name="sub_divisions" tooltip="The number of mini_batches in one batch, size mini_batch = batch/subdivisions, so GPU processes." label="Sub Divisions" max="320" min="8" value="12" step="2" />
            </div>

            <div class="col-12 mb-3">
              <Range name="channels" tooltip="The network size (channels), so every image will be converted to this number of channels during Training and Detection." label="Channels" max="4" min="1" value="3" step="1" />
            </div>

            <div class="col-12 mb-3">
              <Range name="momentum" tooltip="Accumulation of movement, how much the history affects the further change of weights (optimizer)." label="Momentum" max="10" min="0.01" value="0.9" step=0.01 />
            </div>

            <div class="col-12> mb-3">
              <Range name="decay" tooltip="A weaker updating of the weights for typical features, it eliminates unbalance in the dataset (optimizer)." label="Decay" max="1" min="0.0001" value="0.0001" step=0.0001 />
            </div>

            <div class="col-12 mb-3">
              <Range name="learning_rate" tooltip="The initial learning rate for training." label="Learning Rate" max="1" min="0.00001" value="0.00261" step=0.00001 />
            </div>

            <div class="col-12 mb-3">
              <Range name="burn_in" tooltip="The initial burn_in will be processed for the first 1000 iterations." label="Burn-In" max="10000" min="1" value="1000" step=1 />
            </div>

            <div class="col-12">
              <Toggle name="random" tooltip="" label="My Images are Different Resolutions" checked="false" />
            </div>
          </div>
        </div>

        <div class="c-collapsable-group">
          <h4 class="mb-3 d-block c-collapsable-group__button" @click="collapseGroup">
            Augmentation <i class="c-collapsable-group__chevron bx bx-chevron-right float-end"></i>
          </h4>

          <div class="c-collapsable-group__container">
            <div class="col-12 mb-3">
              <Range name="angle" tooltip="Randomly rotates images during training (classification only)." label="Angle" max="5" min="0.01" value="0.05" step=0.01 />
            </div>

            <div class="col-12 mb-3">
              <Range name="saturation" tooltip="Randomly changes saturation of images during training." label="Saturation" max="5" min="0.01" value="0.05" step=0.01 />
            </div>

            <div class="col-12 mb-3">
              <Range name="exposure" tooltip="Randomly changes exposure (brightness) during training." label="Exposure" max="5" min="0.01" value="0.05" step=0.01 />
            </div>

            <div class="col-12 mb-3">
              <Range name="hue" tooltip="Randomly changes hue (color) during training." label="Hue" max="5" min="0.01" value="0.05" step=0.01 />
            </div>

            <div class="col-12 mb-3">
              <Toggle name="mosaic" tooltip="Use Mosaic data augmentation (4 images in one)." label="Mosaic" checked="true" />
            </div>

            <div class="col-12 mb-3">
              <Toggle name="mixup" tooltip="Randomly overlay images at 50% opacity." label="Mix-up" checked="true" />
            </div>

            <div class="col-12">
              <Toggle name="blur" tooltip="Blur will be applied randomly." label="Blur" checked="false" />
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
