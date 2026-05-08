"use client";

import { signOut } from "firebase/auth";

import { auth } from "@/lib/firebase";

import { useRouter } from "next/navigation";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function DashboardPage() {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);

    router.push("/admin/login");
  };

  return (
    <ProtectedRoute>

      <main className="min-h-screen bg-[#F8FFF4] p-10">

        <div className="max-w-6xl mx-auto">

          <div className="flex items-center justify-between mb-10">

            <div>

              <h1 className="text-4xl font-bold text-[#2D5A27]">
                Dashboard Admin
              </h1>

              <p className="text-gray-600">
                Kelola website yayasan
              </p>

            </div>

            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-6 py-3 rounded-xl"
            >
              Logout
            </button>

          </div>

        </div>

      </main>

    </ProtectedRoute>
  );
}