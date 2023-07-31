import React from 'react'

const Contact = () => {
  return (
    <div className='py-16 bg-[#ffbf23]' id="contact">
            <div className='max-w-[1240px] mx-auto px-4 flex flex-col gap-4'>
                        <div>
                            <p className='font-bold text-2xl'>WeDu</p>
                            <p>Communicate.Collaborate.Create</p>
                        </div>
                        <div className='grid lg:grid-cols-3 gap-6'>
                                    <div className='flex flex-col gap-4'>
                                            <h1 className='text-xl font-bold'>Contact</h1>
                                            <div className='grid gap-4'>
                                                    <div>
                                                        <p>500 Terry Francine Street <br />San Francisco, CA 94158</p>
                                                    </div>
                                                    <div>
                                                        <p>Sales: <br />info@mysite.com</p>
                                                    </div>
                                                    <div>
                                                        <p>General Inquiries: <br />123-456-7890</p>
                                                    </div>
                                                    <div>
                                                        <p>Customer Care: <br />info@mysite.com</p>
                                                    </div>
                                            </div>
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <h1 className='text-xl font-bold'>Quick Links</h1>
                                        <div>
                                            <p className='underline cursor-pointer'>Terms & Conditions</p>
                                            <p className='underline cursor-pointer'>Privacy Policy</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-6'>
                                        <div>   
                                            <h1 className='text-xl font-bold'>Follow</h1>
                                            <div className='flex flex-col gap-4'>
                                                <p>Sign up to get the latest <br />news on our product</p>
                                                <div className='flex flex-col gap-3'>
                                                    <label htmlFor="email">Email*</label>
                                                    <div className='flex'>
                                                        <input type="email" id="email" className='bg-[#ffbf23] border-2 py-2 w-[160px] sm:w-[300px] border-black rounded-md  hover:bg-white'/>
                                                        <button className='bg-black text-white border-2 border-black px-4 py-2 rounded-md hover:bg-[#ffbf23] hover:text-black relative right-2'>Subscribe</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex gap-4 flex-wrap'>
                                                <p><a href="#" className='font-bold text-xl'>Linkedin</a></p>
                                                <p><a href="#" className='font-bold text-xl'>Youtube</a></p>
                                                <p><a href="#" className='font-bold text-xl'>Facebook</a></p>
                                        </div>
                                    </div>
                        </div>
            </div>
    </div>
  )
}

export default Contact
