import { mapGetters } from 'vuex';

export default {
  name: 'Success',
  computed: {
    ...mapGetters('falconStore', ['findFalconResult']),
  },
  methods: {
    goToHomePage() {
      this.$store.dispatch('falconStore/CLEAR_RESULT');
      this.$router.push('/');
    },
  },
};
