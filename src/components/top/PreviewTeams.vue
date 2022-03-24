<template>
  <div>
    <div class="players">
      <div class="players__item center">{{ rank + 1 }}</div>
      <div class="players__item name">
        {{ nickName }}
      </div>

      <div class="players__item">{{ totalPrize }}$</div>
      <div class="players__item">{{ totalPrizeYear }}$</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      totalPrizeYear: this.$attrs.modelValue.totalPrizeYear,
      totalPrize: this.$attrs.modelValue.totalPrize,
      nickName: this.$attrs.modelValue.name,
    };
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
  grid-template-columns: 1fr 1fr 1fr 1fr;

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
    grid-template-columns: 1fr 1fr 1fr 1fr;
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