<template>
  <div>
    <header>
      <div class="header">
        <div class="header__content">
          <div
            @click="burger()"
            v-bind:class="{ active: isActive }"
            class="header__burger"
          >
            <span></span>
          </div>
          <div @click="this.$router.push('/')" class="header__logo">
            <img src="@/assets/img/logo.png" alt="" />
          </div>
          <div v-bind:class="{ active: isActive }" class="header__menu">
            <ul>
              <li>Play</li>
              <li>News</li>
              <li @click="this.$router.push('/games')">Games</li>
              <li>Shop</li>
              <li>Sponsorship</li>
            </ul>

            <div
              @mouseover="upHere = true"
              @mouseleave="upHere = false"
              v-if="user"
              class="header__current-user"
            >
              <div class="header__current-user-main">
                <div class="header__icon-user">
                  <img src="@/assets/img/avatar.jpg" alt="" />
                </div>
                <div class="header__user-body">
                  <div class="header__user-name">{{ user.name }}</div>
                  <div class="header__user-many">
                    <div class="header__user-euro">0 <span>EUR</span></div>
                    <span>/</span>
                    <div class="header__user-dtc">0 <span>DTC</span></div>
                  </div>
                </div>
              </div>
              <div
                @click="dropUp()"
                :class="{ arrow: upHere }"
                class="header__user-drop-down"
              >
                <img src="@/assets/icon/arrow-header.svg" alt="" />
              </div>
              <drop-down-menu-header v-show="upHere" />
            </div>

            <div v-else class="header__user">
              <button
                @click="this.$router.push('/login')"
                class="header__login"
              >
                Login
              </button>
              <button
                @click="this.$router.push('/sign-up')"
                class="header__sign-up"
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import DropDownMenuHeader from "@/components/login/DropDownMenuHeader.vue";

export default {
  data() {
    return {
      isActive: "",
      user: null,
      upHere: false,
    };
  },
  components: {
    DropDownMenuHeader,
  },
  computed: {
    ...mapGetters({
      getUser: "loadUser/getUser",
    }),
  },
  watch: {
    getUser: {
      handler(user) {
        this.user = user;
      },
    },
  },
  async mounted() {
    const auth = getAuth();
    await onAuthStateChanged(auth, (userSystem) => {
      if (userSystem) {
        this.$store.dispatch("loadUser/load", userSystem.uid);
      } else {
        console.log("нужна аутентификация");
      }
    });
  },
  methods: {
    dropUp() {
      if (this.upHere) {
        this.upHere = false;
      } else {
        this.upHere = true;
      }
      // const auth = getAuth();
      // signOut(auth)
      //   .then(() => {
      //     console.log("Вышли с аккаунта");
      //     this.user = null;
      //   })
      //   .catch((error) => {
      //     // An error happened.
      //   });
    },
    burger() {
      if (!this.isActive) {
        this.isActive = "active";
      } else {
        this.isActive = "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  padding: 32px 15px;
  background-color: #0f1215;

  &__content {
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    position: relative;
    z-index: 4;

    cursor: pointer;
  }

  &__menu {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    font-weight: 700;
    color: #f5f5f5;
    ul {
      display: flex;
      li {
        padding: 0px 28px;
        cursor: pointer;
      }
    }
  }
  &__burger {
    display: none;
  }

  &__user {
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

  &__current-user {
    position: relative;
    display: flex;
    width: 225px;
    height: 50px;
    padding: 5px 10px;
    background: #161a1f;
  }
  &__current-user-main {
    display: flex;
  }

  &__icon-user {
    width: 40px;
    height: 40px;
    img {
      width: 40px;
      height: 40px;
      object-fit: cover;
    }
  }

  &__user-body {
    margin-left: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__user-name {
    font-weight: 500;
    font-size: 14px;
  }

  &__user-many {
    color: #55aaff;
    font-size: 12px;
    display: flex;
    span {
      color: #55aaff;
      margin: 0px 5px;
    }
  }

  &__user-euro {
    span {
      color: #55aaff;
      font-size: 12px;
    }
  }

  &__user-dtc {
    span {
      font-size: 12px;
      color: #55aaff;
    }
  }

  &__user-drop-down {
    position: absolute;
    right: 15px;
    top: 40%;
    color: #2b353f;
    display: flex;
    align-items: center;
    width: 15px;
    height: 10px;

    transition: all 0.5s;
  }
}
@media (max-width: 1430px) {
  .header {
    &__logo {
      margin-left: 100px;
    }
  }
}
@media (max-width: 1060px) {
  .header {
    padding: 10px 15px;
    &__logo {
      img {
        width: 45px;
      }
    }
    &__menu {
      position: fixed;
      top: -100%;
      background-color: #0f1215;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      padding: 100px 0px;
      transition: all 0.5s;
      overflow: auto;
      z-index: 3;
      ul {
        align-items: center;
        flex-direction: column;
        li {
          margin-bottom: 30px;
        }
      }
    }
    &__menu.active {
      top: 0;
      z-index: 3;
    }
    &__user {
      display: flex;
      flex-direction: column;
    }
    &__login {
      width: 320px;
      margin: 80px 0px 12px 0px;
    }
    &__sign-up {
      width: 320px;
      margin: 0;
    }

    &__burger {
      display: block;
      position: relative;
      width: 30px;
      height: 20px;
      z-index: 4;
    }

    &__burger span {
      position: absolute;
      background-color: rgb(255, 255, 255);
      position: absolute;
      left: 0;
      width: 100%;
      height: 2.2px;
      top: 9px;
      transition: all 0.3s ease 0.6s;
    }

    &__burger:before,
    &__burger::after {
      content: "";
      background-color: rgb(255, 255, 255);
      position: absolute;
      width: 100%;
      height: 2px;
      left: 0;
    }
    &__burger:before {
      height: 2.6px;
      top: 0;
      transition: all 0.3s ease 0.2s;
    }
    &__burger::after {
      bottom: 0;
      transition: all 0.3s ease 0.4s;
    }

    &__burger.active::before {
      transform: translateY(8.5px);
      transition: all 0.3s ease 0.4s;
    }

    &__burger.active::after {
      transform: translateY(-8.5px);
      transition: all 0.3s ease 0.2s;
    }

    &__burger.active span {
      transform: scale(0);
      transition: all 0.3s ease 0s;
    }
  }
}
.arrow {
  transform: rotateX(180deg);
  transition: all 0.5s;
}
</style>