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
              <li>Games</li>
              <li>Shop</li>
              <li>Sponsorship</li>
            </ul>

            <div v-if="user" class="header__current-user">
              <div class="header__icon-user"><img src="" alt="" /></div>
              <div class="header__user-body">
                <div class="header__user-name">{{ user.name }}</div>
                <div class="header__user-many">
                  <div class="header__user-euro">111 <span>EUR</span></div>
                  <span>/</span>
                  <div class="header__user-dtc">111 <span>DTC</span></div>
                </div>
              </div>
              <div @click="signOut" class="header__user-drop-down">></div>
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

export default {
  data() {
    return {
      isActive: "",
      user: null,
    };
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
    signOut() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          console.log("Вышли с аккаунта");
          this.user = null;
        })
        .catch((error) => {
          // An error happened.
        });
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
    z-index: 2;

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
    display: flex;
    max-width: 200px;
    max-height: 40px;
    padding: 0px 5px;
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
    color: #2b353f;
    transform: rotate(90deg);
    cursor: pointer;
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
      z-index: 1;
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
      z-index: 1;
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
      z-index: 3;
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
      // top: 8.5px;
      // transform: rotate(45deg);
      // top: 9px;
    }

    &__burger.active::after {
      transform: translateY(-8.5px);
      transition: all 0.3s ease 0.2s;
      // bottom: 8.5px;
      // transform: rotate(-45deg);
      // bottom: 9px;
    }

    &__burger.active span {
      transform: scale(0);
      transition: all 0.3s ease 0s;
    }
  }
}
</style>