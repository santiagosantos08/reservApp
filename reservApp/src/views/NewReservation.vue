<script lang="ts" setup>
import { ref } from 'vue';
import calendar from '@/components/Calendar.vue';

import { addDoc, getDocs, collection, query, where,doc } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import { useCollection } from 'vuefire';
const db = getFirestore();
const auth = getAuth();
let UidExt = ref('');

//function to get tge user id
onAuthStateChanged(auth, (user) => {
  if (user) {
    UidExt.value = user.uid;
    // ...
  }
});

const openHours = new Set([7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]);
let hours = new Set;

defineProps({
  date: Date,
  time: Number,
});

let resGeneric = {
  uid: '',
  year: 0,
  month: 0,
  day: 0,
  hour: 0,
}

let initialized = ref(false);
let redraw = ref(0);

async function generatePossibleReservations() {
  if (initialized.value == true) {
    const day = resGeneric.day;
    const month = resGeneric.month;
    const year = resGeneric.year;
    const q = query(collection(db, 'reservations'), where('day', '==', day), where('month', '==', month), where('year', '==', year));
    console.log('getting all possible reservations for day: ' + day + ' month: ' + month + ' year: ' + year);
    const querySnapshot = await getDocs(q);

    hours.clear();

    querySnapshot.forEach((doc) => {
      //console.log(doc.data());
      const data = doc.data();
      if (!hours.has(data.hour)) {
        hours.add(data.hour);
      }
    });
    redraw.value = redraw.value + 1;


  } else {
    console.log('No se ha inicializado -- de generatePossibleReservations');
  }
}
function onDateReceived(date: Date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hour = date.getHours();
  const reservation = {
    uid: UidExt.value,
    year: year,
    month: month,
    day: day,
    hour: hour,
  }
  resGeneric = reservation;
  initialized.value = true;
  generatePossibleReservations();
  //console.log(reservation);
}
function makeReservation(hour: number) {
  if (initialized.value == true) {
    resGeneric.hour = hour;
    addDoc(collection(db, 'reservations'), resGeneric)
      .then((docRef) => {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
    console.log(resGeneric);
  } else {
    console.log('No se ha inicializado');
  }
}
</script>

<template>
  <calendar @date="onDateReceived" />
  <div v-if="initialized" class="center">
    <v-div v-for="hour of openHours" :key="redraw" >
      <v-btn v-if="!hours.has(hour)" class="btonsec" prepend-icon="mdi-clock" color="primary" @click="makeReservation(hour); generatePossibleReservations()">
        {{ String(hour).padStart(2,'0') }}:00 | Reservar.
      </v-btn>
      <v-btn v-else prepend-icon="mdi-clock" class="btonsec" color="primary" disabled>
        {{ String(hour).padStart(2,'0') }}:00 | Reservado
      </v-btn>
    </v-div>
  </div>
  <div v-else class="center">
    Select a date
  </div>
</template>

<style>
.btonsec {
  margin-top: 2vh;
}

.center {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2vh;
}
</style>