import Link from "next/link"
import course_style from "@/styles/course.module.css"
import Image from "next/image"

export default function CardComponent({ title , picture , link , button }){
    return(
        <>
            <aside className="hover:scale-[1.08] hover:duration-300 max-w-sm bg-white sm:md:w-6/12 md:w-[48%] lg:w-3/12 xl:w-[24%] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <Link className="w-[250px] h-[140px] block w-full overflow-hidden" href="#">
                        <Image className="rounded w-[250px] h-[140px] hover:scale-110 hover:duration-300" src={picture} alt="Error" />
                    </Link>
                    <div className="p-5">
                        <Link href="#">
                            <h5 className="mb-3 lg:text-sm xl:text-xl font-bold tracking-tight text-gray-900 dark:text-white hover:underline hover:duration-300">{ title }</h5>
                        </Link>
                        <Link href="#" >
                                <button className={course_style.button} ><span>{button}</span><i></i></button>
                        </Link>
                    </div>
            </aside>
        </>
    )
}