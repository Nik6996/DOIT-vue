<template>
  <div>
    <div class="countries">
      <div class="countries__top">
        <div class="countries__item center">Rank</div>
        <div class="countries__item">Country</div>
        <div class="countries__item">users</div>
      </div>
      <div
        class="countries__content"
        v-for="(countrie, index) in returnSortCountries"
        :key="countrie.key"
      >
        <preview-countrie :rank="index" v-model="returnSortCountries[index]" />
      </div>
    </div>
  </div>
</template>

<script>
import PreviewCountrie from "@/components/top/PreviewCountrie";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      countries: [],
    };
  },
  components: {
    PreviewCountrie,
  },
  computed: {
    ...mapGetters({
      getUsers: "loadUser/getCountries",
    }),
    returnSortCountries() {
      return this.countries.sort((a, b) => (a.item < b.item ? 1 : -1));
    },
  },
  watch: {
    getUsers: {
      handler(getUsers) {
        getUsers.forEach((item, key) => {
          this.countries.push({ item, key });
        });
      },
    },
  },
  async mounted() {
    if (this.countries.length <= 0 && this.getUsers) {
      this.getUsers.forEach((item, key) => {
        this.countries.push({ item, key });
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.countries {
  border-left: 2px solid #242b33;
  border-right: 2px solid #242b33;
  border-bottom: 2px solid #242b33;
  margin-bottom: 100px;
  &__top {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    border-bottom: 2px solid #242b33;
    margin-bottom: 30px;
  }
  &__item {
    display: flex;
    text-transform: uppercase;
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

@media (max-width: 1060px) {
  .countries {
    &__item {
      padding: 25px 15px 0px 15px;
      font-weight: 500;
      font-size: 10px;
    }
    &__top {
      grid-template-columns: 1fr 2fr 1fr;
      border-bottom: 0;
      margin-bottom: 30px;
    }
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