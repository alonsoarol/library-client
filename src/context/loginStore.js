import create from "zustand";

const loginStore = (set) => ({
  connectedUser: null,
  info: null,
  login: (newConnectedUser) => {
    set((state) => ({ connectedUser: newConnectedUser }));
  },
  logingOut: () => {
    set((state) => ({ connectedUser: null }));
  },
});

export const useLoginStore = create(loginStore);
