<template>
  <h3>Login</h3>
  <form @submit.prevent="handleSubmit">
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
    <button type="submit">Login</button>
  </form>
</template>

<script>
import { ref } from "vue";
import useLogin from "../composables/useLogin";

export default {
  setup(props, context) {
    const { error, login } = useLogin();
    const email = ref("");
    const password = ref("");

    const handleSubmit = async () => {
      await login(email.value, password.value);
      if (!error.value) {
        context.emit("login");
      }
    };

    return { email, password, handleSubmit, error };
  },
};
</script>

<style></style>
