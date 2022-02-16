<template>
  <div>
    <div class="subscribe">
      <div class="subscribe__title">Premium</div>
      <div class="subscribe__content">
        <div class="subscribe__card card free">
          <div>
            <div class="card__title">FREE</div>
            <div class="card__subtitle">$0 per mounth</div>
          </div>

          <div class="card__description">
            A night to remember for Brazil. Drama is never too far away at Copa
            America and this final had it by the bucketlad. Thanks for your
            company. A night to remember for Brazil. Drama is never too far away
            at Copa America and this final had it by the bucketlad. Thanks for
            your company.
          </div>
          <div class="card__btn"><button>Sign up</button></div>
        </div>
        <div class="subscribe__card card pro">
          <div>
            <div class="card__title pro-title">PRO</div>
            <div class="card__subtitle">$5 per month</div>
          </div>

          <div class="card__description">
            A night to remember for Brazil. Drama is never too far away at Copa
            America and this final had it by the bucketlad. Thanks for your
            company. A night to remember for Brazil. Drama is never too far away
            at Copa America and this final had it by the bucketlad. Thanks for
            your company.
          </div>
          <div class="card__btn pro-btn"><button>Sign up</button></div>
        </div>
        <div class="subscribe__card card organizer">
          <div>
            <div class="card__title organizer-title">Organizer</div>
            <div class="card__subtitle">$10 per mounth</div>
          </div>

          <div class="card__description">
            A night to remember for Brazil. Drama is never too far away at Copa
            America and this final had it by the bucketlad. Thanks for your
            company. A night to remember for Brazil. Drama is never too far away
            at Copa America and this final had it by the bucketlad. Thanks for
            your company.
          </div>
          <div class="card__btn organizer-btn"><button>Sign up</button></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.subscribe {
  padding: 15px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  &__title {
    display: flex;
    justify-content: center;
    font-weight: 700;
    font-size: 48px;
    color: #f5f5f5;
    margin-bottom: 50px;
  }

  &__content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
.card {
  width: 240px;
  height: 520px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: radial-gradient(
      250.9% 252.09% at -142.43% -152.09%,
      rgba(20, 114, 255, 0.35) 0,
      rgba(20, 114, 255, 0) 100%
    ),
    #181b1f;
  padding: 80px 22px 36px;
  &__title {
    color: #2788f6;
    font-size: 42px;
    font-weight: 700;
  }

  &__subtitle {
    margin-top: 30px;
    margin-bottom: 16px;
    font-size: 22px;
    color: #f5f5f5;
    opacity: 0.88;
  }

  &__description {
    color: #67707a;
    line-height: 120%;
  }

  &__btn {
    display: flex;
    justify-content: center;
    button {
      width: 136px;
      height: 48px;
      background: linear-gradient(180deg, #2788f6 0%, #0960e0 100%), #095fe0;
      color: #f5f5f5;
    }
  }
}
.pro {
  background: radial-gradient(
      250.9% 252.09% at -142.43% -152.09%,
      rgba(245, 200, 31, 0.25) 0,
      rgba(245, 200, 31, 0) 100%
    ),
    #181b1f;
}
.organizer {
  background: radial-gradient(
      242.43% 252.09% at -142.43% -152.09%,
      rgba(66, 232, 128, 0.3) 0,
      rgba(66, 232, 128, 0) 100%
    ),
    #181b1f;
}
.pro-title {
  color: #ffd321;
}
.organizer-title {
  color: #46f48c;
}
.pro-btn {
  button {
    background: linear-gradient(180deg, #ffd321 0%, #9c6c0d 100%);
  }
}
.organizer-btn {
  button {
    background: linear-gradient(180deg, #46f48c 0%, #2b9d37 100%);
  }
}
</style>