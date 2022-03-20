<template>
  <div>
    <div class="loading"><img src="@/assets/img/logo.png" alt="" /></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  position: fixed;
  background-color: #0f1215da;
  z-index: 10000;
}
</style>