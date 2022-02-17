<template>
  <div>
    <div class="page">
      <div class="page__content">
        <div class="page__column1">
          <div class="page__text">
            Are you lost? <br />
            Please back to the game!
          </div>
        </div>
        <div class="page__column2">
          <div class="page__found">404</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.page {
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  padding: 15px;

  &__content {
    width: 100%;
    display: flex;
    align-items: center;
  }

  &__column1 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 600px;
    height: 334px;
    border: 1px solid transparent;
    border-image: linear-gradient(
      to right,
      #1472ff 0%,
      rgba(20, 114, 255, 0) 94.79%
    );
    border-image-slice: 1;
  }

  &__text {
    max-width: 380px;
    color: #ffffff;
    font-size: 30px;
    padding: 10px;
  }

  &__column2 {
    background: linear-gradient(
      90deg,
      #1472ff 0%,
      rgba(20, 114, 255, 0) 94.79%
    );
    display: flex;
    justify-content: center;
    align-items: center;
    width: 600px;
    height: 334px;
  }

  &__found {
    font-size: 116px;
    font-weight: 700;
  }
}
@media (max-width: 1400px) {
  .page {
    margin-left: 100px;
  }
}
@media (max-width: 1060px) {
  .page {
    margin: 0;
  }
}
@media (max-width: 768px) {
  .page {
    position: relative;
    top: -40px;
    padding: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(rgba(20, 114, 255, 0) 16.67%, #1472ff 100%);
    //transform: rotate(90deg);
    &__content {
      flex-direction: column-reverse;
    }
    &__column1 {
      width: 100%;
      height: auto;
      border: none;
    }
    &__column2 {
      height: auto;
      width: 100%;
      background: inherit;
    }
    &__found {
      color: white;
    }
    &__text {
      text-align: center;
      margin-top: 32px;
      display: flex;
      justify-content: center;
      max-width: 250px;
      color: black;
    }
  }
}
</style>