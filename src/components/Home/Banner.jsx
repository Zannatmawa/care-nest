import Image from "next/image";

const Banner = () => {
    return (
        <section className="hero min-h-[90vh] bg-base-100">
            <div className="hero-content flex-col lg:flex-row-reverse gap-10">

                <Image
                    src="/assets/da-vector-FfDOn-uNG6E-unsplash.png"
                    alt="Baby and Elderly Care"
                    width={400}
                    height={400}
                    className="max-w-sm rounded-2xl "
                />

                {/* Content */}
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-neutral leading-tight">
                        Trusted Care for
                        <span className="text-primary"> Every Generation</span>
                    </h1>

                    <p className="py-6 text-neutral/80 max-w-xl">
                        CareNest connects loving caregivers with families who need
                        professional babysitting and elderly care services —
                        safe, reliable, and compassionate.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button className="btn btn-primary px-8">
                            Find a Caregiver
                        </button>
                        <button className="btn btn-outline btn-secondary px-8">
                            Become a Caregiver
                        </button>
                    </div>

                    {/* Trust badges */}
                    <div className="flex gap-6 mt-8">
                        <div className="flex items-center gap-2">
                            <span className="badge badge-primary badge-sm"></span>
                            <span className="text-sm text-neutral/70">
                                Verified Caregivers
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="badge badge-secondary badge-sm"></span>
                            <span className="text-sm text-neutral/70">
                                24/7 Support
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="badge badge-accent badge-sm"></span>
                            <span className="text-sm text-neutral/70">
                                Safe & Trusted
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
