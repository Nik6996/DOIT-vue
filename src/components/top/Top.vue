<template>
  <div>
    <div v-show="isLoading"><loading /></div>
    <div class="top">
      <div class="top__title">Top</div>
      <div class="top__header">
        <div class="top__block">
          Total Tournaments:<span>{{ getTournamentLength }}</span>
        </div>
        <div class="top__block">
          Total Prize money:<span>${{ getTotalPrize }}</span>
        </div>
        <div class="top__block">
          Total Players:<span>{{ getUserLength }}</span>
        </div>
      </div>
      <div class="top__btns">
        <div
          class="top__btn"
          @click="this.isActive = 'Countries'"
          :class="{ active: isActive === 'Countries' }"
        >
          Top Countries
        </div>
        <div
          class="top__btn"
          @click="this.isActive = 'Players'"
          :class="{ active: isActive === 'Players' }"
        >
          Top Players
        </div>
        <div
          class="top__btn"
          @click="this.isActive = 'Teams'"
          :class="{ active: isActive === 'Teams' }"
        >
          Top Teams
        </div>
        <div
          class="top__btn"
          @click="this.isActive = 'Games'"
          :class="{ active: isActive === 'Games' }"
        >
          Top Games
        </div>
      </div>
      <div class="top__content">
        <countries v-if="isActive === 'Countries'" />
        <players v-if="isActive === 'Players'" />
        <games v-if="isActive === 'Games'" />
        <teams v-if="isActive === 'Teams'" />
      </div>
    </div>
  </div>
</template>

<script>
import Countries from "@/components/top/Countries";
import Players from "@/components/top/Players";
import Games from "@/components/top/Games";
import Teams from "@/components/top/Teams";
import { mapGetters } from "vuex";
import loading from "@/components/other/Loading";

export default {
  data() {
    return {
      isActive: "Countries",
      isLoading: false,
    };
  },
  components: {
    Countries,
    Players,
    Games,
    Teams,
    loading,
  },
  computed: {
    ...mapGetters({
      getTournamentLength: "tournament/getTournamentLength",
      getUserLength: "loadUser/getUserLength",
      getTotalPrize: "tournament/getTotalPrize",
    }),
  },
  async mounted() {
    this.isLoading = true;
    if (!this.getTournamentLength) {
      await this.$store.dispatch("tournament/load");
    }
    await this.$store.dispatch("loadUser/loadUsers");
    await this.$store.dispatch("team/loadAll");
    this.isLoading = false;
  },
};
</script>

<style lang="scss" scoped>
.top {
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px;
  &__title {
    display: flex;
    justify-content: center;
    color: #f5f5f5;
    font-weight: 700;
    font-size: 44px;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    margin: 50px 0px;
  }

  &__block {
    color: #e6e8eb;
    font-weight: 700;
    font-size: 22px;
    span {
      color: #8995a3;
      font-weight: 400;
      font-size: 22px;
      margin-left: 16px;
    }
  }

  &__btns {
    display: flex;
    justify-content: space-between;
    border: 2px solid #242b33;
  }
  &__btn:nth-child(1) {
    border: 0;
  }

  &__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 66px;
    width: 100%;
    color: #f5f5f5;
    font-weight: 700;
    font-size: 22px;
    border-left: 2px solid #242b33;
    cursor: pointer;
  }
}

@media (max-width: 1420px) {
  .top {
    margin-left: 110px;
  }
}

@media (max-width: 1060px) {
  .top {
    margin-left: 0px;
    &__header {
      display: block;
      margin: 35px 0px;
    }
    &__block {
      display: flex;
      justify-content: space-between;
      margin: 10px 0px;
      font-weight: 500;
      font-size: 16px;
    }
    &__btn {
      height: 40px;
      font-weight: 400;
      font-size: 12px;
    }
  }
}

.active {
  background: #d8dfeb;
  color: #0f1215;
}
</style>