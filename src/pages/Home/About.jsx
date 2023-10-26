import person from '../../assets/images/about_us/person.jpg'
import perse from '../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-[60vh] my-12 bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
              <div className='lg:w-1/2 relative'>
              <img src={person} className="max-w-sm rounded-lg shadow-2xl w-3/4" />
              <img src={perse} className="max-w-sm rounded-lg shadow-2xl w-1/2 absolute right-5 top-1/2 border-8 border-white" />
              </div>
                <div className='lg:w-1/2 space-y-5'>
                <h3 className='text-xl font-bold text-red-500'>About Us</h3>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <button className="btn btn-active bg-red-500 text-white capitalize text-[18px] hover:text-black">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;