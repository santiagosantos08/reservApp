<script lang="ts" setup>
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useCollection, useDocument } from 'vuefire';
import { ref } from 'vue';
import { setDoc, doc, getFirestore, collection, deleteDoc,getDocs,where,query} from 'firebase/firestore';
import router from '@/router';
import ForceUserNameCompletion from './ForceUserNameCompletion.vue';
import { onMounted } from 'vue';
import { onBeforeMount } from 'vue';

const dialog = ref(false);

let uid = ref('');
const auth = getAuth();
const db = getFirestore();
const displayName = ref();


async function fetchUserData2(){
  const q = query(collection(db,'users'), where('uid','==',uid.value));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    displayName.value = doc.data().username;
    console.log(displayName.value + ' from fetchUserData2')
  });
}

//get the doc where this particular user is
onAuthStateChanged(auth, (user) => {
  if (user) {
    uid.value = user.uid;
  }
});

function logOut() {
  auth.signOut().then(() => {
    // Sign-out successful.
    router.push("/Login");
    console.log('sign out successful');
  }).catch((error) => {
    // An error happened.
    console.log('sign out failed' + error);
  });
}

onMounted(fetchUserData2);
onBeforeMount(fetchUserData2);


</script>

<template>
  <div class="center">
    <h2 >Hola, {{ displayName }}</h2>
    <v-dialog v-model="dialog" width="auto">
      <template v-slot:activator="{ props }">
        <v-btn variant="outlined" color="primary" v-bind="props">
          Cambiar Nombre de Usuario.
        </v-btn>
      </template>

      <v-card>
        <force-user-name-completion></force-user-name-completion>
        <v-card-actions>
          <v-btn color="primary" block @click="dialog = false">Cancelar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-card-actions>
      <v-btn @click="logOut" variant="outlined" color="primary">Cerrar Sesion</v-btn>
      <v-btn @click="fetchUserData2" variant="outlined" color="primary">Mostrar datos</v-btn>
    </v-card-actions>
  </div>
</template>

<style>
.center {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2vh;
}
</style>