<template>
  <div>
    <div class="card">
      <div class="card__content">
        <div class="card__img"><img :src="img" alt="" /></div>
        <div class="card__title">{{ title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: this.$attrs.modelValue.name,
      img: this.$attrs.modelValue.url,
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
  margin: 5px 5px 15px 5px;
  display: flex;
  justify-content: center;
  &__content {
    width: 387px;
    height: 500px;
  }

  &__img {
    img {
      width: 387px;
      height: 500px;
      object-fit: cover;
    }
  }

  &__title {
    display: flex;
    justify-content: center;
    position: relative;
    top: -60px;
    font-size: 30px;
    color: #f5f5f5;
    font-weight: 700;
  }
}

@media (max-width: 430px) {
  .card {
    &__content {
      width: 317px;
      height: 450px;
    }
    &__img {
      img {
        width: 317px;
        height: 450px;
        object-fit: cover;
      }
    }
  }
}
</style>