import Link from "next/link"
import course_style from "@/styles/course.module.css"
import Image from "next/image"

export default function CardComponent({ title , picture , link , button , discount , price , date }){
    const sybol = " > "
    return(
        <>
            <aside className="hover:scale-[1.01] relative hover:duration-300 max-w-sm bg-white min-[0px]:w-full sm:md:w-6/12 md:w-[48%] lg:w-3/12 xl:w-[24%] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <Link className="w-[250px] h-[140px] block w-full overflow-hidden" href={link}>
                        <Image width={200} height={200}  className="rounded object-auto w-full h-[140px] hover:scale-110 hover:duration-300" src={picture} alt="Error" />
                    </Link>
                    <div className="p-5">
                        <Link href={link}>
                            <h5 className={`lg:text-sm xl:text-xl font-bold tracking-tight text-gray-900 dark:text-white hover:underline hover:duration-300 ${course_style.title} ` }>{ title }</h5>
                        </Link>
                        <div>
                            <span>
                                {price? ( new Date() < date ? <del>{price}</del> : price ) :""} { (new Date() < date) ? sybol : "" } { (new Date() < date) ? price - ( discount * price /100 )+"$" : "" }
                            </span>
                            <span className="absolute top-[0px] right-[-10px] bg-red-600 text-white rotate-45 text-sm px-[20px] z-[25]">
                                {
                                    (new Date() < date) ? <span>{discount}%</span> : <span></span>
                                }
                            </span>
                        </div>
                        <Link href={link} >
                                <button className={course_style.button} ><span>{button}</span><i></i></button>
                        </Link>
                    </div>
            </aside>
        </>
    )
}