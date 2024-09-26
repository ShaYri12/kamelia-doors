'use client'
import Image from 'next/image'
import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '600px',
    border: '1px solid #AAAAAA',
    borderRadius: '20px',
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
};

const center = {
    lat: 25.172887,  
    lng: 55.389819,  
};

const options = {
    disableDefaultUI: false, 
    zoomControl: false,     
    fullscreenControl: false, 
};


const GetInTouch = () => {
    return (
        <div className='py-5 sm:py-[50px] md:py-[120px] md:pb-[50px] w-full max-w-[1200px] px-5 lg:px-10 mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-[78px]'>
                <div>
                    <h2 className='md:text-left text-center uppercase text-[#1B1717] text-[30px] sm:text-[40px] leading-[50px] tracking-[0.07em] font-bold'>get in touch</h2>
                    <p className='md:text-left text-center mx-auto mt-2 sm:mt-4 text-[#707070] text-[14px] sm:text-[16px] leading-[25px] font-normal max-w-[545px]'>Need a custom quote or have questions? Fill out the form, and our team will get back to you quickly. We're here to help bring your vision to life.</p>
                    <form className='mt-6 flex flex-col gap-4 sm:gap-5'>
                        <div className='flex items-center sm:flex-row flex-col  gap-4 sm:gap-5 justify-between'>
                            <input type='text' placeholder='Name *' required className='w-full border border-[#E0E0E0] py-3 px-5 rounded-xl outline-none' />
                            <input type='text' placeholder='Phone' required className='w-full border border-[#E0E0E0] py-3 px-5 rounded-xl outline-none' />
                        </div>
                        <input type='email' placeholder='Email *' required className='w-full border border-[#E0E0E0] py-3 px-5 rounded-xl outline-none' />
                        <textarea placeholder='Message' required className='w-full border border-[#E0E0E0] py-3 px-5 rounded-xl outline-none h-[167px] resize-none' />
                        <button className='mt-[20px] lg:mt-[45px] bg-[#EE7922] text-white py-3 px-10 rounded-xl uppercase text-[16px] sm:text-[18px] leading-[27px] font-semibold tracking-[0.1em]'>get a free quote</button>
                    </form>
                </div>
                <div>
                    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={center}
                            zoom={14}
                            options={options} 
                        >
                        </GoogleMap>
                    </LoadScript>
                 </div>
            </div>
        </div>
    )
}

export default GetInTouch