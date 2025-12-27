
import { FaBaby, FaUserAlt, FaHeartbeat } from "react-icons/fa";
import Link from "next/link";

const services = [
    {
        id: 1,
        slug: "baby-care",
        title: "Baby Care",
        description: "Detailed information about Baby Care services.",
        icon: <FaBaby className="text-6xl text-primary mb-4" />,
    },
    {
        id: 2,
        slug: "elderly-care",
        title: "Elderly Care",
        description: "Detailed information about Elderly Care services.",
        icon: <FaUserAlt className="text-6xl text-secondary mb-4" />,
    },
    {
        id: 3,
        slug: "sick-care",
        title: "Sick People Care",
        description: "Detailed information about Sick People Care services.",
        icon: <FaHeartbeat className="text-6xl text-accent mb-4" />,
    },
];


const ServiceDetailsPage = async ({ params }) => {
    // const service = await services[params.id];
    const service = services.find(
        (item) => item.id === 2
    );

    if (!service) {
        return <div className="text-center py-16">Service not found.</div>;
    }

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
                        <h1 className="text-4xl font-bold text-neutral mb-4">
                            {service.title}
                        </h1>

                        <p className="text-neutral/70 text-lg leading-relaxed mb-8">
                            {service.description}
                        </p>

                        <div className="flex gap-4 mt-8">
                            <Link
                                href={`/booking/${service.id}`}
                                className="btn btn-primary"
                            >
                                Book Service
                            </Link>

                            <Link
                                href="/services"
                                className="btn btn-outline"
                            >
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
