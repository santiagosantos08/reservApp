<script lang="ts" setup>
import {ref} from 'vue';
import{query,collection,where,getDocs, getFirestore}from"firebase/firestore";

let reservations = new Set;
const db = getFirestore();
const name = 'Juan';
const lastName = 'Perez';
let initialized = ref(true);
let redraw = ref(0);


async function fetchReservations(){
  if(initialized.value == true){
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
  }else{
    console.log('No se ha inicializado -- de fetchReservations');
  }
}
</script>

<template>
  <v-btn @click="fetchReservations">Request Query</v-btn>
  <div class="center">
    <v-btn v-for="reservation in reservations" color="primary" :key="redraw" @click="console.log(reservation)">{{ reservation }}</v-btn>
  </div>
</template>