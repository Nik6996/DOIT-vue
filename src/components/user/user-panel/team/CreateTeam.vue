<template>
  <div>
    <div class="team">
      <div v-if="this.$route.params.id" class="team__title">Edit Team</div>
      <div v-else class="team__title">Create Team</div>
      <div class="team__content">
        <div class="team__info">Basic info</div>
        <div class="team__name">
          <span>Team name</span>
          <input v-model="team.name" type="text" />
        </div>
        <div class="team__game">
          <span>Main Game</span>
          <select v-model="team.game" class="team__game-select" name="" id="">
            <option disabled value="">Select game</option>
            <option v-for="game in games" :value="game.name" :key="game.name">
              {{ game.name }}
            </option>
          </select>
        </div>
        <div class="team__leader">
          <span>Team Leader</span>
          <input v-model="team.teamLeader" type="text" />
        </div>
        <div class="team__password">
          <span>Join password</span>
          <input v-model="team.password" type="text" />
        </div>
        <div class="team__country">
          <span>Country</span>
          <input v-model="team.country" type="text" />
        </div>
        <div class="team__site">
          <span>Web-site</span>
          <input v-model="team.site" type="text" />
        </div>
        <div class="team__url">
          <span>URL</span>
          <p>Doit.gg/team/{{ team.id }}</p>
        </div>
      </div>
      <div class="team__advance">
        <div class="team__advance-title">Advance</div>
        <div class="team__logo">
          <span>logo 128 x 128</span>
          <div class="team__upload">
            <div v-if="this.$route.params.id" class="team__img-name">
              {{ team.imgUrl.name }}
            </div>
            <div v-else class="team__img-name">{{ team.img.name }}</div>
            <label class="team__upload-btn" for="img">UPLOAD</label>
            <input
              v-on:change="previewImg()"
              accept=".png, .jpg, .jpeg"
              id="img"
              type="file"
              ref="ImgInput"
            />
          </div>
          <div class="team__img">
            <img :src="imageSrc" alt="" />
          </div>
        </div>
      </div>
      <div class="team__btns">
        <button
          v-if="this.$route.params.id"
          @click="deleteTeam()"
          class="team__delete"
        >
          Delete team
        </button>
        <button
          v-else
          @click="this.$router.push('/user/team')"
          class="team__delete"
        >
          Back
        </button>
        <button @click="save()" class="team__save">Save Team</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
const defaultImg = require("@/assets/img/preview.png");
export default {
  data() {
    return {
      team: {
        name: "",
        game: "",
        teamLeader: "",
        password: "",
        country: "",
        site: "",
        img: "",
        imgUrl: "",
        id: "",
      },
      imgLocalUrl: "",
    };
  },
  computed: {
    imageSrc() {
      if (this.imgLocalUrl) {
        return this.imgLocalUrl;
      } else if (this.team.imgUrl) {
        return this.team.imgUrl;
      } else {
        return defaultImg;
      }
    },

    ...mapGetters({
      games: "games/getGames",
      teams: "team/getTeams",
    }),
  },
  async mounted() {
    await this.$store.dispatch("games/load");

    if (this.$route.params.id) {
      await this.$store.dispatch("team/load");
    }
    if (!this.team.id) {
      this.team.id = new Date().valueOf();
    }
  },

  watch: {
    teams: {
      handler(teams) {
        const id = this.$route.params.id;
        teams.forEach((team) => {
          if (team.id == id) {
            this.team = team;
          }
        });
      },
    },
  },
  methods: {
    async deleteTeam() {
      console.log(this.team.id);
      await this.$store.dispatch("team/remove", this.team.id);
      this.$router.push("/user/team");
    },
    async save() {
      await this.$store.dispatch("team/save", this.team);
      this.$router.push("/user/team");
    },

    previewImg() {
      if (!this.$refs.ImgInput || !this.$refs.ImgInput.files?.length) {
        this.team.img = "";
        this.team.imgUrl = "";
        return;
      }

      const file = this.$refs.ImgInput.files[0];
      const reader = new FileReader();

      reader.onload = (ev) => {
        this.team.img = file;
        this.imgLocalUrl = ev.currentTarget.result;
      };

      reader.readAsDataURL(file);
    },
  },
};
</script>

<style lang="scss" scoped>
.team {
  margin: 0 auto;
  max-width: 600px;
  &__title {
    color: #f5f5f5;
    font-weight: 700;
    font-size: 48px;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }

  &__content {
    margin: 0px 15px;
    border: 1px solid #20252b;
    padding: 44px;
  }

  &__info {
    font-weight: 500;
    font-size: 22px;
    color: #cccdcd;
  }

  &__name,
  &__leader,
  &__password,
  &__country,
  &__site,
  &__game {
    display: flex;
    flex-direction: column;
    margin: 22px 0px;

    span {
      color: #cccdcd;
      margin-bottom: 12px;
    }
    input {
      color: #cccdcd;
      background: #0f1215;
      height: 40px;
      border: 2px solid #20252b;
      padding: 0px 16px;
    }
  }

  &__img {
    margin-top: 10px;
    width: 130px;
    height: 130px;
    border: 1px solid #20252b;
    img {
      width: 128px;
      height: 129px;
      object-fit: cover;
    }
  }

  &__game-select {
    height: 40px;
    border: 2px solid #20252b;
    background: #0f1215;
    color: #cccdcd;
    option {
      color: #cccdcd;
    }
  }

  &__url {
    color: #cccdcd;
    display: flex;
    span {
      margin-right: 5px;
    }
  }

  &__advance {
    margin: 24px 15px;
    border: 1px solid #20252b;
    padding: 44px;
  }

  &__advance-title {
    font-weight: 500;
    font-size: 22px;
    color: #cccdcd;
  }
  &__logo {
    color: #cccdcd;
    margin-top: 10px;
  }

  &__upload {
    margin: 10px 0px;
    display: flex;
    input {
      display: none;
    }
  }

  &__img-name {
    display: flex;
    align-items: center;
    padding-left: 20px;
    height: 40px;
    border: 1px solid #20252b;
    width: 100%;
  }

  &__upload-btn {
    width: 137px;
    height: 40px;
    background-color: #1a222d;
    font-size: 10px;
    color: #f5f5f5;
    margin-left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__btns {
    margin-top: 31px;
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
  }

  &__delete {
    width: 187px;
    height: 55px;
    color: #f5f5f5;
    font-weight: 700;
    background-color: #1a222d;
    margin: 0px 17px;
  }

  &__save {
    width: 160px;
    height: 55px;
    color: #f5f5f5;
    font-weight: 700;
    background-color: #1a222d;
    margin: 0px 17px;
  }
}
</style>