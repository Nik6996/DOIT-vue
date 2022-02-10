<template>
  <div>
    <div class="deposit">
      <div class="deposit__content">
        <div class="deposit__btns">
          <div
            @click="change('paypal')"
            :class="{ active: paypal }"
            class="deposit__btn"
          >
            Paypal
          </div>
          <div
            @click="change('btc')"
            :class="{ active: btc }"
            class="deposit__btn"
          >
            BTC
          </div>
          <div
            @click="change('qiwi')"
            :class="{ active: qiwi }"
            class="deposit__btn"
          >
            QIWI
          </div>
          <div
            @click="change('doit')"
            :class="{ active: doit }"
            class="deposit__btn"
          >
            DOIT
          </div>
        </div>
      </div>
      <div class="deposit__body">
        <div class="deposit__input">
          <span>How much do you want to add?</span>
          <input type="text" />
        </div>
        <div class="deposit__input">
          <span>Amount</span>
          <input type="text" />
        </div>
      </div>
      <div class="deposit__save">
        <button>Deposit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      paypal: true,
      btc: false,
      qiwi: false,
      doit: false,
    };
  },
  methods: {
    change(data) {
      if (data === "paypal") {
        this.paypal = true;
        this.btc = false;
        this.qiwi = false;
        this.doit = false;
      }
      if (data === "btc") {
        this.paypal = false;
        this.btc = true;
        this.qiwi = false;
        this.doit = false;
      }
      if (data === "qiwi") {
        this.paypal = false;
        this.btc = false;
        this.qiwi = true;
        this.doit = false;
      }
      if (data === "doit") {
        this.paypal = false;
        this.btc = false;
        this.qiwi = false;
        this.doit = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.deposit {
  max-width: 928px;
  background: #0d1d2c;
  padding: 19px 41px;

  &__btns {
    display: flex;
    margin-bottom: 35px;
  }

  &__btn {
    width: 78px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 400;
    color: #7a8899;
    background: #0f1215;
    cursor: pointer;
  }

  &__body {
    color: #cccdcd;
    font-weight: 700;
    max-width: 512px;
  }

  &__input {
    margin-bottom: 19px;
    span {
      display: block;
      margin-bottom: 5px;
    }
    input {
      width: 100%;
      height: 40px;
      color: #cccdcd;
      padding: 7px;
      background: #0f1215;
    }
  }
  &__save {
    display: flex;
    justify-content: center;
    button {
      background: linear-gradient(180deg, #2788f6 0%, #0960e0 100%);
      width: 160px;
      height: 29px;
      color: #f5f5f5;
      font-size: 14px;
    }
  }
}
.active {
  background: linear-gradient(180deg, #2788f6 0%, #0960e0 100%);
  color: #f5f5f5;
}
</style>
