<template>
  <div>
    <div class="team">
      <div class="team__title"></div>
      <div class="team__list">
        <div v-for="(team, index) in teamArr" :key="team.id">
          <preview-team v-model="teamArr[index]" />
        </div>

        <div
          @click="this.$router.push('/user/create-team')"
          class="team__create"
        >
          Create Team <img src="@/assets/icon/plus-user.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PreviewTeam from "@/components/user/user-panel/team/PreviewTeam";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      teamArr: "",
    };
  },
  components: {
    PreviewTeam,
  },
  computed: {
    ...mapGetters({
      teams: "team/getTeams",
    }),
  },
  watch: {
    teams: {
      handler(teams) {
        this.teamArr = teams;
      },
    },
  },
  mounted() {
    this.$store.dispatch("team/load");
  },
};
</script>

<style lang="scss" scoped>
.team {
  &__title {
    display: flex;
    justify-content: center;
    font-size: 48px;
    color: #f5f5f5;
    margin-bottom: 59px;
  }
  &__create {
    cursor: pointer;
    margin: 0px 22px 30px 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 230px;
    height: 82px;
    font-size: 22px;
    color: #f5f5f5;
    border: 2px solid #20252b;
    img {
      margin-left: 10px;
    }
  }
  &__list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1100px;
  }
}
</style>