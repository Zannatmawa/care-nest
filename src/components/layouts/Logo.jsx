import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
    return (
        <Link href={"/"}>
            <Image className='w-auto h-auto' width={50} height={40} src={"/assets/logo.png"} alt='logo' />
            <h2 className='text-xl font-bold'>Care <span className='text-primary'>Nest</span></h2>
        </Link>
    )
}

export default Logo