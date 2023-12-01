"use client";
import React from 'react'
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

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
                        2000, // wait 1s before replacing "Mice" with "Hamsters"
                        'Web Developer',
                        2000,
                        'Lifelong Learner',
                        2000,
                        'Human',
                        2000
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                />
            </h1>
            <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            Software Engineer with 4 years of full stack experience focusing on web and cross-platform native desktop application development. Proficient at building dynamic and scalable web infrastructures that solve problems. Passionate about customer experience and tooling.
            </p>
            <div>
                <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-orange-400 bg-white hover:bg-slate-200 text-black">Hire Me</button>
                <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-orange-400 to-white hover:bg-slate-800 text-white mt-3">
                    <span className="block bg-[#121212] hover:bg-slate-600 rounded-full px-5 py-2">
                        Download Resume
                    </span>
                </button>
            </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
        <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={500}
              height={500}
            />
          </div>
        </div>
       </div>
    </section>
  )
}

export default HeroSection