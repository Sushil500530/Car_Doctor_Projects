import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const Checkout = () => {
    const service = useLoaderData();
    const { title, _id, price } = service || {};
    const {user} = useContext(AuthContext);
    console.log(user);

    const handleBookService = e => {
        e.preventDefault();
        const form = e.target ;
        const name = form.name.value;
        const email = form.email.value || user?.email;
        const date = form.date.value;
        const order = {
            customerName: name,
            email,
            date,
            service: _id,
            price: price
        }
        console.log(order);
        
    }
    return (
        <div>
            <h4>Checkout book:{title}</h4>
            <form onSubmit={handleBookService} className="card-body">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} name="name" placeholder="Your Name"
                        className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" defaultValue = {user?.email} placeholder="Your Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input type="number" name="price" defaultValue={price} className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-error btn-block text-[18px] text-white capitalize" type="submit" value="Order Cofirmation" />
                </div>
            </form>
        </div>

    );
};

export default Checkout;