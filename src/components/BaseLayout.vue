<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button
            :default-href="pageDefaultBackLink"
          ></ion-back-button>
        </ion-buttons>
        <ion-title>{{ pageTitle }} </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <slot />
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonContent,
  IonBackButton,
  IonTitle,
  IonButtons,
} from "@ionic/vue";

export default {
  props: ["page-title", "pageDefaultBackLink"],
  components: {
    IonPage,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonBackButton,
    IonButtons,
  },
};
</script>

<style></style>
