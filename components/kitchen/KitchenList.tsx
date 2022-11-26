import React, { useEffect, useState } from 'react'

export default function KitchenList({
    status, orders
}: {
    status: number, orders: []
}) {

    const [bgColor, setBgColor] = useState('')
    const [itemname, setItemName] = useState('')
    const [show, setShow] = useState<boolean>(false)

    useEffect(() => {

        switch (status) {
            case 1:
                setItemName('New Order')
                setBgColor('bg-red-500')
                break;

            case 2:
                setItemName('Processing')
                setBgColor('bg-green-500')
                break;

            case 3:
                setItemName('Ready')
                setBgColor('bg-sky-400')
                break;

            case 4:
                setItemName('Completed')
                setBgColor('bg-sky-800')
                break;

            default:
                setItemName('New Order')
                setBgColor('bg-red-500')
                break;
        }

    }, [])

    const displayOrders = () => {
        if (orders.length > 0 || show == false) {
            setShow(!show)
        }
    }

    return (
        <div className='flex flex-col w-3/5'>
            <div className={`flex flex-row justify-between cursor-pointer rounded px-4 ${bgColor} text-white items-center`}>
                {itemname}

                <div className='bg-sky-900 p-3 m-4 rounded-full font-bold'>
                    {orders.length}
                </div>
            </div>

            {
                orders.length > 0 &&
                <div className='w-full'>
                    <div className='w-full'>
                        content
                    </div>
                </div>
            }
        </div>
    )
}
