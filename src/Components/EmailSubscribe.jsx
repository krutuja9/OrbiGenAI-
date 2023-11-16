import  { useState } from 'react'
import PopUpComponent from './PopUpComponent'

const EmailSubscribe = () => {
  // State to manage the visibility of the popup
  const [isOpen, setIsOpen] = useState(false)
  // State to manage the email input field
  const [emailInput, setEmail] = useState("")
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailInput)
    // Check if the email input is empty
    if (!emailInput) {
      return alert("Please enter Email")
    }
    // If email is provided, open the popup
    setIsOpen(true)
  }
  // Function to close the popup and reset email input
  const ClosePopup = () => {
    setIsOpen(false)
    setEmail('')
  }
  return (
    <div className='my-3 px-3'>
      <form noValidate onSubmit={handleSubmit}>
        <div className='md:min-w-[479px] h-[62px] bg-[#5454545e] flex rounded-full'>
          <input className='bg-transparent w-full pl-6 outline-none border-none text-base text-white placeholder:text-gray-300' value={emailInput} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' />
          <button type='submit' className='rounded-full bg-[#0075FFE0] outline-none border-none w-40 hover:bg-[#0075FFE0] hover:text-white'>Subscribe</button>
        </div>
      </form>
      {isOpen && <PopUpComponent emaildata={emailInput} close={ClosePopup} />}
    </div>
  )
}

export default EmailSubscribe