"use client"

import Link from "next/link"

const BookingBtn = ({ service }) => {
    const isLogin = true;
    const add2Cart = () => {
        if (isLogin);
        // alert(service._id)
    }
    return (
        <div>
            <Link
                onClick={add2Cart}
                href={`/booking/`}
                className="btn btn-primary"
            >
                Book Service
            </Link>
        </div>
    )
}

export default BookingBtn