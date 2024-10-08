import Image from "next/image";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Brand from "./components/Brand";
import Features from "./components/Features";
import Secure from "./components/Secure";
import Compliant from "./components/Compliant";
import NativeData from "./components/NativeData";
import UsefulResource from "./components/UsefulResource";

export default function Home() {
    return (
        <main>
            <Navbar />
            <Jumbotron />
            <Brand />
            <Features />
            <Secure />
            <Compliant />
            <NativeData />
            <UsefulResource />
            <div className="w-full lg:min-h-[600px] min-h-[240px] relative lg:mt-16">
                <div className="lg:w-[50%] w-[70%] absolute lg:top-20 top-8 inset-x-0 flex flex-col text-center items-center mx-auto lg:gap-6 gap-4">
                    <h1 className="lg:text-5xl text-lg text-black-primary font-bold lg:leading-[56px] leading-5">Take your audience to the next level starting today</h1>
                    <button className='w-fit lg:text-sm text-xs font-medium bg-black-primary text-white-primary lg:px-6 px-5 lg:py-3 py-2 rounded-full'>Let&apos;s get started</button>
                </div>
                <Image className="w-full h-full absolute start-0 bottom-0 z-[-1]" src="/img/element-footer.png" width={1000} height={1000} alt="image" quality={100}/>
            </div>
        </main>
    );
}
