import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
import { useState } from 'react';

export default function ContactUs() {

  const[name , setName] = useState()
  const[isSubmitted , setIsSubmitted] = useState(false)

  function handleSubmit (){
    setIsSubmitted(true)
  }

  return (
    <div>
      <div className='my-12'>

      <h1 className='text-3xl uppercase font-semibold mb-4' >Contact <span className='text-orange-600'>Us</span> </h1>


<p className='text-lg text-left '>Lorem ipsum Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit quam, cumque ea magni voluptas blanditiis ipsam qui odit cupiditate optio ullam officia aliquam, nisi dolores ab at dolorem provident alias distinctio pariatur! Laudantium molestiae voluptas blanditiis, quibusdam maiores voluptatem adipisci quisquam labore quidem odio possimus libero unde expedita dolores perspiciatis autem atque reprehenderit accusamus praesentium. Fugit dicta culpa dignissimos accusamus quasi alias sit autem debitis doloremque corporis inventore at quo, recusandae ullam, aliquid sed exercitationem tempore vero possimus, itaque sapiente. dolor sit, amet consectetur adipisicing elit. Quibusdam odio commodi consectetur exercitationem nostrum?</p>
      </div>

     { isSubmitted ? <div> 
                          <h1 className='text-3xl font-semibold'><span className='text-orange-600 uppercase'>{name}</span> , Thanks For Submitting Form.</h1>
                          <p className='text-xl font-semibold'> We will soon Get in touch with You.</p>
                     </div>
                   :
              <form  className=' flex flex-col justify-center  items-center' onSubmit={handleSubmit} >

      <div className='border rounded-xl border-orange-600 p-8'>

        <div>
          <h1 className='text-3xl font-semibold uppercase'> Get In Touch</h1>
        </div>

        <div className='flex gap-5 w-full my-12 items-center justify-center '>


          <div className=''>
            <label htmlFor="name" className='text-xl float-left mr-4'>Full Name:</label>
            <TextField 
                        id="filled-basic"
                        label="Full Name" 
                        type='text'
                        variant="filled"
                        onChange={(e)=> setName(e.target.value)}
                        required
                        className='bg-white rounded-lg w-full ' />

                        {console.log(name)
                        }
                        
          </div>
          <div className=''>
            <label htmlFor="name" className='text-xl float-left mr-4'>Email:</label>
            <TextField 
                        id="filled-basic"
                        label="Email" 
                        type='email'
                        variant="filled"
                        required
                        className='bg-white rounded-lg w-full' />
          </div>
        </div>
        <div className='w-full  mb-12 '>
          <label htmlFor="website" className='text-xl float-left mr-4'>Your Webpage Link: </label>
        <TextField 
                        id="filled-basic"
                        label="https://" 
                        variant="filled"
                        
                        required
                        className='bg-white rounded-lg w-full' />
        </div>
        <div className='w-full  mb-8 '>
          <label htmlFor="website" className='text-xl float-left mr-4'>Message: </label>
        <textarea 
                        id="filled-basic"
                        label="About your self" 
                        // variant="filled"
                        rows={6}
                        placeholder='About your self'
                        className='bg-white rounded-lg w-full p-3  text-black' />
        </div>

        <div className=''>

        <button className='hover:bg-sky-600 border border-white px-6 py-2 rounded-lg  transition-colors' >Submit</button>
        </div>

       
          
        </div>


      </form> }





    </div>
  )
}
