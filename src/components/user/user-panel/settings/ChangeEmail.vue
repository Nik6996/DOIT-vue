<template>
  <div>
    <div class="email">
      <div class="email__title">Change adress email</div>
      <div class="email__content">
        <div class="email__password">
          <span>Current Password</span>
          <input v-model="password" type="text" />
        </div>
        <div class="email__email">
          <span>New Email</span>
          <input v-model="email" type="text" />
        </div>
        <div @click="change()" class="email__btn">
          <button>Change email</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth, reauthenticateWithCredential } from "firebase/auth";
export default {
  data() {
    return {
      password: "111111",
      email: "",
    };
  },
  methods: {
    promptForCredentials() {},

    change() {
      // this.$store.dispatch("changeEmail/change", this.email);
      const auth = getAuth();
      const user = auth.currentUser;
      console.log(user);
      const credential = this.promptForCredentials();

      reauthenticateWithCredential(user, credential)
        .then(() => {
          // User re-authenticated.
          console.log("1");
        })
        .catch((error) => {
          console.log("2");
          // An error ocurred
          // ...
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.email {
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
  &__email {
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