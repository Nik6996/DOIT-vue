<template>
  <div>
    <div class="rules">{{ rules }}</div>
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
  padding: 40px;
  border: 2px solid #20252b;
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;
}
</style>