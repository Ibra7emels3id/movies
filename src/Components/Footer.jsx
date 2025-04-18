import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="flex py-4 px-4 border-y border-gray-200 sm:px-10 bg-white min-h-[70px] tracking-wide relative z-50">
            <div className="flex flex-wrap items-center justify-between gap-5 w-full">
                <Link to="/" className="max-md:flex items-center justify-center max-md:w-full">
                    <h1 className="text-2xl font-bold">ArabiStream</h1>
                </Link>
                {/* <div  className="max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"> */}
                    <ul className='flex items-center justify-between gap-2 max-md:w-full '>
                        <li className=" max-lg:border-gray-300 max-lg:py-3">
                            <Link
                                href="/"
                                className="hover:text-blue-700 text-blue-700 block font-medium text-[12px]"
                            >
                                Home
                            </Link>
                        </li>
                        <li className=" max-lg:border-gray-300 max-lg:py-3">
                            <Link
                                href="/about"
                                className="hover:text-blue-700 text-slate-900 block font-medium text-[12px]"
                            >
                                About Us
                            </Link>
                        </li>
                        <li className=" max-lg:border-gray-300 max-lg:py-3">
                            <Link
                                href="/service"
                                className="hover:text-blue-700 text-slate-900 block font-medium text-[12px]"
                            >
                                Terms of Service
                            </Link>
                        </li>
                        <li className=" max-lg:border-gray-300 max-lg:py-3">
                            <Link
                                href="/privacy-policy"
                                className="hover:text-blue-700 text-slate-900 block font-medium text-[12px]"
                            >
                                Privacy Policy
                            </Link>
                        </li>
                        <li className=" max-lg:border-gray-300 max-lg:py-3">
                            <Link
                                href="javascript:void(0)"
                                className="hover:text-blue-700 text-slate-900 block font-medium text-[12px]"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                {/* </div> */}
                <div className="flex items-center max-md:justify-center max-md:w-full">
                    <p className='text-gray-500 text-[12px]'>© 2025 ArabiStream. All rights reserved..</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
