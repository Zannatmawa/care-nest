import Link from "next/link";

export default function NotFound() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center bg-base-100 px-4">

            {/* Error Code */}
            <h1 className="text-9xl font-extrabold text-primary mb-6">
                404
            </h1>

            {/* Message */}
            <h2 className="text-3xl md:text-4xl font-bold text-neutral mb-4 text-center">
                Oops! Page Not Found
            </h2>

            <p className="text-neutral/70 text-center mb-8 max-w-md">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>

            {/* Action Button */}
            <Link href="/services" className="btn btn-primary btn-lg">
                Go Back to Services
            </Link>

        </section>
    );
}

