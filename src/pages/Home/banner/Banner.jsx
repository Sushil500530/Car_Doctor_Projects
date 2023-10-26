
import image1 from '../../../assets/images/banner/1.jpg'
import image2 from '../../../assets/images/banner/2.jpg'
import image3 from '../../../assets/images/banner/3.jpg'
import image4 from '../../../assets/images/banner/4.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={image1} className="w-full rounded-lg" />
                <div className="absolute h-full bottom-0 rounded-lg bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] flex items-center justify-start pl-20">
                  <div className='text-white space-y-7 w-2/5'>
                    <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className='text-white '>
                        <button className='btn bg-red-500  border border-red-500 text-white capitalize text-[18px] mb-5 hover:text-black mr-5'>Discover More</button>
                        <button className='btn bg-transparent border border-white hover:bg-red-500 hover:text-white text-white capitalize text-[18px] hover:border-red-500'>Latest Project</button>
                    </div>
                  </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={image2} className="w-full rounded-lg" />
                <div className="absolute h-full bottom-0 rounded-lg bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] flex items-center justify-start pl-20">
                  <div className='text-white space-y-7 w-2/5'>
                    <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className='text-white '>
                        <button className='btn bg-red-500  border border-red-500 text-white capitalize text-[18px] mb-5 hover:text-black mr-5'>Discover More</button>
                        <button className='btn bg-transparent border border-white hover:bg-red-500 hover:text-white text-white capitalize text-[18px] hover:border-red-500'>Latest Project</button>
                    </div>
                  </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={image3} className="w-full rounded-lg" />
                <div className="absolute h-full bottom-0 rounded-lg bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] flex items-center justify-start pl-20">
                  <div className='text-white space-y-7 w-2/5'>
                    <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className='text-white '>
                        <button className='btn bg-red-500  border border-red-500 text-white capitalize text-[18px] mb-5 hover:text-black mr-5'>Discover More</button>
                        <button className='btn bg-transparent border border-white hover:bg-red-500 hover:text-white text-white capitalize text-[18px] hover:border-red-500'>Latest Project</button>
                    </div>
                  </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={image4} className="w-full rounded-lg" />
                <div className="absolute h-full bottom-0 rounded-lg bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] flex items-center justify-start pl-20">
                  <div className='text-white space-y-7 w-2/5'>
                    <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className='text-white '>
                        <button className='btn bg-red-500  border border-red-500 text-white capitalize text-[18px] mb-5 hover:text-black mr-5'>Discover More</button>
                        <button className='btn bg-transparent border border-white hover:bg-red-500 hover:text-white text-white capitalize text-[18px] hover:border-red-500'>Latest Project</button>
                    </div>
                  </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;