<template>
  <div>
    <div class="card">
      <img v-if="img" :src="img" alt="" />
      <img v-else src="@/assets/img/avatar.jpg" alt="" />
      <div class="card__content">
        <div class="card__title">
          <country-flag :country="flag" size="small" /><span>{{ title }}</span>
        </div>
        <div class="card__registered">Registered</div>
      </div>
    </div>
  </div>
</template>

<script>
let iso3311a2 = require("iso-3166-1-alpha-2");
import CountryFlag from "vue-country-flag-next";
export default {
  data() {
    return {
      img: this.$attrs.modelValue.img,
      flag: iso3311a2.getCode(this.$attrs.modelValue.country),
      title: this.$attrs.modelValue.title,
    };
  },
  components: {
    CountryFlag,
  },
};
</script>

<style lang="scss" scoped>
.card {
  background-color: #151a1f;
  width: 157px;
  height: 250px;
  margin: 22px;
  img {
    object-fit: cover;
    width: 157px;
    height: 149px;
  }
  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 12px;
    height: 100px;
  }

  &__title {
    font-weight: 500;
    font-size: 14px;
    color: #e6e8eb;
    display: flex;
    align-items: center;
    span {
      padding-left: 5px;
    }
  }

  &__registered {
    color: #525c66;
    font-weight: 400;
    font-size: 12px;
    margin-top: 10px;
  }
}
</style>