<script setup lang="ts">
defineProps({
    available: Set,
    active: Boolean
})
</script>
<template>
    <div class="card">
        <VCard>
            <v-bton v-for="time in available" :key="time"  :color="active ? 'primary' : 'secondary'">
                {{time}}
            </v-bton>
        </VCard>
    </div>
</template>