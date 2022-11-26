import Link from 'next/link'
import React from 'react'

export default function Home() {
    return (
        <div className='h-screen w-full'>
            <div className='container'>

                <div className='flex flex-row justify-center items-center pt-32 w-full gap-x-20'>

                    <Link href="/kitchen">
                    <div className='bg-sky-500 text-white px-10 py-5 text-3xl rounded'>
                        Kitchen
                    </div>
                    </Link>

                    <Link href="/drinks">
                    <div className='bg-red-500 text-white px-10 py-5 text-3xl rounded'>
                        Drinks
                    </div>
                    </Link>

                </div>

            </div>
        </div>
    )
}
