<template>
  <div>
    <div class="tournament">
      <div class="tournament__title"><span>Tournament</span></div>
      <div class="tournament__content">
        <basic-info />
      </div>
    </div>
  </div>
</template>

<script>
import BasicInfo from "@/components/tournament/tournament-admin/BasicInfo.vue";

export default {
  components: {
    BasicInfo,
  },
};
</script>

<style lang="scss" scoped>
.tournament {
  margin: 0 auto;
  max-width: 660px;
  &__title {
    margin: 50px 15px 30px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 22px;
    color: #0f1215;
    height: 82px;
    background: #d8dfeb;
  }

  &__content {
  }
}
</style>