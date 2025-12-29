"use server";

import clientPromise from "@/app/lib/dbConnect";


export async function saveBooking(bookingData) {
    try {
        const client = await clientPromise;
        const db = client.db("carenestdb");
        const collection = db.collection("bookings");

        const result = await collection.insertOne(bookingData);
        return result;
    } catch (err) {
        console.error(err);
        throw new Error("Failed to save booking");
    }
}
