"use client"
import React, {useState} from 'react'
import GithubIcon from "../../public/github-icon.svg";
import LinkedInIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import {HandleSubmit} from "./functions/HandleSubmit";

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const resetForm = () => {
        setEmail('');
        setSubject('');
        setMessage('');
    }
    const handleSubmit = () => {
        HandleSubmit(email, subject, message)
        .then((res) => {
            console.log(res);
        })
        .finally(() => {
            resetForm();
        });
    }

  return (
    <section id='contact' className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-600 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-1/3 -left-4 transform -translate-x-3/4 -translate-1/2"></div>
        <div className='z-10'>
            <h5 className="text-xl font-bold text-white my-2">
                Let's Connect
            </h5>
            <p className="text-[#ADB7BE] mb-4 max-w-md">
                {" "}
                I'm currently open to new opportunities. Please feel free to get in touch with me. Whether it be a question or a simple greeting,
                I will do my best to get in touch with you as soon as I can!
            </p>
            <div className="socials flex flex-row gap-2">
                <Link href="https://github.com/danmcgrath10">
                    <Image src={GithubIcon} alt='Github Icon'/>
                </Link>
                <Link href="https://www.linkedin.com/in/mcgrath-daniel-e/">
                    <Image src={LinkedInIcon} alt='LinkedIn Icon'/>
                </Link>
            </div>
        </div>
        <div className='z-10'>
            <form className='flex flex-col' onSubmit={handleSubmit}>
                <div className='mb-6'>
                    <label htmlFor="email" type="email" className='text-white block mb-2 text-sm font-medium'>Your Email</label>
                    <input type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} required className='bg-[#18191E] border border-orange-400 placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' placeholder='danny@google.com'/>
                </div>
                <div className='mb-6'>
                    <label htmlFor="subject" type="text" className='text-white block mb-2 text-sm font-medium'>Subject</label>
                    <input type='text' id='subject' value={subject} onChange={(e) => setSubject(e.target.value)} required className='bg-[#18191E] border border-orange-400 placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' placeholder='Just saying hello'/>
                </div>
                <div className='mb-6'>
                    <label htmlFor='message' className='text-white block mb-2 font-medium'>Message</label>
                    <textarea
                        name='message'
                        id='message'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className='bg-[#18191E] border border-orange-400 placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        placeholder="Let's Chat"
                    />
                </div>
                <button
                    type='submit'
                    className="bg-gradient-to-br from-orange-400 to-white hover:bg-orange-400 text-black font-medium py-2.5 px-5 rounded-lg w-full"    
                >
                        Submit
                    </button>
                {emailSubmitted ? 
                    (<p className="text-green-500 text-sm mt-2">
                        Email sent successfully!
                    </p>) : 
                    <></>
                }
            </form>
        </div>
    </section>
  )
}

export default EmailSection