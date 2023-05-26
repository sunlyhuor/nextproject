import { getCookie, setCookie } from "cookies-next"
import { useRouter } from "next/router"
import { useEffect } from "react"

export default function LogoutPage(){
    const router =  useRouter()
    
    useEffect(()=>{

        if( !getCookie("logined") ){ 
           router.push("signin")
         }

        setCookie("logined" , false)

    } , [ getCookie("logined") ] )
    
    return(

        <main>
            <h1>Logout ...</h1>
        </main>

    )
}