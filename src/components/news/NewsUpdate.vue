<template>
  <div>
    <div class="news">
      <div class="news__content">
        <div class="news__title">New news</div>
        <div class="news__new">
          <div class="news__game">
            <span>Main Game</span>
            <select v-model="newNews.gameId" class="news__game-select">
              <option disabled value="">Select game</option>
              <option v-for="game in games" :value="game.id" :key="game.id">
                {{ game.name }}
              </option>
            </select>
          </div>
          <div class="news__name">
            <span>News title</span>
            <input v-model="newNews.title" type="text" />
          </div>
          <div class="news__description">
            <span>Description</span>
            <textarea v-model="newNews.description"></textarea>
          </div>
          <div class="news__image">
            <div class="news__image-title">Image</div>
            <div class="news__logo">
              <div class="news__upload">
                <div class="news__img-name">{{ newNews.img.file.name }}</div>
                <label class="news__upload-btn" for="newImg">UPLOAD</label>
                <input
                  v-on:change="newPreviewImg()"
                  accept=".png, .jpg, .jpeg"
                  id="newImg"
                  type="file"
                  ref="newImg"
                />
              </div>
              <div class="news__img">
                <img :src="newImageSrc" alt="" />
              </div>
            </div>
          </div>
          <div class="news__save">
            <button @click="save()">Save</button>
          </div>
        </div>
        <div class="news__title">Edit news</div>
        <div class="news__edit">
          <div class="news__game">
            <span>Main Game</span>
            <select v-model="editGameId" class="news__game-select">
              <option disabled value="">Select game</option>
              <option v-for="game in games" :value="game.id" :key="game.id">
                {{ game.name }}
              </option>
            </select>
          </div>
          <div class="news__select-news">
            <span>News</span>
            <select v-model="editNewsId" class="game__game-select">
              <option disabled value="">Select news</option>
              <option
                v-for="news in getNews"
                :value="news.id"
                :key="news.title"
              >
                {{ news.title }}
              </option>
            </select>
          </div>
          <div class="news__name">
            <span>News title</span>
            <input v-model="editNews.title" type="text" />
          </div>
          <div class="news__description">
            <textarea v-model="editNews.description"></textarea>
          </div>
          <div class="news__image">
            <div class="news__image-title">Image</div>
            <div class="news__logo">
              <div class="news__upload">
                <div class="news__img-name">{{ editNews.img.file.name }}</div>
                <label class="news__upload-btn" for="editImg">UPLOAD</label>
                <input
                  v-on:change="editPreviewImg()"
                  accept=".png, .jpg, .jpeg"
                  id="editImg"
                  type="file"
                  ref="editImg"
                />
              </div>
              <div class="news__img">
                <img :src="editImageSrc" alt="" />
              </div>
            </div>
          </div>
          <div class="news__btns">
            <button>Delete news</button>
            <button>Edit news</button>
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
      newNews: {
        gameId: "",
        title: "",
        description: "",
        id: "",
        img: {
          file: "",
          url: "",
          localUrl: "",
        },
      },
      editNews: {
        gameId: "",
        title: "",
        description: "",
        id: "",
        img: {
          file: "",
          url: "",
          localUrl: "",
        },
      },
      editGameId: "",
      editNewsId: "",
    };
  },
  computed: {
    newImageSrc() {
      if (this.newNews.img.localUrl) {
        return this.newNews.img.localUrl;
      } else {
        return defaultImg;
      }
    },
    editImageSrc() {
      if (this.editNews.img.localUrl) {
        return this.editNews.img.localUrl;
      } else if (this.editNews.img.url) {
        return this.editNews.img.url;
      } else {
        return defaultImg;
      }
    },
    ...mapGetters({
      games: "games/getGames",
      getNews: "news/getNews",
    }),
  },
  watch: {
    editGameId: {
      handler(editGameId) {
        this.$store.dispatch("news/load", editGameId);
        this.editNews.id = "";
        this.editNews.gameId = "";
        this.editNews.title = "";
        this.editNews.description = "";
        this.editNews.img.file = "";
        this.editNews.img.localUrl = "";
        this.editNews.img.url = "";
        this.editNewsId = "";
      },
    },
    editNewsId: {
      handler(editNewsId) {
        // console.log(news);
        this.getNews.forEach((news) => {
          if (editNewsId == news.id) {
            this.editNews = news;
          }
        });
      },
    },
  },
  async mounted() {
    await this.$store.dispatch("games/load");
  },
  methods: {
    newPreviewImg() {
      if (!this.$refs.newImg || !this.$refs.newImg.files?.length) {
        this.newNews.img.file = "";
        this.newNews.img.url = "";
        return;
      }

      //this.newNews.id = new Date().valueOf();
      const file = this.$refs.newImg.files[0];
      const reader = new FileReader();

      reader.onload = (ev) => {
        this.newNews.img.file = file;
        this.newNews.img.localUrl = ev.currentTarget.result;
      };

      reader.readAsDataURL(file);
    },
    editPreviewImg() {
      if (!this.$refs.editImg || !this.$refs.editImg.files?.length) {
        this.editNews.img.file = "";
        this.editNews.img.url = "";
        return;
      }

      const file = this.$refs.editImg.files[0];
      const reader = new FileReader();

      reader.onload = (ev) => {
        this.editNews.img.file = file;
        this.editNews.img.localUrl = ev.currentTarget.result;
      };

      reader.readAsDataURL(file);
    },
    async save() {
      if (!this.newNews.id) {
        this.newNews.id = new Date().valueOf();
        await this.$store.dispatch("news/save", this.newNews);
      }
      this.newNews.id = "";
      this.newNews.gameId = "";
      this.newNews.title = "";
      this.newNews.description = "";
      this.newNews.img.file = "";
      this.newNews.img.localUrl = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.news {
  max-width: 600px;
  margin: 0 auto;
  padding: 0px 15px;

  &__content {
    width: 100%;
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

  &__new {
    border: 1px solid #20252b;
    padding: 44px 30px;
    margin-bottom: 40px;
  }

  &__game,
  &__select-news {
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

  &__name {
    span {
      margin-bottom: 10px;
      display: block;
      color: #cccdcd;
      font-weight: 700;
    }
    input {
      padding: 5px;
      color: #cccdcd;
      width: 100%;
      height: 40px;
      background: #0f1215;
      border: 2px solid #20252b;
    }
  }

  &__description {
    margin-top: 20px;
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

  &__image {
    margin-top: 20px;
  }

  &__image-title {
    margin-bottom: 10px;
    display: block;
    color: #cccdcd;
    font-weight: 700;
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
  &__game-select {
    margin-bottom: 20px;
  }
  &__select-news {
    margin-bottom: 20px;
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

  &__save {
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

  &__edit {
    border: 1px solid #20252b;
    padding: 44px 30px;
  }

  &__btns {
    margin-top: 10px;
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
}
</style>