<template>
  <div>
    <div class="home">
      <div class="soon">
        <div class="soon__content">
          <div class="soon__title">DOIT <span>BETA</span></div>
          <div class="soon__desc">
            We are working hard to provide you the best experience on our
            platform
          </div>
          <div class="soon__btns"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.soon {
  margin: 0 auto;
  max-width: 1008px;
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 760px;
    background-size: contain;
    background-image: url("../../assets/img/bcgMain.svg");
    // background-image: url(".../assets/img/bcgMain.svg");
    background-repeat: no-repeat;
    padding-top: 14%;
  }

  &__title {
    font-weight: 700;
    display: flex;
    justify-content: center;
    font-size: 125px;
    color: #f5f5f5;
    margin-bottom: 15px;
    span {
      margin-left: 10px;
    }
  }

  &__desc {
    text-align: center;
    color: #cccccc;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 460px;
    line-height: 24px;
    padding: 0px 10px 0px 10px;
  }

  &__btns {
    margin-top: 26px;
  }

  &__login {
    cursor: pointer;
    width: 105px;
    height: 44px;
    background-color: #1a222d;
    color: #f5f5f5;
    font-weight: 700;
  }

  &__sign-up {
    cursor: pointer;
    width: 120px;
    height: 44px;
    background: linear-gradient(180deg, #2788f6 0%, #0960e0 100%);
    margin-left: 8px;
    color: #f5f5f5;
    font-weight: 700;
  }
}
@media (max-width: 1430px) {
  .home {
    margin-left: 120px;
  }
}
@media (max-width: 1060px) {
  .home {
    margin: 0 auto;
  }
}
@media (max-width: 768px) {
  .soon {
    &__title {
      font-size: 84px;
      span {
        display: none;
      }
    }
    &__content {
      height: 100%;
      padding-bottom: 10%;
      background-position: center;
    }
  }
}
</style>