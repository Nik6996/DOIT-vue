<template>
  <div>
    <div class="players">
      <div class="players__item center">{{ rank + 1 }}</div>
      <div class="players__item name">
        <country-flag :country="flag" size="small" />
        {{ nickName }}
      </div>
      <div v-if="!name" class="players__item">Player</div>
      <div v-else class="players__item">{{ name }}</div>
      <div class="players__item">200$</div>
      <div class="players__item">{{ balance }}$</div>
    </div>
  </div>
</template>

<script>
let iso3311a2 = require("iso-3166-1-alpha-2");
import CountryFlag from "vue-country-flag-next";
export default {
  data() {
    return {
      balance: this.$attrs.modelValue.balance,
      name: this.$attrs.modelValue.realName,
      nickName: this.$attrs.modelValue.name,
      flag: iso3311a2.getCode(this.$attrs.modelValue.country),
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
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

  &__item {
    display: flex;
    padding: 0px 15px 22px 15px;
    font-weight: 400;
    font-size: 16px;
    color: #67707a;
    align-items: center;
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