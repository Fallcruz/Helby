import Image from "next/image";

export default function UsefulResource() {
    const listResources = [
        {
            title: "5 Great Web Design Resources",
            description: "Est placeat perspicia",
            image: "/img/useful-1.png",
            author: "Orlando Diggs",
            time: "March 28, 2023",
            category: "Analytics"
        },
        {
            title: "10 Great Examples of Responsive Websites",
            description: "Et odit soluta sint temporibus quia dolorem...",
            image: "/img/useful-2.png",
            author: "Mike Dean",
            time: "March 28, 2023",
            category: "Marketing"
        },
        {
            title: "5 Principles Of Effective Web Design",
            description: "Sapiente amet molestias cum fugiat qui...",
            image: "/img/useful-3.png",
            author: "Anna Provi",
            time: "March 28, 2023",
            category: "Business"
        },
    ]
    return (
        <div className="lg:w-[80%] w-[100%] flex flex-col justify-center mx-auto pt-16 pb-12 gap-8">
            <div className="lg:w-[60%] w-[80%] flex flex-col text-center mx-auto gap-4">
                <h1 className="lg:text-5xl text-3xl text-black-primary font-bold">Useful resources</h1>
                <p className="lg:text-base text-sm">
                Discover our useful resources and read articles on different categories
                </p>
            </div>
            <div className="w-full flex flex-row lg:flex-wrap flex-wrap items-center justify-center mx-auto lg:gap-3 gap-3">
                {listResources.map((data, index) => {
                    return (
                        <div className="lg:w-[360px] w-[80%] flex flex-col bg-zinc-50/60 border-2 border-zinc-200/60 rounded-xl" key={index}>
                            <Image className="w-auto h-auto rounded-t-lg" src={data.image} width={1000} height={1000} alt="image" quality={100}/>
                            <div className="lg:min-h-[240px] min-h-[220px] flex flex-col justify-between p-4">
                                <div className="flex flex-col lg:gap-2 gap-1">
                                    <button className='w-fit lg:text-xs text-xs font-medium bg-zinc-200 text-black-primary lg:px-2 px-2 lg:py-1 py-1 mb-2 rounded-full cursor-default'>{data.category}</button>
                                    <h2 className="lg:text-xl text-lg font-bold lg:leading-[24px] leading-[20px]">{data.title}</h2>
                                    <p className="lg:text-base text-sm font-medium">{data.description}</p>
                                </div>
                                <div className="flex items-center lg:mt-0 mt-2 gap-3">
                                    <div>
                                        <Image className="lg:w-12 w-12 lg:h-12 h-12" src="/img/people-1.png" width={1000} height={1000} alt="image" quality={100} />
                                    </div>
                                    <div className="flex flex-col gap-0">
                                        <p className="lg:text-sm text-xs font-medium">{data.author}</p>
                                        <p className="lg:text-sm text-xs text-zinc-600">{data.time}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}