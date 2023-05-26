import course_style from  "@/styles/course.module.css"
import Link from "next/link"
import Image from "next/image"
import ilu from "@/assets/pictures/illustration.svg"
import CardComponent from "@/components/Card"
import html_css from "@/assets/pictures/html_css.jpg"
import Head from "next/head"
import { BackendLink } from "@/assets/components/components"

export async function getServerSideProps(){

    const datas = await fetch(BackendLink()+"/api/v1/course")
    const datas_json = await datas.json()
    return {
        props : {
             datas : datas_json
        }
    }
    


}

export default function CoursePage( { datas } ){

    return(
        <>
            <main className="w-10/12 mx-auto" >
                <Head>
                    <title>Course Page Sun LyHuor</title>
                </Head>
                <section className="flex gap-[10px] justify-center flex-wrap" >
                    
                    { 
                        datas.responses ? datas.responses.map(( d , k )=>{
                            return(
                                <CardComponent button={"See more"} key={k} title={ d.course_title } price={d.course_price} picture={d.course_thumbnail} link={"/courses/"+d.course_title} discount={d.course_discount} date={new Date( d.course_discount_date )} />
                            )
                        }) :<h1>{ datas.message }</h1>
                    }

                </section>
            </main>
        </>
    )
}