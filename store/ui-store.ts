"use client";

import { create } from "zustand";

type Toast = {
  id: number;
  title: string;
  description?: string;
  tone: "success" | "error" | "info";
};

type UIState = {
  mobileMenuOpen: boolean;
  enquiryDrawerOpen: boolean;
  emailDialogOpen: boolean;
  toasts: Toast[];
  setMobileMenuOpen: (open: boolean) => void;
  toggleMobileMenu: () => void;
  setEnquiryDrawerOpen: (open: boolean) => void;
  openEnquiryDrawer: () => void;
  closeEnquiryDrawer: () => void;
  openEmailDialog: () => void;
  closeEmailDialog: () => void;
  pushToast: (toast: Omit<Toast, "id">) => void;
  dismissToast: (id: number) => void;
};

let toastId = 0;

export const useUIStore = create<UIState>((set) => ({
  mobileMenuOpen: false,
  enquiryDrawerOpen: false,
  emailDialogOpen: false,
  toasts: [],
  setMobileMenuOpen: (open) => set({ mobileMenuOpen: open }),
  toggleMobileMenu: () => set((s) => ({ mobileMenuOpen: !s.mobileMenuOpen })),
  setEnquiryDrawerOpen: (open) => set({ enquiryDrawerOpen: open }),
  openEnquiryDrawer: () => set({ enquiryDrawerOpen: true, mobileMenuOpen: false }),
  closeEnquiryDrawer: () => set({ enquiryDrawerOpen: false }),
  openEmailDialog: () => set({ emailDialogOpen: true, mobileMenuOpen: false }),
  closeEmailDialog: () => set({ emailDialogOpen: false }),
  pushToast: (toast) => {
    const id = ++toastId;
    set((s) => ({ toasts: [...s.toasts.slice(-2), { ...toast, id }] }));
    setTimeout(() => {
      set((s) => ({ toasts: s.toasts.filter((t) => t.id !== id) }));
    }, 5000);
  },
  dismissToast: (id) =>
    set((s) => ({ toasts: s.toasts.filter((t) => t.id !== id) })),
}));