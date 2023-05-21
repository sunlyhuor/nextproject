import fbicon from "@/assets/icons/facebook-color-svgrepo-com.svg"
import githubicon from "@/assets/icons/github-142-svgrepo-com.svg"
import googleicon from "@/assets/icons/google-color-svgrepo-com.svg"
import formimage from "@/assets/pictures/illustration.svg"
import Image from "next/image"
import AlertComponent from "@/components/Alert"
import { useEffect, useState } from "react"
import { validateEmail } from "@/assets/components/components"
import Head from "next/head"
import Link from "next/link"

export default function SigninPage(){

    let [ Alert , setAlert ] = useState(false)
    let [Message , setMessage] = useState(null)
    let [ Email , setEmail ] = useState(null)
    let [Password , setPassword] = useState("")

    
    function handleInputEmail(e){
        setEmail( e.target.value )
    }

    function handleInputPassword(e){
        setPassword( e.target.value )
    }
    
    function handleEnter(e){

        if( e.key == "Enter"){
                handleSubmit()
        }

    }

    function handleSubmit(){
        if( Password == "" || Email == "" ){
            setAlert(true)
            setMessage("All fields are required!")
        }
        else if( !validateEmail( Email ) ){
            setAlert(true)
            setMessage("Email should like? example@test.com")
        }
        else{
            setAlert(true)
            setMessage("Signin successfully")
        }
    }

    return(
        <>
            <main>
                <Head>
                    <title>Sign In Page Sun LyHuor</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </Head>
                <AlertComponent alert={ Alert } message={Message} changeAlert={ ()=> setAlert( false )  } />
                <div className="flex min-[0px]:flex-col-reverse md:flex-row w-10/12 mx-auto my-[50px] ">
                    
                    <div className="min-[0px]:w-full md:w-6/12 mx-auto" >
                        <div className="drop-shadow-md bg-white rounded px-[20px] py-[30px] w-full min-[0px]:w-full " >
                            <h2 className="text-2xl font-bold mb-[5px]">Welcome back</h2>
                            <p className="text-sm text-gray-400 " >Start your website in seconds. Don’t have an account? <Link className="text-blue-800 underline" href="/signup" >Sign up.</Link></p>
                            
                            <form action="" className="my-[15px] mb-[15px] w-full " >

                                <div className="flex items-center min-[0px]:flex-col md:flex-row justify-between min-[0px]:20px md:gap-[30px] " >
                                    <div className="relative z-0 min-[0px]:w-full md:w-6/12 mb-6 group">
                                        <input onChange={ handleInputEmail  } onKeyDown={ handleEnter } type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                                    </div>
                                    <div className="relative z-0 min-[0px]:w-full md:w-6/12 mb-6 group">
                                        <input onChange={ handleInputPassword } onKeyDown={ handleEnter } type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                                    </div>
                                </div>  

                            </form>

                            <div className="relative mb-[20px] w-full p-2 m-auto " >
                                <span className="absolute left-[49%] text-gray-400 top-[-15px] bg-white">Or</span>
                                <hr />
                            </div>

                            <div className="flex flex-col gap-[10px] min-[0px]:mb-[20px] sm:mb-[40px]" >
                                <button className="border rounded-[15px] min-[0px]:p-1 sm:p-2 hover:bg-gray-100 hover:duration-300 transition " >
                                    <div className="flex items-center w-7/12 mx-auto min-[0px]:gap-[15px] sm:gap-[10px] justify-center " >
                                        <Image className="sm:w-10 sm:h-10 min-[0px]:h-5 min-[0px]:w-5 md:w-7 md:h-7 rounded-full" src={googleicon} alt="" />
                                        <span className="md:text-[12px] lg:text-base min-[0px]:text-xs" >Login With Google&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                    </div>
                                </button>
                                {/*  */}
                                <button className="border rounded-[15px] min-[0px]:p-1 sm:p-2 hover:bg-gray-100 hover:duration-300 transition" >
                                    <div className="flex items-center w-7/12 mx-auto min-[0px]:gap-[15px] sm:gap-[10px] justify-center" >
                                        <Image className="sm:w-10 sm:h-10 min-[0px]:h-5 min-[0px]:w-5 md:w-7 md:h-7 rounded-full" src={fbicon} alt="" />
                                        <span className="md:text-[12px] lg:text-base min-[0px]:text-xs" >Login With Facebook</span>
                                    </div>
                                </button>
                                {/*  */}
                                <button className="border rounded-[15px] min-[0px]:p-1 sm:p-2 hover:bg-gray-100 hover:duration-300 transition" >
                                    <div className="flex items-center w-7/12 mx-auto min-[0px]:gap-[15px] sm:gap-[10px] justify-center" >
                                        <Image className="sm:w-10 sm:h-10 min-[0px]:h-5 min-[0px]:w-5 md:w-7 md:h-7 rounded-full" src={githubicon} alt="" />
                                        <span className="md:text-[12px] lg:text-base min-[0px]:text-xs" >Login With GitHub&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                    </div>
                                </button>
                                
                            </div>
                            <div>
                                <button onClick={ handleSubmit } className="w-full active:bg-yellow-300 min-[0px]:p-2 min-[0px]:text-sm sm:text-base sm:p-2 rounded-[15px] bg-blue-500 text-white mb-[20px] " >Sign in to your account</button>
                            </div>

                        </div>
                    </div>
                    <div className="min-[0px]:w-full md:w-6/12 min-[0px]:justify-center  md:justify-left " >
                        <div  >
                            <Image src={formimage} alt="Form Picture for Sun Lyhuor website." />
                        </div>
                    </div>

                </div>
            </main>
        </>
    )
}