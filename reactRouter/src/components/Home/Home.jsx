import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            {/* Hero Section with Image on Left and Text on Right */}
            <aside className="relative text-black rounded-lg sm:mx-16 mx-2 sm:py-16 overflow-hidden">
                <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
                        {/* Image Section (Left Side) */}
                        <div className="flex justify-center sm:justify-start">
                            <img
                                className="w-full max-w-[800px] object-cover opacity-90 rounded-lg"
                                src="https://picsum.photos/id/180/1200/800"
                                alt="image1"
                            />
                        </div>

                        {/* Text Section (Right Side) */}
                        <div className="space-y-8 text-center sm:text-left py-10 sm:py-24 sm:ml-10 lg:ml-16">
                            <h2 className="text-4xl font-bold sm:text-5xl">
                                Download Now
                                <span className="block text-3xl sm:text-4xl">Build. Innovate. Succeed</span>
                            </h2>

                            <Link
                                className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                                to="/"
                            >
                                <svg
                                    fill="white"
                                    width="24"
                                    height="24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                >
                                    <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                                </svg>
                                &nbsp; Download now
                            </Link>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Second Image */}
            <div className="grid place-items-center sm:mt-20 mt-10">
                <img
                    className="w-full max-w-md object-cover px-4"
                    src="https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=1350&q=80"
                    alt="image2"
                />
            </div>

            {/* Tagline */}
            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">
                Where innovation meets technology
            </h1>
        </div>
    );
}





