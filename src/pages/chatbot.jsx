import React from 'react'

export default function Chatbot() {
  return (
    <div className="chatbot_main_container bg-image">
    <div className="overlay">
        <div className="banner flex justify-center items-center mt-5 mb-12">
            <div className="banner-img">
                <img src={require('../chatbotBanner.png')} alt="Loading failed" className='h-auto max-w-full'/>
            </div>
        </div>
        <div className="chatarea my-5 flex justify-center">
            <div className="chats">
                <div className="userchat flex items-end justify-end mb-7">
                    <div className="userchat-bg">
                        <div className="userchat-text">
                           <p className="m-0 text-white">What are the symptoms of the heart attack?</p> 
                        </div>
                    </div>
                    <div className="userchat-img ms-2">
                        <img src={require('../user_prompt.png')} alt="Loading failed"/>
                    </div>
                </div>
                <div className="botchat flex items-end justify-start mb-4">
                    <div className="botchat-img mr-2">
                        <img src={require('../logobanner.png')} className='max-w-full h-auto' alt="Loading failed"/>
                    </div>
                    <div className="botchat-bg">
                        <div className="botchat-text">
                           <p className="m-0">Symptoms include chest pain, shortness of breath, nausea, and discomfort in arms or shoulder. </p> 
                        </div>
                    </div>
                </div>
                

                <div className="promptarea">
                    <div className="prompt fixed bottom-0 left-1/2 transform -translate-x-1/2 flex py-3 border-2 border-white w-full">
                        <div className="prompt-input-btn flex items-center justify-center w-full">
                            <div className="prompt-input w-2/3">
                                <input type="text" className="p-3 w-full" id="inputtext" placeholder="Type a new message here..."/>
                            </div>
                            <div className="prompt-btn">
                                <button className="submit-btn py-2 px-5 me-2 font-medium text-gray-900 focus:outline-none bg-white dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><img src={require('../Sendbot.png')} alt="Unable to load" className="img-fluid"/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}


