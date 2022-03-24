<template>
  <div>
    <div class="league">
      <div v-show="isError" class="modal-message">
        Fill in all required fields!
      </div>
      <div v-if="isLoading" class="loading"></div>
      <div class="league__title"><span>League</span></div>
      <div class="league__content">
        <vue-collapsible-panel-group base-color=" #181818">
          <vue-collapsible-panel :expanded="false">
            <template #title> Basic Info</template>
            <template #content>
              <basic-info :basicInfo="league.basicInfo" />
            </template>
          </vue-collapsible-panel>
          <vue-collapsible-panel :expanded="false">
            <template #title> GAME INFO </template>
            <template #content>
              <game-info :gameInfo="league.gameInfo" />
            </template>
          </vue-collapsible-panel>
          <vue-collapsible-panel :expanded="false">
            <template #title>
              REGISTRATION
              <div class="league__registration-check">
                <input
                  v-model="league.registration.dontAprovePlayersAutomaticly"
                  class="league__custom-checkbox"
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
              <registration :registration="league.registration" />
            </template>
          </vue-collapsible-panel>
          <vue-collapsible-panel :expanded="false">
            <template #title>Prize pool </template>
            <template #content>
              <prize-pool :prizePool="league.prizePool" />
            </template>
          </vue-collapsible-panel>
          <vue-collapsible-panel :expanded="false">
            <template #title>Rules </template>
            <template #content>
              <rules @rulesData="rulesSet" :rules="league.rules" />
            </template>
          </vue-collapsible-panel>
        </vue-collapsible-panel-group>

        <div class="league__save">
          <button @click="save()">
            <span v-if="this.$route.params.id">Save changes</span>
            <span v-else>Save league</span>
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
import BasicInfo from "@/components/leagues/leagues-admin/BasicInfo.vue";
import GameInfo from "@/components/leagues/leagues-admin/GameInfo.vue";
import Registration from "@/components/leagues/leagues-admin/Registration.vue";
import PrizePool from "@/components/leagues/leagues-admin/PrizePool.vue";
import Rules from "@/components/leagues/leagues-admin/Rules.vue";
import { mapGetters } from "vuex";
import {
  VueCollapsiblePanelGroup,
  VueCollapsiblePanel,
} from "@swoga/vue-collapsible-panel";

export default {
  data() {
    return {
      league: {
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
          platform: "",
          server: "",
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
        bracket: "",
        slots: "",
        rules: "",
        players: "",
        id: "",
      },
      isError: false,
      oldGame: "",
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
      leagues: "leagues/getLeagues",
    }),
  },
  watch: {
    isError: {
      handler(isError) {
        if (isError) {
          setTimeout(this.validError, 3000);
        }
      },
    },
  },
  async mounted() {
    if (this.$route.params.id) {
      await this.$store.dispatch("leagues/load");
      this.loadLeague(this.$route.params.id);
      this.oldGame = this.league.gameInfo.game;
    }
  },
  methods: {
    validError() {
      this.isError = false;
    },
    async remove() {
      this.isLoading = true;
      const idForRemove = {
        idleague: this.league.id,
        idBanner: this.league.gameInfo.banner.id,
        idBackground: this.league.gameInfo.background.id,
        game: this.oldGame,
      };
      await this.$store.dispatch("leagues/remove", idForRemove);
      await this.$store.dispatch("leagues/load");
      this.isLoading = false;
      this.$router.push("/leagues-admin");
    },
    loadLeague(id) {
      this.leagues.forEach((league) => {
        if (league.id == id) {
          this.league = league;
        }
      });
    },
    async save() {
      if (!this.league.id) {
        if (
          this.league.basicInfo.name &&
          this.league.gameInfo.game &&
          this.league.gameInfo.mode &&
          this.league.gameInfo.formatGame &&
          this.league.registration.platform &&
          this.league.prizePool.prizeSum &&
          this.league.gameInfo.banner.img &&
          this.league.prizePool.maxPlayers
        ) {
          this.league.id = new Date().valueOf();
          this.isLoading = true;

          await this.$store.dispatch("leagues/save", this.league);
          this.$router.push("/leagues-admin");
          this.isLoading = false;
        } else {
          this.isError = true;
        }
      } else {
        if (
          this.league.basicInfo.name &&
          this.league.gameInfo.game &&
          this.league.gameInfo.mode &&
          this.league.gameInfo.formatGame &&
          this.league.registration.platform &&
          this.league.prizePool.prizeSum &&
          this.league.prizePool.maxPlayers &&
          (this.league.gameInfo.banner.img ||
            this.league.gameInfo.banner.imgUrl)
        ) {
          this.isLoading = true;

          await this.$store.dispatch("leagues/edit", this.league);
          this.$router.push("/leagues-admin");
          this.isLoading = false;
        } else {
          this.isError = true;
        }
      }
    },
    rulesSet(data) {
      this.league.rules = data;
    },
  },
};
</script>

<style lang="scss" scoped>
.league {
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
.modal-message {
  position: fixed;
  top: 0;
  right: 0;
  width: 230px;
  height: 70px;
  background-color: rgb(136, 20, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  z-index: 200;

  font-size: 17px;
  color: #f5f5f5;
  font-weight: 700;
}
</style>