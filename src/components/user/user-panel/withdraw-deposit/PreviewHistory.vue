<template>
  <div>
    <div class="history">
      <div :class="{ red: withdraw, green: deposit }" class="history__content">
        <div class="history__input">{{ date }}</div>
        <div class="history__input">{{ system }}</div>
        <div class="history__input">{{ action }}</div>
        <div class="history__input">{{ amount }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      action: this.$attrs.modelValue.action,
      system: this.$attrs.modelValue.system,
      date: this.$attrs.modelValue.date,
      amount: this.$attrs.modelValue.amount,
      deposit: false,
      withdraw: false,
    };
  },
  mounted() {
    if (this.action == "deposit") {
      this.deposit = true;
    } else {
      this.withdraw = true;
    }
  },
};
</script>

<style lang="scss" scoped>
.history {
  margin: 10px;
  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #0f1215;
  }

  &__input {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 10px;
    color: white;
    height: 30px;
    width: 100%;
  }
}
.red {
  background-color: red;
}
.green {
  background-color: green;
}
</style>