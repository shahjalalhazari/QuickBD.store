"use client"
import { signOut } from "next-auth/react"
import { toast } from "react-toastify";

export const userSignOut = async () => {
  try {
    await signOut({redirect: false});
    toast.success("✅ You have been signed out successfully!")

    setTimeout(() => {
      window.location.reload();
    }, 2000);
  } catch (error) {
    toast.error("❌ Failed to logout. Please try again.");
  }
}