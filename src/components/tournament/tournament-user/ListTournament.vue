<template>
  <div>
    <div class="tournament">
      <div class="tournament__content">
        <div class="tournament__title">
          {{ this.$route.params.game }}:Tournaments
        </div>
        <div v-if="!tournaments" class="tournament__error">
          Tournaments not found!
        </div>
        <div v-else class="tournament__list">
          <div v-for="(tournament, index) in tournaments" :key="tournament.id">
            <preview-tournament v-model="tournaments[index]" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PreviewTournament from "@/components/tournament/tournament-user/PreviewTournament";
import { mapGetters } from "vuex";
export default {
  components: {
    PreviewTournament,
  },
  computed: {
    ...mapGetters({
      tournaments: "tournament/getСoncreteGame",
    }),
  },
  async mounted() {
    await this.$store.dispatch(
      "tournament/loadConcreteGame",
      this.$route.params.game
    );
  },
};
</script>

<style lang="scss" scoped>
.tournament {
  max-width: 1200px;
  margin: 0 auto;

  &__content {
    margin: 20px;
  }

  &__title {
    color: #f5f5f5;
    font-weight: 700;
    font-size: 34px;
    margin-bottom: 16px;
    text-transform: uppercase;
  }
  &__error {
    margin-top: 30px;
    font-size: 30px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    color: rgb(148, 28, 28);
  }
}
@media (max-width: 1430px) {
  .tournament {
    margin-left: 120px;
  }
}
@media (max-width: 1060px) {
  .tournament {
    margin-left: 0px;
  }
}
</style>