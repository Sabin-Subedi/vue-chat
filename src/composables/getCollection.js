import { ref, watchEffect } from "vue";
import { projectFireStore } from "../firebase/config";

const getCollection = (collection) => {
  const error = ref(null);
  const documents = ref(null);

  let collectionRef = projectFireStore
    .collection(collection)
    .orderBy("createdAt");

  const unsub = collectionRef.onSnapshot(
    (snap) => {
      let result = [];
      snap.docs.forEach(
        (doc) =>
          doc.data().createdAt && result.push({ ...doc.data(), id: doc.id })
      );

      documents.value = result;
      error.value = null;
    },
    (err) => {
      documents.value = null;
      error.value = "could not fetch data";
    }
  );

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub());
  });

  return { error, documents };
};

export default getCollection;
