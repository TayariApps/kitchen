import axios from 'axios'
import React, { useEffect, useState } from 'react'
import KitchenList from '../components/kitchen/KitchenList'

export default function Kitchen() {

    const [orders, setOrders] = useState<any[]>([])

    useEffect(() => {

        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/kitchenorders/${localStorage.getItem('placeid')}`)
            .then(res => {
                setOrders(res.data)
                console.log(res.data);

            })
            .catch(err => console.log(err.response.data))

    }, [])

    return (
        <div className='h-screen w-full'>

            <div className='w-full py-5 text-center font-bold text-2xl shadow border-b'>
                Kitchen
            </div>

            <div className='mt-10 flex flex-row justify-around gap-x-10 px-20'>

                <KitchenList status={1} orders={orders.filter(o => o.status == 1)} />
                <KitchenList status={2} orders={orders.filter(o => o.status == 2)} />
                <KitchenList status={3} orders={orders.filter(o => o.status == 3)} />
                <KitchenList status={4} orders={orders.filter(o => o.status == 4)} />

            </div>

        </div>
    )
}
