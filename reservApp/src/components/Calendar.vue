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
  emits: ['date'],
  watch:{
    selected: function(){
      this.$emit('date', this.selected);
    }
  }
}


</script>

<template>

    <div class="center">
      <DatePicker v-model="selected" mode="date" :min-date="new Date()" />
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
  