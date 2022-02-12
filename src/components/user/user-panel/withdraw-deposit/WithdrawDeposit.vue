<template>
  <div>
    <div class="withdraw">
      <div class="withdraw__title">Deposit/Witdraw</div>
      <div class="withdraw__content">
        <div class="withdraw__user">
          <div class="withdraw__img">
            <img src="@/assets/img/avatar.jpg" alt="" />
          </div>

          <div class="withdraw__info">
            <div class="withdraw__name">{{ getUser.name }}</div>
            <div class="withdraw__balance">
              BALANCE: $<span>{{ getUser.balance }}</span>
            </div>
            <div class="withdraw__doit">DOIT POINTS: <span>100</span></div>
          </div>
        </div>
        <div class="withdraw__btns">
          <button
            :class="{ active: withdraw }"
            @click="bodyContent('withdraw')"
            class="withdraw__withdraw"
          >
            Withdraw
          </button>
          <button
            :class="{ active: deposit }"
            @click="bodyContent('deposit')"
            class="withdraw__deposit"
          >
            Deposit
          </button>
          <button
            :class="{ active: history }"
            @click="bodyContent('history')"
            class="withdraw__history"
          >
            History
          </button>
        </div>
      </div>
      <div class="withdraw__body">
        <withdraw v-bind:balance="getUser.balance" v-if="this.withdraw" />
        <deposit v-bind:balance="getUser.balance" v-if="this.deposit" />
        <history v-if="this.history" />
      </div>
    </div>
  </div>
</template>

<script>
import Withdraw from "@/components/user/user-panel/withdraw-deposit/Withdraw.vue";
import Deposit from "@/components/user/user-panel/withdraw-deposit/Deposit.vue";
import History from "@/components/user/user-panel/withdraw-deposit/History.vue";

import { mapGetters } from "vuex";

export default {
  data() {
    return {
      withdraw: true,
      deposit: false,
      history: false,
    };
  },
  components: {
    Withdraw,
    Deposit,
    History,
  },
  computed: {
    ...mapGetters({
      getUser: "loadUser/getUser",
    }),
  },
  methods: {
    bodyContent(item) {
      if (item === "withdraw") {
        this.withdraw = true;
        this.deposit = false;
        this.history = false;
      }
      if (item === "deposit") {
        this.withdraw = false;
        this.deposit = true;
        this.history = false;
      }
      if (item === "history") {
        this.withdraw = false;
        this.deposit = false;
        this.history = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.withdraw {
  max-width: 928px;
  margin: 0px 40px;

  // &__body {
  //   background-color: #f5f5f5;
  // }
  &__title {
    display: flex;
    justify-content: center;
    color: #f5f5f5;
    font-weight: 700;
    font-size: 48px;
    margin-bottom: 22px;
  }

  &__content {
    background: #0d1d2c;
    padding: 22px 22px 0px 22px;
    margin-bottom: 37px;
  }

  &__user {
    display: flex;
  }

  &__img {
    width: 86px;
    height: 86px;
    margin: 0px 20px 30px 0px;
    img {
      width: 86px;
      height: 86px;
      object-fit: cover;
    }
  }

  &__info {
    margin-bottom: 20px;
  }

  &__name {
    font-weight: 500;
    font-size: 24px;
    color: #f5f5f5;
    margin-bottom: 5px;
  }

  &__balance {
    color: #37b7fa;
    margin-top: 10px;
  }

  &__doit {
    color: #37b7fa;
    margin-top: 10px;
  }

  &__btns {
    display: flex;
    justify-content: space-between;
  }

  &__withdraw {
    background-color: #0d1d2c;
    width: 170px;
    font-size: 24px;
    color: white;
    padding-bottom: 8px;
  }

  &__deposit {
    background-color: #0d1d2c;
    width: 170px;
    font-size: 24px;
    color: white;
    padding-bottom: 8px;
  }

  &__history {
    background-color: #0d1d2c;
    width: 170px;
    font-size: 24px;
    color: white;
    padding-bottom: 8px;
  }
}
.active {
  border-bottom: 4px solid #ffffff;
}
@media (max-width: 768px) {
  .withdraw {
    margin: 0px 15px;
    &__title {
      font-size: 35px;
    }
    &__content {
      padding: 10px 10px 0px 10px;
      margin-bottom: 20px;
    }
    &__withdraw,
    &__deposit,
    &__history {
      font-size: 20px;
      width: 100px;
    }
  }
}
</style>