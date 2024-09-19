import { create } from 'zustand';

const useOpenStore = create((set) => ({
  isOpen: false,
  setOpen: (state) => set(({ isOpen:state})),
}));

export default useOpenStore;