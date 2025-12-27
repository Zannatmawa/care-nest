import Link from "next/link";
import { FaBaby, FaUserAlt, FaHeartbeat } from "react-icons/fa";

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

const ServicesPage = () => {
    return (
        <section className="py-16 bg-base-100">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral mb-8 text-center">
                    Our Services
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div key={service.id} className="card bg-base-200 shadow-md p-6 text-center">
                            <div className="p-4 rounded-full bg-gray-100 mx-auto mb-4 inline-block">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                            <p className="text-neutral/70 mb-4">{service.description}</p>
                            <Link
                                href={`/services/${service.id}`}
                                className="btn btn-primary btn-sm"
                            >
                                View Details
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesPage;
