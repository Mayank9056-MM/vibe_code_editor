import { Button } from '@/components/ui/button'
import UserButton from '@/modules/auth/components/user-button'
import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
      <Button className=''>Start</Button>
      <UserButton />
    </div>
  )
}

export default Home