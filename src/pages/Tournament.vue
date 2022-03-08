<template>
  <div
    v-if="isAdmin"
    class="admin-btn"
    @click="this.$router.push('/tournament-admin')"
  >
    <button>Add Tournament</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      isAdmin: false,
    };
  },
  async mounted() {
    if (this.getUser) {
      this.isAdmin = this.getUser.isAdmin;
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
    }),
  },
};
</script>

<style lang="scss" scoped>
.admin-btn {
  display: flex;
  justify-content: flex-start;
  margin-top: 22px;
  margin-bottom: 30px;
  margin-left: 130px;
  width: 200px;

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