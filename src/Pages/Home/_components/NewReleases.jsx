import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router';
import { useAuthContext } from '../../../Context/context';
import { Autoplay } from 'swiper/modules';

const NewReleases = () => {
    const { movies } = useAuthContext()
    // Handle Sort Data
    const moviesSort = movies.sort((a, b) => b.release_date - a.release_date);


    return (
        <div className='py-10 px-4'>
            <div className="title mb-5 flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">New Releases.</h1>
                    <p className="text-gray-500">Fresh content just for you.</p>
                </div>
                <Link to="/movies" className='py-2 px-4 text-zinc-800 rounded'>View All</Link>
            </div>
            {/* Create Slider movies */}
            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1100: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1300: {
                        slidesPerView: 5,
                        spaceBetween: 20
                    }
                }}
                modules={[Autoplay]}
                className="mySwiper h-[400px] max-md:h-[550px]"
            >
                {moviesSort?.map((item) => (
                    <SwiperSlide style={{
                        backgroundImage: `linear-gradient(to top, rgba(255,255,255,0.8), rgba(255,255,255,0)),
                        url(${import.meta.env.VITE_PUBLIC_IMAGE_BASE_URL}/t/p/original/${item?.poster_path})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        height: '100%'
                    }} className=' cursor-pointer hover:scale-101 transition-all ease-in-out duration-500 rounded'>
                        <div className="text flex flex-col justify-end items-start h-full p-3 gap-1">
                            <h2 className="text-2xl text-zinc-800 font-bold">{item?.original_title}</h2>
                            <p className="text-gray-500 text-lg">{item?.title}</p>
                            <div className="flex gap-2">
                                <p className=' bg-[#ffffffc3] px-4 py-1 rounded-md text-[10px]'>Thriller</p>
                                <p className=' bg-[#ffffffc3] px-4 py-1 rounded-md text-[10px]'>Sci-Fi</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default NewReleases;
