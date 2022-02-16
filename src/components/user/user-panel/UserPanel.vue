<template>
  <div>
    <div class="user">
      <div class="user__title">User Panel</div>
      <ul class="user__list">
        <li @click="this.$router.push('/user/profile')">My profile</li>
        <li @click="this.$router.push('/user/team')">My Team</li>
        <li @click="this.$router.push('/user/withdraw/deposit')">Withdraw</li>
        <li @click="this.$router.push('/user/withdraw/deposit')">Deposit</li>
        <li @click="this.$router.push('/user/subscribe')">Premium Account</li>
        <li @click="this.$router.push('/user/statistics')">Statistics</li>
        <li @click="this.$router.push('/user/support')">Support</li>
        <li @click="this.$router.push('/user/settings')">Settings</li>
        <li @click="signOut()">Logout</li>
        <li @click="this.$router.push('/user/profile')">Game profile</li>
      </ul>
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
.user {
  &__title {
    display: flex;
    justify-content: center;
    font-size: 48px;
    color: #f5f5f5;
    margin-bottom: 59px;
  }
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    li {
      cursor: pointer;
      margin: 0px 20px 50px 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 236px;
      height: 82px;
      font-size: 22px;
      color: #f5f5f5;
      border: 2px solid #20252b;
    }
  }
}
</style>