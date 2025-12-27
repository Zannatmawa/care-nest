"use client";

import { useState } from "react";

export default function BookingPage({ params }) {
    const [durationType, setDurationType] = useState("hours");
    const [duration, setDuration] = useState(1);
    const [location, setLocation] = useState({
        division: "",
        district: "",
        city: "",
        address: "",
    });

    // pricing logic
    const pricePerHour = 300;
    const pricePerDay = 2000;

    const totalCost =
        durationType === "hours"
            ? duration * pricePerHour
            : duration * pricePerDay;

    const handleSubmit = (e) => {
        e.preventDefault();

        const bookingData = {
            serviceSlug: params.slug,
            durationType,
            duration,
            location,
            totalCost,
            status: "Pending",
        };

        console.log("Booking Saved:", bookingData);
        alert("Booking confirmed! Status: Pending");
    };

    return (
        <section className="py-16">
            <div className="max-w-3xl mx-auto px-4">
                <h1 className="text-3xl font-bold mb-8">
                    Book Service
                </h1>

                <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Duration Type */}
                    <div>
                        <label className="label">Select Duration Type</label>
                        <select
                            className="select select-bordered w-full"
                            value={durationType}
                            onChange={(e) => setDurationType(e.target.value)}
                        >
                            <option value="hours">Hours</option>
                            <option value="days">Days</option>
                        </select>
                    </div>

                    {/* Duration */}
                    <div>
                        <label className="label">
                            Duration ({durationType})
                        </label>
                        <input
                            type="number"
                            min="1"
                            className="input input-bordered w-full"
                            value={duration}
                            onChange={(e) => setDuration(Number(e.target.value))}
                        />
                    </div>

                    {/* Location */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Division"
                            className="input input-bordered"
                            onChange={(e) =>
                                setLocation({ ...location, division: e.target.value })
                            }
                        />
                        <input
                            type="text"
                            placeholder="District"
                            className="input input-bordered"
                            onChange={(e) =>
                                setLocation({ ...location, district: e.target.value })
                            }
                        />
                        <input
                            type="text"
                            placeholder="City"
                            className="input input-bordered"
                            onChange={(e) =>
                                setLocation({ ...location, city: e.target.value })
                            }
                        />
                        <input
                            type="text"
                            placeholder="Area / Address"
                            className="input input-bordered"
                            onChange={(e) =>
                                setLocation({ ...location, address: e.target.value })
                            }
                        />
                    </div>

                    {/* Total Cost */}
                    <div className="bg-base-200 p-4 rounded-lg text-lg font-semibold">
                        Total Cost: ৳ {totalCost}
                    </div>

                    {/* Submit */}
                    <button type="submit" className="btn btn-primary w-full">
                        Confirm Booking
                    </button>
                </form>
            </div>
        </section>
    );
}

