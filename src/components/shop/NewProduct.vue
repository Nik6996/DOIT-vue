<template>
  <div>
    <div class="product">
      <div class="product__content">
        <div class="product__title">New Product</div>
        <div class="product__new">
          <div class="product__name">
            <span>Product name</span>
            <input v-model="product.name" type="text" />
          </div>
          <div class="product__price">
            <span>Price</span>
            <input v-model="product.price" type="number" />
          </div>
          <div class="product__advance">
            <div class="product__advance-title">Image</div>
            <div class="product__logo">
              <div class="product__upload">
                <div class="product__img-name">{{ product.img.name }}</div>
                <label class="product__upload-btn" for="newImg">UPLOAD</label>
                <input
                  v-on:change="newPreviewImg()"
                  accept=".png, .jpg, .jpeg"
                  id="newImg"
                  type="file"
                  ref="newImg"
                />
              </div>
              <div class="product__img">
                <img :src="newImageSrc" alt="" />
              </div>
            </div>
          </div>

          <div class="product__new-btn">
            <button @click="save()">Save product</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const defaultImg = require("@/assets/img/preview.png");
export default {
  data() {
    return {
      product: {
        name: "",
        price: "",
        img: "",
        url: "",
        imgLocalUrl: "",
        id: "",
      },
    };
  },
  computed: {
    newImageSrc() {
      if (this.product.imgLocalUrl) {
        return this.product.imgLocalUrl;
      } else {
        return defaultImg;
      }
    },
  },

  methods: {
    async save() {
      await this.$store.dispatch("shop/save", this.product);
      this.$router.push("/shop");
    },
    newPreviewImg() {
      if (!this.$refs.newImg || !this.$refs.newImg.files?.length) {
        this.product.img = "";
        this.product.url = "";
        return;
      }
      this.product.id = new Date().valueOf();
      const file = this.$refs.newImg.files[0];
      const reader = new FileReader();
      reader.onload = (ev) => {
        this.product.img = file;
        this.product.imgLocalUrl = ev.currentTarget.result;
      };
      reader.readAsDataURL(file);
    },
  },
};
</script>

<style lang="scss" scoped>
.product {
  max-width: 600px;
  margin: 0 auto;
  padding: 0px 15px;

  &__content {
    width: 100%;
  }

  &__new {
    border: 1px solid #20252b;
    padding: 44px 30px;
    margin-bottom: 40px;
  }

  &__title {
    font-weight: 700;
    width: 100%;
    height: 82px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(216, 223, 235, 1);
    font-size: 22px;
    color: rgba(15, 18, 21, 1);
    margin-bottom: 28px;
  }

  &__name {
    span {
      margin-bottom: 10px;
      display: block;
      color: #cccdcd;
      font-weight: 700;
    }
    input {
      padding: 5px;
      color: #cccdcd;
      width: 100%;
      height: 40px;
      background: #0f1215;
      border: 2px solid #20252b;
    }
  }
  &__price {
    margin-top: 15px;
    span {
      margin-bottom: 10px;
      display: block;
      color: #cccdcd;
      font-weight: 700;
    }
    input {
      padding: 5px;
      color: #cccdcd;
      width: 100%;
      height: 40px;
      background: #0f1215;
      border: 2px solid #20252b;
    }
  }
  &__img {
    margin-top: 10px;
    width: 130px;
    height: 130px;
    border: 1px solid #20252b;
    img {
      width: 128px;
      height: 129px;
      object-fit: cover;
    }
  }
  &__advance {
    margin: 24px 0px;
  }

  &__advance-title {
    font-weight: 500;
    font-size: 22px;
    color: #cccdcd;
  }
  &__logo {
    color: #cccdcd;
    margin-top: 10px;
  }

  &__upload {
    margin: 10px 0px;
    display: flex;
    input {
      display: none;
    }
  }

  &__img-name {
    display: flex;
    align-items: center;
    padding-left: 20px;
    height: 40px;
    border: 1px solid #20252b;
    width: 100%;
  }

  &__upload-btn {
    cursor: pointer;
    width: 137px;
    height: 40px;
    background-color: #1a222d;
    font-size: 10px;
    color: #f5f5f5;
    margin-left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__description {
    span {
      margin-bottom: 10px;
      display: block;
      color: #cccdcd;
      font-weight: 700;
    }
    textarea {
      border: 2px solid #20252b;
      width: 100%;
      height: 184px;
      padding: 5px;
      background: #0f1215;
      color: #cccdcd;
    }
  }

  &__new-btn {
    display: flex;
    justify-content: center;
    button {
      width: 169px;
      height: 55px;
      margin: 20px 30px 0px 30px;
      font-weight: 700;
      color: #f5f5f5;
      background: #1a222d;
    }
  }
}
</style>