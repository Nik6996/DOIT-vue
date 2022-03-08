<template>
  <div>
    <div class="tournament">
      <div v-if="isLoading" class="loading"></div>
      <div class="tournament__title"><span>Tournament</span></div>
      <div class="tournament__content">
        <vue-collapsible-panel-group base-color=" #181818">
          <vue-collapsible-panel :expanded="false">
            <template #title> Basic Info</template>
            <template #content>
              <basic-info :basicInfo="tournament.basicInfo" />
            </template>
          </vue-collapsible-panel>
          <vue-collapsible-panel :expanded="false">
            <template #title> GAME INFO </template>
            <template #content>
              <game-info :gameInfo="tournament.gameInfo" />
            </template>
          </vue-collapsible-panel>
          <vue-collapsible-panel :expanded="false">
            <template #title>
              REGISTRATION
              <div class="tournament__registration-check">
                <input
                  v-model="tournament.registration.dontAprovePlayersAutomaticly"
                  class="tournament__custom-checkbox"
                  type="checkbox"
                  name=""
                  id="registration"
                />
                <label for="registration"
                  >Don’t Aprove players automaticly</label
                >
              </div>
            </template>
            <template #content>
              <registration :registration="tournament.registration" />
            </template>
          </vue-collapsible-panel>
          <vue-collapsible-panel :expanded="false">
            <template #title>Prize pool </template>
            <template #content>
              <prize-pool :prizePool="tournament.prizePool" />
            </template>
          </vue-collapsible-panel>
          <vue-collapsible-panel :expanded="false">
            <template #title>Rules </template>
            <template #content> <rules :rules="tournament.rules" /> </template>
          </vue-collapsible-panel>
        </vue-collapsible-panel-group>
        <div class="tournament__save">
          <button @click="save()">
            <span v-if="this.$route.params.id">Save changes</span>
            <span v-else>Save tournament</span>
          </button>
          <button v-show="this.$route.params.id" @click="remove()">
            Delete Torunament
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BasicInfo from "@/components/tournament/tournament-admin/BasicInfo.vue";
import GameInfo from "@/components/tournament/tournament-admin/GameInfo.vue";
import Registration from "@/components/tournament/tournament-admin/Registration.vue";
import PrizePool from "@/components/tournament/tournament-admin/PrizePool.vue";
import Rules from "@/components/tournament/tournament-admin/Rules.vue";
import { mapGetters } from "vuex";
import {
  VueCollapsiblePanelGroup,
  VueCollapsiblePanel,
} from "@swoga/vue-collapsible-panel";

export default {
  data() {
    return {
      tournament: {
        basicInfo: {
          host: "",
          name: "",
          url: "",
          quickRules: "",
        },
        gameInfo: {
          game: "",
          type: "",
          formatGame: "",
          match3place: false,
          mode: "",
          mapVotingSystem: "",
          banner: {
            img: "",
            imgUrl: "",
            id: "",
          },
          background: {
            img: "",
            imgUrl: "",
            id: "",
          },
        },
        registration: {
          dontAprovePlayersAutomaticly: false,
          account: "",
          startDate: "",
          estimateDate: "",
          checkingTime: "",
          minute: "",
        },
        prizePool: {
          prizeSum: "",
          placeTurnOn3: "",
          stPlace1: "",
          stPlace2: "",
          stPlace3: "",
          stPlace4: "",
          typePrize: [],
          maxPlayers: "",
          ro8: "",
          ro16: "",
          ro32: "",
          ro64: "",
          ro128: "",
          ro256: "",
          ro512: "",
          donations: "",
        },
        rules: "",
        id: "",
      },
      isLoading: false,
    };
  },
  components: {
    BasicInfo,
    GameInfo,
    Registration,
    PrizePool,
    Rules,
    VueCollapsiblePanelGroup,
    VueCollapsiblePanel,
  },
  computed: {
    ...mapGetters({
      tournaments: "tournament/getTournaments",
    }),
  },
  async mounted() {
    if (this.$route.params.id) {
      await this.$store.dispatch("tournament/load");
      this.loadTournament(this.$route.params.id);
    }
  },
  methods: {
    async remove() {
      this.isLoading = true;
      const idForRemove = {
        idTournament: this.tournament.id,
        idBanner: this.tournament.gameInfo.banner.id,
        idBackground: this.tournament.gameInfo.background.id,
      };
      await this.$store.dispatch("tournament/remove", idForRemove);
      await this.$store.dispatch("tournament/load");
      this.isLoading = false;
      this.$router.push("/tournament-admin");
    },
    loadTournament(id) {
      this.tournaments.forEach((tournament) => {
        if (tournament.id == id) {
          this.tournament = tournament;
        }
      });
    },
    async save() {
      if (!this.tournament.id) {
        this.tournament.id = new Date().valueOf();
        this.isLoading = true;
        await this.$store.dispatch("tournament/save", this.tournament);
        this.$router.push("/tournament-admin");
        this.isLoading = false;
      } else {
        this.isLoading = true;
        await this.$store.dispatch("tournament/save", this.tournament);
        this.$router.push("/tournament-admin");
        this.isLoading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.tournament {
  margin: 0 auto;
  padding-bottom: 50px;
  max-width: 660px;
  &__title {
    margin: 50px 15px 30px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 22px;
    color: #0f1215;
    height: 82px;
    background: #d8dfeb;
  }

  &__content {
    padding: 15px;
  }
  &__registration-check {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }

  &__custom-checkbox + label {
    display: inline-flex;
    align-items: center;
    user-select: none;
  }

  &__custom-checkbox {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }

  &__custom-checkbox + label::before {
    content: "";
    display: flex;
    justify-content: center;
    position: relative;
    width: 17px;
    height: 17px;
    border: 2px solid #20252b;

    margin-right: 10px;
  }

  &__custom-checkbox:checked + label::before {
    background-repeat: no-repeat;
    background-position: center;
    background-image: url("../../../assets/icon/check2.svg");
  }
  &__save {
    display: flex;
    justify-content: center;
    button {
      margin: 10px;
      background: #1a222d;
      width: 160px;
      height: 50px;
      color: #f5f5f5;
      font-weight: 700;
    }
  }
}

.vcpg {
  color: white !important;
}
.vcp {
  margin: 10px;
  border: 1px solid #20252b;
}
.loading {
  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;
  background-color: #58585838;
  width: 100%;
  height: 100%;
  z-index: 1000;
}
</style>