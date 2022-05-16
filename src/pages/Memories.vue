<template>
  <base-layout page-title="All Memories">
    <ion-list>
      <ion-item
        v-for="memory of memories"
        :router-link="`/memories/${memory.id}`"
        :key="`${memory.id}`"
      >
        <ion-thumbnail slot="start">
          <ion-img :src="memory.image" :alt="memory.title"></ion-img>
        </ion-thumbnail>
        <ion-label>
          {{ memory.title }}
        </ion-label>
      </ion-item>
    </ion-list>
  </base-layout>
</template>

<script>
import { IonList, IonItem, IonThumbnail, IonLabel, IonImg } from "@ionic/vue";
import BaseLayout from "../components/BaseLayout.vue";

export default {
  components: {
    IonList,
    IonItem,
    BaseLayout,
    IonThumbnail,
    IonLabel,
    IonImg,
  },
  computed: {
    memories() {
      return this.$store.getters.memories;
    },
  },
};
</script>

<style></style>
