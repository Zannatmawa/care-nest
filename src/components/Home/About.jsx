const AboutSection = () => {
    return (
        <section className="py-16 bg-base-200">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral mb-4">
                            Our Mission
                        </h2>

                        <p className="text-neutral/80 leading-relaxed mb-4">
                            At <span className="font-semibold text-primary">CareNest</span>,
                            our mission is to provide safe, reliable, and compassionate care
                            for both children and elderly individuals. We believe every family
                            deserves peace of mind knowing their loved ones are in caring and
                            capable hands.
                        </p>

                        <p className="text-neutral/80 leading-relaxed mb-6">
                            Our platform connects families with verified caregivers who are
                            trained, trusted, and committed to delivering quality care with
                            dignity, respect, and empathy.
                        </p>

                        <div className="flex gap-4">
                            <div className="badge badge-primary badge-outline">
                                Trusted Care
                            </div>
                            <div className="badge badge-secondary badge-outline">
                                Verified Caregivers
                            </div>
                            <div className="badge badge-accent badge-outline">
                                All Ages Supported
                            </div>
                        </div>
                    </div>

                    {/* Visual / Highlight Card */}
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h3 className="card-title text-primary">
                                Why Choose CareNest?
                            </h3>
                            <ul className="space-y-3 text-neutral/80">
                                <li>✔ Background-checked caregivers</li>
                                <li>✔ Flexible babysitting & elderly care services</li>
                                <li>✔ Easy booking & transparent communication</li>
                                <li>✔ Focus on safety, comfort, and trust</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;
