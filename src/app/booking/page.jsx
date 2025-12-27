
import React from 'react'

const Booking = async ({ params }) => {
    const p = await params
    console.log(p)
    return (
        <div>{params}booking</div>
    )
}

export default Booking