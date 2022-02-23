<template>
  <div>
    <div class="card">
      <div class="card__content">
        <div class="card__column">
          <div class="card__img"><img :src="img" alt="" /></div>
        </div>
        <div class="card__column1">
          <div class="card__title">{{ title }}</div>
          <div class="card__description">{{ description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: this.$attrs.modelValue.title,
      description: this.$attrs.modelValue.description,
      img: this.$attrs.modelValue.img.url,
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
  &__content {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  &__column1 {
    padding: 34px;
    height: 100%;
  }
  &__column {
    max-width: 50%;
  }

  &__img {
    flex-grow: 4;
    max-width: 320px;
    min-width: 208px;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__title {
    font-size: 24px;
    font-weight: 500;
    color: #f5f5f5;
  }

  &__description {
    // min-width: 280px;
    margin-top: 14px;

    max-width: 280px;
    color: #67707a;
    line-height: 24px;
  }
}
</style>