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
              slidesPerView: 4,
            },
          }"
          class="swiper"
        >
          <swiper-slide>
            <div class="bracket__title">Round 16</div>
            <div class="bracket__column">
              <div class="bracket__block">
                <div class="bracket__player">
                  <select v-model="bracket.playersIn16.userIn16A1.name">
                    <option disabled value="">Select player</option>
                    <option
                      v-for="player in getTournament.players"
                      :value="player.title"
                      :key="player.id"
                    >
                      {{ player.title }}
                    </option>
                  </select>
                  <input
                    class="points"
                    v-model="bracket.playersIn16.userIn16A1.points"
                    type="text"
                  />
                  <input
                    class="winner"
                    type="checkbox"
                    v-model="bracket.playersIn16.userIn16A1.winner"
                  />
                </div>
                <div class="bracket__player">
                  <select v-model="bracket.playersIn16.userIn16A2.name">
                    <option disabled value="">Select player</option>
                    <option
                      v-for="player in getTournament.players"
                      :value="player.title"
                      :key="player.id"
                    >
                      {{ player.title }}
                    </option>
                  </select>
                  <input
                    class="points"
                    v-model="bracket.playersIn16.userIn16A2.points"
                    type="text"
                  />
                  <input
                    class="winner"
                    type="checkbox"
                    v-model="bracket.playersIn16.userIn16A2.winner"
                  />
                </div>
              </div>
              <div class="bracket__block">
                <div class="bracket__player">
                  <select v-model="bracket.playersIn16.userIn16A3.name">
                    <option disabled value="">Select player</option>
                    <option
                      v-for="player in getTournament.players"
                      :value="player.title"
                      :key="player.id"
                    >
                      {{ player.title }}
                    </option>
                  </select>
                  <input
                    class="points"
                    v-model="bracket.playersIn16.userIn16A3.points"
                    type="text"
                  />
                  <input
                    class="winner"
                    type="checkbox"
                    v-model="bracket.playersIn16.userIn16A3.winner"
                  />
                </div>
                <div class="bracket__player">
                  <select v-model="bracket.playersIn16.userIn16A4.name">
                    <option disabled value="">Select player</option>
                    <option
                      v-for="player in getTournament.players"
                      :value="player.title"
                      :key="player.id"
                    >
                      {{ player.title }}
                    </option>
                  </select>
                  <input
                    class="points"
                    v-model="bracket.playersIn16.userIn16A4.points"
                    type="text"
                  />
                  <input
                    class="winner"
                    type="checkbox"
                    v-model="bracket.playersIn16.userIn16A4.winner"
                  />
                </div>
              </div>
              <div class="bracket__block">
                <div class="bracket__player">
                  <select v-model="bracket.playersIn16.userIn16A5.name">
                    <option disabled value="">Select player</option>
                    <option
                      v-for="player in getTournament.players"
                      :value="player.title"
                      :key="player.id"
                    >
                      {{ player.title }}
                    </option>
                  </select>
                  <input
                    class="points"
                    v-model="bracket.playersIn16.userIn16A5.points"
                    type="text"
                  />
                  <input
                    class="winner"
                    type="checkbox"
                    v-model="bracket.playersIn16.userIn16A5.winner"
                  />
                </div>
                <div class="bracket__player">
                  <select v-model="bracket.playersIn16.userIn16A6.name">
                    <option disabled value="">Select player</option>
                    <option
                      v-for="player in getTournament.players"
                      :value="player.title"
                      :key="player.id"
                    >
                      {{ player.title }}
                    </option>
                  </select>
                  <input
                    class="points"
                    v-model="bracket.playersIn16.userIn16A6.points"
                    type="text"
                  />
                  <input
                    class="winner"
                    type="checkbox"
                    v-model="bracket.playersIn16.userIn16A6.winner"
                  />
                </div>
              </div>
              <div class="bracket__block">
                <div class="bracket__player">
                  <select v-model="bracket.playersIn16.userIn16A7.name">
                    <option disabled value="">Select player</option>
                    <option
                      v-for="player in getTournament.players"
                      :value="player.title"
                      :key="player.id"
                    >
                      {{ player.title }}
                    </option>
                  </select>
                  <input
                    class="points"
                    v-model="bracket.playersIn16.userIn16A7.points"
                    type="text"
                  />
                  <input
                    class="winner"
                    type="checkbox"
                    v-model="bracket.playersIn16.userIn16A7.winner"
                  />
                </div>
                <div class="bracket__player">
                  <select v-model="bracket.playersIn16.userIn16A8.name">
                    <option disabled value="">Select player</option>
                    <option
                      v-for="player in getTournament.players"
                      :value="player.title"
                      :key="player.id"
                    >
                      {{ player.title }}
                    </option>
                  </select>
                  <input
                    class="points"
                    v-model="bracket.playersIn16.userIn16A8.points"
                    type="text"
                  />
                  <input
                    class="winner"
                    type="checkbox"
                    v-model="bracket.playersIn16.userIn16A8.winner"
                  />
                </div>
              </div>
              <div class="bracket__block">
                <div class="bracket__player">
                  <select v-model="bracket.playersIn16.userIn16A9.name">
                    <option disabled value="">Select player</option>
                    <option
                      v-for="player in getTournament.players"
                      :value="player.title"
                      :key="player.id"
                    >
                      {{ player.title }}
                    </option>
                  </select>
                  <input
                    class="points"
                    v-model="bracket.playersIn16.userIn16A9.points"
                    type="text"
                  />
                  <input
                    class="winner"
                    type="checkbox"
                    v-model="bracket.playersIn16.userIn16A9.winner"
                  />
                </div>
                <div class="bracket__player">
                  <select v-model="bracket.playersIn16.userIn16A10.name">
                    <option disabled value="">Select player</option>
                    <option
                      v-for="player in getTournament.players"
                      :value="player.title"
                      :key="player.id"
                    >
                      {{ player.title }}
                    </option>
                  </select>
                  <input
                    class="points"
                    v-model="bracket.playersIn16.userIn16A10.points"
                    type="text"
                  />
                  <input
                    class="winner"
                    type="checkbox"
                    v-model="bracket.playersIn16.userIn16A10.winner"
                  />
                </div>
              </div>
              <div class="bracket__block">
                <div class="bracket__player">
                  <select v-model="bracket.playersIn16.userIn16A11.name">
                    <option disabled value="">Select player</option>
                    <option
                      v-for="player in getTournament.players"
                      :value="player.title"
                      :key="player.id"
                    >
                      {{ player.title }}
                    </option>
                  </select>
                  <input
                    class="points"
                    v-model="bracket.playersIn16.userIn16A11.points"
                    type="text"
                  />
                  <input
                    class="winner"
                    type="checkbox"
                    v-model="bracket.playersIn16.userIn16A11.winner"
                  />
                </div>
                <div class="bracket__player">
                  <select v-model="bracket.playersIn16.userIn16A12.name">
                    <option disabled value="">Select player</option>
                    <option
                      v-for="player in getTournament.players"
                      :value="player.title"
                      :key="player.id"
                    >
                      {{ player.title }}
                    </option>
                  </select>
                  <input
                    class="points"
                    v-model="bracket.playersIn16.userIn16A12.points"
                    type="text"
                  />
                  <input
                    class="winner"
                    type="checkbox"
                    v-model="bracket.playersIn16.userIn16A12.winner"
                  />
                </div>
              </div>
              <div class="bracket__block">
                <div class="bracket__player">
                  <select v-model="bracket.playersIn16.userIn16A13.name">
                    <option disabled value="">Select player</option>
                    <option
                      v-for="player in getTournament.players"
                      :value="player.title"
                      :key="player.id"
                    >
                      {{ player.title }}
                    </option>
                  </select>
                  <input
                    class="points"
                    v-model="bracket.playersIn16.userIn16A13.points"
                    type="text"
                  />
                  <input
                    class="winner"
                    type="checkbox"
                    v-model="bracket.playersIn16.userIn16A13.winner"
                  />
                </div>
                <div class="bracket__player">
                  <select v-model="bracket.playersIn16.userIn16A14.name">
                    <option disabled value="">Select player</option>
                    <option
                      v-for="player in getTournament.players"
                      :value="player.title"
                      :key="player.id"
                    >
                      {{ player.title }}
                    </option>
                  </select>
                  <input
                    class="points"
                    v-model="bracket.playersIn16.userIn16A14.points"
                    type="text"
                  />
                  <input
                    class="winner"
                    type="checkbox"
                    v-model="bracket.playersIn16.userIn16A14.winner"
                  />
                </div>
              </div>
              <div class="bracket__block">
                <div class="bracket__player">
                  <select v-model="bracket.playersIn16.userIn16A15.name">
                    <option disabled value="">Select player</option>
                    <option
                      v-for="player in getTournament.players"
                      :value="player.title"
                      :key="player.id"
                    >
                      {{ player.title }}
                    </option>
                  </select>
                  <input
                    class="points"
                    v-model="bracket.playersIn16.userIn16A15.points"
                    type="text"
                  />
                  <input
                    class="winner"
                    type="checkbox"
                    v-model="bracket.playersIn16.userIn16A15.winner"
                  />
                </div>
                <div class="bracket__player">
                  <select v-model="bracket.playersIn16.userIn16A16.name">
                    <option disabled value="">Select player</option>
                    <option
                      v-for="player in getTournament.players"
                      :value="player.title"
                      :key="player.id"
                    >
                      {{ player.title }}
                    </option>
                  </select>
                  <input
                    class="points"
                    v-model="bracket.playersIn16.userIn16A16.points"
                    type="text"
                  />
                  <input
                    class="winner"
                    type="checkbox"
                    v-model="bracket.playersIn16.userIn16A16.winner"
                  />
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="bracket__title">Round 8</div>
            <div class="bracket__column column2">
              <div class="bracket__block bracket__inner-small">
                <div class="bracket__player">
                  <select v-model="bracket.playersIn8.userIn8A1.name">
                    <option disabled value="">Select player</option>
                    <option
                      v-for="player in getTournament.players"
                      :value="player.title"
                      :key="player.id"
                    >
                      {{ player.title }}
                    </option>
                  </select>
                  <input
                    class="points"
                    v-model="bracket.playersIn8.userIn8A1.points"
                    type="text"
                  />
                  <input
                    class="winner"
                    type="checkbox"
                    v-model="bracket.playersIn8.userIn8A1.winner"
                  />
                </div>
                <div class="bracket__player">
                  <select v-model="bracket.playersIn8.userIn8A2.name">
                    <option disabled value="">Select player</option>
                    <option
                      v-for="player in getTournament.players"
                      :value="player.title"
                      :key="player.id"
                    >
                      {{ player.title }}
                    </option>
                  </select>
                  <input
                    class="points"
                    v-model="bracket.playersIn8.userIn8A2.points"
                    type="text"
                  />
                  <input
                    class="winner"
                    type="checkbox"
                    v-model="bracket.playersIn8.userIn8A2.winner"
                  />
                </div>
              </div>
              <div class="bracket__block bracket__inner-small">
                <div class="bracket__player">
                  <select v-model="bracket.playersIn8.userIn8A3.name">
                    <option disabled value="">Select player</option>
                    <option
                      v-for="player in getTournament.players"
                      :value="player.title"
                      :key="player.id"
                    >
                      {{ player.title }}
                    </option>
                  </select>
                  <input
                    class="points"
                    v-model="bracket.playersIn8.userIn8A3.points"
                    type="text"
                  />
                  <input
                    class="winner"
                    type="checkbox"
                    v-model="bracket.playersIn8.userIn8A3.winner"
                  />
                </div>
                <div class="bracket__player">
                  <select v-model="bracket.playersIn8.userIn8A4.name">
                    <option disabled value="">Select player</option>
                    <option
                      v-for="player in getTournament.players"
                      :value="player.title"
                      :key="player.id"
                    >
                      {{ player.title }}
                    </option>
                  </select>
                  <input
                    class="points"
                    v-model="bracket.playersIn8.userIn8A4.points"
                    type="text"
                  />
                  <input
                    class="winner"
                    type="checkbox"
                    v-model="bracket.playersIn8.userIn8A4.winner"
                  />
                </div>
              </div>
              <div class="bracket__block bracket__inner-small">
                <div class="bracket__player">
                  <select v-model="bracket.playersIn8.userIn8A5.name">
                    <option disabled value="">Select player</option>
                    <option
                      v-for="player in getTournament.players"
                      :value="player.title"
                      :key="player.id"
                    >
                      {{ player.title }}
                    </option>
                  </select>
                  <input
                    class="points"
                    v-model="bracket.playersIn8.userIn8A5.points"
                    type="text"
                  />
                  <input
                    class="winner"
                    type="checkbox"
                    v-model="bracket.playersIn8.userIn8A5.winner"
                  />
                </div>
                <div class="bracket__player">
                  <select v-model="bracket.playersIn8.userIn8A6.name">
                    <option disabled value="">Select player</option>
                    <option
                      v-for="player in getTournament.players"
                      :value="player.title"
                      :key="player.id"
                    >
                      {{ player.title }}
                    </option>
                  </select>
                  <input
                    class="points"
                    v-model="bracket.playersIn8.userIn8A6.points"
                    type="text"
                  />
                  <input
                    class="winner"
                    type="checkbox"
                    v-model="bracket.playersIn8.userIn8A6.winner"
                  />
                </div>
              </div>
              <div class="bracket__block bracket__inner-small">
                <div class="bracket__player">
                  <select v-model="bracket.playersIn8.userIn8A7.name">
                    <option disabled value="">Select player</option>
                    <option
                      v-for="player in getTournament.players"
                      :value="player.title"
                      :key="player.id"
                    >
                      {{ player.title }}
                    </option>
                  </select>
                  <input
                    class="points"
                    v-model="bracket.playersIn8.userIn8A7.points"
                    type="text"
                  />
                  <input
                    class="winner"
                    type="checkbox"
                    v-model="bracket.playersIn8.userIn8A7.winner"
                  />
                </div>
                <div class="bracket__player">
                  <select v-model="bracket.playersIn8.userIn8A8.name">
                    <option disabled value="">Select player</option>
                    <option
                      v-for="player in getTournament.players"
                      :value="player.title"
                      :key="player.id"
                    >
                      {{ player.title }}
                    </option>
                  </select>
                  <input
                    class="points"
                    v-model="bracket.playersIn8.userIn8A8.points"
                    type="text"
                  />
                  <input
                    class="winner"
                    type="checkbox"
                    v-model="bracket.playersIn8.userIn8A8.winner"
                  />
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="bracket__title">Semi final</div>
            <div class="bracket__column column2">
              <div class="bracket__block bracket__inner-small">
                <div class="bracket__player">
                  <select v-model="bracket.playersSemiFinal.user1.name">
                    <option disabled value="">Select player</option>
                    <option
                      v-for="player in getTournament.players"
                      :value="player.title"
                      :key="player.id"
                    >
                      {{ player.title }}
                    </option>
                  </select>
                  <input
                    class="points"
                    v-model="bracket.playersSemiFinal.user1.points"
                    type="text"
                  />
                  <input
                    class="winner"
                    type="checkbox"
                    v-model="bracket.playersSemiFinal.user1.winner"
                  />
                </div>
                <div class="bracket__player">
                  <select v-model="bracket.playersSemiFinal.user2.name">
                    <option disabled value="">Select player</option>
                    <option
                      v-for="player in getTournament.players"
                      :value="player.title"
                      :key="player.id"
                    >
                      {{ player.title }}
                    </option>
                  </select>
                  <input
                    class="points"
                    v-model="bracket.playersSemiFinal.user2.points"
                    type="text"
                  />
                  <input
                    class="winner"
                    type="checkbox"
                    v-model="bracket.playersSemiFinal.user2.winner"
                  />
                </div>
              </div>
              <div class="bracket__block bracket__inner-small">
                <div class="bracket__player">
                  <select v-model="bracket.playersSemiFinal.user3.name">
                    <option disabled value="">Select player</option>
                    <option
                      v-for="player in getTournament.players"
                      :value="player.title"
                      :key="player.id"
                    >
                      {{ player.title }}
                    </option>
                  </select>
                  <input
                    class="points"
                    v-model="bracket.playersSemiFinal.user3.points"
                    type="text"
                  />
                  <input
                    class="winner"
                    type="checkbox"
                    v-model="bracket.playersSemiFinal.user3.winner"
                  />
                </div>
                <div class="bracket__player">
                  <select v-model="bracket.playersSemiFinal.user4.name">
                    <option disabled value="">Select player</option>
                    <option
                      v-for="player in getTournament.players"
                      :value="player.title"
                      :key="player.id"
                    >
                      {{ player.title }}
                    </option>
                  </select>
                  <input
                    class="points"
                    v-model="bracket.playersSemiFinal.user4.points"
                    type="text"
                  />
                  <input
                    class="winner"
                    type="checkbox"
                    v-model="bracket.playersSemiFinal.user4.winner"
                  />
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="bracket__title">final</div>
            <div class="bracket__column">
              <div class="bracket__block bracket__inner-big">
                <div class="bracket__player">
                  <select v-model="bracket.playersFinal.user1.name">
                    <option disabled value="">Select player</option>
                    <option
                      v-for="player in getTournament.players"
                      :value="player.title"
                      :key="player.id"
                    >
                      {{ player.title }}
                    </option>
                  </select>
                  <input
                    class="points"
                    v-model="bracket.playersFinal.user1.points"
                    type="text"
                  />
                  <input
                    class="winner"
                    type="checkbox"
                    v-model="bracket.playersFinal.user1.winner"
                  />
                </div>
                <div class="bracket__player">
                  <select v-model="bracket.playersFinal.user2.name">
                    <option disabled value="">Select player</option>
                    <option
                      v-for="player in getTournament.players"
                      :value="player.title"
                      :key="player.id"
                    >
                      {{ player.title }}
                    </option>
                  </select>
                  <input
                    class="points"
                    v-model="bracket.playersFinal.user2.points"
                    type="text"
                  />
                  <input
                    class="winner"
                    type="checkbox"
                    v-model="bracket.playersFinal.user2.winner"
                  />
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="bracket__save">
        <button @click="save()">Save</button>
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
    if (this.getTournament.bracket) {
      this.bracket = this.getTournament.bracket;
    }
  },
  methods: {
    async save() {
      const tournament = this.getTournament;
      tournament.bracket = this.bracket;
      await this.$store.dispatch("tournament/save", tournament);
      this.$router.push(
        `/tournament/` +
          this.getTournament.gameInfo.game +
          "/" +
          this.getTournament.id
      );
    },
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
.points {
  background: #20272e;
  width: 36px;
  height: 36px;
  color: #f5f5f5;
  text-align: center;
}
.winner {
  position: absolute;
  right: -20px;
}
</style>