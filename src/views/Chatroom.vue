<template>
  <div class="container">
    <Navbar />
    <NewChatForm />
  </div>
</template>

<script>
import { watch } from "vue";
import { useRouter } from "vue-router";
import Navbar from "../components/Navbar.vue";
import getUser from "../composables/getUser";
import NewChatForm from "../components/NewChatForm.vue";
export default {
  components: { Navbar, NewChatForm },
  setup() {
    const { user } = getUser();
    const router = useRouter();

    watch(user, () => {
      if (!user.value) router.push("/");
    });

    return {};
  },
};
</script>

<style></style>
