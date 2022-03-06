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
              v-model="account"
              id="free"
              type="radio"
            />
            <label class="registration__input-label" for="free">Free</label>
          </div>
          <div class="registration__btn">
            <input
              class="registration__input"
              value="pro"
              v-model="account"
              id="pro"
              type="radio"
            />
            <label class="registration__input-label" for="pro">Pro</label>
          </div>
          <div class="registration__btn">
            <input
              class="registration__input"
              value="organizer"
              v-model="account"
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
              v-model="account"
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
            v-model="checkingTime"
            id="time"
            type="checkbox"
          />
          <label for="time">Checkin Time</label>
        </div>
        <div class="registration__minute">
          <select v-model="minute">
            <option disabled value="">Select minute</option>
            <option>10 minute</option>
            <option>20 minute</option>
            <option>30 minute</option>
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
      account: "",
      startDate: new Date(),
      estimateDate: new Date(),
      checkingTime: "",
      minute: "",
    };
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
  }

  &__title {
  }
  &__input {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }

  &__account {
    display: flex;
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
  }

  &__time {
  }

  &__checking-time {
  }

  &__minute {
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