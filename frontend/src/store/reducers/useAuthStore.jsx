import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// Create a unified, reactive store hook accessible anywhere in your UI tree
const useAuthStore = create(
    persist(
        (set) => ({
            // 1. Initial Local State
            user: null,
            token: null,
            isAuthenticated: false,

            // 2. Clear, Type-Safe Mutations (Actions)
            setLogin: (userData, tokenData) => {
                // Instantly update reactive state and push token to localStorage for Axios to read
                localStorage.setItem("token", tokenData);
                set({ 
                    user: userData, 
                    token: tokenData, 
                    isAuthenticated: true 
                });
            },

            setLogout: () => {
                localStorage.removeItem("token");
                set({ 
                    user: null, 
                    token: null, 
                    isAuthenticated: false 
                });
            },
        }),
        {
            name: "fingenius-auth-storage", // Unique identifier key in storage
            storage: createJSONStorage(() => localStorage), // Native persistence mechanism
        }
    )
);

export default useAuthStore;