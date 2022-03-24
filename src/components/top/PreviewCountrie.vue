<template>
  <div>
    <div class="players">
      <div class="players__item center">{{ rank + 1 }}</div>
      <div class="players__item name">
        <country-flag :country="flag" size="small" />
        {{ country }}
      </div>

      <div class="players__item">{{ users }}</div>
    </div>
  </div>
</template>

<script>
let iso3311a2 = require("iso-3166-1-alpha-2");
import CountryFlag from "vue-country-flag-next";
export default {
  data() {
    return {
      country: this.$attrs.modelValue.key,
      users: this.$attrs.modelValue.item,
      flag: iso3311a2.getCode(this.$attrs.modelValue.key),
    };
  },
  components: {
    CountryFlag,
  },
  props: {
    rank: {
      type: Number,
    },
  },
};
</script>

<style lang="scss" scoped>
.players {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  &__item {
    display: flex;
    padding: 0px 15px 22px 15px;
    font-weight: 400;
    font-size: 16px;
    color: #67707a;
    align-items: center;
  }
}
@media (max-width: 1060px) {
  .players {
    grid-template-columns: 1fr 2fr 1fr;
    &__item {
      font-weight: 400;
      font-size: 12px;
    }
  }
}
.name {
  color: #cccccc;
}
.center {
  justify-content: center;
}
.flag {
  margin-right: -14px;
}
</style>