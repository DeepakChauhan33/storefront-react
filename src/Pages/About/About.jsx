import React from 'react'

const About = () => {
  return (
    <>

      <section className='flex flex-col-reverse lg:flex-row items-start gap-12 p-4 md:p-8 lg:p-12 max-w-7xl mx-auto'>


        <div className='w-full lg:w-1/2 lg:mt-10 xl:mt-20 space-y-8 md:space-y-11 lg:space-y-13'>
          <h2 className='text-4xl lg:text-5xl xl:text-6xl font-bold'>
            Redefining fashion for the digital age.
          </h2>

          <div className='text-md lg:text-lg space-y-5 text-gray-700 font-normal'>
            <p>
              We’re a young startup with a simple mission: to make style accessible, sustainable, and inspiring.
            </p>

            <p>
              Every piece we create is designed with care, blending modern minimalism with everyday comfort. We believe fashion should be authentic, effortless, and truly yours. No trends that fade in a week—just quality pieces that last.
            </p>
          </div>


          <div className='flex justify-between p-3 md:p-5 lg:px-8'>

            <div className='lg:gap-3'>
              <span className='text-xl sm:text-2xl lg:text-3xl font-bold'>100%</span>
              <p className='text-xs md:text-sm text-gray-600'>Sustainable Materials</p>
            </div>

            <div className='lg:gap-3'>
              <span className='text-xl sm:text-2xl lg:text-3xl font-bold'>100%</span>
              <p className='text-xs md:text-sm text-gray-600'>Happy Customers</p>
            </div>


            <div className='lg:gap-3'>
              <span className='text-xl sm:text-2xl lg:text-3xl font-bold'>2024</span>
              <p className='text-xs md:text-sm text-gray-600'>Founded</p>
            </div>


          </div>
        </div>




        {/* Image */}
        <div className='w-full lg:w-1/2 '>
          <img src="https://images.pexels.com/photos/3538028/pexels-photo-3538028.jpeg" alt="AboutUs" className='object-cover  h-1/2  md:h-180 lg:h-200 w-full rounded-lg shadow-lg' />
        </div>
      </section>

    </>
  )
}

export default About
