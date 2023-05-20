import Image from "next/image";
import HeroImage from "../public/hero.webp";
import { Logo } from "../components/Logo/Logo";
import Link from "next/link";
function Home() {
  return (
    <div className="w-screen h-screen overflow-hidden flex justify-center items-center relative">
      {/* <h1>This is Home</h1>
      <Link href="/api/auth/login">Login</Link> */}
      <Image src={HeroImage} alt="Hero" fill className="absolute" />
      <div className="relative z-10 text-white px-10 pu-5 text-center max-w-screen-sm bg-slate-900/90 rounded-lg backdrop-blur-sm ">
        <Logo />
        <p>
          The AI-Powered SASS Solution to generate SEO-optimized blog post. Get
          high quality content without sacrificing your time
        </p>
        <Link href="/post/new" className="btn my-4">
          Begin
        </Link>
      </div>
    </div>
  );
}
export default Home;
