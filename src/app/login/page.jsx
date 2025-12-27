"use client"; // Client component

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

        // Basic validation
        if (!email || !password) {
            setError("Please enter both email and password.");
            return;
        }

        // TODO: Replace with your API call
        console.log("Logging in:", form);

        // Example: Successful login redirect
        router.push("/booking");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-100">
            <form
                onSubmit={handleSubmit}
                className="bg-base-200 p-8 rounded-lg shadow-md w-full max-w-md space-y-4"
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
                    className="text-primary hover:underline font-medium"
                >
                    New here? Register
                </Link>

            </form>

        </div>
    );
};

export default LoginPage;
