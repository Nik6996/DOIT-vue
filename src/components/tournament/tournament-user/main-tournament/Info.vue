<template>
  <div>
    <div class="info">
      <div class="info__column">
        <div class="info__block">
          <img src="@/assets/icon/checkInTime.svg" alt="" /> START TIME
          <span>{{ this.info.time }}</span>
        </div>
        <div class="info__block">
          <img src="@/assets/icon/mode.svg" alt="" />MODE
          <span>{{ this.info.mode }}</span>
        </div>
      </div>
      <div class="info__column">
        <div class="info__block">
          <img src="@/assets/icon/game.svg" alt="" />GAME
          <span>{{ this.info.game }}</span>
        </div>
        <div class="info__block">
          <img src="@/assets/icon/checkInTime.svg" alt="" />FORMAT
          <span>{{ this.info.format }}</span>
        </div>
      </div>
      <div class="info__column">
        <div class="info__block">
          <img src="@/assets/icon/prize.svg" alt="" />PRIZE POOL
          <span>{{ this.info.prize }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.info {
  display: flex;
  justify-content: space-between;
  padding: 40px;
  border: 2px solid #20252b;
  &__column {
    margin: 10px;
  }

  &__block {
    margin-top: 30px;
    font-weight: 700;
    font-size: 16px;
    color: white;
    span {
      margin-top: 8px;
      display: block;
      color: #67707a;
      font-weight: 400;
      font-size: 16px;
    }
    img {
      margin-right: 7px;
    }
  }
}
@media (max-width: 1060px) {
  .info {
    padding: 20px;
    flex-wrap: wrap;
    &__block {
      margin-top: 15px;
      font-size: 14px;
    }
  }
}
</style>