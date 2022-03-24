<template>
  <div>
    <div class="league">
      <div class="league__title">{{ this.$route.params.game }}</div>
      <div class="league__slider">
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
          <swiper-slide v-for="(league, index) in leagues" :key="index">
            <preview-leagues v-model="leagues[index]" />
          </swiper-slide>
          <div class="swiper-pagination"></div>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import PreviewLeagues from "@/components/leagues/leagues-user/PreviewLeagues.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
SwiperCore.use([Pagination, Navigation, Autoplay]);
import { mapGetters } from "vuex";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
export default {
  computed: {
    ...mapGetters({
      leagues: "leagues/getСoncreteGame",
    }),
  },
  components: {
    Swiper,
    SwiperSlide,
    PreviewLeagues,
  },
  async mounted() {
    await this.$store.dispatch(
      "leagues/loadConcreteGame",
      this.$route.params.game
    );
  },
};
</script>

<style lang="scss" scoped>
.league {
  max-width: 1200px;
  margin: 0 auto;
  &__title {
    color: #f5f5f5;
    font-weight: 700;
    font-size: 44px;
    margin-bottom: 44px;
  }
}
@media (max-width: 1060px) {
  .league {
    &__title {
      margin-left: 100px;
    }
  }
}
.swiper {
  padding-bottom: 40px;
}
</style>