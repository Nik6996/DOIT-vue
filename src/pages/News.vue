<template>
  <div>
    <div class="news">
      <div class="news__content">
        <div
          v-if="isAdmin"
          class="admin-btn"
          @click="this.$router.push('/update-news')"
        >
          <button>Add news</button>
        </div>
        <news-main />
      </div>
    </div>
  </div>
</template>

<script>
import NewsMain from "@/components/news/NewsMain";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      isAdmin: false,
    };
  },
  components: {
    NewsMain,
  },
  computed: {
    ...mapGetters({
      getUser: "loadUser/getUser",
    }),
  },
  mounted() {
    if (this.getUser) {
      this.isAdmin = this.getUser.isAdmin;
      console.log(this.getUser.isAdmin);
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
};
</script>

<style lang="scss" scoped>
.news {
  max-width: 1200px;
  margin: 0 auto;
  &__content {
    width: 100%;
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