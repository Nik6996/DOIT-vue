<template>
  <div>
    <div :class="{ error: isError }" class="modal-error">
      <span>All fields are required</span>
    </div>
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
          <span>Your name</span>
          <input v-model="deposit.name" type="text" />
        </div>
        <div class="deposit__input">
          <span>Amount</span>
          <input v-model="deposit.amount" type="number" />
        </div>
      </div>
      <div class="deposit__save">
        <button @click="save()">Deposit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      deposit: {
        name: "",
        date: new Date().toLocaleDateString(),
        amount: null,
        system: "paypal",
        balance: this.balance,
        action: "deposit",
      },
      paypal: true,
      btc: false,
      qiwi: false,
      doit: false,
      isError: false,
    };
  },
  props: {
    balance: {
      type: Number,
    },
  },
  watch: {
    balance: {
      handler(balance) {
        this.deposit.balance = balance;
      },
    },
    isError: {
      handler() {
        setTimeout(this.errorMessage, 4000);
      },
    },
  },
  methods: {
    errorMessage() {
      this.isError = false;
    },
    async save() {
      if (this.deposit.name && this.deposit.amount) {
        await this.$store.dispatch("deposit/add", this.deposit);
        this.deposit.name = "";
        this.deposit.amount = null;
      } else {
        this.isError = true;
      }
    },
    change(data) {
      if (data === "paypal") {
        this.paypal = true;
        this.btc = false;
        this.qiwi = false;
        this.doit = false;
        this.deposit.system = "paypal";
      }
      if (data === "btc") {
        this.paypal = false;
        this.btc = true;
        this.qiwi = false;
        this.doit = false;
        this.deposit.system = "btc";
      }
      if (data === "qiwi") {
        this.paypal = false;
        this.btc = false;
        this.qiwi = true;
        this.doit = false;
        this.deposit.system = "qiwi";
      }
      if (data === "doit") {
        this.paypal = false;
        this.btc = false;
        this.qiwi = false;
        this.doit = true;
        this.deposit.system = "doit";
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
  margin-bottom: 30px;
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
@media (max-width: 768px) {
  .deposit {
    padding: 19px 17px;
  }
}
.active {
  background: linear-gradient(180deg, #2788f6 0%, #0960e0 100%);
  color: #f5f5f5;
}

.modal-error {
  position: fixed;
  display: flex;
  align-items: center;
  padding: 5px;
  right: 5%;
  // top: 50%;

  bottom: 50%;
  transform: translate3d(0, 100px, 0);
  opacity: 0;
  transition: all 0.5s;
  background-color: red;
  border-radius: 15px;
  width: 150px;
  height: 40px;
  span {
    color: white;
  }
}

.error {
  transform: translate3d(0, 0, 0);
  opacity: 1;
  transition: all 0.5s;
}
</style>
