<template>
  <div>
    <div class="sidebar">
      <div class="sidebar__content">
        <ul class="sidebar__list">
          <li><img src="@/assets/img/item-01.svg" alt="" /></li>
          <li><img src="@/assets/img/item-02.svg" alt="" /></li>
          <li><img src="@/assets/img/item-03.svg" alt="" /></li>
          <li><img src="@/assets/img/item-04.svg" alt="" /></li>
          <li><img src="@/assets/img/item-05.svg" alt="" /></li>
          <li><img src="@/assets/img/item-06.svg" alt="" /></li>
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
  position: fixed;
  left: 0;
  display: flex;
  justify-content: flex-start;
  background-color: #0f1215;
  max-height: 1000px;
  height: 100%;
  &__content {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    height: 100%;
  }

  &__list {
    li {
      margin: 80px 40px;
    }
  }
}
@media (max-width: 1440px) {
  .sidebar {
    &__list {
      li {
        margin: 40px 40px;
      }
    }
  }
}
@media (max-width: 1024px) {
  .sidebar {
    position: fixed;
    left: 0;
    bottom: 0;
    justify-content: center;
    background-color: #0f1215;

    height: 100px;
    width: 100%;
    &__content {
      height: 100px;
    }
    &__list {
      display: flex;
      justify-content: space-between;
      width: 100%;
      li {
        // margin: 40px 40px;
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