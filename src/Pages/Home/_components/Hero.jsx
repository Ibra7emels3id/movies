import React from 'react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useAuthContext } from '../../../Context/context';
import { Link } from 'react-router';


const Hero = () => {
    const { movies } = useAuthContext()




    return (
        <Swiper
            spaceBetween={30}
            effect={'fade'}
            navigation={true}
            loop={true}
            autoplay={{
                delay: 4500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination, Autoplay]}
            className="mySwiper w-full"
        >
            {movies?.slice(0, 5).map((item) => (
                <SwiperSlide style={{
                    height: '680px',
                    backgroundImage: `
                                        linear-gradient(to top, rgba(255,255,255,0.8), rgba(255,255,255,0)),
                                        url(${import.meta.env.VITE_PUBLIC_IMAGE_BASE_URL}/t/p/original/${item.backdrop_path})
                                    `,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center 35%',
                }} className='w-full px-5 md:px-20'>
                    <div className="content h-full  flex flex-col justify-center max-md:items-center  gap-2">
                        <h2 className='text-5xl max-md:text-4xl font-bold'>{item.original_title}</h2>
                        <div className="flex items-center  gap-2 py-2 ">
                            <p className='flex items-center justify-center gap-1'>
                                <svg fill="#ffc800" viewBox="0 0 16 16" className='w-5' xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                    <g id="SVGRepo_iconCarrier">
                                        {" "}
                                        <g>
                                            {" "}
                                            <polygon points="8 11.43 3.67 14 4.84 9.19 1 5.97 6.05 5.57 8 1 9.95 5.57 15 5.97 11.15 9.19 12.33 14 8 11.43" />{" "}
                                        </g>{" "}
                                    </g>
                                </svg>
                                <span>4.7</span>
                            </p>
                            <p className=''>{item.release_date.split('-')[0]} 2h 8m</p>
                            <p className=' bg-[#ffffffc3] px-4 py-1 rounded-md text-[12px]'>Thriller</p>
                            <p className=' bg-[#ffffffc3] px-4 py-1 rounded-md text-[12px]'>Sci-Fi</p>
                            <p className=' bg-[#ffffffc3] px-4 py-1 rounded-md text-[12px]'>12+</p>
                        </div>
                        <p className='text-2xl font-semibold text-zinc-700'>{item.title}</p>
                        <p className='text-lg text-zinc-600 font-normal max-md:w-full max-md:text-center mt-2 w-1/2'>{item.overview.slice(0, 100)}.</p>
                        <Link to={`/movie/${item.id}`} className='flex items-center justify-center gap-1 mt-4 py-2 cursor-pointer px-4 bg-zinc-800 text-white rounded-md hover:bg-zinc-700 duration-300 w-[150px]'>
                            <svg
                                fill="#000000"
                                viewBox="0 0 32 32"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                transform="matrix(1, 0, 0, 1, 0, 0)rotate(90)"
                                className='w-5 h-5 fill-white'
                            >
                                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                <g id="SVGRepo_iconCarrier">
                                    {" "}
                                    <title>triangle</title>{" "}
                                    <path d="M31.082 27.5l-13.999-24.249c-0.237-0.352-0.633-0.58-1.083-0.58s-0.846 0.228-1.080 0.575l-0.003 0.005-14 24.249c-0.105 0.179-0.167 0.395-0.167 0.625 0 0.69 0.56 1.25 1.25 1.25 0 0 0 0 0 0h28c0.69-0 1.249-0.56 1.249-1.25 0-0.23-0.062-0.446-0.171-0.631l0.003 0.006zM4.165 26.875l11.835-20.499 11.834 20.499z" />{" "}
                                </g>
                            </svg>
                            <p>Watch Now</p>
                        </Link>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default Hero;
