<script lang="ts" setup>
    import BottomNavBarVue from '@/components/BottomNavBar.vue';
    import calendar from '@/components/Calendar.vue';
    import getSelectedDate from '@/components/Calendar.vue';
    import TimeCard from '@/components/TimeCard.vue';
    //store the selected date and time from the calendar un a variable called reservation so then it can be logged

    let date = calendar.getSelectedDate();
</script>

<script lang="ts">
export default {
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>

<template>
    <calendar />
    <TimeCard time="10:00"/>
    <TimeCard time="11:00"/>
    <TimeCard time="12:00"/>
    <TimeCard time="13:00"/>
    <div class="center">
        <v-btn color="primary">
        Open Dialog

        <v-dialog
            v-model="dialog"
            activator="parent"
            width="auto"
        >
            <v-card>
            <v-card-text>
                Seguro de que desea reservar?.
            </v-card-text>
            <v-card-actions>
                <v-btn color="primary" flex @click="dialog = false">No</v-btn>
                <v-btn color="primary" flex @click="dialog = false">Si</v-btn>
            </v-card-actions>
            </v-card>
        </v-dialog>
        </v-btn>
    </div>
</template>

<style>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 5vh;
  min-height: 10vh;
  max-height: 80vh;
}
</style>