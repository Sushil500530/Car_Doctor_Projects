import img from '../../assets/images/login/login.svg'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
const Login = () => {
    const handleLogin = (e) => {
        e.preventDefault();
        const form  =e.target ;
        const email = form.email.value;
        const password = form.password.value;
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className=" w-1/2 mr-12">
                  <img src={img} alt='image' />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                    <h1 className="text-3xl font-bold text-center">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6 w-full">
                            <button className="btn bg-red-500 text-white capitalize text-[18px] hover:text-black">Sign In</button>
                        </div>
                       <div className='text-center space-y-5 mt-5'>
                       <p>Or Sign In with</p>
                        <div className='space-x-5'>
                            <button className='btn btn-circle text-blue-500'><FaFacebookF className='w-1/2 h-full'></FaFacebookF></button>
                            <button className='btn btn-circle text-blue-500'><FaLinkedinIn className='w-1/2 h-full'></FaLinkedinIn></button>
                            <button className='btn btn-circle text-blue-500'><FcGoogle className='w-1/2 h-full'></FcGoogle></button>
                        </div>
                        <p>New to Car Doctors? <Link to='/resister' className='text-red-500 font-bold'>Sign Up</Link></p>
                       </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;