<template>
  <div class="welcome container">
    <h1>Welcome</h1>
    <div v-if="showLogin">
      <LoginForm @login="enterChat" />
      <p>
        No account yet? <span @click="showLogin = false">SignUp</span> instead
      </p>
    </div>
    <div v-else>
      <SignUpForm @register="enterChat" />
      <p>
        Already registered?
        <span @click="showLogin = true">Login</span> instead
      </p>
    </div>
  </div>
</template>

<script>
import SignUpForm from "../components/SignUpForm.vue";
import LoginForm from "../components/LoginForm.vue";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import getUser from "../composables/getUser";

export default {
  components: {
    SignUpForm,
    LoginForm,
  },

  setup() {
    const showLogin = ref(true);
    const router = useRouter();
    const { user } = getUser();

    watch(user, () => {
      if (user.value) router.push("/chatroom");
    });

    const enterChat = () => {
      router.push("/chatroom");
    };

    return { showLogin, enterChat };
  },
};
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}
/* form styles */
.welcome form {
  width: 300px;
  margin: 20px auto;
}
.welcome label {
  display: block;
  margin: 20px 0 10px;
}
.welcome input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #eee;
  outline: none;
  color: #999;
  margin: 10px auto;
}
.welcome span {
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
.welcome button {
  margin: 20 auto;
}
</style>
