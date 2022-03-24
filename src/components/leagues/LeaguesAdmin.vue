<template>
  <div>
    <div class="admin">
      <div class="admin__btns">
        <div @click="this.$router.push('/leagues-create')" class="admin__btn">
          <button>Create Leagues</button>
        </div>
        <div @click="this.$router.push('/leagues-select')" class="admin__btn">
          <button>Edit Leagues</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.admin {
  margin: 0 auto;

  &__btns {
    flex-wrap: wrap;
    justify-content: center;
    display: flex;
  }

  &__btn {
    margin: 20px;
    button {
      width: 250px;
      height: 100px;
      background: #1a222d;
      color: #f5f5f5;
      font-weight: 700;
      font-size: 22px;
    }
  }
}
</style>