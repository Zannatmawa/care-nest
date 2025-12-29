"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginPage = () => {
    const router = useRouter();
    const [form, setForm] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        const { email, password } = form;

        if (!email || !password) {
            setError("Please enter both email and password.");
            return;
        }

        console.log("Logging in:", form);

        router.push("/booking");
    };

    return (
        <div className="min-h-screen  flex items-center justify-center">
            <form
                onSubmit={handleSubmit}
                className="bg-base-200 h-120 p-8 rounded-lg shadow-md w-full max-w-md space-y-4"
            >
                <h1 className="text-2xl font-bold text-center mb-4">Login</h1>

                {error && (
                    <p className="text-red-500 text-sm text-center">{error}</p>
                )}

                {/* Email */}
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    required
                />

                {/* Password */}
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    required
                />

                <button type="submit" className="btn btn-primary w-full mt-2">
                    Login
                </button>
                <Link
                    href="/register"

                >
                    New here? <span className="text-primary hover:underline font-medium"></span> Register
                </Link>
                <Link
                    href="/register"
                    className="btn btn-primary w-full  bg-red-600 border-none mt-5"
                >
                    Google
                </Link>



            </form>

        </div>
    );
};

export default LoginPage;
