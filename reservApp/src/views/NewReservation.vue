<script lang="ts" setup>
    import BottomNavBarVue from '@/components/BottomNavBar.vue';
    import calendar from '@/components/Calendar.vue';
    import getSelectedDate from '@/components/Calendar.vue';
    //store the selected date and time from the calendar un a variable called reservation so then it can be logged

    let date = calendar.getSelectedDate();

    function logDate() {
        console.log(date);
    }

</script>

<template>
    <calendar />
    <v-btn value="log" @click="logDate">log Date</v-btn>
    <BottomNavBarVue/>
</template>