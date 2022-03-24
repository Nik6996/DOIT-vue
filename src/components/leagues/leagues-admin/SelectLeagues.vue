<template>
  <div>
    <div class="select">
      <span>Select leagues</span>
      <select v-model="id">
        <option disabled value="">Select</option>
        <option v-for="league in leagues" :value="league.id" :key="league.id">
          {{ league.basicInfo.name }}
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
        this.$router.push(`/leagues${id}`);
      },
    },
  },
  computed: {
    ...mapGetters({
      leagues: "leagues/getLeagues",
    }),
  },
  async mounted() {
    await this.$store.dispatch("leagues/load");
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