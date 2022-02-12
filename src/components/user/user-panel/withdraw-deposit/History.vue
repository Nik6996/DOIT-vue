<template>
  <div>
    <div class="history">
      <div class="history__list">
        <div v-for="(item, index) in getHistory" :key="index">
          <preview-history v-model="getHistory[index]" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PreviewHistory from "@/components/user/user-panel/withdraw-deposit/PreviewHistory";
export default {
  components: {
    PreviewHistory,
  },
  computed: {
    ...mapGetters({
      getHistory: "history/getHistory",
    }),
  },

  mounted() {
    this.$store.dispatch("history/loadHistory");
  },
};
</script>

<style lang="scss" scoped>
.history {
  background: #0d1d2c;
  padding: 41px;
  margin-bottom: 40px;
  &__content {
  }

  &__list {
  }
}
@media (max-width: 768px) {
  .history {
    padding: 5px;
  }
}
</style>