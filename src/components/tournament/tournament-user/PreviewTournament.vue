<template>
  <div>
    <div class="card">
      <div class="card__img"><img :src="img" alt="" /></div>
      <div class="card__content">
        <div class="card__title">{{ title }}</div>
        <div class="card__main">
          <div class="card__prize">
            <span>PRIZE</span>
            <div>${{ prize }}</div>
          </div>
          <div class="card__entry">
            <span>MAX PLAYERS</span>
            <div>{{ players }}</div>
          </div>
          <div class="card__platform">
            <span>PLATFORM</span>
            <div>{{ platform }}</div>
          </div>
          <div class="card__slots">
            <span>SLOTS</span>
            <div>16/16</div>
          </div>
          <div class="card__mode">
            <span>MODE</span>
            <div>{{ mode }}</div>
          </div>
          <div class="card__server">
            <span>SERVER</span>
            <div>{{ server }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: this.$attrs.modelValue.gameInfo.banner.imgUrl,
      title: this.$attrs.modelValue.basicInfo.name,
      prize: this.$attrs.modelValue.prizePool.prizeSum,
      players: this.$attrs.modelValue.prizePool.maxPlayers,
      mode: this.$attrs.modelValue.gameInfo.mode,
      platform: this.$attrs.modelValue.registration.platform,
      server: this.$attrs.modelValue.registration.server,
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  border: 2px solid #20252b;

  &__img {
    img {
      width: 130px;
      height: 130px;
      object-fit: cover;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 22px;
    width: 100%;
  }

  &__title {
    color: #f5f5f5;
    font-weight: 500;
    font-size: 24px;
  }

  &__main {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  &__prize,
  &__entry,
  &__platform,
  &__slots,
  &__mode,
  &__server {
    margin: 5px;
    color: #f5f5f5;
    font-weight: 500;
    font-size: 16px;
    span {
      margin-bottom: 6px;
      font-weight: 400;
      font-size: 16px;
      display: block;
      color: #67707a;
    }
  }

  &__entry {
  }

  &__platform {
  }

  &__slots {
  }

  &__mode {
  }

  &__server {
  }
}
@media (max-width: 768px) {
  .card {
    display: block;
    position: relative;
    &__img {
      img {
        width: 100%;
        height: 100px;
      }
    }
    &__content {
      position: absolute;
      top: 0;
    }
    &__main {
      display: none;
    }
    &__title {
      font-size: 20px;
    }
  }
}
</style>