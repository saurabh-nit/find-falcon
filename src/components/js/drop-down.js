import { clickOutside } from '@/utils/clickOutside';
import Transition from '@/components/Transition.vue';

export default {
  name: 'Dropdown',
  props: {
    listData: {
      type: Array,
      required: false,
      default: null,
    },
    label: {
      type: String,
      required: false,
      default: '',
    },
    keyName: {
      type: String,
      required: false,
      default: '',
    },
    defaultLabel: {
      type: String,
      required: false,
      default: '',
    },
    value: {
      type: [String, Number],
      required: false,
      default: '',
    },
    onItemClick: {
      type: Function,
      required: false,
      default: () => {},
    },
    onAutocompleteChange: {
      type: Function,
      required: false,
      default: () => {},
    },
    inputValue: {
      type: String,
    },
  },
  data() {
    return {
      listOpen: false,
    };
  },
  watch: {
    listOpen(newValue) {
      if (newValue) {
        // eslint-disable-next-line consistent-return
        setTimeout(() => {
          const element = this.$el.querySelector('.item.selected');
          if (!element) return false;
          element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
        }, 200);
      }
    },
  },
  components: {
    Transition,
  },
  directives: {
    clickOutside,
  },
  methods: {
    toggleList() {
      this.listOpen = !this.listOpen;
    },
    selectThisItem(item) {
      this.onItemClick(this.keyName, item);
      this.hideDropdown();
    },
    hideDropdown() {
      this.listOpen = false;
    },
    onInput(event) {
      this.onAutocompleteChange(this.keyName, event.target.value);
    },
  },
};
