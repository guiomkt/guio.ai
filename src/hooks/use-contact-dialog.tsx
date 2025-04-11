
import { create } from 'zustand';

interface ContactDialogStore {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  buttonText: string;
  setButtonText: (text: string) => void;
}

export const useContactDialog = create<ContactDialogStore>((set) => ({
  isOpen: false,
  setOpen: (open) => set({ isOpen: open }),
  buttonText: "Conversar com agente GUIO.AI",
  setButtonText: (text) => set({ buttonText: text }),
}));
