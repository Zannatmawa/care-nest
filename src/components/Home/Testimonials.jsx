import { FaQuoteLeft, FaStar, FaUsers, FaHandsHelping } from "react-icons/fa";

const TestimonialsSection = () => {
    return (
        <section className="py-16 bg-base-200">
            <div className="max-w-6xl mx-auto px-4">

                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-neutral">
                        Trusted by Families
                    </h2>
                    <p className="text-neutral/70 mt-3 max-w-2xl mx-auto">
                        Real stories from families who found peace of mind with CareNest.
                    </p>
                </div>

                {/* Success Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-center">

                    <div className="card bg-base-100 shadow-md">
                        <div className="card-body items-center">
                            <FaUsers className="text-4xl text-primary mb-3" />
                            <h3 className="text-3xl font-bold">5,000+</h3>
                            <p className="text-neutral/70">Happy Families</p>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-md">
                        <div className="card-body items-center">
                            <FaHandsHelping className="text-4xl text-secondary mb-3" />
                            <h3 className="text-3xl font-bold">2,000+</h3>
                            <p className="text-neutral/70">Verified Caregivers</p>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-md">
                        <div className="card-body items-center">
                            <FaStar className="text-4xl text-accent mb-3" />
                            <h3 className="text-3xl font-bold">4.9/5</h3>
                            <p className="text-neutral/70">Average Rating</p>
                        </div>
                    </div>

                </div>

                {/* Testimonials */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Testimonial 1 */}
                    <div className="card bg-base-100 shadow-lg">
                        <div className="card-body">
                            <FaQuoteLeft className="text-primary text-2xl mb-3" />
                            <p className="text-neutral/80">
                                CareNest helped us find a trustworthy babysitter within hours.
                                The caregiver was kind, professional, and amazing with our child.
                            </p>
                            <div className="mt-4">
                                <h4 className="font-semibold">— Ayesha Rahman</h4>
                                <p className="text-sm text-neutral/60">Mother of a toddler</p>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="card bg-base-100 shadow-lg">
                        <div className="card-body">
                            <FaQuoteLeft className="text-primary text-2xl mb-3" />
                            <p className="text-neutral/80">
                                We found a compassionate caregiver for my elderly father.
                                CareNest truly understands the importance of dignity and care.
                            </p>
                            <div className="mt-4">
                                <h4 className="font-semibold">— Md. Hasan</h4>
                                <p className="text-sm text-neutral/60">Elderly Care Client</p>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="card bg-base-100 shadow-lg">
                        <div className="card-body">
                            <FaQuoteLeft className="text-primary text-2xl mb-3" />
                            <p className="text-neutral/80">
                                During recovery at home, the caregiver provided excellent
                                support. The service was reliable and comforting.
                            </p>
                            <div className="mt-4">
                                <h4 className="font-semibold">— Nusrat Jahan</h4>
                                <p className="text-sm text-neutral/60">Home Care Patient</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default TestimonialsSection;
