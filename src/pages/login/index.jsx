import fbicon from "@/assets/icons/facebook-color-svgrepo-com.svg"
import githubicon from "@/assets/icons/github-142-svgrepo-com.svg"
import googleicon from "@/assets/icons/google-color-svgrepo-com.svg"
import formimage from "@/assets/pictures/illustration.svg"
import Image from "next/image"

export default function LoginPage(){
    return(
        <>
            <div className="flex min-[0px]:flex-col-reverse md:flex-row w-10/12 mx-auto my-[50px] ">

                <div className="drop-shadow-md bg-white rounded p-[20px] sm:w-6/12 min-[0px]:w-full " >
                    <h2 className="text-2xl font-bold mb-[5px]">Welcome back</h2>
                    <p className="text-sm text-gray-400 " >Start your website in seconds. Don’t have an account? <a className="text-blue-800 underline" href="#" >Sign up.</a></p>
                    
                    <form action="" className="my-[15px] mb-[15px] w-full " >

                        <div className="flex items-center min-[0px]:flex-col md:flex-row justify-between min-[0px]:20px md:gap-[30px] " >
                            <div className="relative z-0 min-[0px]:w-full md:w-6/12 mb-6 group">
                                <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                            </div>
                            <div className="relative z-0 min-[0px]:w-full md:w-6/12 mb-6 group">
                                <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                            </div>
                        </div>  

                    </form>

                    <div className="relative mb-[20px] w-full p-2 m-auto " >
                        <span className="absolute left-[49%] text-gray-400 top-[-15px] bg-white">Or</span>
                        <hr />
                    </div>

                    <div className="flex flex-col gap-[10px] min-[0px]:mb-[20px] sm:mb-[40px]" >
                        <button className="border rounded-[15px] min-[0px]:p-1 sm:p-2 hover:bg-gray-100 hover:duration-300 transition " >
                            <div className="flex items-center w-7/12 mx-auto gap-[10px] justify-center " >
                                <Image className="sm:w-10 sm:h-10 min-[0px]:h-5 min-[0px]:w-5 md:w-7 md:h-7 rounded-full" src={googleicon} alt="" />
                                <span className="md:text-base min-[0px]:text-xs" >Login With Google&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            </div>
                        </button>
                        {/*  */}
                        <button className="border rounded-[15px] min-[0px]:p-1 sm:p-2 hover:bg-gray-100 hover:duration-300 transition" >
                            <div className="flex items-center w-7/12 mx-auto gap-[10px] justify-center" >
                                <Image className="sm:w-10 sm:h-10 min-[0px]:h-5 min-[0px]:w-5 md:w-7 md:h-7 rounded-full" src={fbicon} alt="" />
                                <span className="md:text-base min-[0px]:text-xs" >Login With Facebook</span>
                            </div>
                        </button>
                        {/*  */}
                        <button className="border rounded-[15px] min-[0px]:p-1 sm:p-2 hover:bg-gray-100 hover:duration-300 transition" >
                            <div className="flex items-center w-7/12 mx-auto gap-[10px] justify-center" >
                                <Image className="sm:w-10 sm:h-10 min-[0px]:h-5 min-[0px]:w-5 md:w-7 md:h-7 rounded-full" src={githubicon} alt="" />
                                <span className="md:text-base min-[0px]:text-xs" >Login With GitHub&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            </div>
                        </button>
                        
                    </div>
                    <div>
                            <button className="w-full active:bg-yellow-300 bg-red-200 min-[0px]:p-2 min-[0px]:text-sm sm:text-base sm:p-2 rounded-[15px] bg-blue-500 text-white " >Sign in to your account</button>
                    </div>

                </div>
                <div className="min-[0px]:w-full sm:md:w-6/12 min-[0px]:justify-center  md:justify-left " >
                    <div  >
                        <Image src={formimage} alt="Form Picture for Sun Lyhuor website." />
                    </div>
                </div>

            </div>
        </>
    )
}