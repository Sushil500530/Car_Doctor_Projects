/* eslint-disable react/prop-types */

const BookingRow = ({ booking,handleDelete,handleConfirm}) => {
    const { price, email, date, service, img, _id, status } = booking || {};

    return (
        <tr>
            <td>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-sm bg-black text-white hover:text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </td>
            <td>
                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        {img && <img src={img} alt="image" />}
                    </div>
                </div>
            </td>
            <td>
                <div>
                    <div className="font-bold">{service}</div>
                    <div className="text-sm opacity-50">Dhaka</div>
                </div>
            </td>
            <td>{email}</td>
            <td>{date}</td>
            <td>${price}</td>
            <th>
            {
                status === 'confirm' ? <span className="text-base font-bold text-violet-600">Confirmed</span> :
                <button onClick={() => handleConfirm(_id)}  className="btn btn-primary capitalize">Please Confirm</button>
            }
            </th>
        </tr>
    );
};

export default BookingRow;