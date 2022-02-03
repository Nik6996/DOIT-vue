<template>
  <div>
    <div class="login">
      <div class="login__header">
        <div @click="this.$router.push('/')" class="login__return">
          <img src="@/assets/icon/arrow_left.svg" alt="" />
        </div>
        <div @click="this.$router.push('/')" class="login__close">
          <img src="@/assets/icon/close.svg" alt="" />
        </div>
      </div>
      <div class="login__content">
        <div class="login__logo">
          <img src="@/assets/img/logo.png" alt="" />
        </div>
        <div class="login__title">Login</div>
        <Form
          @submit="onSubmit"
          :validation-schema="formSchema"
          :initial-values="initialFormValues"
        >
          <Field name="email" v-slot="{ field, errors }">
            <div class="login__email">
              <span>Email</span>
              <input
                placeholder="google@gmail.com"
                type="text"
                v-bind="field"
              />
            </div>
            <template v-if="errors.length">
              <ul>
                <li
                  class="error-message"
                  v-for="(message, index) in errors"
                  :key="index"
                >
                  {{ message }}
                </li>
              </ul>
            </template>
          </Field>

          <Field ref="" name="password" v-slot="{ field, errors }">
            <div class="login__password">
              <span>Password</span>
              <input type="password" v-bind="field" />
            </div>
            <template v-if="errors.length">
              <ul>
                <li
                  class="error-message"
                  v-for="(message, index) in errors"
                  :key="index"
                >
                  {{ message }}
                </li>
              </ul>
            </template>
          </Field>

          <div class="login__btn"><button>Login</button></div>
        </Form>
        <div v-if="error" class="login__error">wrong email or password</div>
        <div class="login__text">or login with</div>
        <div class="login__sites">
          <ul>
            <li><img src="@/assets/icon/facebook.svg" alt="" /></li>
            <li><img src="@/assets/icon/item-3.svg" alt="" /></li>
            <li><img src="@/assets/icon/google.svg" alt="" /></li>
            <li><img src="@/assets/icon/steam.svg" alt="" /></li>
          </ul>
        </div>
        <div
          @click="this.$router.push('/restore-password')"
          class="login__account"
        >
          Forgot password?
        </div>
        <div class="login__new-account">
          Don't have an account?
          <span @click="this.$router.push('/sign-up')">Sign up!</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Field, Form, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { mapGetters } from "vuex";
import { getAuth, onAuthStateChanged } from "firebase/auth";
export default {
  data() {
    return {
      formSchema: yup.object({
        email: yup.string().required().email(),
        password: yup.string().required().min(6),
      }),
      initialFormValues: {
        email: "",
        password: "",
      },
      error: "",
    };
  },

  components: {
    Field,
    Form,
    ErrorMessage,
  },

  computed: {
    ...mapGetters({
      errorMessage: "login/getError",
    }),
  },
  watch: {
    errorMessage: {
      handler(error) {
        this.error = error;
      },
    },
  },

  methods: {
    async onSubmit(values) {
      await this.$store.dispatch("login/login", values);
      const auth = getAuth();
      await onAuthStateChanged(auth, (userSystem) => {
        if (userSystem) {
          this.error = null;
          this.$router.push("/");
        } else {
          this.error = false;
        }
      });

      // if (!this.error) {
      //   this.$router.push("/");
      // }
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  background-color: #0b1729;
  min-height: 100vh;
  &__header {
    display: flex;
    justify-content: space-between;
  }

  &__return {
    padding: 10px;
    cursor: pointer;
  }

  &__close {
    padding: 10px;
    cursor: pointer;
  }

  &__content {
    max-width: 340px;
    padding: 0px 10px;
    margin: auto;
  }

  &__logo {
    display: flex;
    justify-content: center;
    margin-bottom: 44px;
    img {
      width: 88px;
      height: 80px;
    }
  }

  &__title {
    display: flex;
    justify-content: center;
    font-size: 38px;
    color: #e6e6e6;
    font-weight: 700;
    margin-bottom: 30px;
  }

  &__email {
    span {
      display: block;
      font-size: 17px;
      color: #ffffff;
      margin-bottom: 8px;
    }
    input {
      width: 100%;
      height: 40px;
      background-color: #16263d;
      border: 1px solid #627ca3;
      color: #627ca3;
      padding-left: 16px;
    }
  }

  &__password {
    margin-top: 15px;
    span {
      display: block;
      font-size: 17px;
      color: #ffffff;
      margin-bottom: 8px;
    }
    input {
      width: 100%;
      height: 40px;
      background-color: #16263d;
      border: 1px solid #627ca3;
      color: #627ca3;
      padding-left: 16px;
    }
  }
  &__btn {
    display: flex;
    justify-content: center;
    margin-top: 22px;
    margin-bottom: 30px;
    button {
      background: linear-gradient(180deg, #2788f6 0%, #0960e0 100%);
      border-radius: 2px;
      width: 100%;
      height: 44px;
      color: #f5f5f5;
      font-weight: 700;
    }
  }

  &__text {
    color: #627ca3;
    display: flex;
    justify-content: center;
    margin-bottom: 16px;
  }

  &__sites {
    margin-bottom: 30px;
    ul {
      display: flex;
      justify-content: space-between;
      li {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #0b1729;
        border: 1px solid #16263d;
        width: 50px;
        height: 50px;
        cursor: pointer;
        img {
          width: 28px;
          height: 28px;
        }
      }
    }
  }

  &__account {
    display: flex;
    justify-content: center;
    color: #0a68f5;
    cursor: pointer;
  }
  &__new-account {
    margin: 12px 0px;
    display: flex;
    justify-content: center;
    color: #627ca3;
    span {
      padding-left: 5px;
      color: #0a68f5;
      cursor: pointer;
    }
  }
  &__error {
    display: flex;
    justify-content: center;
    position: relative;
    top: -20px;
    color: rgb(255, 0, 0);
    font-size: 15px;
  }
}
.error-message {
  padding-top: 3px;
  color: rgb(255, 0, 0);
  font-size: 14px;
}
</style>