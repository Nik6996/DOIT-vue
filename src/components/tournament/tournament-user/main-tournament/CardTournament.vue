<template>
  <div>
    <div class="card">
      <div v-show="isLoading"><loading /></div>
      <div class="card__header">
        <div
          @click="this.$router.push(`/tournament/${this.game}`)"
          class="card__back"
        >
          <img src="@/assets/icon/arrow-tournaments.svg" alt="" />
          Back
        </div>
        <div class="card__game">{{ game }}</div>
      </div>
      <div class="card__content">
        <div class="card__main">
          <div class="card__top">
            <div class="card__name">{{ name }}</div>
            <div class="card__players">
              {{ players.length }} players signed up
            </div>
          </div>
          <div class="card__btns">
            <div
              class="card__btn"
              @click="this.isActive = 'Info'"
              :class="{ active: isActive === 'Info' }"
            >
              Info
            </div>
            <div
              class="card__btn"
              @click="this.isActive = 'Bracket'"
              :class="{ active: isActive === 'Bracket' }"
            >
              Bracket
            </div>
            <div
              class="card__btn"
              @click="this.isActive = 'Players'"
              :class="{ active: isActive === 'Players' }"
            >
              Players
            </div>
            <div
              class="card__btn"
              @click="this.isActive = 'Rules'"
              :class="{ active: isActive === 'Rules' }"
            >
              Rules
            </div>
            <div
              class="card__btn"
              @click="this.isActive = 'Support'"
              :class="{ active: isActive === 'Support' }"
            >
              Support
            </div>
            <div
              v-if="isAdmin"
              class="admin-btn"
              @click="
                this.$router.push('/tournament-bracket' + this.$route.params.id)
              "
            >
              <button>Edit bracket</button>
            </div>
          </div>

          <div>
            <info :info="info" v-if="isActive === 'Info'" />
            <bracket v-if="isActive === 'Bracket'" />
            <players :players="players" v-if="isActive === 'Players'" />
            <rules :rules="rules" v-if="isActive === 'Rules'" />
            <support v-if="isActive === 'Support'" />
          </div>
        </div>
        <div class="card__right">
          <div class="card__title">Requirements</div>
          <div class="card__info">
            <div class="card__info-block">
              Minimum age<span>At least 18 years old</span>
            </div>
            <div class="card__info-block">Residence<span>More info</span></div>
            <div class="card__info-block">
              PSN account<span>Register your name ID</span>
            </div>
            <div class="card__info-block">
              Play<span>Please log in to take part in this tournament.</span>
            </div>
          </div>
          <div v-bind:class="{ unregister: unRegister }" class="card__bottom">
            <div class="card__time">Register close in {{ endDate }}</div>
            <button v-if="!unRegister" @click="register()">
              Log in / Register
            </button>
            <button v-else @click="unregister()">Unregister</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Info from "@/components/tournament/tournament-user/main-tournament/Info";
import Bracket from "@/components/tournament/tournament-user/main-tournament/Bracket";
import Players from "@/components/tournament/tournament-user/main-tournament/Players";
import Rules from "@/components/tournament/tournament-user/main-tournament/Rules";
import Support from "@/components/tournament/tournament-user/main-tournament/Support";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import loading from "@/components/other/Loading";

export default {
  data() {
    return {
      unRegister: false,
      isActive: "Info",
      game: "",
      name: "",
      endDate: "",
      rules: "",
      players: [],
      userUid: "",
      isAdmin: false,
      isLoading: true,
      info: {
        time: "",
        game: "",
        prize: "",
        mode: "",
        format: "",
      },
    };
  },
  components: {
    Info,
    Bracket,
    Players,
    Rules,
    Support,
    loading,
  },
  computed: {
    ...mapGetters({
      getTournament: "tournament/getСoncreteTournament",
      getUser: "loadUser/getUser",
    }),
  },
  watch: {
    getTournament: {
      handler(getTournament) {
        this.game = getTournament.gameInfo.game;
        this.name = getTournament.basicInfo.name;
        this.endDate = new Date(
          getTournament.registration.estimateDate
        ).toLocaleString();
        this.info.time = new Date(
          getTournament.registration.estimateDate
        ).toLocaleString();
        this.info.game = getTournament.gameInfo.game;
        this.info.prize = getTournament.prizePool.prizeSum;
        this.info.mode = getTournament.gameInfo.mode;
        this.info.format = getTournament.gameInfo.formatGame;
        if (this.getTournament.players.length >= 1) {
          this.players = getTournament.players;
        }
        this.rules = getTournament.rules;
      },
    },
    players: {
      deep: true,
      handler(players) {
        const item = {
          players: players,
          game: this.game,
          id: this.getTournament.id,
        };
        this.$store.dispatch("tournament/players", item);
      },
    },
    getUser: {
      handler(getUser) {
        if (getUser) {
          this.isAdmin = this.getUser.isAdmin;
        }
      },
    },
  },
  async mounted() {
    if (!this.getTournament) {
      this.isLoading = true;
    } else {
      this.isLoading = false;
    }
    if (this.getUser) {
      this.isAdmin = this.getUser.isAdmin;
    }
    const item = { game: this.$route.params.game, id: this.$route.params.id };
    await this.$store.dispatch("tournament/loadConcreteTournament", item);
    const auth = getAuth();
    onAuthStateChanged(auth, (userSystem) => {
      if (userSystem) {
        this.userUid = userSystem.uid;
        this.players.forEach((player) => {
          if (userSystem.uid === player.id) {
            this.unRegister = true;
          }
        });
      }
    });
    this.isLoading = false;
  },
  methods: {
    register() {
      const auth = getAuth();
      onAuthStateChanged(auth, (userSystem) => {
        if (userSystem) {
          const player = {
            img: this.getUser.photoUrl || "",
            country: this.getUser.country,
            title: this.getUser.name,
            id: userSystem.uid,
          };
          this.players.push(player);
          this.unRegister = true;
        } else {
          this.$router.push("/login");
        }
      });
    },
    async unregister() {
      await this.players.forEach((player, index) => {
        if (this.userUid === player.id) {
          this.players.splice(index, 1);
        }
      });
      this.unRegister = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px;
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__back {
    cursor: pointer;
    display: flex;
    align-items: center;
    color: #9fb1cc;
    font-weight: 400;
    font-size: 16px;
    img {
      margin-right: 5px;
    }
  }

  &__game {
    font-weight: 500;
    font-size: 32px;
    color: #f5f5f5;
  }

  &__content {
    display: flex;
  }

  &__main {
    width: 100%;
    margin-right: 30px;
  }

  &__top {
    padding: 40px;
    border: 2px solid #20252b;
  }
  &__name {
    font-weight: 500;
    font-size: 32px;
    color: #f5f5f5;
    margin-bottom: 10px;
  }
  &__players {
    color: #67707a;
    font-weight: 400;
    font-size: 16px;
  }

  &__btns {
    margin-top: 37px;
    display: flex;
    position: relative;
  }

  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #67707a;
    width: 111px;
    height: 52px;
    cursor: pointer;
    position: relative;
    z-index: 2;
    top: 1.5px;
  }

  &__title {
    width: inherit;
    font-weight: 500;
    font-size: 24px;
    color: #f5f5f5;
    border: 2px solid #20252b;
    padding: 30px;
  }

  &__info {
    border: 2px solid #20252b;
    padding: 30px;
    width: inherit;
  }

  &__info-block {
    font-weight: 700;
    font-size: 16px;
    color: white;
    margin-bottom: 24px;
    span {
      display: block;
      margin-top: 10px;
      color: #67707a;
      font-weight: 400;
      font-size: 16px;
    }
  }

  &__bottom {
    padding: 30px;
    border: 2px solid #20252b;
    button {
      width: 264px;
      height: 48px;
      color: #ffffff;
      font-weight: 700;
      font-size: 16px;
      background: linear-gradient(180deg, #2788f6 0%, #0960e0 100%);

      border-radius: 2px;
    }
  }

  &__time {
    color: #b83333;
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 16px;
    line-height: 22px;
  }
  &__right {
    margin-top: 15px;
    width: 328px;
  }
}

@media (max-width: 1430px) {
  .card {
    margin-left: 110px;
  }
}
@media (max-width: 1300px) {
  .card {
    &__content {
      flex-wrap: wrap;
    }
    &__right {
      width: 100%;
    }
    &__main {
      margin-right: 0px;
    }
  }
}
@media (max-width: 1060px) {
  .card {
    margin-left: 0px;
    &__top {
      padding: 15px;
      margin-top: 5px;
    }
    &__name {
      font-weight: 500;
      font-size: 18px;
    }
    &__game {
      font-size: 20px;
    }
    &__bottom {
      padding: 10px 10px 30px 10px;
      margin-bottom: 50px;
    }
    &__btn {
      height: 40px;
    }
  }
}

.active {
  position: relative;
  background-color: #0f1215;
  z-index: 2;
  border: 2px solid #20252b;
  border-bottom: none;
  color: white;
}
.unregister {
  button {
    background: #20252b;
  }
}
.admin-btn {
  display: flex;
  justify-content: flex-end;
  width: 200px;

  button {
    background: linear-gradient(180deg, #2788f6 0%, #0960e0 100%);
    border-radius: 2px;
    width: 100%;
    height: 44px;
    color: #f5f5f5;
    font-weight: 700;
  }
}

@media (max-width: 1060px) {
  .admin-btn {
    position: absolute;
    right: 0;
    top: -27px;
    width: 100px;
    button {
      background: linear-gradient(180deg, #2788f6 0%, #0960e0 100%);
      border-radius: 2px;
      width: 100px;
      height: 28px;
      color: #f5f5f5;
      font-weight: 500;
    }
  }
}
</style>