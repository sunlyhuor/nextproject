import course_style from  "@/styles/course.module.css"
import Link from "next/link"
import Image from "next/image"
import ilu from "@/assets/pictures/illustration.svg"
import CardComponent from "@/components/Card"

export default function CoursePage(){

    return(
        <>
            <main className="w-10/12 mx-auto" >
                <section className="flex gap-[10px] justify-center flex-wrap" >
                    
                    <CardComponent title={"hsdhasjdhjasd"} picture={ilu} button={"see more"} />


                </section>
            </main>
        </>
    )
}