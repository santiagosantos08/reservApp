<template>
  <v-card>
    <div class="center">
      <DatePicker mode="dateTime" is24hr :time-accuracy='1' />
    </div>
  </v-card>
</template>
  
<script lang="ts">
import { ref } from 'vue';
import { Calendar, DatePicker } from 'v-calendar';
import 'v-calendar/style.css';

export default {
  components: {
    Calendar,
    DatePicker,
  },
  data() {
    return {
      date: new Date(),
    };
  },
}
</script>

<style>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
}
</style>
  