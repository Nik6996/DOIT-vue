<template>
  <div>
    <div class="select">
      <span>Select Tournament</span>
      <select v-model="id">
        <option disabled value="">Select</option>
        <option
          v-for="tournament in tournaments"
          :value="tournament.id"
          :key="tournament.id"
        >
          {{ tournament.basicInfo.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      id: "",
    };
  },
  watch: {
    id: {
      handler(id) {
        this.$router.push(`/tournament${id}`);
      },
    },
  },
  computed: {
    ...mapGetters({
      tournaments: "tournament/getTournaments",
    }),
  },
  async mounted() {
    await this.$store.dispatch("tournament/load");
  },
  methods: {
    open(id) {
      console.log("111");
    },
  },
};
</script>

<style lang="scss" scoped>
.select {
  display: flex;
  align-items: center;
  flex-direction: column;
  span {
    font-weight: 700;
    font-size: 22px;
    color: white;
    margin-bottom: 10px;
  }
  select {
    margin-top: 10px;
    margin-bottom: 20px;
    height: 50px;
    width: 200px;
    padding-left: 10px;
    color: #cccdcd;
    background-color: #0f1215;
    border: 2px solid #20252b;
    border-radius: 4px;
  }
}
</style>