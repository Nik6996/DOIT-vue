<template>
  <div>
    <div class="sidebar">
      <div class="sidebar__content">
        <ul class="sidebar__list">
          <li @click="this.$router.push('/games')">
            <img src="@/assets/img/item-01.svg" alt="" />
          </li>
          <li><img src="@/assets/img/item-02.svg" alt="" /></li>
          <li><img src="@/assets/img/item-03.svg" alt="" /></li>
          <li><img src="@/assets/img/item-04.svg" alt="" /></li>
          <li><img src="@/assets/img/item-05.svg" alt="" /></li>
          <li @click="this.$router.push('/comming-soon')">
            <img src="@/assets/img/item-06.svg" alt="" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.sidebar {
  overflow: hidden;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: flex-start;
  background-color: #0f1215;
  max-height: 1000px;
  height: 100%;
  z-index: 10;
  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    border-right: solid 2px #20252b;
  }

  &__list {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    padding: 80px 0px;
    li {
      margin: 10px 40px;
      cursor: pointer;
    }
  }
}

@media (max-width: 1060px) {
  .sidebar {
    // position: fixed;
    // left: 0;
    bottom: 0;
    top: auto;
    justify-content: center;
    align-items: center;
    // background-color: #0f1215;

    height: 50px;
    width: 100%;
    &__content {
      width: 100%;
      height: 100%;
      border-top: solid 2px #20252b;
    }
    &__list {
      width: 100%;
      padding: 0px 0px;
      flex-direction: row;
      li {
        // width: 40px;
        // height: 40px;
      }
    }
  }
}
@media (max-width: 620px) {
  .sidebar {
    height: 60px;
    &__content {
    }
    &__list {
      li {
        img {
          width: 24px;
          height: 24px;
        }
        margin: 20px 20px;
      }
    }
  }
}
</style>