<template>
  <div class="user">
    <div class="user__content">
      <div class="user__info">
        <div class="user__logo">
          <img src="@/assets/img/avatar.jpg" alt="" />
        </div>
        <div class="user__name">{{ getUser.name }}</div>
        <div class="user__balance">
          Balance: $<span>{{ getUser.balance }}</span>
        </div>
        <div class="user__icons">
          <div class="user__plus">
            <img src="@/assets/icon/plus-user.svg" alt="" />
          </div>
          <div class="user__message">
            <img src="@/assets/icon/mail-user.svg" alt="" />
          </div>
        </div>
        <ul class="user__list-btns">
          <li
            :class="{ active: profile }"
            class="user__link"
            @click="this.$router.push('/user/profile'), active('profile')"
          >
            Profile
          </li>
          <li
            @click="this.$router.push('/user/user-panel'), active('panel')"
            :class="{ active: panel }"
            class="user__link"
          >
            User Panel
          </li>
          <li
            @click="this.$router.push('/user/profile'), active('edit')"
            :class="{ active: edit }"
            class="user__link"
          >
            Edit account details
          </li>
          <li
            @click="this.$router.push('/user/profile'), active('add')"
            :class="{ active: add }"
            class="user__link"
          >
            Add Team
          </li>
          <li
            @click="this.$router.push('/user/profile'), active('tournamnets')"
            :class="{ active: tournamnets }"
            class="user__link"
          >
            My tournamnets
          </li>
          <li
            @click="this.$router.push('/user/profile'), active('team')"
            :class="{ active: team }"
            class="user__link"
          >
            Manage Team
          </li>
        </ul>
      </div>
      <div class="user__main"><router-view></router-view></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      profile: false,
      panel: false,
      edit: false,
      add: false,
      tournamnets: false,
      team: false,
    };
  },
  computed: {
    ...mapGetters({
      getUser: "loadUser/getUser",
    }),
  },
  updated() {
    if (this.$route.fullPath === "/user/profile") {
      this.profile = true;
      this.panel = false;
      this.edit = false;
      this.add = false;
      this.tournamnets = false;
      this.team = false;
    }
    if (this.$route.fullPath === "/user/user-panel") {
      this.profile = false;
      this.panel = true;
      this.edit = false;
      this.add = false;
      this.tournamnets = false;
      this.team = false;
    }
    // if (this.$route.fullPath === "/user/user-panel") {
    //   this.profile = false;
    //   this.panel = false;
    //   this.edit = true;
    //   this.add = false;
    //   this.tournamnets = false;
    //   this.team = false;
    // }
    // if (this.$route.fullPath === "/user/user-panel") {
    //   this.profile = false;
    //   this.panel = false;
    //   this.edit = false;
    //   this.add = true;
    //   this.tournamnets = false;
    //   this.team = false;
    // }
    // if (this.$route.fullPath === "/user/user-panel") {
    //   this.profile = false;
    //   this.panel = false;
    //   this.edit = false;
    //   this.add = false;
    //   this.tournamnets = true;
    //   this.team = false;
    // }
    // if (this.$route.fullPath === "/user/user-panel") {
    //   this.profile = false;
    //   this.panel = false;
    //   this.edit = false;
    //   this.add = false;
    //   this.tournamnets = false;
    //   this.team = true;
    // }
  },
  mounted() {
    if (this.$route.fullPath === "/user/user-panel") {
      this.panel = true;
    }
  },
  methods: {
    active(item) {
      if (item === "profile") {
        this.profile = true;
        this.panel = false;
        this.edit = false;
        this.add = false;
        this.tournamnets = false;
        this.team = false;
      }
      if (item === "panel") {
        this.profile = false;
        this.panel = true;
        this.edit = false;
        this.add = false;
        this.tournamnets = false;
        this.team = false;
      }
      if (item === "edit") {
        this.profile = false;
        this.panel = false;
        this.edit = true;
        this.add = false;
        this.tournamnets = false;
        this.team = false;
      }
      if (item === "add") {
        this.profile = false;
        this.panel = false;
        this.edit = false;
        this.add = true;
        this.tournamnets = false;
        this.team = false;
      }
      if (item === "tournamnets") {
        this.profile = false;
        this.panel = false;
        this.edit = false;
        this.add = false;
        this.tournamnets = true;
        this.team = false;
      }
      if (item === "team") {
        this.profile = false;
        this.panel = false;
        this.edit = false;
        this.add = false;
        this.tournamnets = false;
        this.team = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.user {
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 50px;
  padding-bottom: 30px;
  &__content {
    display: flex;
    justify-content: space-between;
  }

  &__info {
    min-width: 370px;
    height: 100vh;
    // margin-left: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border-right: 1px solid #1a1f24;
  }
  &__main {
    width: 100%;
  }

  &__logo {
    width: 104px;
    height: 104px;
    img {
      width: 104px;
      height: 104px;
      object-fit: cover;
    }
  }

  &__name {
    font-weight: 700;
    font-size: 24px;
    margin: 10px 0px;
    color: #f5f5f5;
  }

  &__balance {
    color: #37b7fa;
    font-weight: 400;
  }

  &__icons {
    margin-top: 8px;
    align-items: center;
    display: flex;
  }

  &__plus {
    img {
      width: 20px;
      height: 20px;
    }
  }

  &__message {
    margin: 0px 10px;
    img {
      width: 24px;
      height: 24px;
    }
  }

  &__list-btns {
    margin-left: 120px;
    margin-top: 10px;
    width: 200px;
    height: 100%;
  }
  &__link {
    cursor: pointer;
    display: flex;
    color: #ffffff;
    align-items: center;
    margin-top: 24px;
  }
  &__link::before {
    content: "";
    margin-right: 10px;
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 1px solid #ffffff;
  }
}
@media (max-width: 1060px) {
  .user {
    &__info {
      display: none;
    }
    &__content {
      justify-content: center;
    }
    &__info {
      margin: 0;
    }
  }
}

.active {
  color: #37b7fa;
}
.active::before {
  background-color: #37b7fa;
}
</style>