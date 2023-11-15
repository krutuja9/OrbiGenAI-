import  { useState } from 'react';



import { MenuIcon, XIcon } from '@heroicons/react/outline';

function Home() {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    return (
        <>
            <div className="top-0 relative bg-gradient w-full h-[1117px] overflow-hidden">
                <div className="fixed drop-shadow-lg  top-24 flex  items-center justify-around w-full font-inter  ">
                    <p className=" sm:  text-customBlue md:text-base font-bold m-0 text-center">
                        <span className="font-medium">OrbiGenAI <p className="text-base ">Innovations Lab.</p></span>
                    </p>

                    <ul className="hidden md:flex space-x-4 text-white text-2xl font-semibold">
                        <li className='hover:border-b border-blue-500'>Home</li>
                        <li className='hover:border-b border-blue-500'>What We Do</li>
                        <li className='hover:border-b border-blue-500'>Our Strengths</li>
                        <li className='hover:border-b border-blue-500'>Our Products</li>
                        <li className='hover:border-b border-blue-500'>Contact Us</li>
                    </ul>
                    <div className='hidden md:flex pr-4 text-white text-[20px] font-semibold'>
                        <button className='border-none bg-transparent  mr-4'>
                            Login
                        </button>
                        <button className='border-none rounded-[20px] py-2 px-4 bg-blue-500 bg-opacity-88'>SignUp</button>
                    </div>
                    <div className='md:hidden mr-[-110px]' onClick={handleClick}>
                        {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
                    </div>
                </div>
                

                <div className=" flex flex-col justify-center items-center text-white h-[428px] flex-shrink-0">

                    <h3 className=" m-0 absolute top-[267px] text-white font-light font-julius-sans-one text-lg ">
                        YOUR FUTURE POWERED BY OUR AI
                    </h3>
                    <div className="absolute top-[298px] text-7xl leading-normal text-white text-opacity-97  font-inter  font-bold ">
                        <p className="text-center">Transforming </p>
                        <p className=' leading-none'>Research with AI</p>
                    </div>
                    <p className="mt-1  absolute top-[499px] text-white text-center font-inter 
                    w-[555px] h-[109px] flex-shrink-0 text-sm font-normal leading-normal">
                        Our team of brilliant minds is hard at work, crafting the website. Stay
                        tuned as we embark on this epic journey. Brace yourself for a wave of
                        innovation that will transform the way we live, work, and interact with
                        technology. We’re not just dreaming of a better future; we’re building
                        it.
                    </p>

                    <p className="mt-14 text-[15px]  absolute top-[554px]  text-center inline-block w-[1044px] h-6">
                        <span>{`The Future is bright. The Future is `}</span>
                        <span className="font-medium">OrbiGenAI Innovations Lab.</span>
                    </p>

                    <h3 className="m-18 leading-normal absolute top-[653px] text-[33px] font-normal font-serif">
                        Subscribe to our Newsletter!
                    </h3>


                </div>
            </div>
        </>

        // <div className=" relative [background:radial-gradient(50%_50%_at_50%_50%,_rgba(0,_117,_255,_0.88),_rgba(3,_36,_73,_0.88)_93.12%)] w-full h-[1117px] overflow-hidden">

        //     <div className='w-full h-[80px] bg-zinc-200 fixed drop-shadow-lg'>
        //   <div className='px-2 flex justify-between items-center w-full h-full'>
        //     <div className='flex items-center'>
        //       <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>OrbiGenAI<span>Innovation Lab</span></h1>
        //       <ul className='hidden md:flex'>
        //       <li></li>
        //       <li></li>
        //       <li></li>
        //       <li></li>
        //       <li></li>
        //       </ul>
        //     </div>
        //     {/* <div className='hidden md:flex pr-4'>
        //       <button className='border-none bg-transparent text-black mr-4'>
        //         Sign In
        //       </button>
        //       <button className='px-8 py-3'>Sign Up</button>
        //     </div>
        //     <div className='md:hidden mr-4' onClick={handleClick}>
        //         {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}

        //     </div> */}
        //   </div>

        //   {/* <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
        //       <li className='border-b-2 border-zinc-300 w-full'></li>
        //       <li className='border-b-2 border-zinc-300 w-full'></li>
        //       <li className='border-b-2 border-zinc-300 w-full'></li>
        //       <li className='border-b-2 border-zinc-300 w-full'></li>
        //       <li className='border-b-2 border-zinc-300 w-full'></li>

        //     <div className='flex flex-col my-4'>
        //         <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign In</button>
        //         <button className='px-8 py-3'>Sign Up</button>
        //     </div>
        //   </ul> */}
        // </div>




        // </div>
    )
}

export default Home
