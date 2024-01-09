import Image from "next/image";
import Blog1 from "@/app/assets/images/blog1.png"
import Link from "next/link";
import Button from "@/app/components/Button";

const Blog = () => {
    return (
        <div className="bg-gray-50">
            <div className="container py-24">
                <p className="text-4xl text-center text-gray-900 font-semibold">Блог</p>
                <div className="my-10 grid grid-cols-3 gap-5">
                    <div className="bg-white">
                        <Image src={Blog1} alt={"Blog 1"} className="rounded-t-xl"/>
                        <div className="p-6 rounded-b-xl border-b border-x border-gray-200">
                            <p className="text-xl font-medium text-gray-900 mb-1.5">Понимаем ваши цели</p>
                            <p className="line-clamp-3 text-base font-normal text-gray-700 mb-3">Глубоко изучаем ваш
                                рынок и потребности для выработки четкого плана. Глубоко изучаем ваш
                                рынок и потребности для выработки четкого плана.</p>
                            <Link href='/' className="text-secondary flex items-center group">
                                <span className="text-lg font-medium">Прочитать статью</span>
                                <span className="group-hover:translate-x-1 transition-all duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth="2" stroke="currentColor"
                                         className="w-5 h-5 mt-0.5 stroke-secondary">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
                                    </svg>
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="bg-white">
                        <Image src={Blog1} alt={"Blog 1"} className="rounded-t-xl"/>
                        <div className="p-6 rounded-b-xl border-b border-x border-gray-200">
                            <p className="text-xl font-medium text-gray-900 mb-1.5">Понимаем ваши цели</p>
                            <p className="line-clamp-3 text-base font-normal text-gray-700 mb-3">Глубоко изучаем ваш
                                рынок и потребности для выработки четкого плана. Глубоко изучаем ваш
                                рынок и потребности для выработки четкого плана.</p>
                            <Link href='/' className="text-secondary flex items-center group">
                                <span className="text-lg font-medium">Прочитать статью</span>
                                <span className="group-hover:translate-x-1 transition-all duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth="2" stroke="currentColor"
                                         className="w-5 h-5 mt-0.5 stroke-secondary">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
                                    </svg>
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="bg-white">
                        <Image src={Blog1} alt={"Blog 1"} className="rounded-t-xl"/>
                        <div className="p-6 rounded-b-xl border-b border-x border-gray-200">
                            <p className="text-xl font-medium text-gray-900 mb-1.5">Понимаем ваши цели</p>
                            <p className="line-clamp-3 text-base font-normal text-gray-700 mb-3">Глубоко изучаем ваш
                                рынок и потребности для выработки четкого плана. Глубоко изучаем ваш
                                рынок и потребности для выработки четкого плана.</p>
                            <Link href='/' className="text-secondary flex items-center group">
                                <span className="text-lg font-medium">Прочитать статью</span>
                                <span className="group-hover:translate-x-1 transition-all duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth="2" stroke="currentColor"
                                         className="w-5 h-5 mt-0.5 stroke-secondary">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
                                    </svg>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mx-auto w-max">
                    <Button>
                        Посмотреть все
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Blog