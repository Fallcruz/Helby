import Image from "next/image";

export default function Compliant() {
    return (
        <div className="lg:w-[80%] w-[80%] flex lg:flex-row flex-col-reverse items-center justify-center mx-auto pt-16 gap-12">
            <div className="basis-[40%]">
                <Image className="w-auto h-auto" src="/img/element-compliant.png" width={1000} height={1000} alt="image" quality={100}/>
            </div>
            <div className="basis-[60%] flex flex-col lg:gap-4 gap-2">
                <h1 className="lg:text-5xl text-3xl text-black-primary font-bold">Compliant</h1>
                <p className="lg:text-base text-sm">
                Get an audit trail of your SDLC from requirements, to development, to testing & deployment.
                </p>
                <div className="flex mt-4 gap-4">
                    <div className="flex flex-col gap-2">
                        <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="lg:w-6 w-5 lg:h-6 h-5 stroke-purple-600">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0" />
                                <path d="M4 6v6a8 3 0 0 0 16 0v-6" />
                                <path d="M4 12v6a8 3 0 0 0 16 0v-6" />
                            </svg>
                        </div>
                        <h1 className="lg:text-xl text-base text-black-primary font-bold tracking-tight">Database structure</h1>
                        <p className="lg:text-base text-xs">
                        Start maximising your company results today
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="ilg:w-6 w-5 lg:h-6 h-5 stroke-purple-600">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M6 5h12l3 5l-8.5 9.5a.7 .7 0 0 1 -1 0l-8.5 -9.5l3 -5" />
                                <path d="M10 12l-2 -2.2l.6 -1" />
                            </svg>
                        </div>
                        <h1 className="lg:text-xl text-base text-black-primary font-bold tracking-tight">Unique features</h1>
                        <p className="lg:text-base text-xs">
                        Start speeding up all your workflows processes.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}