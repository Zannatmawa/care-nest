"use client"; // Client component for form handling

import { useState } from "react";
import { useRouter } from "next/navigation";

const RegistrationPage = () => {
    const router = useRouter();
    const [form, setForm] = useState({
        nid: "",
        name: "",
        email: "",
        contact: "",
        password: "",
        confirmPassword: "",
    });
    const [error, setError] = useState("");

    // Handle input changes
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // Validate password
    const validatePassword = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        return regex.test(password);
    };

    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        const { password, confirmPassword } = form;

        if (!validatePassword(password)) {
            setError(
                "Password must be at least 6 characters and include 1 uppercase & 1 lowercase letter."
            );
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        // Here you can call your API to save user
        console.log("Registered user:", form);

        // Redirect to Booking Page after registration
        router.push("/booking");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-100">
            <form
                onSubmit={handleSubmit}
                className="bg-base-200 p-8 rounded-lg shadow-md w-full max-w-md space-y-4"
            >
                <h1 className="text-2xl font-bold text-center mb-4">Register</h1>

                {error && (
                    <p className="text-red-500 text-sm text-center">{error}</p>
                )}

                {/* NID */}
                <input
                    type="text"
                    name="nid"
                    placeholder="NID No"
                    value={form.nid}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    required
                />

                {/* Name */}
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    required
                />

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

                {/* Contact */}
                <input
                    type="tel"
                    name="contact"
                    placeholder="Contact"
                    value={form.contact}
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

                {/* Confirm Password */}
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    required
                />

                <button type="submit" className="btn btn-primary w-full mt-2">
                    Register
                </button>
            </form>
        </div>
    );
};

export default RegistrationPage;
