import Head from "next/head"
import Link from "next/link"
import navIconOpen from "@/assets/icons/more-svgrepo-com.svg"
import navIconClose from "@/assets/icons/more-svgrepo-com (1).svg"
import Image from "next/image"
import { useState } from "react"

export default function HeaderComponent(){
    let [ Hamberger , setHamberger ] = useState(false)
    return(
        <>
            <header className="relative" >
                <section className="w-full text-center">
                    <Link href={"/"}><h1 className="text-center font-bold text-[25px] hover:underline inline cursor-pointer active:text-yellow-200" >Hour Class</h1></Link>
                </section>

                <div>
                    <div className="absolute top-[0px] right-[20px]" >
                        <button onClick={()=> setHamberger(!Hamberger) } >
                            {
                                Hamberger?(
                                    <Image src={navIconClose} className="w-[40px] p-0 active:bg-yellow-200" />
                                    ):(
                                    <Image src={navIconOpen} className="w-[50px] p-0 active:bg-yellow-200" />
                                )
                            }
                        </button>
                    </div>
                    <nav className={`z-10 absolute top-[50px] right-[20px]  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 ${Hamberger ? "block":"hidden"} `}>
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                            <li><Link className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/">Home</Link></li>
                            <li><Link className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/" >About</Link></li>
                            <li><Link className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/signup">Sign Up</Link></li>
                            <li><Link className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/signin">Sign In</Link></li>
                            <li><Link className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/">Log Out</Link></li>
                        </ul>
                    </nav>
                </div>

            </header>
        </>
    ) 
}