<script lang="ts" setup>
import {ref} from 'vue';
import{query,collection,where,getDocs, getFirestore}from"firebase/firestore";

let reservations = new Set;
const db = getFirestore();
const name = 'Juan';
const lastName = 'Perez';
let redraw = ref(0);
let color = "warning";


async function generatePossibleReservations(){
  const q = query(collection(db, 'reservations'), where('name', '==', name), where('lastName', '==', lastName));
  const querySnapshot = await getDocs(q);
  reservations.clear();
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    reservations.add(data);
    console.log(data);
  });
  console.log(reservations.size);
  redraw.value = redraw.value + 1;
  color="primary";
};
</script>

<template>
  <v-btn @click="generatePossibleReservations">Request Query</v-btn>
</template>