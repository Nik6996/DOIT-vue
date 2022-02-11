<template>
  <div>
    <div class="menu">
      <div class="menu__content">
        <div class="menu__lvl">
          LVL <span>0</span> <span class="menu__lvl-row"></span>
        </div>
        <ul class="menu__list">
          <li @click="this.$router.push('/user/user-panel')" class="menu__link">
            User panel
            <span> <img src="@/assets/icon/arrow-header.svg" alt="" /></span>
          </li>
          <li @click="this.$router.push('/user/team')" class="menu__link">
            My team
            <span> <img src="@/assets/icon/arrow-header.svg" alt="" /></span>
          </li>
          <li class="menu__link">
            Withdraw
            <span> <img src="@/assets/icon/arrow-header.svg" alt="" /></span>
          </li>
          <li class="menu__link">
            Deposit
            <span> <img src="@/assets/icon/arrow-header.svg" alt="" /></span>
          </li>
          <li class="menu__link">
            Premium
            <span> <img src="@/assets/icon/arrow-header.svg" alt="" /></span>
          </li>
          <li class="menu__link">
            Statistics
            <span> <img src="@/assets/icon/arrow-header.svg" alt="" /></span>
          </li>
        </ul>
        <div class="menu__footer">
          <ul>
            <li>
              Statistics
              <span> <img src="@/assets/icon/arrow-header.svg" alt="" /></span>
            </li>
            <li @click="this.$router.push('/user/settings')">
              Settings
              <span> <img src="@/assets/icon/arrow-header.svg" alt="" /></span>
            </li>
            <li @click="signOut()">
              Logout
              <span> <img src="@/assets/icon/arrow-header.svg" alt="" /></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";
export default {
  methods: {
    async signOut() {
      const auth = getAuth();
      await signOut(auth).then(() => {
        this.user = null;
      });
      await this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
.menu {
  position: absolute;
  z-index: 2;
  left: 0;
  top: 50px;
  padding-bottom: 60px;
  width: 225px;

  &__content {
  }

  &__lvl {
    display: flex;
    align-items: center;
    font-size: 10px;
    font-weight: 400;
    border-bottom: solid 2px #0f1215;
    padding: 10px 15px;
    background-color: #161a1f;
    span {
      margin: 0px 5px;
    }
  }

  &__list {
    padding: 10px 15px;
    background-color: #161a1f;
  }

  &__link {
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 400;
    color: #f5f5f5;
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
    cursor: pointer;
    img {
      transform: rotate(90deg);
    }
  }

  &__footer {
    border-top: solid 2px #0f1215;
    padding: 10px 15px;
    background-color: #161a1f;
    img {
      transform: rotate(90deg);
    }
    ul {
      li {
        margin: 16px 0px;
        display: flex;
        justify-content: space-between;
        color: #969ba3;
        font-size: 12px;
        cursor: pointer;
      }
    }
  }
  &__lvl-row {
    display: block;
    width: 160px;
    height: 2px;
    background-color: black;
    margin-left: 10px;
  }
}
</style>