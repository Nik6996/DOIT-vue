<template>
  <div>
    <div :class="{ success: isSuccess }" class="success-message">
      <span>Email changed successfully!</span>
    </div>
    <div class="email">
      <div class="email__title">Change adress email</div>
      <div class="email__content">
        <div class="email__password">
          <span>Current Password</span>
          <input v-model="user.password" type="password" />
          <div v-if="getIsError" class="error">Invalid password</div>
        </div>
        <Form :validation-schema="formSchema">
          <Field name="email" v-slot="{ field, errors }">
            <div class="email__email">
              <span>New Email</span>
              <input v-bind="field" v-model="user.email" type="text" />
            </div>
            <template v-if="errors.length">
              <ul>
                <li
                  class="error"
                  v-for="(message, index) in errors"
                  :key="index"
                >
                  {{ message }}
                </li>
              </ul>
            </template>
          </Field>
        </Form>
        <div @click="change()" class="email__btn">
          <button>Change email</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { Field, Form, ErrorMessage } from "vee-validate";
import * as yup from "yup";
export default {
  data() {
    return {
      formSchema: yup.object({
        email: yup.string().required().email(),
      }),
      initialFormValues: {
        email: "",
      },
      user: {
        password: "",
        email: "",
      },
      isSuccess: false,
    };
  },
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  computed: {
    ...mapGetters({
      getIsError: "changeEmail/getIsError",
      getSuccess: "changeEmail/getSuccess",
    }),
  },
  watch: {
    getSuccess: {
      handler(getSuccess) {
        this.isSuccess = getSuccess;
        this.user.password = "";
        this.user.email = "";
      },
    },
    isSuccess: {
      handler() {
        setTimeout(this.successMessage, 2000);
      },
    },
  },
  methods: {
    successMessage() {
      this.isSuccess = false;
      this.$router.push("/user/settings");
    },
    async change() {
      await this.$store.dispatch("changeEmail/change", this.user);
    },
  },
};
</script>

<style lang="scss" scoped>
.email {
  display: flex;
  justify-content: center;
  flex-direction: column;
  &__title {
    display: flex;
    justify-content: center;
    font-weight: 700;
    font-size: 48px;
    color: #f5f5f5;
    margin-bottom: 30px;
  }

  &__content {
    margin: 0 auto;
  }

  &__password,
  &__email {
    margin-top: 15px;
    span {
      display: block;
      font-size: 14px;
      color: white;
      margin-bottom: 5px;
    }
    input {
      width: 300px;
      height: 40px;
      background-color: #0f1215;
      padding-left: 15px;
      color: #627ca3;
      border: 1px solid #16263d;
    }
  }

  &__btn {
    margin-top: 22px;
    margin-bottom: 50px;
    width: 100%;
    height: 44px;
    button {
      width: 100%;
      height: 44px;
      background: linear-gradient(180deg, #2788f6 0%, #0960e0 100%);
      border-radius: 2px;
      color: #e6e6e6;
      font-weight: 700;
    }
  }
}
.error {
  margin-top: 5px;
  color: red;
}
.success-message {
  position: fixed;
  display: flex;
  align-items: center;

  padding: 15px;
  right: 5%;
  // top: 50%;

  bottom: 50%;
  transform: translate3d(0, 100px, 0);
  opacity: 0;
  transition: all 0.5s;
  background-color: green;
  border-radius: 15px;
  width: 200px;
  height: 90px;
  span {
    font-size: 20px;
    color: white;
  }
}
.success {
  transform: translate3d(0, 0, 0);
  opacity: 1;
  transition: all 0.5s;
}
</style>