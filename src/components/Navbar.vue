<template>
  <nav v-if="user">
    <div>
      <p>Hey! {{ user?.displayName }}</p>
      <p class="email">Currently logged in as {{ user?.email }}</p>
    </div>

    <button @click="handleClick">Logout</button>
  </nav>
</template>

<script>
import { useRouter } from "vue-router";
import getUser from "../composables/getUser";
import useLogout from "../composables/useLogout";

export default {
  setup() {
    const { error, logout } = useLogout();
    const { user } = getUser();

    console.log(user);

    const handleClick = async () => {
      await logout();
    };

    return { error, handleClick, user };
  },
};
</script>

<style>
nav {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav p {
  margin: 2px auto;
  font-size: 1rem;
  color: #444;
}
nav p.email {
  font-size: 14px;
  color: #999;
}
</style>
