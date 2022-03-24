<template>
  <div>
    <div
      v-if="isAdmin"
      class="admin-btn"
      @click="this.$router.push('/leagues-admin')"
    >
      <button>Admin panel</button>
    </div>
    <div class="game">
      <div class="game__content">
        <div class="game__header">
          <div class="game__title">Leagues</div>
          <div class="game__search">
            <input
              v-model="search"
              placeholder="Search the game"
              type="text"
              name=""
              id=""
            />
          </div>
        </div>
        <div class="game__list">
          <div v-for="(game, index) in returnSearchGame" :key="game.id">
            <preview-game v-model="returnSearchGame[index]" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PreviewGame from "@/components/leagues/leagues-user/PreviewGame.vue";
export default {
  data() {
    return {
      search: "",
      isAdmin: false,
    };
  },
  components: {
    PreviewGame,
  },
  async mounted() {
    await this.$store.dispatch("games/load");
    if (this.getUser) {
      this.isAdmin = this.getUser.isAdmin;
    }
  },

  watch: {
    getUser: {
      handler(getUser) {
        if (getUser) {
          this.isAdmin = this.getUser.isAdmin;
        }
      },
    },
  },
  computed: {
    ...mapGetters({
      getUser: "loadUser/getUser",
      games: "games/getGames",
    }),
    returnSearchGame() {
      if (this.games) {
        return this.games.filter((game) =>
          game.name.toLowerCase().includes(this.search.toLowerCase())
        );
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.game {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
  &__content {
    margin-bottom: 55px;
  }

  &__header {
    margin: 20px 43px;
    display: flex;
    justify-content: space-between;
  }

  &__title {
    font-size: 44px;
    font-weight: 700;
    color: #f5f5f5;
  }

  &__search {
    width: 512px;
    height: 40px;

    input {
      padding-left: 16px;
      border: 2px solid #20252b;
      width: 512px;
      height: 40px;
      background: #0f1215;
      color: #cccdcd;
    }
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
@media (max-width: 1430px) {
  .game {
    margin-left: 100px;
  }
}
@media (max-width: 1060px) {
  .game {
    margin-left: 0;
  }
}

@media (max-width: 768px) {
  .game {
    &__list {
      display: block;
    }
    &__header {
      display: block;
    }
    &__title {
      margin-bottom: 32px;
    }
    &__search {
      width: 100%;
      input {
        width: 100%;
      }
    }
  }
}
.admin-btn {
  display: flex;
  justify-content: flex-start;
  margin-top: 22px;
  margin-bottom: 30px;
  margin-left: 130px;
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
</style>