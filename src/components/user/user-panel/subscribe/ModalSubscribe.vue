<template>
  <div>
    <div class="modal">
      <div class="modal__header">
        <div @click="$emit('close')" class="modal__close">
          <img src="@/assets/icon/close.svg" alt="" />
        </div>
      </div>
      <div class="modal__content">
        <div class="modal__logo">
          <img src="@/assets/img/logo.png" alt="" />
        </div>
        <div class="modal__title">
          Do you currently have subscription
          <span>{{ item.oldSubscribe }}</span> to change it to subscription
          <span>{{ item.newSubscribe }}</span> ?
        </div>
        <div class="modal__btns">
          <div @click="$emit('newSubscribe')" class="modal__btn">
            <button>Yes</button>
          </div>
          <div @click="$emit('close')" class="modal__btn no">
            <button>No</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  props: {
    item: {
      type: Object,
    },
  },

  methods: {
    // onSubmit(values) {
    //   this.$emit("userData", values);
    // },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;

  background-color: #0b172979;
  min-height: 100vh;
  &__header {
    display: flex;
    justify-content: flex-end;
  }

  &__return {
    padding: 10px;
    cursor: pointer;
  }

  &__close {
    padding: 10px;
    cursor: pointer;
  }

  &__content {
    padding: 20px 20px 50px 20px;
    max-width: 440px;

    margin: auto;
    background-color: #0b1729;
  }

  &__logo {
    display: flex;
    justify-content: center;
    margin-bottom: 44px;
    img {
      width: 88px;
      height: 80px;
    }
  }

  &__title {
    padding: 20px;
    font-size: 22px;
    color: #e6e6e6;
    font-weight: 700;
    margin-bottom: 30px;
    span {
      color: #0960e0;
    }
  }

  &__btns {
    display: flex;
    width: 100%;
  }

  &__btn {
    display: flex;
    justify-content: center;
    margin-top: 22px;
    margin-bottom: 30px;
    width: 100%;
    margin: 0px 10px;
    button {
      background: linear-gradient(180deg, #2788f6 0%, #0960e0 100%);
      border-radius: 2px;
      width: 100%;
      height: 44px;
      color: #f5f5f5;
      font-weight: 700;
    }
  }
}
.no {
  button {
    background: linear-gradient(180deg, #d60202 0%, #da1010 100%);
  }
}
</style>