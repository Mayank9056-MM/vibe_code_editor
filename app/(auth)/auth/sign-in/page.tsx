"use client"
import SignInFormClient from '@/modules/auth/components/sign-in-form-client'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <>
    <Image src="/login.svg" alt='login-image' height={200} width={200} className='m-6 object-cover'/>
    <SignInFormClient />
    </>
  )
}

export default page