<template>
  <div>
    <div class="history">
      <div class="history__list">
        <preview-history />
        <preview-history />
        <preview-history />
      </div>
    </div>
  </div>
</template>

<script>
import PreviewHistory from "@/components/user/user-panel/withdraw-deposit/PreviewHistory";
export default {
  components: {
    PreviewHistory,
  },
};
</script>

<style lang="scss" scoped>
.history {
  background: #0d1d2c;
  padding: 41px;
  &__content {
  }

  &__list {
  }
}
</style>