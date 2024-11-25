import React from 'react'
import { Button } from "@nextui-org/button";
import { IoIosArrowRoundForward } from "react-icons/io";

function Hero() {
  return (
    <>
        <section className="mt-10 lg:mt-20 xl:mt-[128px] flex flex-col-reverse sm:flex-row gap-10 lg:gap-2.5 xl:gap-8 justify-between items-center">
            <div className="space-y-6 sm:w-1/2">
                <h1 className="font-bold leading-tight text-2xl md:text-3xl lg:text-4xl xl:text-5xl"> Spend your Cardano anywhere, anytime.</h1>
                <p className="text-secondary w-4/5 text-xs lg:text-sm xl:text-base"> Our user-friendly platform enables businesses and individuals to seamlessly convert and spend their crypto for everyday purchases.</p>
                <Button variant="solid" color="primary" radius="full" >Get Started <IoIosArrowRoundForward  size="lg"/></Button>
            </div>
            <img className="xl:-mr-[130px] w-10/12 sm:w-1/2" src="/hero-card.png" alt="hero card"/>
        </section>
    </>
  )
}

export default Hero