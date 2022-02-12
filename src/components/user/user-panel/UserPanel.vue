<template>
  <div>
    <div class="user">
      <div class="user__title">User Panel</div>
      <ul class="user__list">
        <li @click="this.$router.push('/user/profile')">My profile</li>
        <li @click="this.$router.push('/user/team')">My Team</li>
        <li @click="this.$router.push('/user/withdraw/deposit')">Withdraw</li>
        <li @click="this.$router.push('/user/withdraw/deposit')">Deposit</li>
        <li>Premium Account</li>
        <li>Statistics</li>
        <li>Support</li>
        <li @click="this.$router.push('/user/settings')">Settings</li>
        <li>Logout</li>
        <li>Game profile</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
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