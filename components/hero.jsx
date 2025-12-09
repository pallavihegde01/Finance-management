"use client"
import Image from "next/image"
import { Button } from "./ui/button"
import Link from "next/link"
import { useEffect, useRef } from "react"
const HeroSection = () => {
    const imageRef = useRef(null);
    useEffect(() => {
        const imageElement = imageRef.current;

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const scrollThreshold = 100;

            if(scrollPosition>scrollThreshold){
                imageElement.classList.add('scrolled');
            }else{
                imageElement.classList.remove('scrolled');
            }
        };

        window.addEventListener("scroll",handleScroll);

        return ()=> window.removeEventListener("scroll",handleScroll)
    },[]);
  return (
    <div className="pb-20 px-4" >
        <div className="container mx-auto text-center">
        <h1 className="fade-in-1 text-5xl md:text-8xl lg:text-[105px] bg-gradient-to-br from-[#b45f77] to-[#4f030b] font-extrabold tracking-tighter pr-2 pb-2 text-transparent bg-clip-text">
        Achieve financial success <br /> with smart management</h1>
            <p className="fade-in-2 text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Optimize your finances effortlessly with an AI-powered platform that tracks, analyzes, and enhances your spending.
            </p>
            <div className="fade-in-2 flex justify-center space-x-4">
                <Link href="/dashboard">
                    <Button size="lg" className="px-8">
                        Get Started
                    </Button>
                </Link>
                {/* <Link href="/Demo">
                    <Button size="lg" variant='outline' className="px-8">
                        Demo
                    </Button>
                </Link> */}
            </div>
            <div className="fade-in-3 hero-image-wrapper mt-5 md:mt-0">
                <div ref={imageRef} className="hero-image">
                    <Image 
                    src="/banner.jpg" 
                    width={1280} 
                    height={580}
                    alt="Dashboard Preview"
                    className="rounded-lg shadow-2xl border mx-auto"
                    priority/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection