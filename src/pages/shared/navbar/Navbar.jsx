import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/icons/Group 1.png'

const Navbar = () => {
    const navLinks = <>
        <NavLink to='/'><li><a>Home</a></li></NavLink>
        <NavLink to='/about'><li><a>About</a></li></NavLink>
        <NavLink to='/service'><li><a>Services</a></li></NavLink>
        <NavLink to='/blog'><li><a>Blog</a></li></NavLink>
        <NavLink to='/contact'><li><a>Contact</a></li></NavLink>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {navLinks}                   
                    </ul>
                </div>
                <Link className="normal-case text-xl">
                   <div className="flex flex-col">
                   <img src={logo} alt="logo" className="w-full h-full" />
                   <h3 className="text-xl font-bold">Car Doctor</h3>
                   </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
            <button className="btn btn-outline btn-warning">Appointment</button>
            </div>
        </div>
    );
};

export default Navbar;