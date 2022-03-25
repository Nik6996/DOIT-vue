<template>
  <div>
    <div class="standings">
      <div class="standings__content">
        <div class="standings__game">game</div>
        <div class="standings__top">
          <div class="standings__item center">#</div>
          <div class="standings__item">Country</div>
          <div class="standings__item">Team</div>
          <div class="standings__item">Wins</div>
          <div class="standings__item">Loses</div>
          <div class="standings__item">Draws</div>
          <div class="standings__item">Points</div>
          <div class="standings__item">Prize</div>
        </div>
        <div
          class="standings__list"
          v-for="(team, index) in teams"
          :key="team.id"
        >
          <preview-team :rank="index" v-model="teams[index]" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PreviewTeam from "@/components/leagues/leagues-user/main-leagues/PreviewTeam";
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  components: {
    PreviewTeam,
  },
  computed: {
    ...mapGetters({
      teams: "team/getTeamsGame",
    }),
  },
  mounted() {
    this.$store.dispatch("team/LoadConcrateGame", this.$route.params.game);
  },
};
</script>

<style lang="scss" scoped>
.standings {
  position: relative;
  top: -1px;
  border: 2px solid #565656;
  padding: 24px 17px 40px 17px;
  &__content {
    border: 1px solid #565656;
  }
  &__game {
    padding: 30px 0px 30px 20px;
    font-weight: 700;
    font-size: 20px;

    color: #ffff;
  }

  &__top {
    background: #20252b;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    height: 61px;
  }

  &__item {
    font-weight: 400;
    font-size: 12px;
    color: #ffffff;
    display: flex;
  }
}
.center {
  justify-content: center;
}
@media (max-width: 768px) {
  .standings {
    padding: 14px 7px 20px 7px;
    &__top {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    }
    &__item {
      font-weight: 400;
      font-size: 12px;
    }
    &__item:nth-child(4) {
      display: none;
    }
    &__item:nth-child(5) {
      display: none;
    }
  }
}
</style>