<template>
  <div>
    <div class="sign">
      <div class="sign__header">
        <div @click="this.$router.push('/')" class="sign__return">
          <img src="@/assets/icon/arrow_left.svg" alt="" />
        </div>
        <div @click="this.$router.push('/')" class="sign__close">
          <img src="@/assets/icon/close.svg" alt="" />
        </div>
      </div>
      <div class="sign__content">
        <div class="sign__logo"><img src="@/assets/img/logo.png" alt="" /></div>
        <div class="sign__title">Sign up 1/2</div>
        <div class="sign__email">
          <span>Email</span>
          <input placeholder="google@gmail.com" type="text" />
        </div>
        <div class="sign__password">
          <span>Password</span>
          <input type="text" />
        </div>
        <div class="sign__btn"><button>Next step</button></div>

        <div class="sign__text">or signup with</div>
        <div class="sign__sites">
          <ul>
            <li><img src="@/assets/icon/facebook.svg" alt="" /></li>
            <li><img src="@/assets/icon/item-3.svg" alt="" /></li>
            <li><img src="@/assets/icon/google.svg" alt="" /></li>
            <li><img src="@/assets/icon/steam.svg" alt="" /></li>
          </ul>
        </div>
        <div class="sign__account">Already have an account?</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.sign {
  background-color: #0b1729;
  min-height: 100vh;
  &__header {
    display: flex;
    justify-content: space-between;
  }

  &__return {
    padding: 10px;
    cursor: pointer;
  }

  &__close {
    padding: 10px;
    cursor: pointer;
  }

  &__content {
    max-width: 340px;
    padding: 0px 10px;
    margin: auto;
  }

  &__logo {
    display: flex;
    justify-content: center;
    margin-bottom: 44px;
    img {
      width: 88px;
      height: 80px;
    }
  }

  &__title {
    display: flex;
    justify-content: center;
    font-size: 38px;
    color: #e6e6e6;
    font-weight: 700;
    margin-bottom: 30px;
  }

  &__email {
    span {
      display: block;
      font-size: 17px;
      color: #ffffff;
      margin-bottom: 8px;
    }
    input {
      width: 100%;
      height: 40px;
      background-color: #16263d;
      border: 1px solid #627ca3;
      color: #627ca3;
      padding-left: 16px;
    }
  }

  &__password {
    margin-top: 15px;
    span {
      display: block;
      font-size: 17px;
      color: #ffffff;
      margin-bottom: 8px;
    }
    input {
      width: 100%;
      height: 40px;
      background-color: #16263d;
      border: 1px solid #627ca3;
      color: #627ca3;
      padding-left: 16px;
    }
  }
  &__btn {
    display: flex;
    justify-content: center;
    margin-top: 22px;
    margin-bottom: 30px;
    button {
      background: linear-gradient(180deg, #2788f6 0%, #0960e0 100%);
      border-radius: 2px;
      width: 241px;
      height: 44px;
      color: #f5f5f5;
      font-weight: 700;
    }
  }

  &__text {
    color: #627ca3;
    display: flex;
    justify-content: center;
    margin-bottom: 16px;
  }

  &__sites {
    margin-bottom: 30px;
    ul {
      display: flex;
      justify-content: space-between;
      li {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #0b1729;
        border: 1px solid #16263d;
        width: 50px;
        height: 50px;
        cursor: pointer;
        img {
          width: 28px;
          height: 28px;
        }
      }
    }
  }

  &__account {
    display: flex;
    justify-content: center;
    color: #0a68f5;
    cursor: pointer;
  }
}
</style>