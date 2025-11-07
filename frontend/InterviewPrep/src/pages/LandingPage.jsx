import React, { useState } from 'react'

import HERO_IMG from "../assets/hero-img.png";
import { APP_FEATURES } from "../utils/data.js";
import { useNavigate } from 'react-router-dom';
import { LuSparkles } from 'react-icons/lu';
import Modal from '../components/Modal.jsx';
import Login from './Auth/Login.jsx';
import SignUp from './Auth/SignUp.jsx';

const LandingPage = () =>{
    const navigate = useNavigate();

    const[openAuthModal, setOpenAuthModal] = useState(false);
    const[currentPage, setCurrentPage] = useState("login");
    

const handleCTA = () => {};

    return (
        <>
        <div className="w-full min-h-full bg-rose-200">
            <div className="w-[500px] h-[500px] bg-rose-400/20 blur-[65px] absolute top-0 left-0 "/>
            <div className="container mx-auto px-4 pt-6 pb-[200px] relative z-10">
                {/*Header */}
                <header className="flex justify-between items-center mb-16">
                    <div className="text-xl text-indigo-950 font-bold">
                        Interview Prep AI
                    </div>
                        <button
                        className="bg-gradient-to-r from-[#e7207a] to-[#fa59a2] text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-indigo-950 hover:text-white border-white transition-colors cursor-pointer"
                        onClick={() => setOpenAuthModal(true)}
                        >
                            Login / SignUp
                        </button>
                </header>

                {/*Hero Content */}
                <div className='flex flex-col md:flex-row items-center'>
                    <div className='w-full md:w-1/2 pr-4 mb-8 md:mb-0'>
                        <div className='flex items-center justify-left mb-2'>
                            <div className='flex items-center gap-2 text-[13px] text-rose-700 font-semibold bg-rose-300 px-3 py-1 rounded-full border border-rose-700'>
                            <LuSparkles/>    AI Powered
                            </div>
                        </div>

                        <h1 className=' text-5xl text-indigo-950 font-medium mb-6 leading-tight'>
                            Ace Interviews with <br />
                            <span className='text-transparent bg-clip-text bg-[radial-gradient(circle,#F33A6A_0%,#C60C3D_100%)] bg-size-200 animate-text-shine font-semibold'>
                             AI-Powered
                            </span>{""}
                            Learning
                        </h1>
                    </div>

                    <div className='w-full md:w-1/2'>
                        <p className='text-[17px] text-indigo-900 mr-0 md:mr-20 mb-6'>
                            Get role specific questions, expand answers when you need them,
                            dive deeper into concepts, and organize everything your way.
                            From preparation to mastery - your ultimate interview toolkit is 
                            here.
                        </p>

                        <button className=' bg-indigo-950 text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-rose-200 hover:text-indigo-950 border border-rose-100 hover:border-rose-500 transition-colors cursor-pointer ' onClick={handleCTA}>
                            Get Started
                        </button>

                    </div>
                </div>
            </div>
        </div>

        <div className='w-full min-h-full relative z-10 mb-56 bg-rose-200'>
            <div>
                <section className='flex items-center justify-center -mt-36'>
                    <img src={HERO_IMG}
                    alt='Hero Image'
                    className='w-[80vw] rounded-lg'/>

                    </section>
            </div>

            <div className='w-full min-h-full bg-rose-200 mt-10'>
                <div className='container mx-auto px-4 pt-10 pb-20'>
                    <section className="mt-5">
                        <h2 className="text-3xl font-medium text-center mb-12">
                            Features That Make You Shine
                        </h2>

                        <div className='flex flex-col items-center gap-8'>
                            {/*First 3 cards */}
                            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 w-full'>
                                {APP_FEATURES.slice(0,3).map((feature) =>(
                                    <div key={feature.id}
                                        className='bg-rose-100 p-6 rounded-xl shadow-xs hover:shadow-lg shadow-rose-400 transition border border-rose-200'
                                    >
                                    <h3 className='text-base font-semibold mb-3'>
                                        {feature.title}
                                    </h3>
                                    <p className='text-indigo-800 text-base'>{feature.description}</p>
                                    </div>
                                ))}
                            </div>

                            {/**next 3 cards */}
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                                {APP_FEATURES.slice(3).map((feature) =>(
                                    <div key={feature.id}
                                    className='bg-rose-100 p-6 rounded-xl shadow-xs hover:shadow-lg shadow-rose-400 transition border border-rose-200'>
                                        <h3 className='text-base font-semibold mb-3'>
                                        {feature.title}
                                        </h3>
                                        <p className='text-indigo-800 text-base'>{feature.description}</p>
                                        </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            

        </div>
        <Modal
            isOpen={openAuthModal}
            onClose={() => {
                setOpenAuthModal(false);
                setCurrentPage("login");
            }}
            hideHeader
        >
            <div>
            {currentPage === "login" && (
                <Login setCurrentPage={setCurrentPage} />
            )}
            {currentPage === "signup" && (
                <SignUp setCurrentPage={setCurrentPage} />
            )}
            </div>
        </Modal>
        </>
    );
};

export default LandingPage;