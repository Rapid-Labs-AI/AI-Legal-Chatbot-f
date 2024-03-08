import React from 'react'
import Nav from './nav';
import Floatbot from './floatbot';

export default function Main () {
  return (
    <>
        <div className="background_container">
            <Nav />
            <div className="banner_content flex flex-col justify-center items-center mt-14">
                <div className="banner-icon mb-8">
                    <img src={require('../logobanner.png')} alt="Loading failed" />
                </div>
                <div className="banner-text mb-9">
                    <h1 className="mb-4 text-center text-4xl font-bold leading-none tracking-tight md:text-5xl lg:text-6xl">
                        Your AI-Powered Local Law Assistant 
                    </h1>
                </div>
                <Floatbot />
            </div>
            <div className="portfolio_container">
                <div className="portfolio-img flex justify-center">
                    <img className='h-auto lg:max-w-xl sm:max-w-xs md:max-w-lg rounded-xl' src={require('../chatbot_portfolio.png')} alt="Loading failed" />
                </div>
            </div>
            
        </div>
        <div className="our_solutions my-12 md:mt-18">
            <div className="main_title px-6 flex justify-center items-center flex-col items-center">
                <h2 className="mb-3 text-center text-3xl font-bold leading-none tracking-tight md:text-2xl lg:text-3xl capitalize">
                    Our Solution for your problems
                </h2>
                <p className='text-center text-gray-400'>We make it easy for users to use our platform, that's why we provide this benefit.</p>
            </div>
            <div className="solution-cards mt-8 flex flex-wrap flex-row justify-center items-center">
                <div className="card1 md:bases-1/2 lg:basis-1/5 mx-3 sm:my-3 lg:my-1">
                    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                        <img className='card-icon' src={require('../7.png')} alt="Unable to load" />
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900">24/7 Support</h6>
                        <p className="font-normal text-gray-700 dark:text-gray-400">Always there for you, offering emotional support and conversation anytime you need it.</p>
                        <a href="#" className="inline-flex font-medium items-center mt-5 text-blue-600 hover:underline">
                            Learn more
                            <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="card2 md:bases-1/2 lg:basis-1/5 mx-3 sm:my-3 lg:my-1">
                    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                        <img className='card-icon' src={require('../Personialized Insights.png')} alt="Unable to load" />
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900">Personalized Insights</h6>
                        <p className="font-normal text-gray-700 dark:text-gray-400">Synced from a Windows, Mac, or Ubuntu Linux computer to the cloud and vice versa without any problems.</p>
                        <a href="#" className="inline-flex font-medium items-center mt-5 text-blue-600 hover:underline">
                            Learn more
                            <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="card3 md:bases-1/2 lg:basis-1/5 mx-3 sm:my-3 lg:my-1">
                    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                        <img className='card-icon' src={require('../Confidential Conversation.png')} alt="Unable to load" />
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900">Secure Conversations</h6>
                        <p className="font-normal text-gray-700 dark:text-gray-400">Keep track of your emotional well-being with intuitive mood logs and receive insights to improve your mental health.</p>
                        <a href="#" className="inline-flex font-medium items-center mt-5 text-blue-600 hover:underline">
                                Learn more
                                <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
                                </svg>
                        </a>
                    </div>
                </div>
                <div className="card4 md:bases-1/2 lg:basis-1/5 mx-3 sm:my-3 lg:my-1">
                    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                        <img className='card-icon' src={require('../Resource Libraray.png')} alt="Unable to load" />
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900">Resource Library</h6>
                        <p className="font-normal text-gray-700 dark:text-gray-400">Access a curated selection of articles, videos, and exercises designed to support your mental health journey.</p>
                        <a href="#" className="inline-flex font-medium items-center mt-5 text-blue-600 hover:underline">
                            Learn more
                            <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
    </>
  )
}