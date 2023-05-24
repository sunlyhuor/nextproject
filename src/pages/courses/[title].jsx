import { BackendLink } from "@/assets/components/components"
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"

export async function getServerSideProps({params}){
    const data = await fetch( BackendLink()+"/api/v1/course/"+params.title )
    const data_json =await data.json()

    return{
        props:{
            data:data_json
        }
    }

}

export default function CourseSignlepage({data}){

    console.log( data )

    return(
        <>
            <main>
                <Head>
                    <title>{data[0].title} Sun LyHuor</title>
                </Head>
                <section>
                    <aside>
                        <Image className="w-full" src={data[0].course_thumbnail} width={200} height={200} />
                    </aside>
                    <h1>{data[0].course_title}</h1>
                    <h1>{data[0].course_description}</h1>
                </section>
            </main>
        </>
    )
}