import course_style from  "@/styles/course.module.css"
import Link from "next/link"

export default function CoursePage(){

    return(
        <>
            <main className="w-10/12 mx-auto" >
                <section className="flex gap-[10px] justify-center flex-wrap" >
                    
                    <aside className="max-w-sm bg-white sm:md:w-6/12 md:w-[48%] lg:w-3/12 xl:w-[24%] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <Link href="#">
                            <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                        </Link>
                        <div className="p-5">
                            <Link href="#">
                                <h5 className="mb-2 lg:text-sm xl:text-xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                            </Link>
                            <Link href="#" >
                                    <button className={course_style.button} ><span>See more</span><i></i></button>
                            </Link>
                        </div>
                    </aside>

                    <aside className="max-w-sm bg-white sm:md:w-6/12 md:w-[48%] lg:w-3/12 xl:w-[24%] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <Link href="#">
                            <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                        </Link>
                        <div className="p-5">
                            <Link href="#">
                                <h5 className="mb-2 lg:text-sm xl:text-xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                            </Link>
                            <Link href="#" >
                                    <button className={course_style.button} ><span>See more</span><i></i></button>
                            </Link>
                        </div>
                    </aside>


                    <aside className="max-w-sm bg-white sm:md:w-6/12 md:w-[48%] lg:w-3/12 xl:w-[24%] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <Link href="#">
                            <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                        </Link>
                        <div className="p-5">
                            <Link href="#">
                                <h5 className="mb-2 lg:text-sm xl:text-xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                            </Link>
                            <Link href="#" >
                                    <button className={course_style.button} ><span>See more</span><i></i></button>
                            </Link>
                        </div>
                    </aside>

                    <aside className="max-w-sm bg-white sm:md:w-6/12 md:w-[48%] lg:w-3/12 xl:w-[24%] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <Link href="#">
                            <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                        </Link>
                        <div className="p-5">
                            <Link href="#">
                                <h5 className="mb-2 lg:text-sm xl:text-xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                            </Link>
                            <Link href="#" >
                                    <button className={course_style.button} ><span>See more</span><i></i></button>
                            </Link>
                        </div>
                    </aside>

                </section>
            </main>
        </>
    )
}