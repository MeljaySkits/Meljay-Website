import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import chibi from '../images/chibi.jpg'
<<<<<<< HEAD
import { FaArrowUp } from 'react-icons/fa'
import { Link } from 'react-scroll'
=======
>>>>>>> 3539222141b829c3dfd55f4f77294870ca93b2b0

function Contact() {
    const form = useRef()

  const sendEmail = e => {
    e.preventDefault()
    emailjs
    .sendForm(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAIL_USER_ID
    )
    .then(result => {
      console.log(result.text);
      console.log("message sent");
      alert("Message sent succesfully!")

      form.current.reset()
    }, (error) => {
      console.log(error.text)
    })
  }




  return (
<<<<<<< HEAD
    <>
=======
>>>>>>> 3539222141b829c3dfd55f4f77294870ca93b2b0
    <section id="/contact" data-aos='fade-up' data-aos-delay='300' className='min-h-screen overflow-hidden flex items-center p-6 mt-10 relative justify-center bg-slate-100'>
        <div className='shadow-2xl rounded-2xl flex flex-col md:flex-row max-w-4xl w-full relative bg-slate-300'>
            <figure className='flex flex-wrap justify-center left-2 gap-4 mt-2 mb-2 relative'>
            {/* <div className='absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full bg-gradient-to-r from-[#6d2897] via-[#8e6cf5] to-[#bb61c5] shadow-[0_0_70px_rgba(182,0,182,0.7]'></div> */}
            <img src={chibi} alt="Contact illustration" className='h-[250px] sm:h-[400px] md:h-[485px] w-[300px] sm:w-[480px] object-cover rounded-t-lg md:rounded-r-lg relative' />
            </figure>

            {/* Contact form */}

            <section className='p-8 w-full md:w-1/2'>
            <header className='mb-6'>
                <h2 className='text-4xl font-bold text-center text-cyan-950'>Contact Me</h2>
            </header>
            <form ref={form} onSubmit={sendEmail} className='space-y-4'>
                <div>
                    <label htmlFor="name" className='block text-gray-300 font-medium mb-2'>Name</label>
                    <input type="text" name='user_name' id='name' placeholder='Enter Your Name' required className='w-full px-4 py-2 text-white bg-gray-400 rounded-lg focus:outline-none'/>
                </div>
                <div>
                    <label htmlFor="email" className='block text-gray-300 font-medium mb-2'>Email</label>
                    <input type="text" name='user_email' id='email' placeholder='Enter Your Email' required className='w-full px-4 py-2 text-white bg-gray-400 rounded-lg focus:outline-none'/>
                </div>
                <div>
                    <label htmlFor="message" className='block text-gray-300 font-medium mb-2'>Message</label>
                    <textarea name="user_message" id="message" placeholder='Your Message...' className='w-full px-4 py-2 text-white bg-gray-400 rounded-lg focus:outline-none'></textarea>
                </div>
                <div className='justify-center flex '>
                <button className=' bg-cyan-950 text-white border-2 px-6 py-2  focus:outline-none hover:text-cyan-950 hover:bg-slate-100 rounded-full cursor-pointer'>Send Message</button>
                </div>

            </form>
            </section>
<<<<<<< HEAD
        </div>

              <div
              className='btn btn-ghost btn-circle absolute right-2 text-2xl text-cyan-950 hover:bg-cyan-950 hover:text-white'>
              <Link spy={true} smooth={true} to='/'><FaArrowUp /></Link>
            </div>
    </section>
    </>
=======

        </div>

    </section>
>>>>>>> 3539222141b829c3dfd55f4f77294870ca93b2b0
  )
}

export default Contact