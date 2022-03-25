<template>
  <div>
    <div class="support">
      <div class="support__content">
        <div class="support__title">Ask your question</div>
        <textarea></textarea>
        <button>Ask</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.support {
  border: 2px solid #20252b;
  height: 400px;
  &__content {
    height: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    textarea {
      width: 100%;
      height: 100%;
      background-color: #0f1215;
      padding: 10px;
      color: #b9b9b9;
      border: 2px solid #20252b;
    }
    button {
      margin-top: 20px;
      width: 200px;
      height: 55px;
      background: linear-gradient(180deg, #2788f6 0%, #0960e0 100%);
      color: #ffffff;
      font-weight: 700;
      font-size: 16px;
    }
  }

  &__title {
    margin-bottom: 20px;
    color: white;
    font-weight: 700;
    font-size: 33px;
  }
}
</style>