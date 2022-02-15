<template>
  <div>
    <div class="edit">
      <div class="edit__title">Edit account details</div>
      <div class="edit__content">
        <div class="edit__username">
          <span>Username</span>
          <input v-model="user.name" type="text" />
        </div>
        <div class="edit__name">
          <span>Name</span>
          <input v-model="user.realName" type="text" />
        </div>

        <div class="edit__country">
          <span>Country</span>
          <country-select
            className="form-control"
            :country="user.country"
            v-model="user.country"
            :countryName="true"
            :usei18n="false"
          />
        </div>

        <div class="edit__sex">
          <span>Sex</span>
          <select v-model="user.sex">
            <option selected="true" disabled="disabled" value="">
              I don't want to talk
            </option>
            <option value="male">male</option>
            <option value="famale">famale</option>
          </select>
        </div>
        <div class="edit__date">
          <span>Date of birth</span>

          <div class="edit__calendar">
            <div @click="calendar()" class="edit__published">
              <div class="edit__date-published">
                <span>{{ user.date }}</span>
                <div class="edit__calendar-btn">
                  <img
                    class="edit__btn-calendar"
                    src="@/assets/icon/calendar.svg"
                    alt=""
                  />
                  <div class="edit__arrow">
                    <img
                      v-bind:class="{ active: isActive }"
                      src="@/assets/icon/arrow.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div v-if="isActive" class="edit__date-new">
              <DatePicker v-model="date" is-dark />
            </div>
          </div>
        </div>
        <div @click="save()" class="edit__save">
          <button>Change details</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { Calendar, DatePicker } from "v-calendar";
export default {
  data() {
    return {
      user: {
        name: "",
        country: "",
        sex: "",
        date: "",
        balance: 0,
        email: "",
        realName: "",
      },
      date: new Date(),
      isActive: false,
    };
  },
  components: {
    Calendar,
    DatePicker,
  },
  computed: {
    ...mapGetters({
      getUser: "loadUser/getUser",
    }),
  },
  mounted() {
    if (this.getUser) {
      this.user.country = this.getUser.country;
      this.date = new Date(this.getUser.date);
      this.user.name = this.getUser.name;
      this.user.realName = this.getUser.realName || "";
      this.user.balance = this.getUser.balance || 0;
      this.user.email = this.getUser.email;
      this.user.sex = this.getUser.sex;
    }
  },
  watch: {
    getUser: {
      handler(getUser) {
        this.user.country = getUser.country;
        this.date = new Date(getUser.date);
        this.user.name = getUser.name;
        this.user.realName = getUser.realName || "";
        this.user.balance = getUser.balance || 0;
        this.user.email = getUser.email;
        this.user.sex = getUser.sex;
      },
    },
    date: {
      handler(date) {
        if (date) {
          this.isActive = false;
          this.user.date = date.toLocaleDateString();
        }
      },
    },
  },
  methods: {
    async save() {
      await this.$store.dispatch("edit/save", this.user);
      this.$router.push("/user/profile");
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
.edit {
  display: flex;
  justify-content: center;
  flex-direction: column;
  &__content {
    margin: 0 auto;
  }

  &__title {
    display: flex;
    justify-content: center;
    font-weight: 700;
    font-size: 48px;
    color: #f5f5f5;
    margin-bottom: 60px;
  }

  &__username,
  &__name {
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

  &__country {
    width: 300px;
    margin: 15px 0px;
    span {
      display: block;
      font-size: 14px;
      color: #ffffff;
      margin: 5px 0px;
    }
  }

  &__sex {
    span {
      display: block;
      font-size: 14px;
      color: white;
      margin-bottom: 5px;
    }
    select {
      width: 300px;
      height: 40px;
      background-color: #0f1215;
      padding-left: 15px;
      color: #627ca3;
      border: 1px solid #16263d;
    }
  }

  &__date {
    span {
      display: block;
      font-size: 14px;
      color: #ffffff;
      margin-bottom: 8px;
      margin-top: 16px;
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
    width: 300px;
    background-color: #0f1215;
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
    background-color: #0f1215;
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

  &__save {
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
.form-control {
  padding: 0px 10px;
  max-width: 300px;
  height: 40px;
  background-color: #0f1215;

  color: #627ca3;
  border: 1px solid #16263d;
}
.active {
  transform: rotateX(180deg);
  transition: all 0.5s;
}
</style>