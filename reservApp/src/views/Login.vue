<script setup lang="ts">
    import { ref } from 'vue'
    const email = ref('')
    const password = ref('')
</script>

<template>
    <v-card>
        <v-divider :thickness="150" class="border-opacity-0" color="info"></v-divider>

        <v-card-title>
            <span class="headline">Login</span>
        </v-card-title>

        <v-divider :thickness="25" class="border-opacity-0" color="info"></v-divider>

        <v-card-text>
            <v-form>
                <v-text-field
                    v-model="email"
                    label="Email"
                    required
                ></v-text-field>
                <v-text-field
                    v-model="password"
                    label="Password"
                    type="password"
                    required
                ></v-text-field>
            </v-form>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn block variant="outlined" color="primary">Login</v-btn>
        </v-card-actions>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn block variant="text" color="primary">Forgot your password?</v-btn>
        </v-card-actions>

        <v-divider :thickness="100" class="border-opacity-0" color="info"></v-divider>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn block variant="outlined" color="primary">Register</v-btn>
        </v-card-actions>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn block variant="outlined" color="primary">Sign in with Google</v-btn>
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