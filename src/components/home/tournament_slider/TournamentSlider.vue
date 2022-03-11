<template>
  <div>
    <div class="tournaments">
      <div class="tournaments__title">Tournaments</div>
      <div class="tournaments__slider">
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
          <swiper-slide v-for="(tournament, index) in tournaments" :key="index">
            <tournament-card v-model="tournaments[index]" />
          </swiper-slide>
          <div class="swiper-pagination"></div>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import TournamentCard from "@/components/home/tournament_slider/TournamentCard.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
SwiperCore.use([Pagination, Navigation, Autoplay]);
import { mapGetters } from "vuex";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
export default {
  computed: {
    ...mapGetters({
      tournaments: "tournament/getTournaments",
    }),
  },
  components: {
    Swiper,
    SwiperSlide,
    TournamentCard,
  },
  async mounted() {
    await this.$store.dispatch("tournament/load");
  },
};
</script>

<style lang="scss" scoped>
.tournaments {
  margin-bottom: 80px;
  &__title {
    color: #f5f5f5;
    font-weight: 700;
    font-size: 44px;
    margin-bottom: 44px;
  }
}
.swiper {
  padding-bottom: 40px;
}
</style>