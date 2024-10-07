import Image from "next/image";

export default function NativeData() {
    return (
        <div className="lg:w-[80%] w-[80%] flex lg:flex-row flex-col items-center justify-center mx-auto pt-16 gap-12">
            <div className="basis-[60%] flex flex-col lg:gap-4 gap-2">
                <h1 className="lg:text-5xl text-3xl text-black-primary font-bold">Native Data</h1>
                <p className="lg:text-base text-sm">
                Builds and deployments are surfaced intuitively, empowering your team regardless of DevOps experience.
                </p>
                <div className="flex mt-4 gap-4">
                    <div className="flex flex-col gap-2">
                        <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="lg:w-6 w-5 lg:h-6 h-5 stroke-purple-600">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M6 21l15 -15l-3 -3l-15 15l3 3" />
                                <path d="M15 6l3 3" />
                                <path d="M9 3a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" />
                                <path d="M19 13a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" />
                            </svg>
                        </div>
                        <h1 className="lg:text-xl text-base text-black-primary font-bold tracking-tight">AI features</h1>
                        <p className="lg:text-base text-xs">
                        Start maximising your company results today
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="g:w-6 w-5 lg:h-6 h-5 stroke-purple-600">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M11 18.004h-4.343c-2.572 -.004 -4.657 -2.011 -4.657 -4.487c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99a3.468 3.468 0 0 1 3.307 2.444" />
                                <path d="M20 21l2 -2l-2 -2" />
                                <path d="M17 17l-2 2l2 2" />
                            </svg>
                        </div>
                        <h1 className="lg:text-xl text-base text-black-primary font-bold tracking-tight">Data cloud</h1>
                        <p className="lg:text-base text-xs">
                        Start speeding up all your workflows processes.
                        </p>
                    </div>
                </div>
            </div>
            <div className="basis-[40%]">
                <Image className="w-auto h-auto" src="/img/element-native-data.png" width={1000} height={1000} alt="image" quality={100}/>
            </div>
        </div>
    );
}