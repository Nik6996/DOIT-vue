<template>
  <div>
    <header-home />
    <sidebar />
    <router-view />
  </div>
</template>

<script>
import HeaderHome from "@/components/HeaderHome.vue";
import Sidebar from "@/components/Sidebar.vue";

export default {
  components: {
    HeaderHome,
    Sidebar,
  },
};
</script>

<style lang="scss" scoped>
</style>