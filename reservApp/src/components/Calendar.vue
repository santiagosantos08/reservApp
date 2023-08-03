<script lang="ts">
import { ref } from 'vue';
import { DatePicker } from 'v-calendar';
import 'v-calendar/style.css';

export default {
  
  components: {
    DatePicker,
  },
  data() {
    return {
      selected: new Date(),
    };
  },
  watch: {
    selected: function () {
      console.log(`The selectedDate changed to`, this.selected);
      //store the selected date and time from the calendar un a variable called reservation so then it can be logged and exported to outside components
    },
  },
  getSelectedDate() {
    return this.selected;//???!"#?!?"#!?!"#!"?#?!"#?!#?!"?#!"?#!"?#!"?#!"?
  },
}


</script>

<template>

    <div class="center">
      <DatePicker v-model="selected" mode="dateTime" is24hr :time-accuracy='1' :min-date="new Date()" />
    </div>

</template>
  


<style>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
  