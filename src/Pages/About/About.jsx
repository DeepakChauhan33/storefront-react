import React from 'react'

const About = () => {
  return (
    <>

      <section className='p-12'>
        <div className='w-1/2 space-y-8'>
          <h2 className='text-6xl font-bold'>
            Redefining fashion for the digital age.
          </h2>

          <div className='text-lg '>
            <p>
              We’re a young startup with a simple mission: to make style accessible, sustainable, and inspiring.
            </p>

            <p>
              Every piece we create is designed with care, blending modern minimalism with everyday comfort. We believe fashion should be authentic, effortless, and truly yours. No trends that fade in a week—just quality pieces that last.
            </p>
          </div>


          <div className='flex'>

            <div>
              <span>100%</span>
              <p>Sustainable Materials</p>
            </div>

            <div>
              <span>5k+</span>
              <p>Happy Customers</p>
            </div>


            <div>
              <span>2024</span>
              <p>Founded</p>
            </div>


          </div>
        </div>
      </section>

    </>
  )
}

export default About
