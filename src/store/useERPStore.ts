import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ERPState {
  // Invoice Builder State
  activeInvoice: any | null;
  invoiceItems: any[];
  addInvoiceItem: (item: any) => void;
  removeInvoiceItem: (id: string) => void;
  calculateTotal: () => number;
  
  // POS / Cart State
  posCart: any[];
  
  // Auth & Role State
  currentUserRole: string | null;
  setRole: (role: string) => void;
}

export const useERPStore = create<ERPState>()(
  persist(
    (set, get) => ({
      activeInvoice: null,
      invoiceItems: [],
      addInvoiceItem: (item) => set((state) => ({ invoiceItems: [...state.invoiceItems, item] })),
      removeInvoiceItem: (id) => set((state) => ({ 
        invoiceItems: state.invoiceItems.filter(item => item.id !== id) 
      })),
      calculateTotal: () => {
        const items = get().invoiceItems;
        return items.reduce((total, item) => total + (item.price * item.quantity), 0);
      },
      
      posCart: [],
      
      currentUserRole: null,
      setRole: (role) => set({ currentUserRole: role }),
    }),
    {
      name: 'prabha-erp-storage',
    }
  )
);
