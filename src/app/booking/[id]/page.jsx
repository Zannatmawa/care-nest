"use client";

import { saveBooking } from "@/actions/savebooking";
import { useEffect, useState } from "react";

export default function BookingPage({ params }) {
    const [durationType, setDurationType] = useState("hours");
    const [duration, setDuration] = useState(1);

    const [locations, setLocations] = useState([]);
    const [region, setRegion] = useState("");
    const [district, setDistrict] = useState("");
    const [area, setArea] = useState("");

    const pricePerHour = 300;
    const pricePerDay = 2000;

    useEffect(() => {
        fetch("/data/data.json")
            .then((res) => res.json())
            .then((data) => setLocations(data));
    }, []);

    const selectedRegion = locations.find((item) => item.region === region);
    const uniqueRegions = [...new Set(locations.map((loc) => loc.region))];

    const totalCost =
        durationType === "hours" ? duration * pricePerHour : duration * pricePerDay;

    const handleSubmit = async (e) => {
        e.preventDefault();

        const bookingData = {
            serviceSlug: params.slug, // slug from URL
            durationType,
            duration,
            location: { region, district, area },
            totalCost,
            status: "Pending",
        };

        try {
            await saveBooking(bookingData); // save to MongoDB
            alert("Booking confirmed! Status: Pending");
        } catch (err) {
            console.error(err);
            alert("Failed to save booking");
        }
    };

    return (
        <section className="py-16">
            <div className="max-w-3xl mx-auto px-4">
                <h1 className="text-3xl font-bold mb-8">Book Service</h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Duration Type */}
                    <div>
                        <label className="label">Duration Type</label>
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
                        <label className="label">Duration ({durationType})</label>
                        <input
                            type="number"
                            min="1"
                            className="input input-bordered w-full"
                            value={duration}
                            onChange={(e) => setDuration(Number(e.target.value))}
                        />
                    </div>

                    {/* Region */}
                    <select
                        className="select select-bordered w-full"
                        value={region}
                        onChange={(e) => {
                            setRegion(e.target.value);
                            setDistrict("");
                            setArea("");
                        }}
                        required
                    >
                        <option value="">Select Region</option>
                        {uniqueRegions.map((r, i) => (
                            <option key={i} value={r}>
                                {r}
                            </option>
                        ))}
                    </select>

                    {/* District */}
                    <div>
                        <label className="label font-semibold">District</label>
                        <select
                            className="select select-bordered w-full"
                            value={district}
                            onChange={(e) => setDistrict(e.target.value)}
                            disabled={!region}
                            required
                        >
                            <option value="">Select District</option>
                            {selectedRegion && (
                                <option value={selectedRegion.district}>
                                    {selectedRegion.district}
                                </option>
                            )}
                        </select>
                    </div>

                    {/* Covered Area */}
                    <div>
                        <label className="label font-semibold">Covered Area</label>
                        <select
                            className="select select-bordered w-full"
                            value={area}
                            onChange={(e) => setArea(e.target.value)}
                            disabled={!district}
                            required
                        >
                            <option value="">Select Area</option>
                            {selectedRegion?.covered_area.map((a, i) => (
                                <option key={i} value={a}>
                                    {a}
                                </option>
                            ))}
                        </select>
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
