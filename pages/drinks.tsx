import React from 'react'
import DrinkListItem from '../components/drinks/DrinkListItem'

export default function Drinks() {
  return (
    <div className='h-screen w-full'>

            <div className='w-full py-5 text-center font-bold text-2xl shadow border-b'>
                Drinks
            </div>

            <div className='mt-10 flex flex-row justify-around gap-x-10 px-20'>

               <DrinkListItem status={1} orders={[]} />
               <DrinkListItem status={2} orders={[]} />
               <DrinkListItem status={3} orders={[]} />
               <DrinkListItem status={4} orders={[]} />

            </div>

        </div>
  )
}
