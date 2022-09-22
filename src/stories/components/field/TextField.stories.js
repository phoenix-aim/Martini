import TextField from "./TextField.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/TextField',
  component: TextField,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    onChange: {},
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'date', 'password'],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { TextField },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<TextField v-bind="args" />',
});

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  placeholder: 'Example field',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  placeholder: 'Example field',
};
