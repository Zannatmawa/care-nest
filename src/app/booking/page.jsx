const Booking = ({ params }) => {
    const { id } = params; // get dynamic route value

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold">
                Booking Page
            </h1>
            <p className="mt-2 text-lg">
                Booking for ID: <span className="font-semibold">{id}</span>
            </p>
        </div>
    );
};

export default Booking;
