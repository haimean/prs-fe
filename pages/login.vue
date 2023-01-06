// pages/login.vue
<script setup lang="ts">
// import { useAuthStore } from "~/store/auth";

// const authStore = useAuthStore();
const router = useRouter();

interface loginForm {
  email: string;
  password: string;
}

let loginForm: loginForm = {
  email: "",
  password: "",
};

/**
 * If success: redirect to home page
 * Else display alert error
 */
function login() {
  console.log(localStorage.getItem("user"));
  // authStore
  //   .login(loginForm)
  //   .then(
  //     (_response) => console.log("API error")
  //     // router.push("/")
  //   )
  //   .catch((error) => console.log("API error", error));
}
</script>

<template>
  <v-container>
    <form @submit.prevent="login">
      <label>E-mail</label>
      <input v-model="loginForm.email" required type="email" />
      <label>Password</label>
      <input v-model="loginForm.password" required type="password" />
      <button type="submit">Login</button>
    </form>
  </v-container>
</template>
