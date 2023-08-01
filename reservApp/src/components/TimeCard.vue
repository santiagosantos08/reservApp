<script setup lang="ts">
defineProps({
  time: String,
})

</script>

<template>
    <div class="card">
        <VCard variant="outlined">
            <h3>{{time}}</h3>
        </VCard>
    </div>
</template>

<style scoped>
.card {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 3vh;
  min-height: 4vh;
  max-height: 4vh;
}
</style>