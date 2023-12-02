"use client";
import React from 'react'
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="lg:py-16">
       <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
            <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-white">Hello, I'm {" "}</span>
                <br/>
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Danny',
                        3000, // wait 1s before replacing "Mice" with "Hamsters"
                        'an Engineer',
                        3000,
                        'a Developer',
                        3000,
                        'Always Learning',
                        3000
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                />
            </h1>
            <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
                I love to write simple and beautiful applications.
            </p>
            <div>
                <Link
                    href={"#contact"}
                >
                <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-orange-400 bg-white hover:bg-slate-200 text-black">Hire Me</button>
                </Link>
                <a href="/images/Daniel_McGrath_Resume.pdf" download="Daniel_McGrath_Resume.pdf">
                    <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-orange-400 to-white hover:bg-slate-800 text-white mt-3">
                        <span className="block bg-[#121212] hover:bg-slate-600 rounded-full px-5 py-2">
                            Download Resume
                        </span>
                    </button>
                </a>
            </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
        <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.svg"
              alt="Avatar Image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              height={700}
              width={700}
            />
          </div>
        </div>
       </div>
    </section>
  )
}

export default HeroSection