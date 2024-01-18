'use client'
import StarterRight from '@/app/assets/images/starter-right.png'

import React, { useRef, useEffect } from "react";
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger)

const Howweareworking = () => {

    const cardsRef = useRef(null)
    useEffect(() => {

        const cards  = cardsRef.current.querySelectorAll('.card');
        const animation = gsap.timeline()

        cards.forEach((card, index) => {
            if(index > 0){
                //increment y value of each card by 200px
                gsap.set(card, {y:index * 200})
                //animate each card back to 0 (for stacking)

                animation.to(card, {y:0, duration:index*0.5, ease:"none"},0)

            }
        })

        console.log(cards.length * 200)

        ScrollTrigger.create({
            trigger:".wrapper",
            start:"top top",
            pin: true,
            end:`+=${(cards.length * 200)}`,
            scrub:true,
            animation:animation,
            markers:true

        })
    }, []);

    return(
        <div className="bg-gray-50 wrapper">
            <div className="container pb-24">
                <div className="max-w-[540px] text-center mx-auto mb-10">
                    <p className="text-gray-900 text-4xl font-semibold">Как Мы Работаем</p>
                    <p className="text-lg font-normal text-gray-700 mt-2">Для нас важно создать партнерство, где ваш успех – наше общее дело. Давайте подробнее рассмотрим наш подход</p>
                </div>
                <div className="grid grid-cols-2 gap-5 relative">
                    <div></div>
                    <div className="">
                        <div className="max-w-[80%] grid gap-y-4 relative cards" ref={cardsRef}>
                            <div className="p-6 bg-white rounded-xl absolute card h-[200px]">
                                <div className="flex items-center mb-3">
                                    <div
                                        className="rounded-full bg-secondary py-2.5 px-5 text-white text-lg font-medium">
                                        <p className="mb-0">1</p>
                                    </div>
                                    <p className="text-xl font-medium text-primary ml-3">Понимаем ваши цели</p>
                                </div>
                                <p className="text-base font-normal text-gray-700">
                                    Начинаем с того, чтобы понять, чего вы хотите достичь. Начинаем с того, чтобы
                                    понять, чего вы хотите достичь. Начинаем с того, чтобы понять, чего вы хотите
                                    достичь.
                                </p>
                            </div>
                            <div className="p-6 bg-white rounded-xl absolute card h-[200px]">
                                <div className="flex items-center mb-3">
                                    <div
                                        className="rounded-full bg-secondary py-2.5 px-5 text-white text-lg font-medium">
                                        <p className="mb-0">2</p>
                                    </div>
                                    <p className="text-xl font-medium text-primary ml-3">Понимаем ваши цели</p>
                                </div>
                                <p className="text-base font-normal text-gray-700">
                                    Начинаем с того, чтобы понять, чего вы хотите достичь. Начинаем с того, чтобы
                                    понять, чего вы хотите достичь. Начинаем с того, чтобы понять, чего вы хотите
                                    достичь.
                                </p>
                            </div>
                            <div className="p-6 bg-white rounded-xl absolute card h-[200px]">
                                <div className="flex items-center mb-3">
                                    <div
                                        className="rounded-full bg-secondary py-2.5 px-5 text-white text-lg font-medium">
                                        <p className="mb-0">3</p>
                                    </div>
                                    <p className="text-xl font-medium text-primary ml-3">Понимаем ваши цели</p>
                                </div>
                                <p className="text-base font-normal text-gray-700">
                                    Начинаем с того, чтобы понять, чего вы хотите достичь. Начинаем с того, чтобы
                                    понять, чего вы хотите достичь. Начинаем с того, чтобы понять, чего вы хотите
                                    достичь.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="test"></div>
                </div>
            </div>
            {/*<div className="w-screen h-screen bg-yellow-500"></div>*/}
            {/*<Image src={StarterRight} alt={'Starter'} ref={imgRef} />*/}
        </div>
    )
}

export default Howweareworking