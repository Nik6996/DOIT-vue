<template>
  <div>
    <div class="registration">
      <div class="registration__content">
        <div class="registration__title">Registration</div>
        <div class="registration__account">
          <div class="registration__btn">
            <input
              class="registration__input"
              value="free"
              v-model="registration.account"
              id="free"
              type="radio"
            />
            <label class="registration__input-label" for="free">Free</label>
          </div>
          <div class="registration__btn">
            <input
              class="registration__input"
              value="pro"
              v-model="registration.account"
              id="pro"
              type="radio"
            />
            <label class="registration__input-label" for="pro">Pro</label>
          </div>
          <div class="registration__btn">
            <input
              class="registration__input"
              value="organizer"
              v-model="registration.account"
              id="organizer"
              type="radio"
            />
            <label class="registration__input-label" for="organizer"
              >Organizer</label
            >
          </div>
          <div class="registration__btn">
            <input
              class="registration__input"
              value="private"
              v-model="registration.account"
              id="private"
              type="radio"
            />
            <label class="registration__input-label" for="private"
              >Private</label
            >
          </div>
        </div>
        <div class="registration__date">
          <span>Start time*</span>
          <date-picker is-dark v-model="startDate" mode="dateTime" is24hr>
            <template v-slot="{ inputValue, inputEvents }">
              <input class="date-time" :value="inputValue" v-on="inputEvents" />
            </template>
          </date-picker>
        </div>
        <div class="registration__date">
          <span>Estimated end*</span>
          <date-picker is-dark v-model="estimateDate" mode="dateTime" is24hr>
            <template v-slot="{ inputValue, inputEvents }">
              <input class="date-time" :value="inputValue" v-on="inputEvents" />
            </template>
          </date-picker>
        </div>
        <div class="registration__time">
          <input
            class="registration__checking-time"
            v-model="registration.checkingTime"
            id="time"
            type="checkbox"
          />
          <label for="time">Checkin Time</label>
        </div>
        <div class="registration__minute">
          <select v-model="registration.minute">
            <option disabled value="">Select minute</option>
            <option>10 minute</option>
            <option>20 minute</option>
            <option>30 minute</option>
          </select>
        </div>
        <div class="registration__platform">
          <select v-model="registration.platform">
            <option disabled value="">Select platform</option>
            <option>PC</option>
            <option>XBOX ONE</option>
            <option>PS4</option>
            <option>NINTENDO SWTCH</option>
            <option>PS5</option>
            <option>XBOX SERIES X</option>
          </select>
        </div>
        <div class="registration__server">
          <select v-model="registration.server">
            <option disabled value="">Select server</option>
            <option>Europe nordic & east</option>
            <option>Europe West</option>
            <option>Australia & Oceania</option>
            <option>China</option>
            <option>PS5</option>
            <option>Asia</option>
            <option>America</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Calendar, DatePicker } from "v-calendar";
export default {
  data() {
    return {
      startDate: new Date(),
      estimateDate: new Date(),
    };
  },
  mounted() {
    if (!this.registration.startDate) {
      this.registration.startDate = Date.parse(this.startDate);
    } else {
      this.startDate = new Date(this.registration.startDate);
    }
    if (!this.registration.estimateDate) {
      this.registration.estimateDate = Date.parse(this.estimateDate);
    } else {
      this.estimateDate = new Date(this.registration.estimateDate);
    }
  },
  watch: {
    startDate: {
      handler(startDate) {
        this.registration.startDate = Date.parse(startDate);
      },
    },
    estimateDate: {
      handler(estimateDate) {
        this.registration.estimateDate = Date.parse(estimateDate);
      },
    },
  },
  props: {
    registration: {
      type: Object,
    },
  },
  components: {
    Calendar,
    DatePicker,
  },
};
</script>

<style lang="scss" scoped>
.registration {
  &__content {
    padding: 10px;
  }

  &__title {
    color: #cccdcd;
    font-weight: 700;
    margin-bottom: 16px;
  }
  &__input {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }

  &__account {
    display: flex;
    margin-bottom: 30px;
  }

  &__btn {
    font-weight: 700;
    margin-right: 12px;
  }

  &__input-label {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 79px;
    height: 40px;
    background-color: #1a222d;
    color: #0a61e1;
  }

  &__input:checked + label {
    background: linear-gradient(180deg, #2788f6 0%, #0960e0 100%);

    color: #f5f5f5;
  }
  &__date {
    margin-bottom: 21px;
    span {
      display: block;
      font-weight: 700;
      color: #cccdcd;
      margin-bottom: 12px;
    }
  }

  &__time {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    label {
      cursor: pointer;
    }
  }

  &__checking-time + label {
    display: inline-flex;
    align-items: center;
    user-select: none;
  }

  &__checking-time {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }

  &__checking-time + label::before {
    content: "";
    display: flex;
    justify-content: center;
    position: relative;
    width: 17px;
    height: 17px;
    border: 2px solid #20252b;

    margin-right: 10px;
  }

  &__checking-time:checked + label::before {
    background-repeat: no-repeat;
    background-position: center;
    background-image: url("../../../assets/icon/check2.svg");
  }

  &__minute {
    select {
      margin-top: 10px;
      margin-bottom: 20px;
      height: 40px;
      width: 160px;
      padding-left: 10px;
      color: #cccdcd;
      background-color: #0f1215;
      border: 2px solid #20252b;
      border-radius: 4px;
    }
  }
  &__platform,
  &__server {
    select {
      margin-top: 10px;
      margin-bottom: 20px;
      height: 40px;
      width: 100%;
      padding-left: 10px;
      color: #cccdcd;
      background-color: #0f1215;
      border: 2px solid #20252b;
      border-radius: 4px;
    }
  }
}

.date-time {
  padding: 5px;
  width: 160px;
  height: 40px;
  background-color: #0f1215;
  color: #cccdcd;
  border: 2px solid #20252b;
  border-radius: 4px;
}
</style>