<template>
  <div>
    <div class="players">
      <div class="players__not-found" v-if="playersArray <= 1">
        <span>Players not found</span>
      </div>
      <div v-else>
        <div v-for="(player, index) in playersArray" :key="player.id">
          <preview-player v-model="playersArray[index]" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PreviewPlayer from "./PreviewPlayer.vue";
export default {
  data() {
    return {
      playersArray: "",
    };
  },
  components: {
    PreviewPlayer,
  },
  props: {
    players: {
      type: Array,
    },
  },
  mounted() {
    this.playersArray = this.players;
  },
  watch: {
    players: {
      handler(players) {
        this.playersArray = players;
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.players {
  border: 2px solid #20252b;
  display: flex;
  flex-wrap: wrap;
  &__not-found {
    margin: 0 auto;
    padding: 40px 0px;
    color: rgb(180, 31, 31);
    font-size: 30px;
    font-weight: 700;
  }
}
</style>