'use client'

import Logo from '@/app/assets/images/logo.png'
import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";

const Header = () => {

    const [active, setActive] = useState(false)

    return (
        <div className="fixed w-full z-10">
            <div className="bg-primary w-full z-10">
                <div className="container py-2 flex justify-between items-center">
                    <Link href='/' className="flex-none" data-aos="fade-right" data-aos-delay="100">
                        <Image src={Logo} alt={"Logo"}/>
                    </Link>
                    <div className="lg:flex transition-all gap-x-10 text-white hidden">
                        <Link href='' data-aos="fade-right" data-aos-delay="200">Услуги</Link>
                        <Link href='' data-aos="fade-right" data-aos-delay="300">О нас</Link>
                        <Link href='' data-aos="fade-right" data-aos-delay="400">Отзывы</Link>
                        <Link href='' data-aos="fade-right" data-aos-delay="500">FAQ</Link>
                        <Link href={'/blog'} data-aos="fade-right" data-aos-delay="600">Блог</Link>
                        <Link href='' data-aos="fade-right" data-aos-delay="700">Связаться с нами</Link>
                    </div>
                    <div className="flex items-center">
                        <a href="tel:+998712809401" target="_blank"
                           className="text-white border-b border-white sm:inline-block hidden" data-aos="fade-left" data-aos-delay="200">+998 71 280
                            9401</a>
                        <button className="grid lg:hidden gap-y-1.5 ml-8" onClick={() => setActive(!active)}>
                            <div className="w-10 h-1 rounded-md bg-white"></div>
                            <div className="w-10 h-1 rounded-md bg-white"></div>
                            <div className="w-10 h-1 rounded-md bg-white"></div>
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <div
                    className={`fixed bg-primary top-0 right-0 z-10 transition ${active ? 'opacity-70 w-screen h-dvh' : 'w-0 h-0 opacity-0'}`}
                    onClick={() => setActive((!active))}>

                </div>
                <div
                    className={`h-full fixed top-0 right-0 z-10 bg-white ml-auto pl-8 pt-4 pr-4 pb-8 max-w-max flex flex-col transition-transform ${active ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="w-full flex justify-end flex-none">
                        <button className="ml-auto h-8 max-w-max" onClick={() => setActive(!active)}>
                            <div className="w-8 h-1 rounded-md bg-gray-500 -rotate-45 translate-y-1/2"></div>
                            <div className="w-8 h-1 rounded-md bg-gray-500 rotate-45 -translate-y-1/2"></div>
                        </button>
                    </div>
                    <div className="flex flex-col gap-y-7 mr-9 mt-8 flex-auto">
                        <Link href="/" className="text-2xl font-semibold text-gray-700">Услуги</Link>
                        <Link href="/" className="text-2xl font-semibold text-gray-700">О нас</Link>
                        <Link href="/" className="text-2xl font-semibold text-gray-700">Отзывы</Link>
                        <Link href="/" className="text-2xl font-semibold text-gray-700">FAQ</Link>
                        <Link href="/" className="text-2xl font-semibold text-gray-700">Блог</Link>
                        <Link href="/" className="text-2xl font-semibold text-gray-700">Связаться с нами</Link>
                    </div>
                    <a href="tel:+998712809401" target="_blank"
                       className="text-gray-700 border-b border-gray-700 text-2xl font-semibold flex-none">+998 71 280
                        9401</a>
                </div>
            </div>
        </div>
    )
}

export default Header;