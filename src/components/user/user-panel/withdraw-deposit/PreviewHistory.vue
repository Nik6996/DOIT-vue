<template>
  <div>
    <div class="history">
      <div class="history__content">
        <div class="history__input">1111</div>
        <div class="history__input">123443</div>
        <div class="history__input">123</div>
        <div class="history__input">12321</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
    padding: 0px 10px;
    color: white;
    height: 30px;
  }
}
</style>