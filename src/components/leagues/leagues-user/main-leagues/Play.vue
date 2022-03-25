<template>
  <div>
    <div class="play">
      <button>Play</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.play {
  border: 2px solid #565656;
  display: flex;
  justify-content: center;
  padding: 30px;
  button {
    border-radius: 4px;
    width: 200px;
    height: 40px;
    font-weight: 700;
    font-size: 17px;
    color: #ffffff;
    background: linear-gradient(180deg, #2788f6 0%, #0960e0 100%);
  }
}
</style>