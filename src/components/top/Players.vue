<template>
  <div>
    <div class="players">
      <div class="players__top">
        <div class="players__item center">Rank</div>
        <div class="players__item">Country & Nickname</div>
        <div class="players__item">Name</div>
        <div class="players__item">Total (year)</div>
        <div class="players__item">Total (OVERAl)</div>
      </div>
      <div
        class="players__content"
        v-for="(player, index) in returnSortPlayers"
        :key="player.id"
      >
        <preview-players :rank="index" v-model="returnSortPlayers[index]" />
      </div>
      <div class="players__pagination">
        <div @click="minus()" class="players__less"></div>
        <div
          class="players__page"
          :class="{ 'current-page': page === pageNumber }"
          v-for="page in totalPage"
          :key="page"
          @click="changePage(page)"
        >
          {{ page }}
        </div>
        <div @click="plus()" class="players__more"></div>
      </div>
    </div>
  </div>
</template>

<script>
import PreviewPlayers from "@/components/top/PreviewPlayers";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      pageNumber: 1,
      limitUser: 10,
      totalPage: 0,
    };
  },
  components: {
    PreviewPlayers,
  },
  computed: {
    ...mapGetters({
      getUsers: "loadUser/getUsers",
    }),

    returnSortPlayers() {
      return this.getUsers
        .sort((a, b) => (a.balance < b.balance ? 1 : -1))
        .slice(
          (this.pageNumber - 1) * this.limitUser,
          this.pageNumber * this.limitUser
        );
    },
  },
  watch: {
    getUsers: {
      handler(getUsers) {
        this.totalPage = Math.ceil(getUsers.length / this.limitUser);
      },
    },
  },
  async mounted() {
    await this.$store.dispatch("loadUser/loadUsers");
  },
  methods: {
    changePage(pageNumber) {
      this.pageNumber = pageNumber;
    },
    plus() {
      if (this.pageNumber !== this.totalPage) {
        this.pageNumber += 1;
      }
    },
    minus() {
      if (this.pageNumber !== 1) {
        this.pageNumber -= 1;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.players {
  border-left: 2px solid #242b33;
  border-right: 2px solid #242b33;
  border-bottom: 2px solid #242b33;
  margin-bottom: 100px;
  &__top {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    border-bottom: 2px solid #242b33;
    margin-bottom: 30px;
  }
  &__item {
    display: flex;

    padding: 30px 15px 24px 15px;
    font-weight: 700;
    font-size: 16px;
    color: #e6e6e6;
  }
  &__pagination {
    display: flex;
    justify-content: center;
    padding: 20px 0px;
    border-top: 2px solid #242b33;
    align-items: center;
  }
  &__page {
    color: #ffffff;
    font-weight: 400;
    font-size: 16px;
    cursor: pointer;
    padding: 5px;
  }
  &__more {
    width: 15px;
    height: 15px;
    transform: rotate(180deg);
    cursor: pointer;
    font-size: 20px;
    color: white;
    margin: 0px 20px;
    background-image: url("../../assets/icon/arrow-top.svg");
    background-repeat: no-repeat;
  }
  &__less {
    width: 15px;
    height: 15px;
    cursor: pointer;
    font-size: 20px;
    color: white;

    margin: 0px 20px;
    background-image: url("../../assets/icon/arrow-top.svg");
    background-repeat: no-repeat;
  }
}
.center {
  justify-content: center;
}
.current-page {
  color: #2787f6;
  font-weight: 500;
  transform: scale(1.2);
  transition: all 0.3s;
}
</style>