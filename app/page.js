import Image from "next/image";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Brand from "./components/Brand";
import Features from "./components/Features";
import Secure from "./components/Secure";
import Compliant from "./components/Compliant";
import NativeData from "./components/NativeData";

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
            <div className="w-full mt-16">
                <Image className="w-full h-auto" src="/img/element-footer.png" width={1000} height={1000} alt="image" quality={100}/>
            </div>
        </main>
    );
}
