import React from 'react'
import KitchenList from '../components/kitchen/KitchenList'

export default function Kitchen() {
    return (
        <div className='h-screen w-full'>

            <div className='w-full py-5 text-center font-bold text-2xl shadow border-b'>
                Kitchen
            </div>

            <div className='mt-10 flex flex-row justify-around gap-x-10 px-20'>

               <KitchenList status={1} orders={[]} />
               <KitchenList status={2} orders={[]} />
               <KitchenList status={3} orders={[]} />
               <KitchenList status={4} orders={[]} />

            </div>

        </div>
    )
}
