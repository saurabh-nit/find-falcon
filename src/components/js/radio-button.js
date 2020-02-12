export default {
  name: 'RadioButton',
  props: {
    name: {
      type: String,
      default: '',
    },
    onRadioChange: {
      type: Function,
      required: false,
      default: () => {},
    },
    activeOption: {
      type: [String, Number],
    },
    option: {
      type: [String, Number],
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick(event) {
      if (!this.isDisabled) {
        console.log('this.option', this.option);
        this.$emit('onRadioChange', this.option);
        event.preventDefault();
      } else {
        console.log('radio button is disabled');
      }
    },
  },
};
