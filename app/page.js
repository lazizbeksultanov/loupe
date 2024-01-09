import Starter from "@/app/sections/starter";
import Services from "@/app/sections/services";
import About from "@/app/sections/about";
import Blog from "@/app/sections/blog";
import Contact from "@/app/sections/contact";
import Reviews from "@/app/sections/reviews";
import FAQ from "@/app/sections/faq";

export default function Home() {
    return (
        <main>
            <Starter/>
            <Services/>
            <About />
            <Reviews />
            <FAQ />
            <Blog />
            <Contact />
        </main>
    )
}
