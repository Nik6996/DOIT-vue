<template>
  <div>
    <div class="news">
      <div class="news__header">
        <div class="news__title">News</div>
        <div class="news__btns">
          <div class="news__btn-all"><button>All</button></div>
          <div class="news__list-btn">
            <div
              v-for="game in games"
              :value="game.name"
              :key="game.name"
              class="news__btn"
            >
              <button @click="downloadТews(game.id)">{{ game.name }}</button>
            </div>
          </div>
        </div>
      </div>
      <div class="news__content">
        <div class="news__list">
          <div v-for="news in newsArray" :key="news.id" class="news__news">
            <div class="card big-size">
              <div class="card__column">
                <div class="card__img">
                  <img :src="news.img.url" alt="" />
                </div>
              </div>
              <div class="card__column1">
                <div class="card__title">{{ news.title }}</div>
                <div class="card__description">{{ news.description }}</div>
              </div>
            </div>
            <!-- <news-card v-model="newsArray[index]" /> -->
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- v-for="game in games" :value="game.name" :key="game.name" -->
</template>

<script>
import NewsCard from "@/components/news/NewsCard";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      newsArray: "",
    };
  },
  components: {
    NewsCard,
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
  },
  methods: {
    downloadТews(id) {
      this.$store.dispatch("news/load", id);
    },
  },
};
</script>

<style lang="scss" scoped>
.news {
  &__header {
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
    button {
      max-height: 56px;
      margin: 2px;
      background: #14191f;
      width: auto;
      padding: 16px;

      font-weight: 500;
      font-size: 18px;
      color: #a0a5ad;
    }
  }

  &__content {
  }

  &__list {
    display: flex;
  }

  &__news {
  }
}

.card {
  width: 288px;
  margin: 12px;
  background: #10171f;
  overflow: hidden;
  height: 500px;
  &__content {
  }

  &__column1 {
    padding: 24px;
  }
  &__column {
  }

  &__img {
    max-width: 288px;
    img {
      width: 100%;
      max-height: 240px;
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
.big-size {
  width: 580px;
  display: flex;
}
</style>