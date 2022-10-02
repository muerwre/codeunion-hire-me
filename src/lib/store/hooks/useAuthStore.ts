import { useStore } from "../StoreProvider";

export const useAuthStore = () => useStore().auth;
