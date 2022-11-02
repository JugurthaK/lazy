import { reactive } from "vue";
import STORAGES from "./storageIndexes";

const getStorage = () => {
  const value = localStorage.getItem(STORAGES.SECRET_STORAGE);
  return value ? JSON.parse(value) : [];
};

const secrets = reactive({
  storage: getStorage(),
});

export { secrets };
