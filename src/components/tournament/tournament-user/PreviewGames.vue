<template>
  <div>
    <router-link :to="'/tournament/' + this.$attrs.modelValue.name">
      <div class="games">
        <div class="games__card">
          <div class="games__img"><img :src="img" alt="" /></div>
          <div class="games__title">{{ name }}</div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: this.$attrs.modelValue.url,
      name: this.$attrs.modelValue.name,
    };
  },
};
</script>

<style lang="scss" scoped>
.games {
  margin: 10px;
  &__card {
    position: relative;
    width: 367px;
    height: 480px;
  }

  &__img {
    width: 367px;
    height: 480px;
    img {
      width: 367px;
      height: 480px;
      object-fit: cover;
    }
  }

  &__title {
    display: flex;
    justify-content: center;
    position: relative;
    top: -110px;

    font-weight: bold;
    font-size: 30px;
    color: #f5f5f5;
  }
}
@media (max-width: 768px) {
  .games {
    &__card {
      width: 100%;
      height: 130px;
    }
    &__title {
      top: -100px;
    }
    &__img {
      width: 100%;
      height: 130px;
      margin: 20px 0px;
      img {
        width: 100%;
        height: 130px;
        object-fit: cover;
      }
    }
  }
}
</style>