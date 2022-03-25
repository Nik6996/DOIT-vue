<template>
  <div>
    <div class="games">
      <div class="games__content">
        <div class="games__title">Games</div>
        <div class="games__slider">
          <swiper
            :autoplay="{
              delay: 4000,
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
            <swiper-slide v-for="(game, index) in games" :key="index">
              <games-card-slider v-model="games[index]" />
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GamesCardSlider from "@/components/home/games_slider/GamesCardSlider.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import { mapGetters } from "vuex";
SwiperCore.use([Pagination, Navigation, Autoplay]);

import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";

export default {
  data() {
    return {};
  },

  computed: {
    ...mapGetters({
      games: "games/getGames",
    }),
  },
  async mounted() {
    await this.$store.dispatch("games/load");
  },

  components: {
    GamesCardSlider,
    Swiper,
    SwiperSlide,
  },
};
</script>

<style lang="scss" scoped>
.games {
  &__content {
  }

  &__title {
    margin-left: 40px;
    font-size: 44px;
    color: #f5f5f5;
    font-weight: 700;
    margin-bottom: 40px;
  }

  .swiper {
    padding-bottom: 40px;
  }
}
</style>