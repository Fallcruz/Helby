"use client"
import Image from "next/image";
import { useEffect } from 'react'
import anime from 'animejs/lib/anime.es.js';

export default function Features() {
    return (
        <div className="lg:w-[80%] w-[100%] flex flex-col justify-center mx-auto pt-16 gap-8">
            <div className="lg:w-[60%] w-[80%] flex flex-col text-center mx-auto gap-4">
                <h1 className="lg:text-5xl text-3xl text-black-primary font-bold">Our unique features</h1>
                <p className="lg:text-base text-sm">
                Powerful natural language processing capabilities, that can understand and respond to customer inquiries in real-time & improve customer satisfaction.
                </p>
            </div>
            <div className="w-full flex flex-row lg:flex-nowrap flex-wrap items-center justify-center mx-auto lg:gap-6 gap-3">
                <div className="lg:w-auto w-[180px] lg:min-h-[340px] min-h-[320px] flex flex-col justify-between bg-zinc-50/60 border-2 border-zinc-200/60 lg:p-4 p-3 lg:pt-6 pt-6 rounded-xl gap-3">
                    <div className="flex flex-col lg:gap-3 gap-4">
                        <h2 className="lg:text-xl text-lg font-bold lg:leading-[24px] leading-[20px]">Enterprise level super security grade</h2>
                        <p className="lg:text-sm text-sm">
                        Start maximising your company results today and speed up all your workflows processes.
                        </p>
                    </div>
                    <Image className="w-auto h-auto rounded-lg" src="/img/element-2.png" width={1000} height={1000} alt="image" quality={100}/>
                </div>
                <div className="lg:w-auto w-[180px] lg:min-h-[340px] min-h-[320px] flex flex-col justify-between bg-zinc-50/60 border-2 border-zinc-200/60 lg:p-4 p-3 lg:pt-6 pt-6 rounded-xl gap-3">
                    <div className="flex flex-col lg:gap-3 gap-4">
                        <h2 className="lg:text-xl text-lg font-bold lg:leading-[24px] leading-[20px]">No more clients complaints</h2>
                        <p className="lg:text-sm text-sm">
                        Start maximising your company results today and speed up all your workflows processes.
                        </p>
                    </div>
                    <Image className="w-auto h-auto rounded-lg" src="/img/element-3.png" width={1000} height={1000} alt="image" quality={100}/>
                </div>
                <div className="lg:w-auto w-[180px] lg:min-h-[340px] min-h-[320px] flex flex-col justify-between bg-zinc-50/60 border-2 border-zinc-200/60 lg:p-4 p-3 lg:pt-6 pt-6 rounded-xl gap-3">
                    <div className="flex flex-col lg:gap-3 gap-4">
                        <h2 className="lg:text-xl text-lg font-bold lg:leading-[24px] leading-[20px]">Language customization & data</h2>
                        <p className="lg:text-sm text-sm">
                        Start maximising your company results today and speed up all your workflows processes.
                        </p>
                    </div>
                    <Image className="w-auto h-auto rounded-lg" src="/img/element-4.png" width={1000} height={1000} alt="image" quality={100}/>
                </div>
                <div className="lg:w-auto w-[180px] lg:min-h-[340px] min-h-[320px] flex flex-col justify-between bg-zinc-50/60 border-2 border-zinc-200/60 lg:p-4 p-3 lg:pt-6 pt-6 rounded-xl gap-3">
                    <div className="flex flex-col lg:gap-3 gap-4">
                        <h2 className="lg:text-xl text-lg font-bold lg:leading-[24px] leading-[20px]">Database structure optimization</h2>
                        <p className="lg:text-sm text-sm">
                        Start maximising your company results today and speed up all your workflows processes.
                        </p>
                    </div>
                    <Image className="w-auto h-auto rounded-lg" src="/img/element-5.png" width={1000} height={1000} alt="image" quality={100}/>
                </div>
            </div>
        </div>
    );
}