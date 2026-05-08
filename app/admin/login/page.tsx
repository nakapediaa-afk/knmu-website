"use client";

import { useState } from "react";

import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "@/lib/firebase";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleLogin = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);

    setError("");

    try {
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      router.push("/admin/dashboard");

    } catch (err) {
      setError("Email atau password salah");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-[#F8FFF4] flex items-center justify-center px-6">

      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md">

        <div className="text-center mb-8">

          <h1 className="text-4xl font-bold text-[#2D5A27] mb-2">
            Admin KNMU
          </h1>

          <p className="text-gray-500">
            Login untuk mengelola website
          </p>

        </div>

        <form
          onSubmit={handleLogin}
          className="space-y-6"
        >

          <div>

            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="admin@email.com"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

          </div>

          <div>

            <label className="block mb-2 font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="********"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />

          </div>

          {error && (
            <div className="bg-red-100 text-red-600 p-3 rounded-xl">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#2D5A27] text-white py-3 rounded-xl"
          >
            {loading ? "Loading..." : "Login"}
          </button>

        </form>

      </div>

    </main>
  );
}