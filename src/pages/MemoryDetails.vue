<template>
  <base-layout page-title="The Details" page-default-backLink="/memories">
    <h2>The Details Page</h2>
  </base-layout>
</template>

<script>
import BaseLayout from "../components/BaseLayout.vue";
export default {
  data: () => ({
    memoryId: null,
  }),
  components: { BaseLayout },
  computed: {
    loadedMemory() {
      return this.$store.getters.memory(this.memoryId);
    },
  },
  watch: {
    $route(currentRoute) {
      this.memoryId = currentRoute.params.id;
    },
  },
};
</script>

<style></style>
