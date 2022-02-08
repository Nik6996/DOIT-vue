<template>
  <div>
    <div class="user">
      <div class="user__content">
        <div class="user__title">Profile</div>
        <div class="user__name">
          Nickname: <span>{{ getUser.name }}</span>
        </div>
        <div class="user__date">
          With us from: <span>{{ getUser.date }}</span>
        </div>
        <div class="user__country">
          Country: <span>{{ getUser.country }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getAuth, onAuthStateChanged } from "firebase/auth";
export default {
  computed: {
    ...mapGetters({
      getUser: "loadUser/getUser",
    }),
  },
  async mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, (userSystem) => {
      if (userSystem) {
        this.$store.dispatch("loadUser/load", userSystem.uid);
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.user {
  padding: 20px;
  &__content {
    width: 200px;
  }

  &__title {
    font-weight: 700;
    font-size: 24px;
    color: #f5f5f5;
    margin-bottom: 50px;
  }

  &__date,
  &__name,
  &__country {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 400;
    color: #888888;
    margin: 20px 0px;
    span {
      font-size: 18px;
      color: #f5f5f5;
    }
  }
}
</style>