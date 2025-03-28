"use client";
import Link from 'next/link'
import { useRouter } from 'next/navigation'


export default function Aboutpage() {
    const router= useRouter();
    const isLoggedIn = false;
    const handleNavigation = () => {
        if(isLoggedIn){
            router.push("/about/address")
        }
        else{
            router.push("/")
        }

    }
  return (
    <div>
      <p className='test-3xl'>About US</p>
      <p><Link href="/about/address">Address page</Link></p>
      <button onClick={handleNavigation}>Button Address page</button>
    </div>
  )
}
