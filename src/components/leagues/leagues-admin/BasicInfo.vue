<template>
  <div>
    <div class="info">
      <div class="info__content">
        <div class="info__input">
          <span>Host</span>
          <input v-model="basicInfo.host" type="text" />
        </div>
        <div class="info__input">
          <span>League name*</span>
          <input v-model="basicInfo.name" type="text" />
        </div>
        <div class="info__input">
          <span>URL</span>
          <input v-model="basicInfo.url" type="text" />
        </div>
        <div class="info__rules">
          <span>Quick Rules</span>
          <textarea v-model="basicInfo.quickRules"></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    basicInfo: {
      type: Object,
    },
  },
};
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