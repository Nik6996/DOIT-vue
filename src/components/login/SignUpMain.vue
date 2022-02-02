<template>
  <div>
    <sign-up-step-1 v-if="step === '1'" @userData="user" />
    <sign-up-step-2 @nameData="setName" @countryData="setCountry" v-else />
  </div>
</template>

<script>
import SignUpStep1 from "@/components/login/SignUpStep1.vue";
import SignUpStep2 from "@/components/login/SignUpStep2.vue";
export default {
  data() {
    return {
      email: "",
      password: "",
      name: "",
      country: "",
      date: "",
      step: "1",
    };
  },
  components: {
    SignUpStep1,
    SignUpStep2,
  },
  methods: {
    user(value) {
      this.email = value.email;
      this.password = value.password;
      this.step = "2";
    },
    setCountry(country) {
      this.country = country;
      console.log(country);
    },
    setName(name) {
      this.name = name;
    },
  },
};
</script>

<style>
</style>