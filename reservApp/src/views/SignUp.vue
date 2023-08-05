<script setup lang="ts">
import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, addDoc, collection,setDoc,doc } from 'firebase/firestore';
import router from '@/router';
const db = getFirestore();
const email = ref('');
const password = ref('');

const submitData = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;

            console.log(user);
            setDoc(doc(db, "users", user.uid), {
                uid: user.uid, //ya no es necesario pero bueno sino me rompe el main q busca por este dato
                username: '',
                completedRegistration: false,
            }, { merge: true })
                .then(() => {
                    console.log("Document successfully written!");
                })
                .catch((error) => {
                    console.error("Error writing document: ", error);
                });
            // ...
            router.push("/ForceUserNameCompletion")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
            console.log(errorCode);
        });
}

const goToLogin = () => {
    router.push("/Login")
}

const useGoogle = () => {
    // TODO
}
</script>

<template>
    <v-card>
        <v-divider :thickness="50" class="border-opacity-0" color="info"></v-divider>

        <v-card-title>
            <span class="headline">SignUp</span>
        </v-card-title>

        <v-divider :thickness="25" class="border-opacity-0" color="info"></v-divider>

        <v-card-text>
            <v-form>
                <v-text-field v-model="email" label="Email" required></v-text-field>
                <v-text-field v-model="password" label="Password" type="password" required></v-text-field>
            </v-form>
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="submitData" block variant="outlined" color="primary">SignUp</v-btn>
        </v-card-actions>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="goToLogin" block variant="text" color="primary">Already have an account? Login!</v-btn>
        </v-card-actions>

        <v-divider :thickness="100" class="border-opacity-0" color="info"></v-divider>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="useGoogle" block variant="outlined" color="primary" :disabled="true">Sign in with Google</v-btn>
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