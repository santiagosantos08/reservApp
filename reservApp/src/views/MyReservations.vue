<script lang="ts" setup>
import { ref } from 'vue';

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { collection, where, getFirestore } from "firebase/firestore";
import { useCollection, useDocument } from 'vuefire';

const db = getFirestore();
const auth = getAuth();

let UidExt = ref('');

const reservations = useCollection(collection(db, 'reservations'));


onAuthStateChanged(auth, (user) => {
  if (user) {
    UidExt.value = user.uid;
    // ...
  }
});

</script>

<template>
  <div class="center">
    <p>Proximas Reservas</p>
    <div v-for="reservation in reservations" :key="reservation.day" color="primary">
      <v-btn class="btonsec" @click="console.log('aa')">
        <v-icon color="info" icon="mdi-calendar"></v-icon>
        {{ reservation.day }}/{{ reservation.month }}/{{ reservation.year }} | 
        <v-icon color="info" icon="mdi-clock"></v-icon>
        {{String(reservation.hour).padStart(2,'0')}}:00
      </v-btn>
    </div>
  </div>
</template>

<style>
.btonsec {
  margin-top: 2vh;
}
</style>