<template>
  <div>
    <div class="loading"><img src="@/assets/img/logo.png" alt="" /></div>
  </div>
</template>

<script>
export default {
  created() {},
};
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
  background-color: #0a0b0cfa;
  z-index: 10000;
  img {
    animation: spin 1s ease-in-out infinite;
  }
  @keyframes spin {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>