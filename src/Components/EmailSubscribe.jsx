import React, { useState } from 'react'

const EmailSubscribe = () => {
    const [emailInput,setEmail] = useState("")
    const handleSubmit = (e)=>{
        e.preventDefault();
    }
  return (
    <div className='my-3 px-3'>
        <form noValidate onSubmit={handleSubmit}>
            <div className='md:min-w-[479px] h-[62px] bg-[#5454545e] flex rounded-full'>
        <input className='bg-transparent w-full pl-6 outline-none border-none text-base text-white placeholder:text-white' value={emailInput} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Email' />
        <button className='rounded-full bg-[#0075FFE0] outline-none border-none w-40 hover:bg-[#0075FFE0] hover:text-white'>Subscribe</button>
            </div>
        </form>
    </div>
  )
}

export default EmailSubscribe