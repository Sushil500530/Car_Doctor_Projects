/* eslint-disable react/prop-types */
import { BsArrowRight } from 'react-icons/bs';

const ServiceCard = ({service}) => {
    const {title,img,price} = service || {};
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-5 pt-5">
                <img src={img} alt="services" className="rounded-xl" />
            </figure>
            <div className="card-body items-start">
                <h2 className="card-title font-bold">{title}</h2>
                <div className="card-actions flex items-start justify-between w-full">
                <p className="text-xl font-semibold text-red-500">Price : $ {price}</p>
                    <button className=" text-red-500 text-2xl"><BsArrowRight></BsArrowRight></button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;