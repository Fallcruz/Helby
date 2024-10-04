import Image from "next/image";

export default function Brand() {
    return (
        <div className="w-full flex lg:flex-row flex-row flex-wrap items-center justify-center bg-black-primary lg:px-20 px-8 py-8 lg:gap-32 gap-6">
            <Image className="lg:w-20 w-16 ms-1" src="/img/stripe.png" width={100} height={52} alt="image" quality={100}/>
            <Image className="lg:w-20 w-16 ms-1" src="/img/google.png" width={100} height={52} alt="image" quality={100}/>
            <Image className="lg:w-20 w-16 ms-1" src="/img/samsung.png" width={100} height={52} alt="image" quality={100}/>
            <Image className="lg:w-16 w-16 ms-1" src="/img/visa.png" width={100} height={52} alt="image" quality={100}/>
            <Image className="lg:w-20 w-16 ms-1" src="/img/spotify.png" width={100} height={52} alt="image" quality={100}/>
            {/* <Image className="lg:w-20 w-16 ms-1" src="/img/linkedin.png" width={100} height={52} alt="image" quality={100}/> */}
        </div>
    );
}