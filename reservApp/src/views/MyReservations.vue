<script lang="ts" setup>
import { ref } from 'vue';
import App from '@/App.vue';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { query, collection, where, getDocs, getFirestore } from "firebase/firestore";

let resGeneric = {
  uid: '',
  year: 0,
  month: 0,
  day: 0,
  hour: 0,
}
let reservationsLoad = new Set<typeof resGeneric>;

const db = getFirestore();
const auth = getAuth();
let initialized = ref(true);
let redraw = ref(1);
let UidExt = ref('');

//function to get tge user id
onAuthStateChanged(auth, (user) => {
  if (user) {
    UidExt.value = user.uid;
    // ...
  }
});

async function fetchReservations() {
  if (initialized.value == true) {
    const q = query(collection(db, 'reservations'), where('uid', '==', UidExt.value));
    const querySnapshot = await getDocs(q);
    reservationsLoad.clear();
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      let res = {
        uid: data.uid,
        year: data.year,
        month: data.month,
        day: data.day,
        hour: data.hour,
      }
      reservationsLoad.add(res);
    });
    redraw.value = redraw.value + 1;
  } else {
    console.log('No se ha inicializado -- de fetchReservations');
  }
}
</script>

<template>
  <v-btn @click="fetchReservations">Request Query</v-btn>
  <v-btn @click="reservationsLoad.values">Rrefresh static (?)</v-btn>
  <div class="center">
    <div v-for="reservation in reservationsLoad" :key="reservation.uid" color="primary">
      <v-btn @click="console.log('aa')">{{ reservation.uid }}</v-btn>
    </div>
  </div>
</template>