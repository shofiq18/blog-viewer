import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from 'next/link'
import React from 'react'

const Navbar = async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    return (
        <nav className='flex justify-between items-center b my-6'>
            <div>
                <h1>Blog</h1>
            </div>
            <ul className='flex gap-10'>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/profile">Profile</Link></li>

            </ul>
            {user? (
                <>
                    <Link href="/api/auth/logout">logout</Link>
                    
                </>
            ):
            (
                <>
                    <Link href="/api/auth/login">login</Link>
                </>
            )
            
            }
        </nav>
    )
}

export default Navbar;