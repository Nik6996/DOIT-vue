<template>
  <div>
    <div class="bracket">
      <div class="bracket__btns">
        <div allowSlideNext class="bracket__swiper-button-prev"></div>
        <div allowSlideNext class="bracket__swiper-button-next"></div>
      </div>
      <div class="bracket__content">
        <swiper
          :slidesPerView="3"
          :slidesPerGroup="1"
          :navigation="{
            nextEl: '.bracket__swiper-button-next',
            prevEl: '.bracket__swiper-button-prev',
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
          <swiper-slide>
            <div class="bracket__title">Round 16</div>
            <div class="bracket__column">
              <div class="bracket__block">
                <div
                  v-bind:class="{
                    winner: bracket.playersIn16.userIn16A1.winner,
                  }"
                  class="bracket__player"
                >
                  <div class="bracket__flag"></div>
                  {{ bracket.playersIn16.userIn16A1.name }}
                  <span>{{ bracket.playersIn16.userIn16A1.points }}</span>
                </div>
                <div
                  v-bind:class="{
                    winner: bracket.playersIn16.userIn16A2.winner,
                  }"
                  class="bracket__player"
                >
                  <div class="bracket__flag"></div>
                  {{ bracket.playersIn16.userIn16A2.name }}
                  <span>{{ bracket.playersIn16.userIn16A2.points }}</span>
                </div>
              </div>
              <div class="bracket__block">
                <div
                  v-bind:class="{
                    winner: bracket.playersIn16.userIn16A3.winner,
                  }"
                  class="bracket__player"
                >
                  <div class="bracket__flag"></div>
                  {{ bracket.playersIn16.userIn16A3.name }}
                  <span>{{ bracket.playersIn16.userIn16A3.points }}</span>
                </div>
                <div
                  v-bind:class="{
                    winner: bracket.playersIn16.userIn16A4.winner,
                  }"
                  class="bracket__player"
                >
                  <div class="bracket__flag"></div>
                  {{ bracket.playersIn16.userIn16A4.name }}
                  <span>{{ bracket.playersIn16.userIn16A4.points }}</span>
                </div>
              </div>
              <div class="bracket__block">
                <div
                  v-bind:class="{
                    winner: bracket.playersIn16.userIn16A5.winner,
                  }"
                  class="bracket__player"
                >
                  <div class="bracket__flag"></div>
                  {{ bracket.playersIn16.userIn16A5.name }}
                  <span>{{ bracket.playersIn16.userIn16A5.points }}</span>
                </div>
                <div
                  v-bind:class="{
                    winner: bracket.playersIn16.userIn16A6.winner,
                  }"
                  class="bracket__player"
                >
                  <div class="bracket__flag"></div>
                  {{ bracket.playersIn16.userIn16A6.name }}
                  <span>{{ bracket.playersIn16.userIn16A6.points }}</span>
                </div>
              </div>
              <div class="bracket__block">
                <div
                  v-bind:class="{
                    winner: bracket.playersIn16.userIn16A7.winner,
                  }"
                  class="bracket__player"
                >
                  <div class="bracket__flag"></div>
                  {{ bracket.playersIn16.userIn16A7.name }}
                  <span>{{ bracket.playersIn16.userIn16A7.points }}</span>
                </div>
                <div
                  v-bind:class="{
                    winner: bracket.playersIn16.userIn16A8.winner,
                  }"
                  class="bracket__player"
                >
                  <div class="bracket__flag"></div>
                  {{ bracket.playersIn16.userIn16A8.name }}
                  <span>{{ bracket.playersIn16.userIn16A8.points }}</span>
                </div>
              </div>
              <div class="bracket__block">
                <div
                  v-bind:class="{
                    winner: bracket.playersIn16.userIn16A9.winner,
                  }"
                  class="bracket__player"
                >
                  <div class="bracket__flag"></div>
                  {{ bracket.playersIn16.userIn16A9.name }}
                  <span>{{ bracket.playersIn16.userIn16A9.points }}</span>
                </div>
                <div
                  v-bind:class="{
                    winner: bracket.playersIn16.userIn16A10.winner,
                  }"
                  class="bracket__player"
                >
                  <div class="bracket__flag"></div>
                  {{ bracket.playersIn16.userIn16A10.name }}
                  <span>{{ bracket.playersIn16.userIn16A10.points }}</span>
                </div>
              </div>
              <div class="bracket__block">
                <div
                  v-bind:class="{
                    winner: bracket.playersIn16.userIn16A11.winner,
                  }"
                  class="bracket__player"
                >
                  <div class="bracket__flag"></div>
                  {{ bracket.playersIn16.userIn16A11.name }}
                  <span>{{ bracket.playersIn16.userIn16A11.points }}</span>
                </div>
                <div
                  v-bind:class="{
                    winner: bracket.playersIn16.userIn16A12.winner,
                  }"
                  class="bracket__player"
                >
                  <div class="bracket__flag"></div>
                  {{ bracket.playersIn16.userIn16A12.name }}
                  <span>{{ bracket.playersIn16.userIn16A12.points }}</span>
                </div>
              </div>
              <div class="bracket__block">
                <div
                  v-bind:class="{
                    winner: bracket.playersIn16.userIn16A13.winner,
                  }"
                  class="bracket__player"
                >
                  <div class="bracket__flag"></div>
                  {{ bracket.playersIn16.userIn16A13.name }}
                  <span>{{ bracket.playersIn16.userIn16A13.points }}</span>
                </div>
                <div
                  v-bind:class="{
                    winner: bracket.playersIn16.userIn16A14.winner,
                  }"
                  class="bracket__player"
                >
                  <div class="bracket__flag"></div>
                  {{ bracket.playersIn16.userIn16A14.name }}
                  <span>{{ bracket.playersIn16.userIn16A14.points }}</span>
                </div>
              </div>
              <div class="bracket__block">
                <div
                  v-bind:class="{
                    winner: bracket.playersIn16.userIn16A15.winner,
                  }"
                  class="bracket__player"
                >
                  <div class="bracket__flag"></div>
                  {{ bracket.playersIn16.userIn16A15.name }}
                  <span>{{ bracket.playersIn16.userIn16A15.points }}</span>
                </div>
                <div
                  v-bind:class="{
                    winner: bracket.playersIn16.userIn16A16.winner,
                  }"
                  class="bracket__player"
                >
                  <div class="bracket__flag"></div>
                  {{ bracket.playersIn16.userIn16A16.name }}
                  <span>{{ bracket.playersIn16.userIn16A16.points }}</span>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="bracket__title">Round 8</div>
            <div class="bracket__column column2">
              <div class="bracket__block bracket__inner-small">
                <div
                  v-bind:class="{
                    winner: bracket.playersIn8.userIn8A1.winner,
                  }"
                  class="bracket__player"
                >
                  <div class="bracket__flag"></div>
                  {{ bracket.playersIn8.userIn8A1.name }}
                  <span>{{ bracket.playersIn8.userIn8A1.points }}</span>
                </div>
                <div
                  v-bind:class="{
                    winner: bracket.playersIn8.userIn8A2.winner,
                  }"
                  class="bracket__player"
                >
                  <div class="bracket__flag"></div>
                  {{ bracket.playersIn8.userIn8A2.name }}
                  <span>{{ bracket.playersIn8.userIn8A2.points }}</span>
                </div>
              </div>
              <div class="bracket__block bracket__inner-small">
                <div
                  v-bind:class="{
                    winner: bracket.playersIn8.userIn8A3.winner,
                  }"
                  class="bracket__player"
                >
                  <div class="bracket__flag"></div>
                  {{ bracket.playersIn8.userIn8A3.name }}
                  <span>{{ bracket.playersIn8.userIn8A3.points }}</span>
                </div>
                <div
                  v-bind:class="{
                    winner: bracket.playersIn8.userIn8A4.winner,
                  }"
                  class="bracket__player"
                >
                  <div class="bracket__flag"></div>
                  {{ bracket.playersIn8.userIn8A4.name }}
                  <span>{{ bracket.playersIn8.userIn8A4.points }}</span>
                </div>
              </div>
              <div class="bracket__block bracket__inner-small">
                <div
                  v-bind:class="{
                    winner: bracket.playersIn8.userIn8A5.winner,
                  }"
                  class="bracket__player"
                >
                  <div class="bracket__flag"></div>
                  {{ bracket.playersIn8.userIn8A5.name }}
                  <span>{{ bracket.playersIn8.userIn8A5.points }}</span>
                </div>
                <div
                  v-bind:class="{
                    winner: bracket.playersIn8.userIn8A6.winner,
                  }"
                  class="bracket__player"
                >
                  <div class="bracket__flag"></div>
                  {{ bracket.playersIn8.userIn8A6.name }}
                  <span>{{ bracket.playersIn8.userIn8A6.points }}</span>
                </div>
              </div>
              <div class="bracket__block bracket__inner-small">
                <div
                  v-bind:class="{
                    winner: bracket.playersIn8.userIn8A7.winner,
                  }"
                  class="bracket__player"
                >
                  <div class="bracket__flag"></div>
                  {{ bracket.playersIn8.userIn8A7.name }}
                  <span>{{ bracket.playersIn8.userIn8A7.points }}</span>
                </div>
                <div
                  v-bind:class="{
                    winner: bracket.playersIn8.userIn8A8.winner,
                  }"
                  class="bracket__player"
                >
                  <div class="bracket__flag"></div>
                  {{ bracket.playersIn8.userIn8A8.name }}
                  <span>{{ bracket.playersIn8.userIn8A8.points }}</span>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="bracket__title">Semi final</div>
            <div class="bracket__column column2">
              <div class="bracket__block bracket__inner-small">
                <div
                  v-bind:class="{
                    winner: bracket.playersSemiFinal.user1.winner,
                  }"
                  class="bracket__player"
                >
                  <div class="bracket__flag"></div>
                  {{ bracket.playersSemiFinal.user1.name }}
                  <span>{{ bracket.playersSemiFinal.user1.points }}</span>
                </div>
                <div
                  v-bind:class="{
                    winner: bracket.playersSemiFinal.user2.winner,
                  }"
                  class="bracket__player"
                >
                  <div class="bracket__flag"></div>
                  {{ bracket.playersSemiFinal.user2.name }}
                  <span>{{ bracket.playersSemiFinal.user2.points }}</span>
                </div>
              </div>
              <div class="bracket__block bracket__inner-small">
                <div
                  v-bind:class="{
                    winner: bracket.playersSemiFinal.user3.winner,
                  }"
                  class="bracket__player"
                >
                  <div class="bracket__flag"></div>
                  {{ bracket.playersSemiFinal.user3.name }}
                  <span>{{ bracket.playersSemiFinal.user3.points }}</span>
                </div>
                <div
                  v-bind:class="{
                    winner: bracket.playersSemiFinal.user4.winner,
                  }"
                  class="bracket__player"
                >
                  <div class="bracket__flag"></div>
                  {{ bracket.playersSemiFinal.user4.name }}
                  <span>{{ bracket.playersSemiFinal.user4.points }}</span>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="bracket__title">final</div>
            <div class="bracket__column">
              <div class="bracket__block bracket__inner-big">
                <div
                  v-bind:class="{
                    winner: bracket.playersFinal.user1.winner,
                  }"
                  class="bracket__player"
                >
                  <div class="bracket__flag"></div>
                  {{ bracket.playersFinal.user1.name }}
                  <span>{{ bracket.playersFinal.user1.points }}</span>
                </div>
                <div
                  v-bind:class="{
                    winner: bracket.playersFinal.user2.winner,
                  }"
                  class="bracket__player"
                >
                  <div class="bracket__flag"></div>
                  {{ bracket.playersFinal.user2.name }}
                  <span>{{ bracket.playersFinal.user2.points }}</span>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import { mapGetters } from "vuex";
SwiperCore.use([Navigation, Autoplay]);
import "swiper/swiper.scss";

export default {
  data() {
    return {
      bracket: {
        playersIn16: {
          userIn16A1: {
            name: "",
            country: "",
            winner: false,
            points: "",
          },
          userIn16A2: {
            name: "",
            country: "",
            winner: false,
          },
          userIn16A3: {
            name: "",
            country: "",
            winner: false,
            points: "",
          },
          userIn16A4: {
            name: "",
            country: "",
            winner: false,
            points: "",
          },
          userIn16A5: {
            name: "",
            country: "",
            winner: false,
            points: "",
          },
          userIn16A6: {
            name: "",
            country: "",
            winner: false,
            points: "",
          },
          userIn16A7: {
            name: "",
            country: "",
            winner: false,
            points: "",
          },
          userIn16A8: {
            name: "",
            country: "",
            winner: false,
            points: "",
          },
          userIn16A9: {
            name: "",
            country: "",
            winner: false,
            points: "",
          },
          userIn16A10: {
            name: "",
            country: "",
            winner: false,
            points: "",
          },
          userIn16A11: {
            name: "",
            country: "",
            winner: false,
            points: "",
          },
          userIn16A12: {
            name: "",
            country: "",
            winner: false,
            points: "",
          },
          userIn16A13: {
            name: "",
            country: "",
            winner: false,
            points: "",
          },
          userIn16A14: {
            name: "",
            country: "",
            winner: false,
            points: "",
          },
          userIn16A15: {
            name: "",
            country: "",
            winner: false,
            points: "",
          },
          userIn16A16: {
            name: "",
            country: "",
            winner: false,
            points: "",
          },
        },
        playersIn8: {
          userIn8A1: {
            name: "",
            country: "",
            winner: false,
            points: "",
          },
          userIn8A2: {
            name: "",
            country: "",
            winner: false,
            points: "",
          },
          userIn8A3: {
            name: "",
            country: "",
            winner: false,
            points: "",
          },
          userIn8A4: {
            name: "",
            country: "",
            winner: false,
            points: "",
          },
          userIn8A5: {
            name: "",
            country: "",
            winner: false,
            points: "",
          },
          userIn8A6: {
            name: "",
            country: "",
            winner: false,
            points: "",
          },
          userIn8A7: {
            name: "",
            country: "",
            winner: false,
            points: "",
          },
          userIn8A8: {
            name: "",
            country: "",
            winner: false,
            points: "",
          },
        },
        playersSemiFinal: {
          user1: {
            name: "",
            country: "",
            winner: false,
            points: "",
          },
          user2: {
            name: "",
            country: "",
            winner: false,
            points: "",
          },
          user3: {
            name: "",
            country: "",
            winner: false,
            points: "",
          },
          user4: {
            name: "",
            country: "",
            winner: false,
            points: "",
          },
        },
        playersFinal: {
          user1: {
            name: "",
            country: "",
            winner: false,
            points: "",
          },
          user2: {
            name: "",
            country: "",
            winner: false,
            points: "",
          },
        },
      },
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  computed: {
    ...mapGetters({
      getTournament: "tournament/getСoncreteTournament",
    }),
  },
  mounted() {
    this.bracket = this.getTournament.bracket;
  },
};
</script>

<style lang="scss" scoped>
.bracket {
  border: 2px solid #20252b;
  &__content {
    max-width: 812px;
  }

  &__column {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 815px;
  }

  &__title {
    text-transform: uppercase;

    display: flex;
    justify-content: center;
    font-weight: 500;
    font-size: 16px;
    color: white;
  }

  &__block {
    margin: 10px;
    position: relative;
  }
  &__inner-small::before {
    content: "";
    background-image: url("../../../../assets/img/bracket.svg");
    background-size: contain;
    background-repeat: no-repeat;
    width: 60px;
    height: 100px;
    position: absolute;
    top: -9px;
    left: -59px;
  }
  &__inner-big::before {
    content: "";
    background-image: url("../../../../assets/img/bracket-big.svg");
    background-size: contain;
    background-repeat: no-repeat;
    width: 63px;
    height: 200px;
    position: absolute;
    top: -61.5px;
    left: -59px;
  }

  &__player {
    color: #b1b1b1;
    font-weight: 400;
    font-size: 14px;
    margin: 1px;
    width: 160px;
    height: 36px;
    border: 1px solid #20272e;
    border-radius: 2px 2px 0px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    span {
      background: #20272e;
      width: 36px;
      height: 36px;
      color: #f5f5f5;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  &__btns {
    display: flex;
    justify-content: space-between;
    position: relative;
    top: 27px;
    z-index: 10;
  }
  &__swiper-button-next {
    transform: rotate(180deg);
    margin: 10px;
    background-image: url("../../../../assets/icon/arrow-bracket.svg");
    background-position: top;
    width: 20px;
    height: 17px;
    cursor: pointer;
  }
  &__swiper-button-prev {
    cursor: pointer;
    margin: 10px;
    background-image: url("../../../../assets/icon/arrow-bracket.svg");
    background-position: top;
    width: 20px;
    height: 17px;
  }
}
@media (max-width: 1060px) {
  .bracket {
    &__player {
      width: 265px;
      height: 35px;
    }
    &__inner-small::before {
      width: 50px;
      height: 90px;
      top: -2px;
      left: -48px;
    }
  }
}
.column2 {
  height: 812px;
  justify-content: space-around;
  padding: 25px 0px;
}
.winner {
  border: 1px solid #2c95ff;
  color: #f5f5f5;
  span {
    background: #2c95ff;
    color: #0f1215;
  }
}
</style>