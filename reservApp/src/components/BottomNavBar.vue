<script setup lang="ts">
    import { ref } from 'vue'
    import router from '@/router';
    
    const goToReservar = () => {
        router.push("/NewReservation")
    }

    const goToMisReservas = () => {
        router.push("/MyReservations")
    }

    const goToMyAccount = () => {
        router.push("/MyAccount")
    }

</script>

<template>
<v-container>
    <v-bottom-navigation fixed app>
        <v-btn value="reservar" @click="goToReservar">
            <v-icon>mdi-heart</v-icon>

            Reservar
        </v-btn>

        <v-btn value="favorites" @click="goToMisReservas">
            <v-icon>mdi-heart</v-icon>

            Mis Reservas
        </v-btn>

        <v-btn value="calendar" @click="goToMyAccount">
            <v-icon>mdi-map-marker</v-icon>

            Mi cuenta
        </v-btn>
    </v-bottom-navigation>
</v-container>
</template>

<style>

</style>


