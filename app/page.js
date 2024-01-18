'use client'

import Starter from "@/app/sections/starter";
import Services from "@/app/sections/services";
import About from "@/app/sections/about";
import Blog from "@/app/sections/blog";
import Contact from "@/app/sections/contact";
import Reviews from "@/app/sections/reviews";
import FAQ from "@/app/sections/faq";
import Howweareworking from "@/app/sections/howweareworking";
import "aos/dist/aos.css";
import AOS from "aos";
import {useEffect} from "react";

export default function Home() {

    useEffect(() => {
        AOS.init({
            // duration: 800,
            // once: false,
        })
    }, [])

    return (
        <main>
            <Starter/>
            <Services/>
            {/*<Howweareworking />*/}
            <About />
            <Reviews />
            <FAQ />
            <Blog />
            {/*<Contact />*/}
        </main>
    )
}
