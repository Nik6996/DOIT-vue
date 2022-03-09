<template>
  <div>
    <div class="home">
      <div v-if="topIsActive" class="home__top top">
        <div class="top__content">
          <div class="top__title">DOIT <span>BETA</span></div>
          <div class="top__desc">
            Prepare for your esports career and get ready for awesome
            tournaments with big prize pools and many fun!
            <span>Register Now!</span>
          </div>
          <div class="top__btns">
            <button @click="this.$router.push('/login')" class="top__login">
              login
            </button>
            <button @click="this.$router.push('/sign-up')" class="top__sign-up">
              Sign up
            </button>
          </div>
        </div>
      </div>
      <div class="home__content">
        <news-slider />
        <game-slider />
      </div>
    </div>
  </div>
</template>

<script>
import NewsSlider from "@/components/home/news_slider/NewsSlider.vue";
import GameSlider from "@/components/home/games_slider/GameSlider.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  data() {
    return {
      topIsActive: true,
    };
  },
  components: {
    GameSlider,
    NewsSlider,
  },

  async created() {
    const auth = getAuth();
    onAuthStateChanged(auth, (userSystem) => {
      if (userSystem) {
        this.topIsActive = false;
      } else {
        this.topIsActive = true;
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.home {
  max-width: 1200px;
  padding: 30px 10px;
  margin: 0 auto;
  background-image: url("../assets/img/homeBcg.jpg");
  background-repeat: repeat;
  position: relative;
  z-index: 1;
  height: 100%;
  &__top {
  }

  &__content {
  }
}
.top {
  margin: 0 auto;
  max-width: 1008px;
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 760px;
    background-size: contain;
    background-image: url("../assets/img/bcgMain.svg");
    background-repeat: no-repeat;
    padding-top: 14%;
  }

  &__title {
    font-weight: 700;
    display: flex;
    justify-content: center;
    font-size: 125px;
    color: #f5f5f5;
    margin-bottom: 15px;
    span {
      margin-left: 10px;
    }
  }

  &__desc {
    text-align: center;
    color: #cccccc;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 460px;
    line-height: 24px;
  }

  &__btns {
    margin-top: 26px;
  }

  &__login {
    cursor: pointer;
    width: 105px;
    height: 44px;
    background-color: #1a222d;
    color: #f5f5f5;
    font-weight: 700;
  }

  &__sign-up {
    cursor: pointer;
    width: 120px;
    height: 44px;
    background: linear-gradient(180deg, #2788f6 0%, #0960e0 100%);
    margin-left: 8px;
    color: #f5f5f5;
    font-weight: 700;
  }
}
@media (max-width: 1430px) {
  .home {
    margin-left: 120px;
  }
}
@media (max-width: 1060px) {
  .home {
    margin: 0 auto;
  }
}
@media (max-width: 768px) {
  .top {
    justify-content: center;
    &__title {
      font-size: 84px;
      span {
        display: none;
      }
    }
    &__content {
      height: 100%;
      padding-bottom: 10%;
      background-position: center;
    }
  }
}
</style>