<template>
  <div>
    <div class="rules">
      <div class="rules__title">Rules</div>
      <textarea
        v-model="rules"
        placeholder="You can write here somebody about your tournament...."
      ></textarea>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rules: {
      type: String,
    },
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