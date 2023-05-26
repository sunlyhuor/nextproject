import Head from "next/head"
import Link from "next/link"
import navIconOpen from "@/assets/icons/more-svgrepo-com.svg"
import navIconClose from "@/assets/icons/more-svgrepo-com (1).svg"
import Image from "next/image"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faBurger , faXmark } from "@fortawesome/free-solid-svg-icons"
import { useRouter } from "next/router"
import { getCookie , hasCookie } from "cookies-next"
import SignInAndSignUpAndSignOut from "./SignInAndSignUpAndSignOutComponent"

export default function HeaderComponent(){
    let [ Hamberger , setHamberger ] = useState(false)
    let router = useRouter()

    

    return(
        <>
            <header className="relative" >
                <section className="w-full text-center min-[0px]:mb-[15px] sm:mb-[20px]">
                    <Link href={"/"}><h1 className="text-center font-bold text-[25px] hover:underline inline cursor-pointer active:text-yellow-200" >Hour Class</h1></Link>
                </section>

                <div>
                    <div className="absolute top-[5px] right-[20px]" >
                        <button onClick={()=> setHamberger(!Hamberger) } >
                            {
                                Hamberger?(
                                    <FontAwesomeIcon className="text-[25px]" icon={faXmark} />
                                    ):(
                                    <FontAwesomeIcon className="text-[25px]" icon={faBurger} />
                                )
                            }
                        </button>
                    </div>
                    <nav className={`z-10 absolute top-[50px] right-[20px]  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 ${Hamberger ? "block":"hidden"} `}>
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                            <li><Link className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${(router.asPath == "/") ? "bg-gray-200 rounded" : "" } `} href="/">Home</Link></li>
                            <li><Link className={ `block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${(router.asPath == "/about") ? "bg-gray-200 rounded" : "" } ` } href="/about" >About</Link></li>
                            <li><Link className={ `block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${(router.asPath == "/courses") ? "bg-gray-200 rounded" : "" }` } href="/courses" >Courses</Link></li>
                            <li><Link className={ `block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${(router.asPath == "/blogs") ? "bg-gray-200 rounded" : "" }` } href="/blogs" >Blogs</Link></li>
                            <li><Link className={ `block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${(router.asPath == "/plans") ? "bg-gray-200 rounded" : "" }` } href="/plans" >Plans</Link></li>
                            {/* <li><Link className={ `block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${(router.asPath == "/signup") ? "bg-gray-200 rounded" : "" }` } href="/signup">Sign Up</Link></li>
                            <li><Link className={ `block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${((router.asPath == "/signin") ? "bg-gray-200 rounded" : "" ) } ` } href="/signin">Sign In</Link></li>
                            <li><Link className={ `block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white` } href="/logout">Log Out</Link></li> */}
                            <SignInAndSignUpAndSignOut />
                        </ul>
                    </nav>
                </div>

            </header>
        </>
    ) 
}