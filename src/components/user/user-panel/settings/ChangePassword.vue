<template>
  <div>
    <div class="password">
      <div class="password__title">Change password</div>
      <div class="password__content">
        <div class="password__password">
          <span>Current Password</span>
          <input v-model="password" type="text" />
        </div>
        <div class="password__password">
          <span>Password</span>
          <input v-model="password" type="text" />
        </div>
        <div @click="change()" class="password__btn">
          <button>Change Password</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.password {
  display: flex;
  justify-content: center;
  flex-direction: column;
  &__title {
    display: flex;
    justify-content: center;
    font-weight: 700;
    font-size: 48px;
    color: #f5f5f5;
    margin-bottom: 30px;
  }

  &__content {
    margin: 0 auto;
  }

  &__password,
  &__password {
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

  &__btn {
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
</style>