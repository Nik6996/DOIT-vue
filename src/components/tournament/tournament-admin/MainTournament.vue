<template>
  <div>
    <div class="tournament">
      <div class="tournament__title"><span>Tournament</span></div>
      <div class="tournament__content">
        <vue-collapsible-panel-group
          class="header-collaps"
          base-color=" #181818"
        >
          <vue-collapsible-panel :expanded="false">
            <template #title> Basic Info</template>
            <template #content> <basic-info /> </template>
          </vue-collapsible-panel>
          <vue-collapsible-panel :expanded="false">
            <template #title> GAME INFO </template>
            <template #content> <game-info /> </template>
          </vue-collapsible-panel>
          <vue-collapsible-panel :expanded="false">
            <template #title>
              REGISTRATION
              <div class="tournament__registration-check">
                <input
                  class="tournament__custom-checkbox"
                  type="checkbox"
                  name=""
                  id="registration"
                />
                <label for="registration"
                  >Don’t Aprove players automaticly</label
                >
              </div>
            </template>
            <template #content> <registration /> </template>
          </vue-collapsible-panel>
        </vue-collapsible-panel-group>
      </div>
    </div>
  </div>
</template>

<script>
import BasicInfo from "@/components/tournament/tournament-admin/BasicInfo.vue";
import GameInfo from "@/components/tournament/tournament-admin/GameInfo.vue";
import Registration from "@/components/tournament/tournament-admin/Registration.vue";

import {
  VueCollapsiblePanelGroup,
  VueCollapsiblePanel,
} from "@swoga/vue-collapsible-panel";

export default {
  data() {
    return {};
  },
  components: {
    BasicInfo,
    GameInfo,
    VueCollapsiblePanelGroup,
    VueCollapsiblePanel,
    Registration,
  },
};
</script>

<style lang="scss" scoped>
.tournament {
  margin: 0 auto;
  padding-bottom: 50px;
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
    padding: 15px;
  }
  &__registration-check {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }

  &__custom-checkbox + label {
    display: inline-flex;
    align-items: center;
    user-select: none;
  }

  &__custom-checkbox {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }

  &__custom-checkbox + label::before {
    content: "";
    display: flex;
    justify-content: center;
    position: relative;
    width: 17px;
    height: 17px;
    border: 2px solid #20252b;

    margin-right: 10px;
  }

  &__custom-checkbox:checked + label::before {
    background-repeat: no-repeat;
    background-position: center;
    background-image: url("../../../assets/icon/check2.svg");
  }
}

.vcpg {
  color: white !important;
}
.vcp {
  margin: 10px;
  border: 1px solid #20252b;
}
</style>