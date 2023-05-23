import ilu from "@/assets/pictures/illustration.svg"
import CardComponent from "@/components/Card"

export default function BlogPage(){

    let list = []

    for(let i = 0; i < 20; i++){
        list.push( <CardComponent title={"Hello world"} link={"blogs"} picture={ilu} button={"Read more"} /> )
    }

    return(
        <>
            <main className="w-10/12 mx-auto" >
                <section className="flex gap-[10px] justify-center flex-wrap" >

                    { list }

                </section>
            </main>
        </>
    )
}