<template>
  <div class="c-config">
    <div class="row">
      <div class="col-8">
        <h3 class="fw-bolder mb-3"><i class='bx bxs-drink'></i> MARTINI <span style="font-size:12px;">(YOLO Configurator)</span></h3>
      </div>
      <div class="col-4">
        <select class="from-select w-100 form-control-sm" v-model="activeTemplate">
          <option value="yolov4-tiny">YOLO v4 Tiny</option>
          <option value="yolov7-tiny">YOLO v7 Tiny</option>
        </select>
      </div>
      <div class="col-12">
        <textarea v-bind:value="content" @keydown="parseTemplate" readonly></textarea>
      </div>
    </div>
  </div>
</template>

<script>

import { reactive, computed } from 'vue';

export default {
  name: 'Config',

  props: {},

  data() {
    return {
      content: '',
      activeTemplate: 'yolov4-tiny',
      templates: {
        'yolov4-tiny' : `[net]
batch=[batch]
subdivisions=[sub_divisions]
width=[width]
height=[height]
channels=[channels]
momentum=[momentum]
decay=[decay]

angle=[angle]
saturation=[saturation]
exposure=[exposure]
hue=[hue]
blur=[blur]
mosaic=[mosaic]
mixup=[mixup]
learning_rate=[learning_rate]
burn_in=[burn_in]
max_batches=[max_batches_calced]
policy=steps
steps=[steps]
scales=[scales]

[convolutional]
batch_normalize=1
filters=32
size=3
stride=2
pad=1
activation=leaky

[convolutional]
batch_normalize=1
filters=64
size=3
stride=2
pad=1
activation=leaky

[convolutional]
batch_normalize=1
filters=64
size=3
stride=1
pad=1
activation=leaky

[route]
layers=-1
groups=2
group_id=1

[convolutional]
batch_normalize=1
filters=32
size=3
stride=1
pad=1
activation=leaky

[convolutional]
batch_normalize=1
filters=32
size=3
stride=1
pad=1
activation=leaky

[route]
layers = -1,-2

[convolutional]
batch_normalize=1
filters=64
size=1
stride=1
pad=1
activation=leaky

[route]
layers = -6,-1

[maxpool]
size=2
stride=2

[convolutional]
batch_normalize=1
filters=128
size=3
stride=1
pad=1
activation=leaky

[route]
layers=-1
groups=2
group_id=1

[convolutional]
batch_normalize=1
filters=64
size=3
stride=1
pad=1
activation=leaky

[convolutional]
batch_normalize=1
filters=64
size=3
stride=1
pad=1
activation=leaky

[route]
layers = -1,-2

[convolutional]
batch_normalize=1
filters=128
size=1
stride=1
pad=1
activation=leaky

[route]
layers = -6,-1

[maxpool]
size=2
stride=2

[convolutional]
batch_normalize=1
filters=256
size=3
stride=1
pad=1
activation=leaky

[route]
layers=-1
groups=2
group_id=1

[convolutional]
batch_normalize=1
filters=128
size=3
stride=1
pad=1
activation=leaky

[convolutional]
batch_normalize=1
filters=128
size=3
stride=1
pad=1
activation=leaky

[route]
layers = -1,-2

[convolutional]
batch_normalize=1
filters=256
size=1
stride=1
pad=1
activation=leaky

[route]
layers = -6,-1

[maxpool]
size=2
stride=2

[convolutional]
batch_normalize=1
filters=512
size=3
stride=1
pad=1
activation=leaky

##################################

[convolutional]
batch_normalize=1
filters=256
size=1
stride=1
pad=1
activation=leaky

[convolutional]
batch_normalize=1
filters=512
size=3
stride=1
pad=1
activation=leaky

[convolutional]
size=1
stride=1
pad=1
filters=[filters]
activation=linear



[yolo]
mask = 3,4,5
anchors = 10,14,  23,27,  37,58,  81,82,  135,169,  344,319
classes=[classes]
num=6
jitter=.3
scale_x_y = 1.05
cls_normalizer=1.0
iou_normalizer=0.07
iou_loss=ciou
ignore_thresh = .7
truth_thresh = 1
random=[random]
resize=1.5
nms_kind=greedynms
beta_nms=0.6

[route]
layers = -4

[convolutional]
batch_normalize=1
filters=128
size=1
stride=1
pad=1
activation=leaky

[upsample]
stride=2

[route]
layers = -1, 23

[convolutional]
batch_normalize=1
filters=256
size=3
stride=1
pad=1
activation=leaky

[convolutional]
size=1
stride=1
pad=1
filters=[filters]
activation=linear

[yolo]
mask = 0,1,2
anchors = 10,14,  23,27,  37,58,  81,82,  135,169,  344,319
classes=[classes]
num=6
jitter=.3
scale_x_y = 1.05
cls_normalizer=1.0
iou_normalizer=0.07
iou_loss=ciou
ignore_thresh = .7
truth_thresh = 1
random=[random]
resize=1.5
nms_kind=greedynms
beta_nms=0.6
        `,
        'yolov7-tiny' : `[net]
batch=[batch]
subdivisions=[sub_divisions]
width=[width]
height=[height]
channels=[channels]
momentum=[momentum]
decay=[decay]

angle=[angle]
saturation=[saturation]
exposure=[exposure]
hue=[hue]
blur=[blur]
mosaic=[mosaic]
mixup=[mixup]
learning_rate=[learning_rate]
burn_in=[burn_in]
max_batches=[max_batches_calced]
policy=steps
steps=[steps]
scales=[scales]

# 0
[convolutional]
batch_normalize=1
filters=32
size=3
stride=2
pad=1
activation=leaky

# 1
[convolutional]
batch_normalize=1
filters=64
size=3
stride=2
pad=1
activation=leaky

[convolutional]
batch_normalize=1
filters=32
size=1
stride=1
pad=1
activation=leaky

[route]
layers=-2

[convolutional]
batch_normalize=1
filters=32
size=1
stride=1
pad=1
activation=leaky

[convolutional]
batch_normalize=1
filters=32
size=3
stride=1
pad=1
activation=leaky

[convolutional]
batch_normalize=1
filters=32
size=3
stride=1
pad=1
activation=leaky

[route]
layers = -5,-3,-2,-1

# 8
[convolutional]
batch_normalize=1
filters=64
size=1
stride=1
pad=1
activation=leaky

[maxpool]
size=2
stride=2

[convolutional]
batch_normalize=1
filters=64
size=1
stride=1
pad=1
activation=leaky

[route]
layers=-2

[convolutional]
batch_normalize=1
filters=64
size=1
stride=1
pad=1
activation=leaky

[convolutional]
batch_normalize=1
filters=64
size=3
stride=1
pad=1
activation=leaky

[convolutional]
batch_normalize=1
filters=64
size=3
stride=1
pad=1
activation=leaky

[route]
layers = -5,-3,-2,-1

# 16
[convolutional]
batch_normalize=1
filters=128
size=1
stride=1
pad=1
activation=leaky

[maxpool]
size=2
stride=2

[convolutional]
batch_normalize=1
filters=128
size=1
stride=1
pad=1
activation=leaky

[route]
layers=-2

[convolutional]
batch_normalize=1
filters=128
size=1
stride=1
pad=1
activation=leaky

[convolutional]
batch_normalize=1
filters=128
size=3
stride=1
pad=1
activation=leaky

[convolutional]
batch_normalize=1
filters=128
size=3
stride=1
pad=1
activation=leaky

[route]
layers = -5,-3,-2,-1

# 24
[convolutional]
batch_normalize=1
filters=256
size=1
stride=1
pad=1
activation=leaky

[maxpool]
size=2
stride=2

[convolutional]
batch_normalize=1
filters=256
size=1
stride=1
pad=1
activation=leaky

[route]
layers=-2

[convolutional]
batch_normalize=1
filters=256
size=1
stride=1
pad=1
activation=leaky

[convolutional]
batch_normalize=1
filters=256
size=3
stride=1
pad=1
activation=leaky

[convolutional]
batch_normalize=1
filters=256
size=3
stride=1
pad=1
activation=leaky

[route]
layers = -5,-3,-2,-1

# 32
[convolutional]
batch_normalize=1
filters=512
size=1
stride=1
pad=1
activation=leaky


##################################

### SPPCSP ###
[convolutional]
batch_normalize=1
filters=256
size=1
stride=1
pad=1
activation=leaky

[route]
layers = -2

[convolutional]
batch_normalize=1
filters=256
size=1
stride=1
pad=1
activation=leaky

### SPP ###
[maxpool]
stride=1
size=5

[route]
layers=-2

[maxpool]
stride=1
size=9

[route]
layers=-4

[maxpool]
stride=1
size=13

[route]
layers=-1,-3,-5,-6
### End SPP ###

[convolutional]
batch_normalize=1
filters=256
size=1
stride=1
pad=1
activation=leaky

[route]
layers = -10,-1

# 44
[convolutional]
batch_normalize=1
filters=256
size=1
stride=1
pad=1
activation=leaky
### End SPPCSP ###

[convolutional]
batch_normalize=1
filters=128
size=1
stride=1
pad=1
activation=leaky

[upsample]
stride=2

[route]
layers = 24

[convolutional]
batch_normalize=1
filters=128
size=1
stride=1
pad=1
activation=leaky

[route]
layers = -1,-3

[convolutional]
batch_normalize=1
filters=64
size=1
stride=1
pad=1
activation=leaky

[route]
layers=-2

[convolutional]
batch_normalize=1
filters=64
size=1
stride=1
pad=1
activation=leaky

[convolutional]
batch_normalize=1
filters=64
size=3
stride=1
pad=1
activation=leaky

[convolutional]
batch_normalize=1
filters=64
size=3
stride=1
pad=1
activation=leaky

[route]
layers = -5,-3,-2,-1

# 56
[convolutional]
batch_normalize=1
filters=128
size=1
stride=1
pad=1
activation=leaky

[convolutional]
batch_normalize=1
filters=64
size=1
stride=1
pad=1
activation=leaky

[upsample]
stride=2

[route]
layers = 16

[convolutional]
batch_normalize=1
filters=64
size=1
stride=1
pad=1
activation=leaky

[route]
layers = -1,-3

[convolutional]
batch_normalize=1
filters=32
size=1
stride=1
pad=1
activation=leaky

[route]
layers=-2

[convolutional]
batch_normalize=1
filters=32
size=1
stride=1
pad=1
activation=leaky

[convolutional]
batch_normalize=1
filters=32
size=3
stride=1
pad=1
activation=leaky

[convolutional]
batch_normalize=1
filters=32
size=3
stride=1
pad=1
activation=leaky

[route]
layers = -5,-3,-2,-1

# 68
[convolutional]
batch_normalize=1
filters=64
size=1
stride=1
pad=1
activation=leaky

##########################

[convolutional]
batch_normalize=1
size=3
stride=2
pad=1
filters=128
activation=leaky

[route]
layers = -1,56

[convolutional]
batch_normalize=1
filters=64
size=1
stride=1
pad=1
activation=leaky

[route]
layers=-2

[convolutional]
batch_normalize=1
filters=64
size=1
stride=1
pad=1
activation=leaky

[convolutional]
batch_normalize=1
filters=64
size=3
stride=1
pad=1
activation=leaky

[convolutional]
batch_normalize=1
filters=64
size=3
stride=1
pad=1
activation=leaky

[route]
layers = -5,-3,-2,-1

# 77
[convolutional]
batch_normalize=1
filters=128
size=1
stride=1
pad=1
activation=leaky

[convolutional]
batch_normalize=1
size=3
stride=2
pad=1
filters=256
activation=leaky

[route]
layers = -1,44

[convolutional]
batch_normalize=1
filters=128
size=1
stride=1
pad=1
activation=leaky

[route]
layers=-2

[convolutional]
batch_normalize=1
filters=128
size=1
stride=1
pad=1
activation=leaky

[convolutional]
batch_normalize=1
filters=128
size=3
stride=1
pad=1
activation=leaky

[convolutional]
batch_normalize=1
filters=128
size=3
stride=1
pad=1
activation=leaky

[route]
layers = -5,-3,-2,-1

# 86
[convolutional]
batch_normalize=1
filters=256
size=1
stride=1
pad=1
activation=leaky

#############################

# ============ End of Neck ============ #

# ============ Head ============ #


# P3
[route]
layers = 68

[convolutional]
batch_normalize=1
size=3
stride=1
pad=1
filters=128
activation=leaky

[convolutional]
size=1
stride=1
pad=1
filters=[filters]
#activation=linear
activation=logistic

[yolo]
mask = 0,1,2
anchors = 10,13, 16,30, 33,23, 30,61, 62,45, 59,119, 116,90, 156,198, 373,326
classes=[classes]
num=9
jitter=.1
scale_x_y = 2.0
objectness_smooth=1
ignore_thresh = .7
truth_thresh = 1
#random=1
resize=1.5
iou_thresh=0.2
iou_normalizer=0.05
cls_normalizer=0.5
obj_normalizer=1.0
iou_loss=ciou
nms_kind=diounms
beta_nms=0.6
new_coords=1
max_delta=2


# P4
[route]
layers = 77

[convolutional]
batch_normalize=1
size=3
stride=1
pad=1
filters=256
activation=leaky

[convolutional]
size=1
stride=1
pad=1
filters=[filters]
#activation=linear
activation=logistic

[yolo]
mask = 3,4,5
anchors = 10,13, 16,30, 33,23, 30,61, 62,45, 59,119, 116,90, 156,198, 373,326
classes=[classes]
num=9
jitter=.1
scale_x_y = 2.0
objectness_smooth=1
ignore_thresh = .7
truth_thresh = 1
#random=1
resize=1.5
iou_thresh=0.2
iou_normalizer=0.05
cls_normalizer=0.5
obj_normalizer=1.0
iou_loss=ciou
nms_kind=diounms
beta_nms=0.6
new_coords=1
max_delta=2


# P5
[route]
layers = 86

[convolutional]
batch_normalize=1
size=3
stride=1
pad=1
filters=512
activation=leaky

[convolutional]
size=1
stride=1
pad=1
filters=[filters]
#activation=linear
activation=logistic

[yolo]
mask = 6,7,8
anchors = 10,13, 16,30, 33,23, 30,61, 62,45, 59,119, 116,90, 156,198, 373,326
classes=[classes]
num=9
jitter=.1
scale_x_y = 2.0
objectness_smooth=1
ignore_thresh = .7
truth_thresh = 1
#random=1
resize=1.5
iou_thresh=0.2
iou_normalizer=0.05
cls_normalizer=0.5
obj_normalizer=1.0
iou_loss=ciou
nms_kind=diounms
beta_nms=0.6
new_coords=1
max_delta=2
        `
      },
      parseTemplate: (() => {
        let template = this.templates[this.activeTemplate]
        let values = {}

        document.querySelectorAll('.js-setting').forEach(function(item, index) {
          let key = item.name
          let value = item.value

          if (item.type === 'checkbox') {
            values[key] = item.checked ? '1' : '0';
            template = template.replaceAll('[' + key + ']', values[key])
          } else {
            values[key] = value;
            template = template.replaceAll('[' + key + ']', value)
          }
        })

        let classes = parseInt(values['classes'])
        let maxBatches = Math.round(parseInt(values['iterations_per_class']) * classes)


        let steps = [
            Math.round(maxBatches * 0.8),
            Math.round(maxBatches * 0.9)
        ];

        let scales = [0.5, 0.1]

        template = template.replaceAll('[steps]', steps.join(','))
        template = template.replaceAll('[scales]', scales.join(','))

        template = template.replaceAll('[max_batches_calced]', maxBatches)
        template = template.replaceAll('[filters]', Math.round((classes + 5) * 3))

        this.content = template
      }),
    }
  },

  setup(props, { emit }) {
    props = reactive(props);
    return {}
  },

  methods: {},

  mounted() {
    let _this = this;

    this.content = this.templates[this.activeTemplate]


    setTimeout(function() {
      _this.parseTemplate()
    });

    window.addEventListener('change', function() {
      _this.parseTemplate()
    })
  }

};
</script>
