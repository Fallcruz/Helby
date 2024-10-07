import Image from "next/image";

export default function Secure() {
    return (
        <div className="lg:w-[80%] w-[80%] flex lg:flex-row flex-col items-center justify-center mx-auto pt-16 gap-12">
            <div className="basis-[60%] flex flex-col lg:gap-4 gap-2">
                <h1 className="lg:text-5xl text-3xl text-black-primary font-bold">Secure</h1>
                <p className="lg:text-base text-sm">
                    Configure your infrastructure in your own cloud, using best practices, automatically and get the best insights from our internal database.
                </p>
                <div className="flex mt-4 gap-4">
                    <div className="flex flex-col gap-2">
                        <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="lg:w-6 w-5 lg:h-6 h-5 stroke-purple-600">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 13a3 3 0 1 0 0 -6a3 3 0 0 0 0 6z" />
                                <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
                                <path d="M6 20.05v-.05a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v.05" />
                            </svg>
                        </div>
                        <h1 className="lg:text-xl text-base text-black-primary font-bold tracking-tight">Create an account</h1>
                        <p className="lg:text-base text-xs">
                        Create your company account to start using all features
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="lg:w-6 w-5 lg:h-6 h-5 stroke-purple-600">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                                <path d="M6 4v4" />
                                <path d="M6 12v8" />
                                <path d="M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                                <path d="M12 4v10" />
                                <path d="M12 18v2" />
                                <path d="M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                                <path d="M18 4v1" />
                                <path d="M18 9v11" />
                            </svg>
                        </div>
                        <h1 className="lg:text-xl text-base text-black-primary font-bold tracking-tight">Set up company</h1>
                        <p className="lg:text-base text-xs">
                        Start speeding up all your workflows processes.
                        </p>
                    </div>
                </div>
            </div>
            <div className="basis-[40%]">
                <Image className="w-auto h-auto" src="/img/element-secure.png" width={1000} height={1000} alt="image" quality={100}/>
            </div>
        </div>
    );
}