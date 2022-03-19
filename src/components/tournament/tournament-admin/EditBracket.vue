<template>
  <div>
    <div class="bracket">
      <div class="bracket__content">
        <swiper
          :slidesPerView="4"
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
                <div class="bracket__player">
                  <select v-model="bracket.playersIn16.userIn16A1">
                    <option disabled value="">Select player</option>
                    <option
                      v-for="player in getTournament.players"
                      :value="player.title"
                      :key="player.id"
                    >
                      {{ player.title }}
                    </option>
                  </select>
                  <span>22</span>
                </div>
                <div class="bracket__player">
                  <select v-model="bracket.playersIn16.userIn16A2">
                    <option disabled value="">Select player</option>
                    <option
                      v-for="player in getTournament.players"
                      :value="player.title"
                      :key="player.id"
                    >
                      {{ player.title }}
                    </option>
                  </select>
                  <span>22</span>
                </div>
              </div>
              <div class="bracket__block">
                <div class="bracket__player">
                  <select v-model="bracket.playersIn16.userIn16A3">
                    <option disabled value="">Select player</option>
                    <option
                      v-for="player in getTournament.players"
                      :value="player.title"
                      :key="player.id"
                    >
                      {{ player.title }}
                    </option>
                  </select>
                  <span>22</span>
                </div>
                <div class="bracket__player">
                  <select v-model="bracket.playersIn16.userIn16A4">
                    <option disabled value="">Select player</option>
                    <option
                      v-for="player in getTournament.players"
                      :value="player.title"
                      :key="player.id"
                    >
                      {{ player.title }}
                    </option>
                  </select>
                  <span>22</span>
                </div>
              </div>
              <div class="bracket__block">
                <div class="bracket__player">
                  <select v-model="bracket.playersIn16.userIn16A5">
                    <option disabled value="">Select player</option>
                    <option
                      v-for="player in getTournament.players"
                      :value="player.title"
                      :key="player.id"
                    >
                      {{ player.title }}
                    </option>
                  </select>
                  <span>22</span>
                </div>
                <div class="bracket__player">
                  <select v-model="bracket.playersIn16.userIn16A6">
                    <option disabled value="">Select player</option>
                    <option
                      v-for="player in getTournament.players"
                      :value="player.title"
                      :key="player.id"
                    >
                      {{ player.title }}
                    </option>
                  </select>
                  <span>22</span>
                </div>
              </div>
              <div class="bracket__block">
                <div class="bracket__player">
                  <select v-model="bracket.playersIn16.userIn16A7">
                    <option disabled value="">Select player</option>
                    <option
                      v-for="player in getTournament.players"
                      :value="player.title"
                      :key="player.id"
                    >
                      {{ player.title }}
                    </option>
                  </select>
                  <span>22</span>
                </div>
                <div class="bracket__player">
                  <select v-model="bracket.playersIn16.userIn16A8">
                    <option disabled value="">Select player</option>
                    <option
                      v-for="player in getTournament.players"
                      :value="player.title"
                      :key="player.id"
                    >
                      {{ player.title }}
                    </option>
                  </select>
                  <span>22</span>
                </div>
              </div>
              <div class="bracket__block">
                <div class="bracket__player">
                  <select v-model="bracket.playersIn16.userIn16A9">
                    <option disabled value="">Select player</option>
                    <option
                      v-for="player in getTournament.players"
                      :value="player.title"
                      :key="player.id"
                    >
                      {{ player.title }}
                    </option>
                  </select>
                  <span>22</span>
                </div>
                <div class="bracket__player">
                  <select v-model="bracket.playersIn16.userIn16A10">
                    <option disabled value="">Select player</option>
                    <option
                      v-for="player in getTournament.players"
                      :value="player.title"
                      :key="player.id"
                    >
                      {{ player.title }}
                    </option>
                  </select>
                  <span>22</span>
                </div>
              </div>
              <div class="bracket__block">
                <div class="bracket__player">
                  <select v-model="bracket.playersIn16.userIn16A11">
                    <option disabled value="">Select player</option>
                    <option
                      v-for="player in getTournament.players"
                      :value="player.title"
                      :key="player.id"
                    >
                      {{ player.title }}
                    </option>
                  </select>
                  <span>22</span>
                </div>
                <div class="bracket__player">
                  <select v-model="bracket.playersIn16.userIn16A12">
                    <option disabled value="">Select player</option>
                    <option
                      v-for="player in getTournament.players"
                      :value="player.title"
                      :key="player.id"
                    >
                      {{ player.title }}
                    </option>
                  </select>
                  <span>22</span>
                </div>
              </div>
              <div class="bracket__block">
                <div class="bracket__player">
                  <select v-model="bracket.playersIn16.userIn16A13">
                    <option disabled value="">Select player</option>
                    <option
                      v-for="player in getTournament.players"
                      :value="player.title"
                      :key="player.id"
                    >
                      {{ player.title }}
                    </option>
                  </select>
                  <span>22</span>
                </div>
                <div class="bracket__player">
                  <select v-model="bracket.playersIn16.userIn16A14">
                    <option disabled value="">Select player</option>
                    <option
                      v-for="player in getTournament.players"
                      :value="player.title"
                      :key="player.id"
                    >
                      {{ player.title }}
                    </option>
                  </select>
                  <span>22</span>
                </div>
              </div>
              <div class="bracket__block">
                <div class="bracket__player">
                  <select v-model="bracket.playersIn16.userIn16A15">
                    <option disabled value="">Select player</option>
                    <option
                      v-for="player in getTournament.players"
                      :value="player.title"
                      :key="player.id"
                    >
                      {{ player.title }}
                    </option>
                  </select>
                  <span>22</span>
                </div>
                <div class="bracket__player">
                  <select v-model="bracket.playersIn16.userIn16A16">
                    <option disabled value="">Select player</option>
                    <option
                      v-for="player in getTournament.players"
                      :value="player.title"
                      :key="player.id"
                    >
                      {{ player.title }}
                    </option>
                  </select>
                  <span>22</span>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="bracket__title">Round 8</div>
            <div class="bracket__column column2">
              <div class="bracket__block bracket__inner-small">
                <div class="bracket__player">
                  <select v-model="bracket.playersIn8.userIn8A1">
                    <option disabled value="">Select player</option>
                    <option
                      v-for="player in getTournament.players"
                      :value="player.title"
                      :key="player.id"
                    >
                      {{ player.title }}
                    </option>
                  </select>
                  <span>22</span>
                </div>
                <div class="bracket__player">
                  <select v-model="bracket.playersIn8.userIn8A2">
                    <option disabled value="">Select player</option>
                    <option
                      v-for="player in getTournament.players"
                      :value="player.title"
                      :key="player.id"
                    >
                      {{ player.title }}
                    </option>
                  </select>
                  <span>22</span>
                </div>
              </div>
              <div class="bracket__block bracket__inner-small">
                <div class="bracket__player">
                  <select v-model="bracket.playersIn8.userIn8A3">
                    <option disabled value="">Select player</option>
                    <option
                      v-for="player in getTournament.players"
                      :value="player.title"
                      :key="player.id"
                    >
                      {{ player.title }}
                    </option>
                  </select>
                  <span>22</span>
                </div>
                <div class="bracket__player">
                  <select v-model="bracket.playersIn8.userIn8A4">
                    <option disabled value="">Select player</option>
                    <option
                      v-for="player in getTournament.players"
                      :value="player.title"
                      :key="player.id"
                    >
                      {{ player.title }}
                    </option>
                  </select>
                  <span>22</span>
                </div>
              </div>
              <div class="bracket__block bracket__inner-small">
                <div class="bracket__player">
                  <select v-model="bracket.playersIn8.userIn8A5">
                    <option disabled value="">Select player</option>
                    <option
                      v-for="player in getTournament.players"
                      :value="player.title"
                      :key="player.id"
                    >
                      {{ player.title }}
                    </option>
                  </select>
                  <span>22</span>
                </div>
                <div class="bracket__player">
                  <select v-model="bracket.playersIn8.userIn8A6">
                    <option disabled value="">Select player</option>
                    <option
                      v-for="player in getTournament.players"
                      :value="player.title"
                      :key="player.id"
                    >
                      {{ player.title }}
                    </option>
                  </select>
                  <span>22</span>
                </div>
              </div>
              <div class="bracket__block bracket__inner-small">
                <div class="bracket__player">
                  <select v-model="bracket.playersIn8.userIn8A7">
                    <option disabled value="">Select player</option>
                    <option
                      v-for="player in getTournament.players"
                      :value="player.title"
                      :key="player.id"
                    >
                      {{ player.title }}
                    </option>
                  </select>
                  <span>22</span>
                </div>
                <div class="bracket__player">
                  <select v-model="bracket.playersIn8.userIn8A8">
                    <option disabled value="">Select player</option>
                    <option
                      v-for="player in getTournament.players"
                      :value="player.title"
                      :key="player.id"
                    >
                      {{ player.title }}
                    </option>
                  </select>
                  <span>22</span>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="bracket__title">Semi final</div>
            <div class="bracket__column column2">
              <div class="bracket__block bracket__inner-small">
                <div class="bracket__player">
                  <select v-model="bracket.playersSemiFinal.user1">
                    <option disabled value="">Select player</option>
                    <option
                      v-for="player in getTournament.players"
                      :value="player.title"
                      :key="player.id"
                    >
                      {{ player.title }}
                    </option>
                  </select>
                  <span>22</span>
                </div>
                <div class="bracket__player">
                  <select v-model="bracket.playersSemiFinal.user2">
                    <option disabled value="">Select player</option>
                    <option
                      v-for="player in getTournament.players"
                      :value="player.title"
                      :key="player.id"
                    >
                      {{ player.title }}
                    </option>
                  </select>
                  <span>22</span>
                </div>
              </div>
              <div class="bracket__block bracket__inner-small">
                <div class="bracket__player">
                  <select v-model="bracket.playersSemiFinal.user3">
                    <option disabled value="">Select player</option>
                    <option
                      v-for="player in getTournament.players"
                      :value="player.title"
                      :key="player.id"
                    >
                      {{ player.title }}
                    </option>
                  </select>
                  <span>22</span>
                </div>
                <div class="bracket__player">
                  <select v-model="bracket.playersSemiFinal.user4">
                    <option disabled value="">Select player</option>
                    <option
                      v-for="player in getTournament.players"
                      :value="player.title"
                      :key="player.id"
                    >
                      {{ player.title }}
                    </option>
                  </select>
                  <span>22</span>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="bracket__title">final</div>
            <div class="bracket__column">
              <div class="bracket__block bracket__inner-big">
                <div class="bracket__player">
                  <select v-model="bracket.playersFinal.user1">
                    <option disabled value="">Select player</option>
                    <option
                      v-for="player in getTournament.players"
                      :value="player.title"
                      :key="player.id"
                    >
                      {{ player.title }}
                    </option>
                  </select>
                  <span>22</span>
                </div>
                <div class="bracket__player">
                  <select v-model="bracket.playersFinal.user2">
                    <option disabled value="">Select player</option>
                    <option
                      v-for="player in getTournament.players"
                      :value="player.title"
                      :key="player.id"
                    >
                      {{ player.title }}
                    </option>
                  </select>
                  <span>22</span>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="bracket__save">
        <button>Save</button>
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
          userIn16A1: "",
          userIn16A2: "",
          userIn16A3: "",
          userIn16A4: "",
          userIn16A5: "",
          userIn16A6: "",
          userIn16A7: "",
          userIn16A8: "",
          userIn16A9: "",
          userIn16A10: "",
          userIn16A11: "",
          userIn16A12: "",
          userIn16A13: "",
          userIn16A14: "",
          userIn16A15: "",
          userIn16A16: "",
        },
        playersIn8: {
          userIn8A1: "",
          userIn8A2: "",
          userIn8A3: "",
          userIn8A4: "",
          userIn8A5: "",
          userIn8A6: "",
          userIn8A7: "",
          userIn8A8: "",
        },
        playersSemiFinal: {
          user1: "",
          user2: "",
          user3: "",
          user4: "",
        },
        playersFinal: {
          user1: "",
          user2: "",
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
};
</script>

<style lang="scss" scoped>
.bracket {
  max-width: 1200px;
  margin: 0 auto;

  &__content {
    max-width: 1200;
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
    background-image: url("../../../assets/img/bracket.svg");
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
    background-image: url("../../../assets/img/bracket-big.svg");
    background-size: contain;
    background-repeat: no-repeat;
    width: 63px;
    height: 200px;
    position: absolute;
    top: -61.5px;
    left: -59px;
  }

  &__player {
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
    select {
      background-color: #0f1215;
      width: 121px;
      height: 34px;
      color: #b1b1b1;
      font-weight: 400;
      font-size: 14px;
    }
  }

  &__btns {
    display: flex;
    justify-content: space-between;
    position: relative;
    top: 27px;
    z-index: 10;
  }
  &__save {
    display: flex;
    justify-content: center;
    button {
      background: linear-gradient(180deg, #2788f6 0%, #0960e0 100%);
      border-radius: 2px;
      width: 150px;
      height: 44px;
      color: #f5f5f5;
      font-weight: 700;
      margin-bottom: 70px;
    }
  }
}
.column2 {
  height: 812px;
  justify-content: space-around;
  padding: 25px 0px;
}
</style>