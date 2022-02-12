<template>
  <div>
    <div :class="{ error: isError }" class="modal-error">
      <span>All fields are required</span>
    </div>
    <div class="withdraw">
      <div class="withdraw__content">
        <div class="withdraw__btns">
          <div
            @click="change('paypal')"
            :class="{ active: paypal }"
            class="withdraw__btn"
          >
            Paypal
          </div>
          <div
            @click="change('btc')"
            :class="{ active: btc }"
            class="withdraw__btn"
          >
            BTC
          </div>
          <div
            @click="change('qiwi')"
            :class="{ active: qiwi }"
            class="withdraw__btn"
          >
            QIWI
          </div>
          <div
            @click="change('doit')"
            :class="{ active: doit }"
            class="withdraw__btn"
          >
            DOIT
          </div>
        </div>
      </div>
      <div class="withdraw__body">
        <div class="withdraw__input">
          <span>Name and last name</span>
          <input v-model="withdraw.name" type="text" />
        </div>
        <div class="withdraw__input">
          <span>Provide your paypal email adress</span>
          <input v-model="withdraw.email" type="text" />
        </div>
        <div class="withdraw__input">
          <span>Amount</span>
          <input v-model="withdraw.amount" type="text" />
        </div>
      </div>
      <div class="withdraw__save">
        <button @click="save()">Withdraw</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      withdraw: {
        name: null,
        email: null,
        date: new Date().toLocaleDateString(),
        amount: null,
        system: "paypal",
        balance: this.balance,
        action: "withdraw",
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
        this.withdraw.balance = balance;
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
      if (this.withdraw.name && this.withdraw.email && this.withdraw.amount) {
        await this.$store.dispatch("withdraw/add", this.withdraw);
        this.withdraw.name = null;
        this.withdraw.amount = null;
        this.withdraw.email = null;
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
        this.withdraw.system = "paypal";
      }
      if (data === "btc") {
        this.paypal = false;
        this.btc = true;
        this.qiwi = false;
        this.doit = false;
        this.withdraw.system = "btc";
      }
      if (data === "qiwi") {
        this.paypal = false;
        this.btc = false;
        this.qiwi = true;
        this.doit = false;
        this.withdraw.system = "qiwi";
      }
      if (data === "doit") {
        this.paypal = false;
        this.btc = false;
        this.qiwi = false;
        this.doit = true;
        this.withdraw.system = "doit";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.withdraw {
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
  .withdraw {
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
