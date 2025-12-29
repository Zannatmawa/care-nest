// "use client"
import { use } from "react";
import Link from "next/link";
import BookingBtn from "@/components/buttons/BookingBtn";
import { FaBaby, FaUserAlt, FaHeartbeat } from "react-icons/fa";

const services = [
    { id: 1, slug: "baby-care", title: "Baby Care", description: "Detailed info about Baby Care", icon: <FaBaby className="text-6xl text-primary mb-4" /> },
    { id: 2, slug: "elderly-care", title: "Elderly Care", description: "Detailed info about Elderly Care", icon: <FaUserAlt className="text-6xl text-secondary mb-4" /> },
    { id: 3, slug: "sick-care", title: "Sick People Care", description: "Detailed info about Sick People Care", icon: <FaHeartbeat className="text-6xl text-accent mb-4" /> },
];

const ServiceDetailsPage = ({ params }) => {
    const resolvedParams = use(params);
    const id = Number(resolvedParams.id);

    if (isNaN(id)) return <div className="text-center py-16">Invalid Service ID</div>;

    const service = services.find((s) => s.id === id);
    if (!service) return <div className="text-center py-16">Service not found</div>;

    return (
        <section className="py-20 bg-base-100">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-10 items-start">
                    {/* Icon */}
                    <div className="shrink-0">
                        <div className="w-28 h-28 flex items-center justify-center rounded-xl bg-primary/10">
                            {service.icon}
                        </div>
                    </div>

                    {/* Content */}
                    <div>
                        <h1 className="text-4xl font-bold text-neutral mb-4">{service.title}</h1>
                        <p className="text-neutral/70 text-lg leading-relaxed mb-8">{service.description}</p>
                        <div className="flex gap-4 mt-8">
                            <BookingBtn service={service} />
                            <Link href="/services" className="btn btn-outline">
                                Back to Services
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceDetailsPage;
