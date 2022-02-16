<template>
  <div>
    <sign-up-step-1 v-if="step === '1'" @userData="userSet" />
    <sign-up-step-2 @returnPage="returnPage" @userData="setUser" v-else />
  </div>
</template>

<script>
import SignUpStep1 from "@/components/login/SignUpStep1.vue";
import SignUpStep2 from "@/components/login/SignUpStep2.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";
export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
        name: "",
        country: "",
        date: "",
        balance: 0,
        subscribe: "free",
      },
      step: "1",
    };
  },
  components: {
    SignUpStep1,
    SignUpStep2,
  },
  methods: {
    userSet(value) {
      this.user.email = value.email;
      this.user.password = value.password;
      this.step = "2";
    },
    returnPage(value) {
      this.step = value;
    },

    async setUser(item) {
      await ((this.user.name = item.name),
      (this.user.country = item.country),
      (this.user.date = item.date.toLocaleDateString()));
      await this.$store.dispatch("registration/save", this.user);

      const auth = getAuth();
      await onAuthStateChanged(auth, (userSystem) => {
        if (userSystem) {
          this.$router.push("/");
        } else {
          console.log("нужна аутентификация");
        }
      });
    },
  },
};
</script>

<style>
</style>