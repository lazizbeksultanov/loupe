'use client'

import Button from "@/app/components/Button";
import StarterRight from "@/app/assets/images/starter-right.png"
import Image from "next/image";

const Starter = () => {

    return (
        <div className="bg-primary">
            <div className="container py-40 grid lg:grid-cols-2 grid-cols-1 gap-y-20">
                <div className="font-normal lg:pr-32 pr-0 w-full">
                    <p className="text-secondary text-sm aos-init" data-aos="fade-up" data-aos-delay="200">Работаем по всей Центральной Азии</p>
                    <p className="lg:text-[56px] sm:text-[48px] text-4xl font-semibold tracking-[-0.96px] leading-[120%] text-white transition-all" data-aos="fade-up" data-aos-delay="300">Маркетинговые исследования услуги под ключ</p>
                    <p className="text-gray-200 text-lg mt-6 mb-11" data-aos="fade-up" data-aos-delay="400">Мы предоставляем необходимые данные и аналитику для вашего успешного B2B маркетинга</p>
                    <div data-aos="fade-up" data-aos-delay="500">
                        <Button>
                            Заказать исследование
                        </Button>
                    </div>
                </div>
                <div className="w-full">
                    <div className="sm:ml-auto mx-auto w-full sm:w-max relative" data-aos="fade-up" data-aos-delay="300">
                        <svg className="absolute -top-6 -left-7 sm:block hidden" width="25" height="24" viewBox="0 0 25 24" fill="none">
                            <g clipPath="url(#clip0_16_577)">
                                <path
                                    d="M19.4804 10.4776C17.5335 7.43283 15.598 4.38806 13.6853 1.3209C13.1275 0.447761 14.1521 0 14.9263 0C15.9282 0 17.3628 0.335821 17.9548 1.23134C19.9586 4.27612 21.9396 7.3209 23.9092 10.3769C24.4899 11.2836 23.3969 11.7537 22.6227 11.7537C21.598 11.7537 20.0724 11.4067 19.4804 10.4776Z"
                                    fill="#FF6600"/>
                                <path
                                    d="M13.9358 14.9664C10.839 13.6007 7.75365 12.2239 4.66826 10.8358C4.099 10.5784 2.76693 9.79478 3.46143 9.04478C4.15592 8.29478 5.72708 8.68657 6.46712 9C9.58667 10.3433 12.6948 11.6978 15.8144 13.0634C16.2584 13.2537 16.8049 13.556 17.0781 13.9702C17.2603 14.25 17.3514 14.6642 17.0781 14.9216C16.3267 15.6269 14.7783 15.3358 13.9586 14.9664H13.9358Z"
                                    fill="#FF6600"/>
                                <path
                                    d="M10.0307 23.9776C7.58287 23.7313 5.12366 23.4851 2.67585 23.2276C2.0952 23.1604 1.44624 22.959 0.956681 22.6567C0.660666 22.4776 0.148332 22.097 0.0914059 21.7164C-0.0452166 20.709 1.4007 20.6978 2.06104 20.7537C4.50886 20.9664 6.95668 21.2015 9.4045 21.4478C9.99653 21.5037 10.6683 21.7276 11.1692 22.041C11.4652 22.2201 12.0003 22.6119 12.0572 23.0149C12.1939 24.0448 10.7138 24.0672 10.0421 24L10.0307 23.9776Z"
                                    fill="#FF6600"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_16_577">
                                    <rect width="24" height="24" fill="white" transform="matrix(-1 0 0 1 24.08 0)"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <Image src={StarterRight} alt={"Right"} className="w-full sm:w-[474px]"/>
                        <div className="w-4/6 p-6 bg-white rounded-lg sm:w-max absolute sm:bottom-6 sm:-left-[70px] sm:mx-0 sm:right-auto -bottom-[15%] left-0 right-0 mx-auto" data-aos="fade-up" data-aos-delay="500">
                            <p className="text-secondary font-semibold text-4xl">+16 000</p>
                            <p className="text-gray-700 sm:text-lg text-sm font-normal">проведенных исследований</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Starter;