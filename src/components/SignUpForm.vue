<template>
  <h3>SignUp</h3>
  <form @submit.prevent="handleSubmit">
    <input
      type="text"
      name="name"
      required
      placeholder="displayName"
      v-model="displayName"
    />
    <input
      type="email"
      name="email"
      required
      placeholder="email"
      v-model="email"
    />
    <input
      type="password"
      name="password"
      required
      placeholder="password"
      v-model="password"
    />
    <p class="error">
      {{ error }}
    </p>
    <button type="submit">Sign Up</button>
  </form>
</template>

<script>
import { ref } from "vue";
import useSignUp from "../composables/useSignUp";

export default {
  setup(props, context) {
    const { signUp, error } = useSignUp();
    const displayName = ref("");
    const email = ref("");
    const password = ref("");

    const handleSubmit = async () => {
      await signUp(email.value, password.value, displayName.value);
      if (!error.value) {
        context.emit("register");
      }
    };

    return { displayName, email, password, handleSubmit, error };
  },
};
</script>

<style></style>
