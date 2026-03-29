"use client"
import { signOut } from "next-auth/react"
import { toast } from "react-toastify";

export const userSignOut = async () => {
  try {
    await toast.promise(
      signOut({ redirect: false }),
      {
        pending: "Signing out...",
        success: "✅ You have been signed out successfully!",
        error: "❌ Failed to logout. Please try again."
      }
    );

    setTimeout(() => {
      window.location.reload();
    }, 3000);
  } catch (error) {
    toast.error("❌ Failed to logout. Please try again.");
  }
}