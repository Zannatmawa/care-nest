"use server";

import clientPromise from "@/app/lib/dbConnect";
import bcrypt from "bcrypt";

export async function registerUser(userData) {
    const { nid, name, email, contact, password } = userData;

    if (!nid || !name || !email || !contact || !password) {
        throw new Error("All fields are required");
    }

    const client = await clientPromise;
    const db = client.db("carenestdb");
    const users = db.collection("users");

    const existingUser = await users.findOne({ email });
    if (existingUser) {
        throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await users.insertOne({
        nid,
        name,
        email,
        contact,
        password: hashedPassword,
        role: "user",
        createdAt: new Date(),
    });

    return { success: true };
}
