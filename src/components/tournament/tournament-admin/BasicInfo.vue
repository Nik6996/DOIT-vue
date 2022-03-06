<template>
  <div>
    <div class="info">
      <div class="info__content">
        <div class="info__input">
          <span>Host</span>
          <input type="text" />
        </div>
        <div class="info__input">
          <span>Tournament name*</span>
          <input type="text" />
        </div>
        <div class="info__input">
          <span>URL</span>
          <input type="text" />
        </div>
        <div class="info__rules">
          <span>Quick Rules</span>
          <textarea></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.info {
  background: #0f1215;

  &__content {
    padding: 15px;
  }

  &__input {
    span {
      display: block;
      font-weight: 700;
      color: #cccdcd;
    }
    input {
      margin-top: 10px;
      margin-bottom: 20px;
      height: 40px;
      width: 100%;
      padding-left: 10px;
      color: #cccdcd;
      background-color: #0f1215;
      border: 2px solid #20252b;
    }
  }

  &__rules {
    span {
      display: block;
      font-weight: 700;
      color: #cccdcd;
    }
    textarea {
      margin-top: 10px;
      margin-bottom: 20px;
      height: 184px;
      width: 100%;
      padding-left: 10px;
      color: #cccdcd;
      background-color: #0f1215;
      border: 2px solid #20252b;
    }
  }
}
</style>