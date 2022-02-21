<template>
  <div>
    <div v-show="isSuccess" class="modal-message">
      <span>{{ successText }}</span>
    </div>
    <div class="game">
      <div class="game__content">
        <div class="game__title">New Game</div>
        <div class="game__new">
          <div class="game__subtitle">Basic info</div>
          <div class="game__name">
            <span>Game name</span>
            <input v-model="newGame.name" type="text" />
          </div>
          <div class="game__advance">
            <div class="game__advance-title">Image</div>
            <div class="game__logo">
              <div class="game__upload">
                <div class="game__img-name">{{ newGame.img.name }}</div>
                <label class="game__upload-btn" for="newImg">UPLOAD</label>
                <input
                  v-on:change="newPreviewImg()"
                  accept=".png, .jpg, .jpeg"
                  id="newImg"
                  type="file"
                  ref="newImg"
                />
              </div>
              <div class="game__img">
                <img :src="newImageSrc" alt="" />
              </div>
            </div>
          </div>
          <div class="game__description">
            <span>Description</span>
            <textarea v-model="newGame.description"></textarea>
          </div>
          <div @click="saveNew()" class="game__new-btn">
            <button>Save game</button>
          </div>
        </div>

        <div class="game__title">Edit Game</div>
        <div class="game__edit">
          <div class="game__subtitle">Basic info</div>
          <div class="game__name">
            <span>Main Game</span>
            <select v-model="nameEditGame" class="game__game-select">
              <option disabled value="">Select game</option>
              <option v-for="game in games" :value="game.name" :key="game.name">
                {{ game.name }}
              </option>
            </select>
          </div>

          <div class="game__advance">
            <div class="game__advance-title">Image</div>
            <div class="game__logo">
              <div class="game__upload">
                <div class="game__img-name">
                  {{ editGame.img.name }}
                </div>
                <label class="game__upload-btn" for="img">UPLOAD</label>
                <input
                  :disabled="!nameEditGame"
                  v-on:change="editPreviewImg()"
                  accept=".png, .jpg, .jpeg"
                  id="img"
                  type="file"
                  ref="editImg"
                />
              </div>
              <div class="game__img">
                <img :src="editImageSrc" alt="" />
              </div>
            </div>
          </div>

          <div class="game__description">
            <span>Description</span>
            <textarea v-model="editGame.description"></textarea>
          </div>

          <div class="game__btns">
            <button :disabled="!nameEditGame" @click="remove()">
              Delete game
            </button>
            <button :disabled="!nameEditGame" @click="update()">
              Edit Game
            </button>
          </div>
        </div>
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
      newGame: {
        name: "",
        img: "",
        url: "",
        id: "",
        imgLocalUrl: "",
        description: "",
      },
      editGame: {
        name: "",
        img: "",
        imgLocalUrl: "",
        url: "",
        id: "",
        description: "",
      },
      nameEditGame: "",
      isSuccess: false,
      successText: "",
    };
  },
  computed: {
    newImageSrc() {
      if (this.newGame.imgLocalUrl) {
        return this.newGame.imgLocalUrl;
      } else {
        return defaultImg;
      }
    },
    editImageSrc() {
      if (this.editGame.imgLocalUrl) {
        return this.editGame.imgLocalUrl;
      } else if (this.editGame.url) {
        return this.editGame.url;
      } else {
        return defaultImg;
      }
    },
    ...mapGetters({
      games: "games/getGames",
    }),
  },
  watch: {
    nameEditGame: {
      handler(nameEditGame) {
        this.games.forEach((game) => {
          if (nameEditGame === game.name) {
            this.editGame.name = game.name;
            this.editGame.url = game.url;
            this.editGame.id = game.id;
            this.editGame.imgLocalUrl = "";
            this.editGame.img = "";
            this.editGame.description = game.description;
          }
        });
      },
    },
    isSuccess: {
      handler() {
        setTimeout(this.successMessage, 6000);
      },
    },
  },
  async mounted() {
    await this.$store.dispatch("games/load");
  },
  methods: {
    successMessage() {
      this.isSuccess = false;
      successText = "";
    },
    async update() {
      await this.$store.dispatch("games/update", this.editGame);
      this.editGame.img = "";
      this.editGame.id = "";
      this.editGame.name = "";
      this.editGame.imgLocalUrl = "";
      this.editGame.description = "";
      this.editGame.url = "";
      this.nameEditGame = "";
      this.isSuccess = true;
      this.successText = "Modified successful!";
    },
    async saveNew() {
      await this.$store.dispatch("games/saveNew", this.newGame);
      this.newGame.img = "";
      this.newGame.id = "";
      this.newGame.name = "";
      this.newGame.imgLocalUrl = "";
      this.newGame.description = "";
      this.isSuccess = true;
      this.successText = "Added successfully!";
    },
    async remove() {
      await this.$store.dispatch("games/remove", this.editGame.id);
      this.editGame.img = "";
      this.editGame.id = "";
      this.editGame.name = "";
      this.editGame.imgLocalUrl = "";
      this.editGame.description = "";
      this.editGame.url = "";
      this.nameEditGame = "";
      this.isSuccess = true;
      this.successText = "Game deleted!";
    },
    newPreviewImg() {
      if (!this.$refs.newImg || !this.$refs.newImg.files?.length) {
        this.newGame.img = "";
        this.newGame.url = "";
        return;
      }

      this.newGame.id = new Date().valueOf();
      const file = this.$refs.newImg.files[0];
      const reader = new FileReader();

      reader.onload = (ev) => {
        this.newGame.img = file;
        this.newGame.imgLocalUrl = ev.currentTarget.result;
      };

      reader.readAsDataURL(file);
    },
    editPreviewImg() {
      if (!this.$refs.editImg || !this.$refs.editImg.files?.length) {
        this.editGame.img = "";
        this.editGame.url = "";
        return;
      }
      this.editGame.url = "";
      const file = this.$refs.editImg.files[0];
      const reader = new FileReader();

      reader.onload = (ev) => {
        this.editGame.img = file;
        this.editGame.imgLocalUrl = ev.currentTarget.result;
      };

      reader.readAsDataURL(file);
    },
  },
};
</script>

<style lang="scss" scoped>
.game {
  max-width: 600px;
  margin: 0 auto;
  padding: 0px 15px;

  &__content {
    width: 100%;
  }

  &__new {
    border: 1px solid #20252b;
    padding: 44px 30px;
    margin-bottom: 40px;
  }
  &__subtitle {
    position: relative;
    left: -10px;
    font-size: 22px;
    color: #cccdcd;
    margin-bottom: 44px;
  }
  &__title {
    font-weight: 700;
    width: 100%;
    height: 82px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(216, 223, 235, 1);
    font-size: 22px;
    color: rgba(15, 18, 21, 1);
    margin-bottom: 28px;
  }

  &__name {
    span {
      margin-bottom: 10px;
      display: block;
      color: #cccdcd;
      font-weight: 700;
    }
    input,
    select {
      padding: 5px;
      color: #cccdcd;
      width: 100%;
      height: 40px;
      background: #0f1215;
      border: 2px solid #20252b;
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
  &__advance {
    margin: 24px 0px;
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
    cursor: pointer;
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

  &__description {
    span {
      margin-bottom: 10px;
      display: block;
      color: #cccdcd;
      font-weight: 700;
    }
    textarea {
      border: 2px solid #20252b;
      width: 100%;
      height: 184px;
      padding: 5px;
      background: #0f1215;
      color: #cccdcd;
    }
  }

  &__edit {
    border: 1px solid #20252b;
    padding: 44px 30px;
  }

  &__new-btn {
    display: flex;
    justify-content: center;
    button {
      width: 169px;
      height: 55px;
      margin: 20px 30px 0px 30px;
      font-weight: 700;
      color: #f5f5f5;
      background: #1a222d;
    }
  }

  &__btns {
    display: flex;
    justify-content: center;
    button {
      width: 169px;
      height: 55px;
      margin: 20px 30px 0px 30px;
      font-weight: 700;
      color: #f5f5f5;
      background: #1a222d;
    }
  }
  &__game-select {
    option {
      color: #cccdcd;
    }
  }
}
.modal-message {
  position: fixed;
  top: 0;
  right: 0;
  width: 230px;
  height: 70px;
  background-color: rgb(3, 172, 3);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  span {
    display: block;
    font-size: 22px;
    color: #f5f5f5;
    font-weight: 700;
  }
}
</style>