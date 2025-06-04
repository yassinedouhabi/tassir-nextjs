'use client';

import { create } from 'zustand';

export const useNotifications = create((set) => ({
  notifications: [],
  add: (message) =>
    set((state) => ({
      notifications: [
        {
          id: Date.now(),
          message,
          time: new Date(),
          read: false,
        },
        ...state.notifications,
      ],
    })),
  markAllRead: () =>
    set((state) => ({
      notifications: state.notifications.map((n) => ({
        ...n,
        read: true,
      })),
    })),
  clearAll: () =>
    set(() => ({
      notifications: [],
    })),
  markReadById: (id) =>
    set((state) => ({
      notifications: state.notifications.map((n) =>
        n.id === id ? { ...n, read: true } : n
      ),
    })),
  deleteById: (id) =>
    set((state) => ({
      notifications: state.notifications.filter(
        (n) => n.id !== id
      ),
    })),
}));
