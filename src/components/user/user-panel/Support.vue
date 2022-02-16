<template>
  <div>
    <div class="support">
      <div class="support__title">Support</div>
      <div class="support__content">
        <div class="support__name">
          <span>Name</span>
          <input placeholder="Name" type="text" />
        </div>
        <div class="support__topic">
          <span>Topic</span>
          <input placeholder="Topic" type="text" />
        </div>
        <div class="support__problem">
          <textarea placeholder="Your problem..."></textarea>
        </div>
        <div class="support__btn"><button>Submit</button></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.support {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 512px;
  margin: 0 auto;
  &__title {
    display: flex;
    justify-content: center;
    font-weight: 700;
    font-size: 48px;
    color: #f5f5f5;
    margin-bottom: 30px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  &__name,
  &__topic {
    margin: 9px 15px 0px 15px;
    max-width: 512px;
    span {
      display: block;
      font-size: 14px;
      color: white;
      margin-bottom: 5px;
    }
    input {
      width: 100%;
      height: 40px;
      background-color: #0f1215;
      padding-left: 15px;
      color: #627ca3;
      border: 1px solid #16263d;
      color: #cccdcd;
    }
  }

  &__problem {
    margin: 9px 15px 0px 15px;
    textarea {
      padding: 10px;
      color: #cccdcd;
      width: 100%;
      height: 325px;
      background-color: #0f1215;
      border: 1px solid #16263d;
    }
  }

  &__btn {
    display: flex;
    justify-content: center;
    margin-top: 22px;
    margin-bottom: 50px;

    button {
      width: 254px;
      height: 44px;

      background: linear-gradient(180deg, #2788f6 0%, #0960e0 100%);
      border-radius: 2px;
      color: #e6e6e6;
      font-weight: 700;
    }
  }
}
</style>