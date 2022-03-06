<template>
  <div>
    <div class="game">
      <div class="game__content">
        <div class="game__select">
          <span>Main Game</span>
          <select v-model="game">
            <option disabled value="">Select game</option>
            <option v-for="game in games" :value="game.name" :key="game.id">
              {{ game.name }}
            </option>
          </select>
        </div>
        <div class="game__type">
          <span>Type</span>
          <div>
            <input
              class="game__custom-radio"
              value="single"
              v-model="typeGame"
              id="single"
              type="radio"
            />
            <label for="single">Single stage tournament</label>
          </div>
          <div>
            <input
              class="game__custom-radio"
              value="two"
              v-model="typeGame"
              id="two"
              type="radio"
            />
            <label for="two">Two stage tournament</label>
          </div>
        </div>
        <div class="game__format">
          <span>Format*</span>
          <select v-model="formatGame">
            <option disabled value="">Select format</option>
            <option>Single elimination</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <div class="game__match3place">
          <input
            class="game__custom-checkbox"
            v-model="match3place"
            id="match3place"
            type="checkbox"
          />
          <label for="match3place">Include a match for 3rd place</label>
        </div>
        <div class="game__middle">
          <div class="game__mode">
            <span>Mode*</span>
            <select>
              <option value="">5 vs 5</option>
              <option value="">3 vs 3</option>
              <option value="">1 vs 1</option>
            </select>
          </div>
          <div class="game__voting">
            <span>Map voting system</span>
            <select>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
            </select>
          </div>
        </div>
        <div class="game__block-img">
          <span>Main Banner 370x200*</span>
          <div class="game__banner-img">
            <div class="game__img">
              <img :src="imageBannerSrc" alt="" />
            </div>
            <label class="game__upload-btn" for="img">UPLOAD</label>
            <input
              v-on:change="previewBannerImg()"
              accept=".png, .jpg, .jpeg"
              id="img"
              type="file"
              ref="ImgBanner"
            />
          </div>
        </div>
        <div class="game__block-img">
          <span>Torunamnet background min 2000 x 3000</span>
          <div class="game__banner-img">
            <div class="game__img">
              <img :src="imageBcgSrc" alt="" />
            </div>
            <label class="game__upload-btn" for="img1">UPLOAD</label>
            <input
              v-on:change="previewBcgImg()"
              accept=".png, .jpg, .jpeg"
              id="img1"
              type="file"
              ref="ImgBcg"
            />
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

      game: "",
      typeGame: "",
      formatGame: "",
      match3place: false,

      imgLocalUrlBanner: "",
      imgLocalUrlBcg: "",
    };
  },
  computed: {
    imageBannerSrc() {
      if (this.imgLocalUrlBanner) {
        return this.imgLocalUrlBanner;
      } else if (this.banner.imgUrl) {
        return this.banner.imgUrl;
      } else {
        return defaultImg;
      }
    },
    imageBcgSrc() {
      if (this.imgLocalUrlBcg) {
        return this.imgLocalUrlBcg;
      } else if (this.background.imgUrl) {
        return this.background.imgUrl;
      } else {
        return defaultImg;
      }
    },
    ...mapGetters({
      games: "games/getGames",
      getNews: "news/getNews",
    }),
  },
  async mounted() {
    await this.$store.dispatch("games/load");
  },
  methods: {
    previewBannerImg() {
      if (!this.$refs.ImgBanner || !this.$refs.ImgBanner.files?.length) {
        this.banner.img = "";
        this.banner.imgUrl = "";
        return;
      }
      if (!this.banner.id) {
        this.banner.id = new Date().valueOf();
      }
      const file = this.$refs.ImgBanner.files[0];
      const reader = new FileReader();

      reader.onload = (ev) => {
        this.banner.img = file;
        this.imgLocalUrlBanner = ev.currentTarget.result;
      };

      reader.readAsDataURL(file);
    },
    previewBcgImg() {
      if (!this.$refs.ImgBcg || !this.$refs.ImgBcg.files?.length) {
        this.background.img = "";
        this.background.imgUrl = "";
        return;
      }
      if (!this.background.id) {
        this.background.id = new Date().valueOf();
      }
      const file = this.$refs.ImgBcg.files[0];
      const reader = new FileReader();

      reader.onload = (ev) => {
        this.background.img = file;
        this.imgLocalUrlBcg = ev.currentTarget.result;
      };

      reader.readAsDataURL(file);
    },
  },
};
</script>

<style lang="scss" scoped>
.game {
  &__content {
    padding: 15px;
  }

  &__select {
    span {
      display: block;
      font-weight: 700;
      color: #cccdcd;
    }
    select {
      margin-top: 10px;
      margin-bottom: 20px;
      height: 40px;
      width: 100%;
      padding-left: 10px;
      color: #cccdcd;
      background-color: #0f1215;
      border: 2px solid #20252b;
      border-radius: 4px;
    }
  }

  &__type {
    display: flex;
    flex-direction: column;
    span {
      display: block;
      font-weight: 700;
      color: #cccdcd;
    }
    label {
      margin-top: 12px;
    }
  }

  &__custom-radio {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }

  &__custom-radio + label {
    display: inline-flex;
    align-items: center;
    user-select: none;
  }
  &__custom-radio + label::before {
    content: "";
    display: flex;
    justify-content: center;
    position: relative;
    width: 20px;
    height: 20px;
    border: 2px solid #20252b;
    border-radius: 50%;
    margin-right: 10px;
  }

  &__custom-radio:checked + label::after {
    content: "";
    margin-left: 5px;
    position: absolute;
    width: 9px;
    height: 9px;
    background-color: #2281f2;
    border-radius: 50%;
  }

  &__format {
    margin-top: 15px;
    span {
      display: block;
      font-weight: 700;
      color: #cccdcd;
    }
    select {
      margin-top: 10px;
      margin-bottom: 20px;
      height: 40px;
      width: 100%;
      padding-left: 10px;
      color: #cccdcd;
      background-color: #0f1215;
      border: 2px solid #20252b;
      border-radius: 4px;
    }
  }

  &__match3place {
    margin-bottom: 15px;
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

  &__middle {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  &__mode {
    span {
      display: block;
      font-weight: 700;
      color: #cccdcd;
    }
    select {
      margin-top: 10px;
      margin-bottom: 20px;
      height: 40px;
      width: 108px;
      padding-left: 10px;
      color: #cccdcd;
      background-color: #0f1215;
      border: 2px solid #20252b;
      border-radius: 4px;
    }
  }

  &__voting {
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
      display: block;
      font-weight: 700;
      color: #cccdcd;
    }
    select {
      margin-top: 10px;
      margin-bottom: 20px;
      height: 40px;
      width: 276px;
      padding-left: 10px;
      color: #cccdcd;
      background-color: #0f1215;
      border: 2px solid #20252b;
      border-radius: 4px;
    }
  }

  &__block-img {
    margin-bottom: 25px;
    input {
      display: none;
    }
  }

  &__banner-img {
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
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
}
</style>