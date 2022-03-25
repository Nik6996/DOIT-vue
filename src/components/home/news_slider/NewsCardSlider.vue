<template>
  <div>
    <div class="card">
      <div class="card__content">
        <div class="card__img"><img :src="img" alt="" /></div>
        <div class="card__title">{{ title }}</div>
        <div class="card__description">{{ description }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: this.$attrs.modelValue.title,
      img: this.$attrs.modelValue.img.url,
      description: this.$attrs.modelValue.description,
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
  margin: 5px 5px 15px 5px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  &__content {
    background: #e1e6eb;
    height: 424px;
    width: 370px;
  }

  &__img {
    img {
      width: 100%;
      height: 170px;
      object-fit: cover;
    }
  }

  &__title {
    color: #0f1215;
    font-size: 22px;
    margin: 30px 22px 22px 22px;
  }
  &__description {
    color: #5e656b;
    line-height: 150%;
    margin: 0px 22px 22px 22px;
  }
}

@media (max-width: 430px) {
  .card {
    &__content {
    }
    &__img {
      img {
        width: 100%;
      }
    }
  }
}
</style>