<template>
  <div>
    <div class="team">
      <div class="team__name">{{ name }}</div>
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
};
</script>

<style lang="scss" scoped>
.team {
  margin: 0px 22px 30px 22px;
  border: 2px solid #20252b;
  width: 230px;
  height: 82px;
  display: flex;
  justify-content: center;
  align-items: center;
  &__name {
    font-weight: 700;
    font-size: 19px;
    color: #f5f5f5;
  }
}
</style>