<template>
  <div>
    <div class="news">
      <div class="news__content">
        <div class="admin-btn" @click="this.$router.push('/update-news')">
          <button>Add news</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.admin-btn {
  display: flex;
  justify-content: flex-start;
  margin-top: 22px;
  margin-bottom: 30px;
  width: 200px;
  margin: 10px 0px 30px 40px;
  button {
    background: linear-gradient(180deg, #2788f6 0%, #0960e0 100%);
    border-radius: 2px;
    width: 100%;
    height: 44px;
    color: #f5f5f5;
    font-weight: 700;
  }
}
</style>