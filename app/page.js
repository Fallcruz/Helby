import Image from "next/image";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Brand from "./components/Brand";

export default function Home() {
    return (
        <main>
            <Navbar />
            <Jumbotron />
            <Brand />
            <div className="w-full h-[500px]"></div>
        </main>
    );
}
