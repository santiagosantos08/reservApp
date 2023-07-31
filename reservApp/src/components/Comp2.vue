<script setup lang="ts">
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'
    
    const router = useRouter()

    const goToReservar = () => {
        router.push("/comp1")
    }

    const goToHelloWorld = () => {
        router.push("/hello-world")
    }

    const goToCalendar = () => {
        router.push("/calendar")
    }

</script>

<template>

    <router-view></router-view>
    
    <v-bottom-navigation :elevation="14" grow>
        <v-btn value="reservar" @click="goToReservar">
            <v-icon>mdi-history</v-icon>

            Reservar
        </v-btn>

        <v-btn value="favorites" @click="goToHelloWorld">
            <v-icon>mdi-heart</v-icon>

            Mis Reservas
        </v-btn>

        <v-btn value="nearby">
            <v-icon>mdi-map-marker</v-icon>

            Mi cuenta
        </v-btn>

        <v-btn value="calendar" @click="goToCalendar">
            <v-icon>mdi-map-marker</v-icon>

            Calendario
        </v-btn>
    </v-bottom-navigation>


</template>

<style>

</style>


