<template>
  <div>
    <router-link
      :to="
        '/tournament/' +
        this.$attrs.modelValue.gameInfo.game +
        '/' +
        this.$attrs.modelValue.id
      "
    >
      <div class="card">
        <div class="card__content">
          <div class="card__img"><img :src="img" alt="" /></div>
          <div class="card__title">{{ title }}</div>
          <div class="card__bottom">
            <div class="card__block">
              <div class="card__name">Start</div>
              <div class="card__data">
                <span v-if="this.day <= 9">0</span>
                <div class="card__day">{{ day }}</div>
                <span>/</span>
                <span v-if="this.month <= 9">0</span>

                <div class="card__month">{{ month }}</div>
              </div>
            </div>
            <div class="card__block">
              <div class="card__name">Mode</div>
              <div class="card__data">{{ mode }}</div>
            </div>
            <div class="card__block">
              <div class="card__name">Slots</div>
              <div class="card__data">{{ slots }}/16</div>
            </div>
            <div class="card__block">
              <div class="card__name">Pool</div>
              <div class="card__data"><span>$</span> {{ pool }}</div>
            </div>
          </div>
        </div>
      </div></router-link
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: this.$attrs.modelValue.gameInfo.banner.imgUrl,
      title: this.$attrs.modelValue.basicInfo.name,
      month:
        new Date(this.$attrs.modelValue.registration.startDate).getMonth() + 1,
      day: new Date(this.$attrs.modelValue.registration.startDate).getDate(),
      mode: this.$attrs.modelValue.gameInfo.mode,
      pool: this.$attrs.modelValue.prizePool.prizeSum,
      slots: this.$attrs.modelValue.slots,
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
    background: #151a1f;
    height: 424px;
    width: 370px;
    height: 390px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__img {
    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
  }

  &__title {
    color: #e6e8eb;
    font-size: 22px;
    margin: 30px 22px 22px 22px;
  }
  &__bottom {
    display: flex;
    justify-content: space-between;
    padding: 30px 22px;
  }
  &__name {
    color: #8996a3;
    font-weight: 400;
  }
  &__data {
    margin-top: 8px;
    font-weight: 500;
    color: #e6e8eb;
    display: flex;
  }
}

@media (max-width: 430px) {
  .card {
    max-width: 317px;

    &__img {
      img {
        width: 317px;
      }
    }
  }
}
</style>