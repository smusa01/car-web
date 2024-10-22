import React from 'react'

const cardsData=[
    {
        name:"Jabbar Khan RK",
        Image:"https://picsum.photos/200",
        description:"lorem ipsum dolor sit amet consectetus elite",
        aosDelay:"100",
    },
    {
        name:"Habib Shah KAKA",
        Image:"https://picsum.photos/201",
        description:"lorem ipsum dolor sit amet consectetus elite",
        aosDelay:"500",
    },
    {
        name:"M. Awais ChamanDa",
        Image:"https://picsum.photos/212",
        description:"lorem ipsum dolor sit amet consectetus elite",
        aosDelay:"800",
    },
]
const Testimonial = () => {
  return (
    <div className='dark:bg-black dark:text-white py-14 sm:pb-24 place-content-center'>
      <div className="container">
        {/* header */}
        <div className='space-y-4 pb-12'>
            <p
            data-aos='fade-up' className='text-3xl font-semibold text-center sm:text-4xl font-serif'>What's Our Clints Say About US</p>
            <p
            data-aos='fade-up'
             className='text-center sm:px-44'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur autem, sed non dolor corporis nesciunt. Nihil, eaque nesciunt.
            </p>
        </div>
        {/* card section  */}
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-8 text-black dark:text-white">
        {
             cardsData.map((data) => {
                return(
                    <div
                    data-aos='fade-up' data-aos-delay={data.aosDelay} key={data.name}
                    className='card text-center group space-y-3 sm:space-y-6 p-4 bg-gray-100 dark:bg-white sm:py-12 duration-300 rounded-lg text-black'>
                        <div className='grid place-items-center'>
                          <img src={data.Image} alt="" className='h-20 w-20 rounded-full'/>

                        </div>
                        <div className="text-2xl">⭐⭐⭐⭐⭐</div>
                        <p>
                          {data.description}
                        </p>
                        <p className="font-bold text-center">
                          {data.name}
                        </p>
                    </div>
                )
    
            })
        }
        </div>
      </div>
    </div>
  )
}

export default Testimonial;
