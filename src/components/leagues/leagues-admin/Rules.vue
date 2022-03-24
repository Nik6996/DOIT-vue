<template>
  <div>
    <div class="rules">
      <div class="rules__title">Rules</div>
      <textarea
        v-model="rulesLocal"
        placeholder="You can write here somebody about your tournament...."
      ></textarea>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rulesLocal: "",
    };
  },
  props: {
    rules: {},
  },
  watch: {
    rulesLocal: {
      handler(rulesLocal) {
        this.$emit("rulesData", rulesLocal);
      },
    },
  },
  mounted() {
    this.rulesLocal = this.rules;
  },
};
</script>

<style lang="scss" scoped>
.rules {
  padding: 10px;
  &__title {
    font-weight: 700;
    margin-bottom: 12px;
  }
  textarea {
    color: #c2c2c2;
    width: 100%;
    height: 348px;
    border: 2px solid #20252b;
    border-radius: 4px;
    padding: 16px;
    background: #0f1215;
  }
}
</style>