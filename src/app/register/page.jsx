"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { registerUser } from "@/actions/registerUser";

const RegistrationPage = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const serviceId = searchParams.get("service_id");

    const [form, setForm] = useState({
        nid: "",
        name: "",
        email: "",
        contact: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const validatePassword = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        return regex.test(password);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        const { confirmPassword, ...userData } = form;

        if (!validatePassword(form.password)) {
            setError(
                "Password must be at least 6 characters and include 1 uppercase & 1 lowercase letter."
            );
            return;
        }

        if (form.password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        try {
            setLoading(true);
            await registerUser(userData);

            router.push(`/booking/${serviceId}`);
        } catch (err) {
            setError(err.message || "Registration failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-100">
            <form
                onSubmit={handleSubmit}
                className="bg-base-200 p-8 rounded-lg shadow-md w-full max-w-md space-y-4"
            >
                <h1 className="text-2xl font-bold text-center">Register</h1>

                {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                <input name="nid" placeholder="NID No" className="input input-bordered w-full" onChange={handleChange} required />
                <input name="name" placeholder="Name" className="input input-bordered w-full" onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" className="input input-bordered w-full" onChange={handleChange} required />
                <input name="contact" placeholder="Contact" className="input input-bordered w-full" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" className="input input-bordered w-full" onChange={handleChange} required />
                <input type="password" name="confirmPassword" placeholder="Confirm Password" className="input input-bordered w-full" onChange={handleChange} required />

                <button type="submit" className="btn btn-primary w-full" disabled={loading}>
                    {loading ? "Registering..." : "Register"}
                </button>
            </form>
        </div>
    );
};

export default RegistrationPage;
//@Marufa362
//zannatulmawa38@gmail