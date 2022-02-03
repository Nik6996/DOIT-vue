<template>
  <div>
    <div class="sign">
      <div class="sign__header">
        <div @click="returnPage()" class="sign__return">
          <img src="@/assets/icon/arrow_left.svg" alt="" />
        </div>
        <div @click="this.$router.push('/')" class="sign__close">
          <img src="@/assets/icon/close.svg" alt="" />
        </div>
      </div>
      <div class="sign__content">
        <Form @submit="onSubmit" :validation-schema="formSchema">
          <div class="sign__logo">
            <img src="@/assets/img/logo.png" alt="" />
          </div>
          <div class="sign__title">Sign up 2/2</div>
          <Field name="name" v-slot="{ field, errors }">
            <div class="sign__username">
              <span>Username</span>
              <input
                placeholder="BestPlayerInTheWorld2020"
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
          <Field name="country" v-slot="{ field, errors }">
            <div class="sign__country">
              <span>Country</span>
              <country-select
                className="form-control"
                :country="country"
                v-model="country"
                :countryName="true"
                :usei18n="false"
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
          <Field name="date" v-slot="{ field, errors }">
            <div class="sign__date">
              <span>Date of birth</span>

              <div class="sign__calendar">
                <div @click="calendar()" class="sign__published">
                  <div class="sign__date-published">
                    <span>{{ date.toLocaleDateString() }}</span>
                    <div class="sign__calendar-btn">
                      <img
                        class="sign__btn-calendar"
                        src="@/assets/icon/calendar.svg"
                        alt=""
                      />
                      <div class="sign__arrow">
                        <img
                          v-bind:class="{ active: isActive }"
                          src="@/assets/icon/arrow.svg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div v-if="isActive" class="sign__date-new">
                  <DatePicker v-bind="field" v-model="date" is-dark />
                </div>
              </div>
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

          <Field name="age" v-slot="{ field, errors }">
            <div class="sign__check">
              <input
                v-model="toggle"
                v-bind="field"
                id="check"
                type="checkbox"
              />
              <div class="sign__lable">
                <label for="check">
                  <div class="sign__checked" v-if="toggle">
                    <img src="@/assets/icon/check.svg" alt="" />
                  </div>
                </label>
              </div>

              <span
                >Im have at least 13 years of age and agree to the terms of
                service</span
              >
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
            <div v-if="error" class="error-message">
              age is a required field
            </div>
          </Field>
          <div v-if="errorEmail" class="sign__error-email">
            A user with this email is already registered
            <span @click="returnPage()">Sign in?</span>
            <span>Forgot password?</span>
          </div>
          <div class="sign__create"><button>Create an account</button></div>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
import { Calendar, DatePicker } from "v-calendar";
import { Field, Form, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      formSchema: yup.object({
        name: yup.string().required().min(3),
        country: yup.string().required(),
        date: yup.string().required(),
        age: yup.boolean().required(),
      }),
      toggle: "",
      country: "",
      isActive: false,
      date: new Date(),
      error: false,
      errorEmail: "",
    };
  },
  components: {
    Calendar,
    DatePicker,
    Field,
    Form,
    ErrorMessage,
  },
  computed: {
    ...mapGetters({
      errorMessage: "registration/getError",
    }),
  },
  watch: {
    errorMessage: {
      handler(error) {
        this.errorEmail = error;
      },
    },
    date: {
      handler(date) {
        if (date) {
          this.isActive = false;
        }
      },
    },
    toggle: {
      handler(toggle) {
        if (toggle) {
          this.error = false;
        }
      },
    },
  },
  methods: {
    async onSubmit(values) {
      if (!values.age) {
        this.error = true;
      } else {
        await this.$emit("userData", values);
      }
    },
    returnPage() {
      this.$emit("returnPage", "1");
    },

    calendar() {
      if (!this.isActive) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.sign {
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

  &__username {
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

  &__country {
    max-width: 320px;

    span {
      display: block;
      font-size: 17px;
      color: #ffffff;
      margin: 8px 0px;
    }
  }

  &__date {
    span {
      display: block;
      font-size: 17px;
      color: #ffffff;
      margin-bottom: 8px;
      margin-top: 16px;
    }
  }

  &__check {
    margin-top: 20px;
    display: flex;
    span {
      margin-left: 10px;
      color: #627ca3;
      font-size: 12px;
      display: flex;
      justify-content: flex-end;
    }
    input {
      display: none;
    }
    label {
      cursor: pointer;
      display: block;
      width: 18px;
      height: 18px;
      border: 1px solid #185ec7;
      border-radius: 4px;
      position: relative;
    }
  }
  &__lable {
    width: 18px;
    height: 18px;
  }
  &__checked {
    position: absolute;
    right: -4px;
    top: -2px;
    z-index: 1;
    width: 17px;
    height: 17px;

    img {
      background-color: #0b1729;
      border-radius: 60%;
    }
  }
  &__checked::before {
    content: "";

    background-color: wheat;
    width: 7px;
    height: 7px;
  }

  &__create {
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

  &__calendar {
    position: relative;
    z-index: 20;
  }
  &__date-published {
    border: 1px solid #627ca3;
    display: flex;
    justify-content: space-between;
    height: 40px;
    width: 320px;
    background-color: #16263d;
    position: relative;
    z-index: 10;
    span {
      display: flex;
      align-items: center;
      margin-left: 10px;
      margin-top: 0;
      margin-bottom: 0;
      color: #627ca3;
    }
  }
  &__published {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      position: relative;
      top: -2px;
      width: 60px;
      height: 30px;
      right: -2px;
    }
  }
  &__date-new {
    position: absolute;
  }

  &__calendar-btn {
    cursor: pointer;
    background-color: #16263d;
    position: relative;
    z-index: 2;
    width: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__btn-calendar {
    width: 20px;
    height: 20px;
  }
  &__arrow {
    position: relative;
    top: 0px;
    img {
      width: 25px;
      height: 25px;
      transition: all 0.5s;
    }
  }
  &__error-email {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: red;
    font-size: 14px;
    span {
      cursor: pointer;
      color: #0a68f5;
      padding: 3px;
    }
  }
}

.form-control {
  padding: 0px 10px;
  max-width: 320px;
  height: 40px;
  background-color: #16263d;

  color: #627ca3;
  border: 1px solid #627ca3;
}
.active {
  transform: rotateX(180deg);
  transition: all 0.5s;
}
.error-message {
  padding-top: 3px;
  color: rgb(255, 0, 0);
  font-size: 14px;
}
</style>