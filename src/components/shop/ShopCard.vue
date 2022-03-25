<template>
  <div>
    <div class="card">
      <div v-if="isAdmin" class="remove" @click="remove()">
        <button>X</button>
      </div>
      <div class="card__content">
        <img :src="img" alt="" />
        <div class="card__main">
          <div class="card__name">{{ name }}</div>
          <div class="card__price">${{ price }}</div>
        </div>
        <div @click="buy()" class="card__btn"><button>Buy</button></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      name: this.$attrs.modelValue.name,
      price: this.$attrs.modelValue.price,
      img: this.$attrs.modelValue.url,
      isAdmin: false,
    };
  },

  computed: {
    ...mapGetters({
      getUser: "loadUser/getUser",
    }),
  },
  watch: {
    getUser: {
      handler(getUser) {
        if (getUser) {
          this.isAdmin = this.getUser.isAdmin;
        }
      },
    },
  },
  async mounted() {
    if (this.getUser) {
      this.isAdmin = this.getUser.isAdmin;
    }
  },
  methods: {
    buy() {
      const item = {
        balance: this.getUser.balance,
        price: this.price,
      };
      this.$store.dispatch("shop/buy", item);
    },
    remove() {
      this.$store.dispatch("shop/remove", this.$attrs.modelValue.id);
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  margin: 10px;
  border: 1px solid #444546;
  &__content {
    padding: 10px;
    img {
      border-radius: 4px;
      width: 300px;
      height: 200px;
      object-fit: cover;
    }
  }
  &__main {
    margin: 40px 0px 20px 0px;
    display: flex;
    justify-content: space-between;
  }

  &__name {
    color: #67707a;
    font-weight: 500;
    font-size: 16px;
  }

  &__price {
    color: #dadada;
    font-weight: 500;
    font-size: 16px;
  }

  &__btn {
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
.remove {
  display: flex;
  justify-content: flex-end;
  margin: 2px;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    border: solid 1px;
    width: 17px;
    height: 17px;
    background: #0f1215;
    color: #67707a;
    border-radius: 50%;
  }
}
</style>