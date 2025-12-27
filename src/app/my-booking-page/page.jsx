import React from 'react'
// Show all bookings with: Service Name, , , ,  (Pending / Confirmed / Completed / Cancelled)
const MyBookingPage = () => {
    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Service Name</th>
                        <th>Duration</th>
                        <th>Location</th>
                        <th>Total Cost</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                        <td>Blue</td>
                        <td>pending</td>
                        {/* (Pending / Confirmed / Completed / Cancelled)
 */}
                        <td>
                            <button className='btn btn-primary mr-4'>view</button>
                            <button className='btn bg-red-600 text-white'>cancel</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default MyBookingPage