<script lang="ts" setup>
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import {ref,onMounted} from 'vue'
import router from '@/router';
import { addDoc, getDocs, collection, query, where } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';

const db = getFirestore();
const auth = getAuth();
let UidExt = ref('');
const userNameField = ref('');
let displayUserName = ref('');

//function to get tge user id
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    UidExt.value = uid;
    console.log(uid);
    // ...
  }
});

function logOut(){
  auth.signOut().then(() => {
    // Sign-out successful.
    router.push("/Login");
    console.log('sign out successful');
  }).catch((error) => {
    // An error happened.
    console.log('sign out failed'+error);
  });
}
async function requestUsername(){
  const q = query(collection(db, 'users'), where('uid', '==', UidExt.value));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    displayUserName.value = data.username;
    console.log(data);
  });
}
function submitData(){
  addDoc(collection(db, "users"), {
    uid: UidExt.value,
    username: userNameField.value,
  })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
      alert('Nombre de usuario cambiado con exito');
      displayUserName.value = userNameField.value;
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
      alert('Error al cambiar el nombre de usuario, por favor reintente en unos minutos');
    });
}
onMounted(()=>{
  requestUsername();
})
</script>

<template>
  <div>
    <v-card>
      <v-card-title>
        <h1>Mi cuenta</h1>
      </v-card-title>
      <v-card-text>
        <h2>Nombre: {{displayUserName}} </h2>
        <h2>Uid: {{ UidExt }}</h2>
      </v-card-text>
    </v-card>
    <v-card-text>
            <v-form>
                <v-text-field
                    v-model="userNameField"
                    label="User Name"
                    required
                ></v-text-field>
            </v-form>
        </v-card-text>
        <v-card-actions>
            <v-btn @click="submitData"  color="primary">Cambiar Nombre de Usuario</v-btn>
            <v-btn @click="requestUsername" variant="outlined" color="primary">refresh dName</v-btn>
            <v-btn @click="logOut" variant="outlined" color="primary">Cerrar Sesion</v-btn>
        </v-card-actions>
  </div>
</template>