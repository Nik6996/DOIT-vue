<template>
  <div>
    <div class="shop">
      <div
        v-if="isAdmin"
        class="admin-btn"
        @click="this.$router.push('/new-product')"
      >
        <button>Add product</button>
      </div>
      <div class="shop__title">Shop</div>
      <div class="shop__content">
        <div v-for="(product, index) in products" :key="product.id">
          <shop-card v-model="products[index]" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ShopCard from "@/components/shop/ShopCard";
export default {
  data() {
    return {
      isAdmin: false,
    };
  },
  components: {
    ShopCard,
  },
  async mounted() {
    if (this.getUser) {
      this.isAdmin = this.getUser.isAdmin;
    }
    if (!this.products) {
      this.$store.dispatch("shop/load");
    }
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
  computed: {
    ...mapGetters({
      getUser: "loadUser/getUser",
      products: "shop/getProduct",
    }),
  },
};
</script>

<style lang="scss" scoped>
.shop {
  max-width: 1200px;
  margin: 0 auto;
  &__title {
    display: flex;
    justify-content: center;
    color: #f5f5f5;
    font-weight: 700;
    font-size: 48px;
    margin-bottom: 30px;
  }

  &__content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
@media (max-width: 1430px) {
  .shop {
    margin-left: 110px;
  }
}
@media (max-width: 1060px) {
  .shop {
    margin-left: 0px;
    &__content {
      justify-content: center;
      padding-bottom: 70px;
    }
  }
}

.admin-btn {
  display: flex;
  justify-content: flex-start;
  margin-top: 22px;
  margin-bottom: 30px;
  width: 200px;
  margin: 10px 0px 30px 40px;
  button {
    background: linear-gradient(180deg, #2788f6 0%, #0960e0 100%);
    border-radius: 2px;
    width: 100%;
    height: 44px;
    color: #f5f5f5;
    font-weight: 700;
  }
}
</style>