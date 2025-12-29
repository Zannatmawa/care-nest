"use client";

import { getBookings } from "@/actions/getBookings";
import React, { useEffect, useState } from "react";

const MyBookingPage = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        async function fetchBookings() {
            try {
                const data = await getBookings();
                setBookings(data);
            } catch (err) {
                console.error("Failed to fetch bookings:", err);
            }
        }

        fetchBookings();
    }, []);

    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Service Name</th>
                        <th>Duration</th>
                        <th>Location</th>
                        <th>Total Cost</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.length === 0 ? (
                        <tr>
                            <td colSpan="7" className="text-center">
                                No bookings found.
                            </td>
                        </tr>
                    ) : (
                        bookings.map((b, i) => (
                            <tr key={i}>
                                <th>{i + 1}</th>
                                <td>{b.serviceSlug}</td>
                                <td>
                                    {b.duration} {b.durationType}
                                </td>
                                <td>
                                    {b.location.region}, {b.location.district},{" "}
                                    {b.location.area}
                                </td>
                                <td>৳ {b.totalCost}</td>
                                <td className="capitalize">{b.status}</td>
                                <td>
                                    <button className="btn btn-primary mr-2">View</button>
                                    {b.status.toLowerCase() === "pending" && (
                                        <button className="btn bg-red-600 text-white">
                                            Cancel
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default MyBookingPage;
