/* eslint-disable react/prop-types */
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {_id,title,img,price} = service || {};
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-5 pt-5">
                <img src={img} alt="services" className="rounded-xl" />
            </figure>
            <div className="card-body items-start">
                <h2 className="card-title font-bold">{title}</h2>
                <div className="card-actions flex items-start justify-between w-full">
                <p className="text-xl font-semibold text-red-500">Price : $ {price}</p>
                   <Link to={`/checkout/${_id}`}>
                   <button className="btn flex items-center justify-center gap-3 text-[18px] capitalize text-red-500">Book Now<BsArrowRight></BsArrowRight></button>
                   </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;