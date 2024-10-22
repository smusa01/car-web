import React from 'react'

const Contact = () => {
  return (
    <div className='dark:bg-black dark:text-white pb-6 pt-6 '>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 bg-gray-800 py-8 px-6 items-center ">
            <div className='col-span-2 space-y-3 '>
                <h1 className='text-4xl text-white sm:text-5xl font-bold  font-serif '>
                    Let's Colabarate on your upcoming car rental venture
                </h1>
                <p className='text-gray-400'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Voluptatibus quibusdam expedita quos alias, perspiciatis 
                    
                </p>
            </div>
            <div className='grid place-items-center'>
                <a href="#" className='inline-block font-semibold py-2 px-6 bg-primary text-white rounded-lg tracking-wider hover:bg-primary/80 '>CONTACT</a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
