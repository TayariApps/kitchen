import { useRouter } from "next/router"
import React, { useEffect } from "react"

export default function Home() {

  const { push } = useRouter()

  // useEffect(() => {
  //   push('/home')
  // }, [])

  return (
    <div className='flex flex-row items-center justify-center w-full h-screen'>
    <div className='text-5xl font-bold'>
      Tayari
    </div>
  </div>
  )
}
