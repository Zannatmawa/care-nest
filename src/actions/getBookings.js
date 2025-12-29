"use server";

import clientPromise from "@/app/lib/dbConnect";


export async function getBookings() {
    try {
        const client = await clientPromise;
        const db = client.db("care_nest");
        const collection = db.collection("bookings");

        const bookings = await collection.find({}).toArray();

        const plainBookings = bookings.map((b) => ({
            ...b,
            _id: b._id.toString(),
            createdAt: b.createdAt ? b.createdAt.toISOString() : null,
        }));

        return plainBookings;
    } catch (err) {
        console.error(err);
        throw new Error("Failed to fetch bookings");
    }
}
