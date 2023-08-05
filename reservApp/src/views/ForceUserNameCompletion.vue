<script setup lang="ts">
import { ref } from 'vue';
import { onAuthStateChanged,getAuth } from 'firebase/auth';
import { setDoc,doc,getFirestore } from 'firebase/firestore';
import router from '@/router';

const username = ref('');
let documentToWrite = ref('');
const auth = getAuth();
const db = getFirestore();

//get the doc where this particular user is
onAuthStateChanged(auth, (user) => {
    if (user) {
        documentToWrite.value = user.uid;
    }
});

function submitUserName(){
    setDoc(doc(db, "users", documentToWrite.value), {
        uid: documentToWrite.value, //ya no es necesario pero bueno sino me rompe el main q busca por este dato
        username: username.value,
        completedRegistration: true,
    }, { merge: true })
        .then(() => {
            console.log("Document successfully written!");
            router.push("/Home/MyAccount");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
}
</script>

<template>
    <v-card>
        <v-divider :thickness="50" class="border-opacity-0" color="info"></v-divider>

        <v-card-title>
            <span class="headline">Completar Datos Personales:</span>
        </v-card-title>

        <v-divider :thickness="25" class="border-opacity-0" color="info"></v-divider>

        <v-card-text>
            <v-form>
                <v-text-field v-model="username" label="Nombre que se mostrará en las reservas" required></v-text-field>
            </v-form>
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="submitUserName" disabled:="!form" block variant="outlined" color="primary">Usar : {{ username }}</v-btn>
        </v-card-actions>
    </v-card>
</template>

<style scoped>
.headline {
    font-size: 20px;
    font-weight: bold;
    margin-top: 10px;
}

.v-card__actions {
    justify-content: center;
}

.border-opacity-75 {
    margin: 10px;
}

.v-card {
    height: 100%;
    width: 100%;
}

.v-card__title {
    justify-content: center;
}
</style>    