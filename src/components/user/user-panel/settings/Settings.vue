<template>
  <div>
    <div class="setting">
      <div class="setting__title"></div>
      <ul class="setting__list">
        <li @click="this.$router.push('/user/edit-account')">
          Edit account details
        </li>
        <li @click="this.$router.push('/user/changeEmail')">
          Change adress email
        </li>
        <li @click="this.$router.push('/user/changePassword')">
          Change password
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.setting {
  &__title {
    display: flex;
    justify-content: center;
    font-size: 48px;
    color: #f5f5f5;
    margin-bottom: 59px;
  }

  &__list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1100px;
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