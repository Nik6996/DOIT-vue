<template>
  <div>
    <div class="restore">
      <!-- <div class="modal">
				<div class="modal__content"></div>
			</div> -->
      <div class="restore__header">
        <div @click="this.$router.push('/')" class="restore__return">
          <img src="@/assets/icon/arrow_left.svg" alt="" />
        </div>
        <div @click="this.$router.push('/')" class="restore__close">
          <img src="@/assets/icon/close.svg" alt="" />
        </div>
      </div>
      <div class="restore__content">
        <div class="restore__logo">
          <img src="@/assets/img/logo.png" alt="" />
        </div>
        <div class="restore__title">Forgot password</div>
        <Form @submit="onSubmit" :validation-schema="formSchema">
          <Field name="email" v-slot="{ field, errors }">
            <div class="restore__email">
              <span>Email</span>
              <input
                v-bind="field"
                placeholder="google@gmail.com"
                type="text"
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
          <div class="restore__btn">
            <button>restore</button>
          </div>
        </Form>
        <div @click="this.$router.push('/login')" class="restore__back">
          Back to login
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Field, Form, ErrorMessage } from "vee-validate";
import * as yup from "yup";
export default {
  data() {
    return {
      formSchema: yup.object({
        email: yup.string().required().email(),
      }),
      modal: false,
    };
  },
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  methods: {
    async onSubmit(email) {
      await this.$store.dispatch("restorePassword/restore", email);
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="scss" scoped>
.restore {
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
  &__back {
    cursor: pointer;
    display: flex;
    justify-content: center;
    color: #0a68f5;
  }
}
.error-message {
  padding-top: 3px;
  color: rgb(255, 0, 0);
  font-size: 14px;
}
</style>