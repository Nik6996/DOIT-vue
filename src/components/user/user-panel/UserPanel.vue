<template>
  <div>
    <div class="user">
      <div class="user__title">User Panel</div>
      <ul class="user__list">
        <li @click="this.$router.push('/user/profile')">My profile</li>
        <li>My Team</li>
        <li>Withdraw</li>
        <li>Deposit</li>
        <li>Premium Account</li>
        <li>Statistics</li>
        <li>Support</li>
        <li>Settings</li>
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
      margin: 0px 25px 50px 25px;
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