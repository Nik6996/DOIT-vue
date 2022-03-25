<template>
  <div>
    <div class="team">
      <div class="team__item center">{{ rank + 1 }}</div>
      <div class="team__item">
        <country-flag class="flag" :country="flag" size="middle" />
      </div>
      <div class="team__item">{{ name }}</div>
      <div class="team__item">0</div>
      <div class="team__item">0</div>
      <div class="team__item">0</div>
      <div class="team__item">0</div>
      <div class="team__item">{{ prize }}$</div>
    </div>
  </div>
</template>

<script>
let iso3311a2 = require("iso-3166-1-alpha-2");
import CountryFlag from "vue-country-flag-next";
export default {
  data() {
    return {
      prize: this.$attrs.modelValue.totalPrizeYear,
      name: this.$attrs.modelValue.name,
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
.team {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  border-bottom: 1px solid #20252b;
  padding: 8px 0px;
  &__item {
    align-items: center;
    color: #67707a;
    font-weight: 400;
    font-size: 14px;
    display: flex;
  }
}
.center {
  justify-content: center;
}
.flag {
  position: relative;
  top: -4px;
}
@media (max-width: 768px) {
  .team {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    &__item {
      font-weight: 400;
      font-size: 12px;
    }
    &__item:nth-child(4) {
      display: none;
    }
    &__item:nth-child(5) {
      display: none;
    }
  }
}
</style>