<template>
  <div>
    <div class="news">
      <div class="news__header">
        <div class="news__title">News</div>
        <div class="news__btns">
          <div
            @click="downloadAllNews(), (this.active = null)"
            class="news__btn-all"
          >
            <button :class="{ active: active === null }" class="btn">
              All
            </button>
          </div>
          <div class="news__list-btn">
            <div
              v-for="(game, i) in games"
              :value="game.name"
              :key="game.name"
              class="news__btn"
            >
              <button
                class="btn"
                :data-col="i"
                :class="{ active: active === i }"
                @click="
                  downloadNews(game.id), (active = active === i ? null : i)
                "
              >
                {{ game.name }}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="news__content">
        <div class="news__list">
          <div
            v-for="(news, index) in newsArray"
            :key="news.id"
            class="news__news"
          >
            <div
              class="card"
              :class="{ big: index % 6 === 0 || index % 6 === 1 }"
            >
              <div class="card__column">
                <div
                  :class="{ bigImg: index % 6 === 0 || index % 6 === 1 }"
                  class="card__img"
                >
                  <img :src="news.img.url" alt="" />
                </div>
              </div>
              <div class="card__column1">
                <div class="card__title">{{ news.title }}</div>
                <div class="card__description">{{ news.description }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      newsArray: "",
      active: null,
    };
  },

  computed: {
    ...mapGetters({
      games: "games/getGames",
      getNews: "news/getNews",
    }),
  },
  watch: {
    getNews: {
      handler(getNews) {
        this.newsArray = getNews;
      },
    },
  },
  async mounted() {
    await this.$store.dispatch("games/load");
    await this.$store.dispatch("news/loadAll");
  },
  methods: {
    downloadNews(id) {
      this.$store.dispatch("news/load", id);
    },
    downloadAllNews() {
      this.$store.dispatch("news/loadAll");
    },
  },
};
</script>

<style lang="scss" scoped>
.news {
  margin-left: 5%;
  max-width: 1224px;
  width: 100%;
  &__header {
    padding: 0px 15px;
    display: flex;
    margin-bottom: 34px;
  }

  &__title {
    margin-right: 10px;
    font-weight: 700;
    font-size: 48px;
    display: flex;
    align-items: center;
    color: #ffffff;
  }

  &__btns {
    display: flex;
  }

  &__list-btn {
    display: flex;
    flex-wrap: wrap;
  }

  &__btn,
  &__btn-all {
    cursor: pointer;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
  }
}

.card {
  width: 273px;
  margin: 12px;
  background: #10171f;
  overflow: hidden;
  height: 500px;

  &__column1 {
    padding: 24px;
    width: 100%;
    //overflow: hidden;
  }

  &__img {
    max-width: 288px;
    img {
      width: 100%;
      height: 240px;
      object-fit: cover;
    }
  }

  &__title {
    font-weight: 500;
    font-size: 18px;
    color: white;
    margin-bottom: 16px;
  }

  &__description {
    color: #67707a;
    line-height: 21px;
  }
}

.big {
  width: 570px;
  max-height: 328px;
  display: flex;
}

.bigImg {
  width: 208px;
  height: 328px;
  img {
    width: 208px;
    height: 328px;
  }
}

.btn {
  max-height: 56px;
  margin: 2px;
  background: #14191f;
  width: auto;
  padding: 16px;

  font-weight: 500;
  font-size: 18px;
  color: #a0a5ad;
}

.active {
  color: #0f1215;
  background: #d8dfeb;
}

@media (max-width: 1200px) {
  .big {
    //width: 100%;
    margin-right: 20px;
  }
}
@media (max-width: 1350px) {
  .btn {
    max-height: 46px;
    font-size: 16px;
  }
  .news {
    margin-left: 11%;
    &__header {
      position: relative;
      display: block;
      align-items: flex-start;
    }
    &__btn-all {
      top: 0;
      right: 20px;
      position: absolute;
    }
    &__list {
      justify-content: center;
    }
  }
}
@media (max-width: 1060px) {
  .news {
    margin-left: 0;
  }
}

@media (max-width: 768px) {
  .big {
    display: inline-table;
    width: 273px;
    margin: 12px;
    background: #10171f;
    overflow: hidden;
    height: 500px;
  }
  .bigImg {
    width: 100%;
    height: 328px;
    img {
      width: 100%;
      height: 328px;
    }
  }
}
</style>