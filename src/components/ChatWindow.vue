<template>
  <div class="chat-window">
    <div v-if="error">
      <p>{{ error }}</p>
    </div>
    <div v-if="documents" class="messages" ref="messageRef">
      <div v-for="doc in formattedDocuments" :key="doc.id" class="single">
        <span class="created-at">{{ doc.createdAt }}</span>
        <span class="name">{{ doc.name }}</span>
        <span class="message">{{ doc.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from "../composables/getCollection";
import { formatDistanceToNow } from "date-fns";
import { computed, onUpdated, ref } from "vue";

export default {
  setup() {
    const messageRef = ref(null);
    const { documents, error } = getCollection("messages");

    const formattedDocuments = computed(() => {
      if (documents.value) {
        return documents.value.map((doc) => {
          console.log();
          return {
            ...doc,
            createdAt: formatDistanceToNow(doc.createdAt.toDate()),
          };
        });
      }
    });

    onUpdated(() => {
      messageRef.value.scrollTop = messageRef.value.scrollHeight;
    });

    return { documents, error, formattedDocuments, messageRef };
  },
};
</script>

<style scoped>
.chat-window {
  background: #fafafa;
  padding: 30px 20px;
}
.single {
  margin: 18px 0;
}
.created-at {
  display: block;
  color: #999;
  font-size: 12px;
  margin-bottom: 4px;
}
.name {
  font-weight: bold;
  margin-right: 6px;
}
.messages {
  max-height: 300px;
  overflow: auto;
}
</style>
