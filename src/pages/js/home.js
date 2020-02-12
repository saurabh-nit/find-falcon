import { mapGetters } from 'vuex';
import Dropdown from '@/components/Dropdown.vue';
import RadioButton from '@/components/RadioButton.vue';

export default {
  name: 'home',
  data() {
    return {
      listData: [],
      destionations: [
        {
          name: 'Destination 1', distance: 0, max_distance: 0, vehicle: '', speed: 0,
        },
        {
          name: 'Destination 2', distance: 0, max_distance: 0, vehicle: '', speed: 0,
        },
        {
          name: 'Destination 3', distance: 0, max_distance: 0, vehicle: '', speed: 0,
        },
        {
          name: 'Destination 4', distance: 0, max_distance: 0, vehicle: '', speed: 0,
        },
      ],
      vehiclesData: [],
      myData: {},
      searchData: {},
    };
  },
  components: {
    Dropdown,
    RadioButton,
  },
  computed: {
    ...mapGetters('falconStore', ['getPlanets', 'getVehicles', 'getToken']),
    isButtonDisabled() {
      return this.destionations.filter(el => el.distance > 0).length === 4
        && this.destionations.filter(el => el.vehicle).length === 4;
    },
    totalTime() {
      let total = 0;
      this.destionations.forEach((el) => {
        if (el.distance > 0 && el.speed > 0) {
          total += (el.distance / el.speed);
        }
      });
      return total;
    },
  },
  watch: {
    getPlanets(newPlanets) {
      this.listData = newPlanets;
    },
    getVehicles(newVehicles) {
      this.vehiclesData = newVehicles;
    },
  },
  mounted() {
    this.$store.dispatch('falconStore/GET_PLANETS');
    this.$store.dispatch('falconStore/GET_VEHICLES');
    this.$store.dispatch('falconStore/GET_TOKEN', { payload: {} });
  },
  methods: {
    handleAutoCompleteChange(key, value) {
      if (!value) {
        const selectedDestinations = this.destionations.map(el => el.distance);
        Object.assign(this.searchData, { [key]: '' });
        this.listData = this.getPlanets.filter(el => !selectedDestinations.includes(el.distance));
      } else {
        Object.assign(this.searchData, { [key]: value });
        const regex = new RegExp(value, 'i');
        this.listData = this.listData.filter(el => regex.test(el.name));
      }
    },
    menuItemSelected(keyName, data, index) {
      Object.assign(this.searchData, { [keyName]: data.name });
      this.destionations[index].name = data.name;
      this.destionations[index].distance = data.distance;
      const selectedDestinations = this.destionations.map(el => el.distance);
      this.listData = this.getPlanets.filter(el => !selectedDestinations.includes(el.distance));
    },
    handleRadioChange(data, indx) {
      const currentVehicle = this.getVehicles.find(e => e.max_distance === data);
      this.destionations[indx].max_distance = currentVehicle.max_distance;
      this.destionations[indx].vehicle = currentVehicle.name;
      this.destionations[indx].speed = currentVehicle.speed;

      this.vehiclesData.forEach((el, index) => {
        // eslint-disable-next-line max-len
        if (el.max_distance === data && el.total_no !== 0 && this.destionations[indx].max_distance) {
          this.vehiclesData[index].total_no -= 1;
        } else {
          // todo: need to improve more
          // this.vehiclesData[index].total_no = currentVehicle.total_no;
          // const others = this.getVehicles.filter(e => e.name !== currentVehicle.name);
          // console.log(' RESTORE..:', others, others.find(e => e.name !== currentVehicle.name));
        }
      });
    },
    findFalcon() {
      const falconPayload = {
        token: this.getToken,
        planet_names: this.destionations.map(d => d.name),
        vehicle_names: this.destionations.map(vh => vh.vehicle),
      };
      console.log('falconPayload:', falconPayload);
      this.$store.dispatch('falconStore/FIND_FALCON', {
        payload: falconPayload,
        success: this.falconFound,
      });
    },
    falconFound(data) {
      console.log('falconFound', data);
      if (data.status === 'success') {
        const combinedResult = data;
        combinedResult.timeTaken = this.totalTime;
        this.$store.dispatch('falconStore/SAVE_RESULT', { payload: combinedResult });
        this.$router.push('/success');
      } else {
        this.$store.dispatch('falconStore/CLEAR_RESULT');
        window.location.reload();
      }
    },
  },
};
