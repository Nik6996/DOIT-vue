<template>
  <div>
    <div class="players">
      <div class="players__item center">{{ rank + 1 }}</div>
      <div class="players__item name">
        {{ name }}
      </div>

      <div class="players__item">3</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: this.$attrs.modelValue.name,
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
</style>