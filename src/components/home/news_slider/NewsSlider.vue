<template>
  <div>
    <div class="news">
      <div class="news__content">
        <div class="news__top">
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

        <div class="news__slider">
          <swiper
            :autoplay="{
              delay: 5000,
              disableOnInteraction: false,
            }"
            :loop="true"
            :slidesPerView="3"
            :slidesPerGroup="1"
            :pagination="{
              clickable: true,
            }"
            :breakpoints="{
              320: {
                slidesPerView: 1,
              },

              768: {
                slidesPerView: 2,
              },
              1320: {
                slidesPerView: 3,
              },
            }"
            class="swiper"
          >
            <swiper-slide v-for="(game, index) in news" :key="index">
              <news-card-slider v-model="news[index]" />
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NewsCardSlider from "@/components/home/news_slider/NewsCardSlider.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import { mapGetters } from "vuex";
SwiperCore.use([Pagination, Navigation, Autoplay]);
//import "swiper/swiper-bundle.min.css";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";

export default {
  data() {
    return {
      newsArray: "",
      active: null,
    };
  },

  computed: {
    ...mapGetters({
      news: "news/getNews",
      games: "games/getGames",
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
    await this.$store.dispatch("news/loadAll");
    await this.$store.dispatch("games/load");
  },

  components: {
    NewsCardSlider,
    Swiper,
    SwiperSlide,
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
  &__top {
    margin: 0px 15px;
    display: flex;
    justify-content: space-between;
  }

  &__title {
    margin-left: 20px;
    font-size: 44px;
    color: #f5f5f5;
    font-weight: 700;
    margin-bottom: 40px;
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
.swiper {
  padding-bottom: 40px;
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
  .btn {
    display: none;
  }
}
</style>