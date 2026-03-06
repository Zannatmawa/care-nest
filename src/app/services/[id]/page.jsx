import { use } from "react";
import Link from "next/link";
import BookingBtn from "@/components/buttons/BookingBtn";
import { FaBaby, FaUserAlt, FaHeartbeat, FaCheckCircle, FaClock, FaDollarSign, FaShieldAlt } from "react-icons/fa";

const services = [
    {
        id: 1,
        slug: "baby-care",
        title: "Baby Care",
        description: "Professional and nurturing care for newborns and toddlers, focusing on safety, hygiene, and early development.",
        longDescription: "Our baby care specialists are trained to handle every aspect of your child's early life. From establishing healthy sleep routines to providing cognitive stimulation through play, we ensure your baby is in safe, loving hands while you manage your daily responsibilities.",
        icon: <FaBaby className="text-6xl text-primary mb-4" />,
        features: ["Newborn care & feeding", "Diapering & hygiene", "Sleep training assistance", "Developmental play"],
        pricing: "From $25/hour",
        availability: "Full-time & Part-time",
        requirements: "Minimum 4-hour booking"
    },
    {
        id: 2,
        slug: "elderly-care",
        title: "Elderly Care",
        description: "Dignified and compassionate assistance for seniors to help them maintain independence and quality of life.",
        longDescription: "Aging gracefully requires support that respects a person's dignity. We provide companionship, help with daily activities, and ensure a safe living environment for your elderly loved ones, reducing isolation and promoting physical well-being.",
        icon: <FaUserAlt className="text-6xl text-secondary mb-4" />,
        features: ["Mobility & walking assistance", "Medication reminders", "Meal preparation", "Companionship & conversation"],
        pricing: "From $30/hour",
        availability: "24/7 Live-in or Hourly",
        requirements: "Initial health assessment"
    },
    {
        id: 3,
        slug: "sick-care",
        title: "Sick People Care",
        description: "Specialized recovery support for individuals dealing with illness, surgery recovery, or chronic conditions.",
        longDescription: "Recovering from health issues can be overwhelming. Our care providers assist with vitals monitoring, post-operative care, and daily hygiene to ensure the recovery process is as smooth and comfortable as possible.",
        icon: <FaHeartbeat className="text-6xl text-accent mb-4" />,
        features: ["Post-surgery support", "Vitals monitoring", "Wound care assistance", "Doctor visit accompaniment"],
        pricing: "From $35/hour",
        availability: "On-call & Scheduled",
        requirements: "Medical history overview"
    },
];

const ServiceDetailsPage = ({ params }) => {
    const resolvedParams = use(params);
    const id = Number(resolvedParams.id);

    if (isNaN(id)) return <div className="text-center py-16 text-error">Invalid Service ID</div>;

    const service = services.find((s) => s.id === id);
    if (!service) return <div className="text-center py-16 text-error font-bold">Service Not Found</div>;

    return (
        <section className="py-20 bg-base-200/30 min-h-screen">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-6 mb-8">
                            <div className="w-24 h-24 flex items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-base-300">
                                {service.icon}
                            </div>
                            <div>
                                <h1 className="text-4xl font-extrabold text-neutral">{service.title}</h1>
                                <span className="badge badge-primary badge-outline mt-2">{service.availability}</span>
                            </div>
                        </div>

                        <div className="prose prose-lg max-w-none text-neutral/80">
                            <p className="font-semibold text-neutral text-xl">{service.description}</p>
                            <p className="mt-4">{service.longDescription}</p>
                        </div>

                        <div className="mt-12">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <FaCheckCircle className="text-success" /> Key Service Features
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-neutral/70">
                                {service.features.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg border border-base-200 shadow-sm">
                                        <div className="w-2 h-2 rounded-full bg-primary" />
                                        {feature}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="bg-white p-8 rounded-2xl shadow-xl border border-base-200 sticky top-10">
                            <h3 className="text-xl font-bold mb-6 border-b pb-4">Service Details</h3>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-primary/10 rounded-lg text-primary"><FaDollarSign /></div>
                                    <div>
                                        <p className="text-sm text-neutral/50">Pricing</p>
                                        <p className="font-bold">{service.pricing}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-secondary/10 rounded-lg text-secondary"><FaClock /></div>
                                    <div>
                                        <p className="text-sm text-neutral/50">Booking Window</p>
                                        <p className="font-bold">{service.requirements}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-accent/10 rounded-lg text-accent"><FaShieldAlt /></div>
                                    <div>
                                        <p className="text-sm text-neutral/50">Guarantee</p>
                                        <p className="font-bold">Fully Insured & Vetted</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10 flex flex-col gap-3">
                                <BookingBtn service={service} className="w-full btn-lg" />
                                <Link href="/services" className="btn btn-ghost w-full">
                                    View All Services
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceDetailsPage;