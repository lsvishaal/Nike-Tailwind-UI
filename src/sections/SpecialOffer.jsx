import React from 'react'
import { offer } from '../assets/images'
import Button from '../Components/button'
import { arrowRight } from '../assets/icons'

const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className="flex-1">
        <img src={offer} width={773} height={687} className='objct-contain w-full'></img>
      </div>

      <div className="flex flex-1 flex-col">
      
        <h2 className="mt-10 font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
          <span className='text-coral-red'> Special </span>
          Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>Navigate a realm of possibilities designed to fulfull your unique desires, suprassing the loftiest expectations. Your journey with us is nothing short of exceptional</p>

        <div className="mt-11 flex flex-wrap gap-4">
        <Button label="View Details"/>
        <Button label="Learn More" backgroundColor="bg-white" borderColor = "Border-slate-gray" textColor="text-slate-gray" />
        </div>
      </div>

    </section>
  )
}

export default SpecialOffer
