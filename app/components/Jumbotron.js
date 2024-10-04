import Image from 'next/image'
import Link from 'next/link'

export default function Jumbotron() {
    return (
        <div className="w-full relative">
            <Image className="lg:w-[42%] w-full h-auto absolute end-0 bottom-0 z-[-1]" src="/img/element-1.png" width={1000} height={1000} alt="image" quality={100}/>
            <div className="lg:w-[100%] w-[80%] min-h-[550px] flex lg:flex-row flex-col items-center justify-between mx-auto lg:mt-0 py-10 gap-12">
                <div className="basis-[40%] flex flex-col lg:ms-24 lg:gap-6 gap-5">
                    <h1 className="lg:text-[52px] text-3xl font-bold lg:leading-[60px]">Simplify your customer acquisition process</h1>
                    <p className="lg:text-base text-sm font-normal">
                    Powerful natural language processing capabilities, that can understand and respond to customer inquiries in real-time & improve customer satisfaction.
                    </p>
                    <div className="flex flex-row items-center lg:gap-4 gap-2">
                        <button className='w-fit lg:text-sm text-xs font-medium bg-black-primary text-white-primary lg:px-6 px-5 lg:py-3 py-2 rounded-full'>Get started free</button>
                        <button className='w-fit lg:text-sm text-xs font-medium bg-white-primary text-black-primary lg:px-6 px-5 lg:py-3 py-2 border border-black-primary rounded-full'>Book a demo</button>
                    </div>
                    <div className="flex items-center lg:mt-0 mt-2 gap-3">
                        <div>
                            <Image className="lg:w-14 w-12 lg:h-14 h-12" src="/img/people-1.png" width={1000} height={1000} alt="image" quality={100}/>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="lg:text-sm text-xs">15 min discovery call</p>
                            <p className="lg:text-sm text-xs">Talk with a <span className="font-bold">specialist</span></p>
                        </div>
                    </div>
                </div>
                <div className="basis-[50%] flex items-center justify-center">
                    <Image className="lg:w-[500px] h-auto" src="/img/jumbotron.png" width={1000} height={1000} alt="image" quality={100}/>
                </div>
            </div>
        </div>
    );
}