import Review1 from '@/app/assets/images/review1.png'
import Image from "next/image";

const Reviews = () => {
    return (
        <div className="bg-gray-50 md:py-24 py-14">
            <div className="container">
                <p className="md:text-4xl text-3xl font-semibold text-primary text-center mb-10" data-aos="fade-up">Отзывы</p>
                <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-5">
                    <div className="bg-white w-full h-full rounded-xl p-6 shadow-lg" data-aos="fade-up" data-aos-delay="200">
                        <div className="flex gap-3">
                            <Image src={Review1} alt={"Review 1"} className="w-12 h-12 rounded-full"/>
                            <div>
                                <p className="text-primary text-lg font-medium leading-[145%]">Андрей Ко</p>
                                <p className="text-base font-normal text-gray-500 leading-[145%]">SEO в SMART
                                    ECOSYSTEM</p>
                            </div>
                        </div>
                        <p className="mt-2 text-base font-normal text-primary line-clamp-6">
                            Пользуемся услугами Call to Action уже 3 года. Заметно снизилась нагрузка на наших
                            сотрудников, а также количество пропущенных звонков. Очень доволен оперативностью и
                            исполнительностью команды.
                        </p>
                        <div className="flex gap-1 mt-7">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.68799 7.926L2.90713 8.64777L2.80225 8.6681C2.26325 8.81155 2.05559 9.49889 2.46372 9.91632L6.57499 14.122L5.44321 19.8546L5.43001 19.9542C5.3925 20.5106 5.97502 20.9272 6.50078 20.6775L12 18.065L17.4992 20.6775L17.5924 20.7147C18.1225 20.8879 18.6696 20.4257 18.5568 19.8546L17.424 14.122L21.5363 9.91632L21.6056 9.83509C21.9379 9.3871 21.6722 8.72006 21.0929 8.64777L15.311 7.926L12.6703 2.66359C12.3936 2.11214 11.6064 2.11214 11.3297 2.66359L8.68799 7.926Z"
                                    fill="#FF6600"/>
                            </svg>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.68799 7.926L2.90713 8.64777L2.80225 8.6681C2.26325 8.81155 2.05559 9.49889 2.46372 9.91632L6.57499 14.122L5.44321 19.8546L5.43001 19.9542C5.3925 20.5106 5.97502 20.9272 6.50078 20.6775L12 18.065L17.4992 20.6775L17.5924 20.7147C18.1225 20.8879 18.6696 20.4257 18.5568 19.8546L17.424 14.122L21.5363 9.91632L21.6056 9.83509C21.9379 9.3871 21.6722 8.72006 21.0929 8.64777L15.311 7.926L12.6703 2.66359C12.3936 2.11214 11.6064 2.11214 11.3297 2.66359L8.68799 7.926Z"
                                    fill="#FF6600"/>
                            </svg>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.68799 7.926L2.90713 8.64777L2.80225 8.6681C2.26325 8.81155 2.05559 9.49889 2.46372 9.91632L6.57499 14.122L5.44321 19.8546L5.43001 19.9542C5.3925 20.5106 5.97502 20.9272 6.50078 20.6775L12 18.065L17.4992 20.6775L17.5924 20.7147C18.1225 20.8879 18.6696 20.4257 18.5568 19.8546L17.424 14.122L21.5363 9.91632L21.6056 9.83509C21.9379 9.3871 21.6722 8.72006 21.0929 8.64777L15.311 7.926L12.6703 2.66359C12.3936 2.11214 11.6064 2.11214 11.3297 2.66359L8.68799 7.926Z"
                                    fill="#FF6600"/>
                            </svg>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.68799 7.926L2.90713 8.64777L2.80225 8.6681C2.26325 8.81155 2.05559 9.49889 2.46372 9.91632L6.57499 14.122L5.44321 19.8546L5.43001 19.9542C5.3925 20.5106 5.97502 20.9272 6.50078 20.6775L12 18.065L17.4992 20.6775L17.5924 20.7147C18.1225 20.8879 18.6696 20.4257 18.5568 19.8546L17.424 14.122L21.5363 9.91632L21.6056 9.83509C21.9379 9.3871 21.6722 8.72006 21.0929 8.64777L15.311 7.926L12.6703 2.66359C12.3936 2.11214 11.6064 2.11214 11.3297 2.66359L8.68799 7.926Z"
                                    fill="#FF6600"/>
                            </svg>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.68799 7.926L2.90713 8.64777L2.80225 8.6681C2.26325 8.81155 2.05559 9.49889 2.46372 9.91632L6.57499 14.122L5.44321 19.8546L5.43001 19.9542C5.3925 20.5106 5.97502 20.9272 6.50078 20.6775L12 18.065L17.4992 20.6775L17.5924 20.7147C18.1225 20.8879 18.6696 20.4257 18.5568 19.8546L17.424 14.122L21.5363 9.91632L21.6056 9.83509C21.9379 9.3871 21.6722 8.72006 21.0929 8.64777L15.311 7.926L12.6703 2.66359C12.3936 2.11214 11.6064 2.11214 11.3297 2.66359L8.68799 7.926Z"
                                    fill="#FF6600"/>
                            </svg>
                        </div>
                    </div>
                    <div className="bg-white w-full h-full rounded-xl p-6 shadow-lg" data-aos="fade-up" data-aos-delay="300">
                        <div className="flex gap-3">
                            <Image src={Review1} alt={"Review 1"} className="w-12 h-12 rounded-full"/>
                            <div>
                                <p className="text-primary text-lg font-medium leading-[145%]">Андрей Ко</p>
                                <p className="text-base font-normal text-gray-500 leading-[145%]">SEO в SMART
                                    ECOSYSTEM</p>
                            </div>
                        </div>
                        <p className="mt-2 text-base font-normal text-primary line-clamp-6">
                            Пользуемся услугами Call to Action уже 3 года. Заметно снизилась нагрузка на наших
                            сотрудников, а также количество пропущенных звонков. Очень доволен оперативностью и
                            исполнительностью команды.
                        </p>
                        <div className="flex gap-1 mt-7">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.68799 7.926L2.90713 8.64777L2.80225 8.6681C2.26325 8.81155 2.05559 9.49889 2.46372 9.91632L6.57499 14.122L5.44321 19.8546L5.43001 19.9542C5.3925 20.5106 5.97502 20.9272 6.50078 20.6775L12 18.065L17.4992 20.6775L17.5924 20.7147C18.1225 20.8879 18.6696 20.4257 18.5568 19.8546L17.424 14.122L21.5363 9.91632L21.6056 9.83509C21.9379 9.3871 21.6722 8.72006 21.0929 8.64777L15.311 7.926L12.6703 2.66359C12.3936 2.11214 11.6064 2.11214 11.3297 2.66359L8.68799 7.926Z"
                                    fill="#FF6600"/>
                            </svg>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.68799 7.926L2.90713 8.64777L2.80225 8.6681C2.26325 8.81155 2.05559 9.49889 2.46372 9.91632L6.57499 14.122L5.44321 19.8546L5.43001 19.9542C5.3925 20.5106 5.97502 20.9272 6.50078 20.6775L12 18.065L17.4992 20.6775L17.5924 20.7147C18.1225 20.8879 18.6696 20.4257 18.5568 19.8546L17.424 14.122L21.5363 9.91632L21.6056 9.83509C21.9379 9.3871 21.6722 8.72006 21.0929 8.64777L15.311 7.926L12.6703 2.66359C12.3936 2.11214 11.6064 2.11214 11.3297 2.66359L8.68799 7.926Z"
                                    fill="#FF6600"/>
                            </svg>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.68799 7.926L2.90713 8.64777L2.80225 8.6681C2.26325 8.81155 2.05559 9.49889 2.46372 9.91632L6.57499 14.122L5.44321 19.8546L5.43001 19.9542C5.3925 20.5106 5.97502 20.9272 6.50078 20.6775L12 18.065L17.4992 20.6775L17.5924 20.7147C18.1225 20.8879 18.6696 20.4257 18.5568 19.8546L17.424 14.122L21.5363 9.91632L21.6056 9.83509C21.9379 9.3871 21.6722 8.72006 21.0929 8.64777L15.311 7.926L12.6703 2.66359C12.3936 2.11214 11.6064 2.11214 11.3297 2.66359L8.68799 7.926Z"
                                    fill="#FF6600"/>
                            </svg>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.68799 7.926L2.90713 8.64777L2.80225 8.6681C2.26325 8.81155 2.05559 9.49889 2.46372 9.91632L6.57499 14.122L5.44321 19.8546L5.43001 19.9542C5.3925 20.5106 5.97502 20.9272 6.50078 20.6775L12 18.065L17.4992 20.6775L17.5924 20.7147C18.1225 20.8879 18.6696 20.4257 18.5568 19.8546L17.424 14.122L21.5363 9.91632L21.6056 9.83509C21.9379 9.3871 21.6722 8.72006 21.0929 8.64777L15.311 7.926L12.6703 2.66359C12.3936 2.11214 11.6064 2.11214 11.3297 2.66359L8.68799 7.926Z"
                                    fill="#FF6600"/>
                            </svg>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.68799 7.926L2.90713 8.64777L2.80225 8.6681C2.26325 8.81155 2.05559 9.49889 2.46372 9.91632L6.57499 14.122L5.44321 19.8546L5.43001 19.9542C5.3925 20.5106 5.97502 20.9272 6.50078 20.6775L12 18.065L17.4992 20.6775L17.5924 20.7147C18.1225 20.8879 18.6696 20.4257 18.5568 19.8546L17.424 14.122L21.5363 9.91632L21.6056 9.83509C21.9379 9.3871 21.6722 8.72006 21.0929 8.64777L15.311 7.926L12.6703 2.66359C12.3936 2.11214 11.6064 2.11214 11.3297 2.66359L8.68799 7.926Z"
                                    fill="#FF6600"/>
                            </svg>
                        </div>
                    </div>
                    <div className="bg-white w-full h-full rounded-xl p-6 shadow-lg" data-aos="fade-up" data-aos-delay="400">
                        <div className="flex gap-3">
                            <Image src={Review1} alt={"Review 1"} className="w-12 h-12 rounded-full"/>
                            <div>
                                <p className="text-primary text-lg font-medium leading-[145%]">Андрей Ко</p>
                                <p className="text-base font-normal text-gray-500 leading-[145%]">SEO в SMART
                                    ECOSYSTEM</p>
                            </div>
                        </div>
                        <p className="mt-2 text-base font-normal text-primary line-clamp-6">
                            Пользуемся услугами Call to Action уже 3 года. Заметно снизилась нагрузка на наших
                            сотрудников, а также количество пропущенных звонков. Очень доволен оперативностью и
                            исполнительностью команды.
                        </p>
                        <div className="flex gap-1 mt-7">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.68799 7.926L2.90713 8.64777L2.80225 8.6681C2.26325 8.81155 2.05559 9.49889 2.46372 9.91632L6.57499 14.122L5.44321 19.8546L5.43001 19.9542C5.3925 20.5106 5.97502 20.9272 6.50078 20.6775L12 18.065L17.4992 20.6775L17.5924 20.7147C18.1225 20.8879 18.6696 20.4257 18.5568 19.8546L17.424 14.122L21.5363 9.91632L21.6056 9.83509C21.9379 9.3871 21.6722 8.72006 21.0929 8.64777L15.311 7.926L12.6703 2.66359C12.3936 2.11214 11.6064 2.11214 11.3297 2.66359L8.68799 7.926Z"
                                    fill="#FF6600"/>
                            </svg>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.68799 7.926L2.90713 8.64777L2.80225 8.6681C2.26325 8.81155 2.05559 9.49889 2.46372 9.91632L6.57499 14.122L5.44321 19.8546L5.43001 19.9542C5.3925 20.5106 5.97502 20.9272 6.50078 20.6775L12 18.065L17.4992 20.6775L17.5924 20.7147C18.1225 20.8879 18.6696 20.4257 18.5568 19.8546L17.424 14.122L21.5363 9.91632L21.6056 9.83509C21.9379 9.3871 21.6722 8.72006 21.0929 8.64777L15.311 7.926L12.6703 2.66359C12.3936 2.11214 11.6064 2.11214 11.3297 2.66359L8.68799 7.926Z"
                                    fill="#FF6600"/>
                            </svg>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.68799 7.926L2.90713 8.64777L2.80225 8.6681C2.26325 8.81155 2.05559 9.49889 2.46372 9.91632L6.57499 14.122L5.44321 19.8546L5.43001 19.9542C5.3925 20.5106 5.97502 20.9272 6.50078 20.6775L12 18.065L17.4992 20.6775L17.5924 20.7147C18.1225 20.8879 18.6696 20.4257 18.5568 19.8546L17.424 14.122L21.5363 9.91632L21.6056 9.83509C21.9379 9.3871 21.6722 8.72006 21.0929 8.64777L15.311 7.926L12.6703 2.66359C12.3936 2.11214 11.6064 2.11214 11.3297 2.66359L8.68799 7.926Z"
                                    fill="#FF6600"/>
                            </svg>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.68799 7.926L2.90713 8.64777L2.80225 8.6681C2.26325 8.81155 2.05559 9.49889 2.46372 9.91632L6.57499 14.122L5.44321 19.8546L5.43001 19.9542C5.3925 20.5106 5.97502 20.9272 6.50078 20.6775L12 18.065L17.4992 20.6775L17.5924 20.7147C18.1225 20.8879 18.6696 20.4257 18.5568 19.8546L17.424 14.122L21.5363 9.91632L21.6056 9.83509C21.9379 9.3871 21.6722 8.72006 21.0929 8.64777L15.311 7.926L12.6703 2.66359C12.3936 2.11214 11.6064 2.11214 11.3297 2.66359L8.68799 7.926Z"
                                    fill="#FF6600"/>
                            </svg>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.68799 7.926L2.90713 8.64777L2.80225 8.6681C2.26325 8.81155 2.05559 9.49889 2.46372 9.91632L6.57499 14.122L5.44321 19.8546L5.43001 19.9542C5.3925 20.5106 5.97502 20.9272 6.50078 20.6775L12 18.065L17.4992 20.6775L17.5924 20.7147C18.1225 20.8879 18.6696 20.4257 18.5568 19.8546L17.424 14.122L21.5363 9.91632L21.6056 9.83509C21.9379 9.3871 21.6722 8.72006 21.0929 8.64777L15.311 7.926L12.6703 2.66359C12.3936 2.11214 11.6064 2.11214 11.3297 2.66359L8.68799 7.926Z"
                                    fill="#FF6600"/>
                            </svg>
                        </div>
                    </div>
                    <div className="bg-white w-full h-full rounded-xl p-6 shadow-lg" data-aos="fade-up" data-aos-delay="200">
                        <div className="flex gap-3">
                            <Image src={Review1} alt={"Review 1"} className="w-12 h-12 rounded-full"/>
                            <div>
                                <p className="text-primary text-lg font-medium leading-[145%]">Андрей Ко</p>
                                <p className="text-base font-normal text-gray-500 leading-[145%]">SEO в SMART
                                    ECOSYSTEM</p>
                            </div>
                        </div>
                        <p className="mt-2 text-base font-normal text-primary line-clamp-6">
                            Пользуемся услугами Call to Action уже 3 года. Заметно снизилась нагрузка на наших
                            сотрудников, а также количество пропущенных звонков. Очень доволен оперативностью и
                            исполнительностью команды.
                        </p>
                        <div className="flex gap-1 mt-7">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.68799 7.926L2.90713 8.64777L2.80225 8.6681C2.26325 8.81155 2.05559 9.49889 2.46372 9.91632L6.57499 14.122L5.44321 19.8546L5.43001 19.9542C5.3925 20.5106 5.97502 20.9272 6.50078 20.6775L12 18.065L17.4992 20.6775L17.5924 20.7147C18.1225 20.8879 18.6696 20.4257 18.5568 19.8546L17.424 14.122L21.5363 9.91632L21.6056 9.83509C21.9379 9.3871 21.6722 8.72006 21.0929 8.64777L15.311 7.926L12.6703 2.66359C12.3936 2.11214 11.6064 2.11214 11.3297 2.66359L8.68799 7.926Z"
                                    fill="#FF6600"/>
                            </svg>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.68799 7.926L2.90713 8.64777L2.80225 8.6681C2.26325 8.81155 2.05559 9.49889 2.46372 9.91632L6.57499 14.122L5.44321 19.8546L5.43001 19.9542C5.3925 20.5106 5.97502 20.9272 6.50078 20.6775L12 18.065L17.4992 20.6775L17.5924 20.7147C18.1225 20.8879 18.6696 20.4257 18.5568 19.8546L17.424 14.122L21.5363 9.91632L21.6056 9.83509C21.9379 9.3871 21.6722 8.72006 21.0929 8.64777L15.311 7.926L12.6703 2.66359C12.3936 2.11214 11.6064 2.11214 11.3297 2.66359L8.68799 7.926Z"
                                    fill="#FF6600"/>
                            </svg>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.68799 7.926L2.90713 8.64777L2.80225 8.6681C2.26325 8.81155 2.05559 9.49889 2.46372 9.91632L6.57499 14.122L5.44321 19.8546L5.43001 19.9542C5.3925 20.5106 5.97502 20.9272 6.50078 20.6775L12 18.065L17.4992 20.6775L17.5924 20.7147C18.1225 20.8879 18.6696 20.4257 18.5568 19.8546L17.424 14.122L21.5363 9.91632L21.6056 9.83509C21.9379 9.3871 21.6722 8.72006 21.0929 8.64777L15.311 7.926L12.6703 2.66359C12.3936 2.11214 11.6064 2.11214 11.3297 2.66359L8.68799 7.926Z"
                                    fill="#FF6600"/>
                            </svg>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.68799 7.926L2.90713 8.64777L2.80225 8.6681C2.26325 8.81155 2.05559 9.49889 2.46372 9.91632L6.57499 14.122L5.44321 19.8546L5.43001 19.9542C5.3925 20.5106 5.97502 20.9272 6.50078 20.6775L12 18.065L17.4992 20.6775L17.5924 20.7147C18.1225 20.8879 18.6696 20.4257 18.5568 19.8546L17.424 14.122L21.5363 9.91632L21.6056 9.83509C21.9379 9.3871 21.6722 8.72006 21.0929 8.64777L15.311 7.926L12.6703 2.66359C12.3936 2.11214 11.6064 2.11214 11.3297 2.66359L8.68799 7.926Z"
                                    fill="#FF6600"/>
                            </svg>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.68799 7.926L2.90713 8.64777L2.80225 8.6681C2.26325 8.81155 2.05559 9.49889 2.46372 9.91632L6.57499 14.122L5.44321 19.8546L5.43001 19.9542C5.3925 20.5106 5.97502 20.9272 6.50078 20.6775L12 18.065L17.4992 20.6775L17.5924 20.7147C18.1225 20.8879 18.6696 20.4257 18.5568 19.8546L17.424 14.122L21.5363 9.91632L21.6056 9.83509C21.9379 9.3871 21.6722 8.72006 21.0929 8.64777L15.311 7.926L12.6703 2.66359C12.3936 2.11214 11.6064 2.11214 11.3297 2.66359L8.68799 7.926Z"
                                    fill="#FF6600"/>
                            </svg>
                        </div>
                    </div>
                    <div className="bg-white w-full h-full rounded-xl p-6 shadow-lg" data-aos="fade-up" data-aos-delay="300">
                        <div className="flex gap-3">
                            <Image src={Review1} alt={"Review 1"} className="w-12 h-12 rounded-full"/>
                            <div>
                                <p className="text-primary text-lg font-medium leading-[145%]">Андрей Ко</p>
                                <p className="text-base font-normal text-gray-500 leading-[145%]">SEO в SMART
                                    ECOSYSTEM</p>
                            </div>
                        </div>
                        <p className="mt-2 text-base font-normal text-primary line-clamp-6">
                            Пользуемся услугами Call to Action уже 3 года. Заметно снизилась нагрузка на наших
                            сотрудников, а также количество пропущенных звонков. Очень доволен оперативностью и
                            исполнительностью команды.
                        </p>
                        <div className="flex gap-1 mt-7">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.68799 7.926L2.90713 8.64777L2.80225 8.6681C2.26325 8.81155 2.05559 9.49889 2.46372 9.91632L6.57499 14.122L5.44321 19.8546L5.43001 19.9542C5.3925 20.5106 5.97502 20.9272 6.50078 20.6775L12 18.065L17.4992 20.6775L17.5924 20.7147C18.1225 20.8879 18.6696 20.4257 18.5568 19.8546L17.424 14.122L21.5363 9.91632L21.6056 9.83509C21.9379 9.3871 21.6722 8.72006 21.0929 8.64777L15.311 7.926L12.6703 2.66359C12.3936 2.11214 11.6064 2.11214 11.3297 2.66359L8.68799 7.926Z"
                                    fill="#FF6600"/>
                            </svg>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.68799 7.926L2.90713 8.64777L2.80225 8.6681C2.26325 8.81155 2.05559 9.49889 2.46372 9.91632L6.57499 14.122L5.44321 19.8546L5.43001 19.9542C5.3925 20.5106 5.97502 20.9272 6.50078 20.6775L12 18.065L17.4992 20.6775L17.5924 20.7147C18.1225 20.8879 18.6696 20.4257 18.5568 19.8546L17.424 14.122L21.5363 9.91632L21.6056 9.83509C21.9379 9.3871 21.6722 8.72006 21.0929 8.64777L15.311 7.926L12.6703 2.66359C12.3936 2.11214 11.6064 2.11214 11.3297 2.66359L8.68799 7.926Z"
                                    fill="#FF6600"/>
                            </svg>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.68799 7.926L2.90713 8.64777L2.80225 8.6681C2.26325 8.81155 2.05559 9.49889 2.46372 9.91632L6.57499 14.122L5.44321 19.8546L5.43001 19.9542C5.3925 20.5106 5.97502 20.9272 6.50078 20.6775L12 18.065L17.4992 20.6775L17.5924 20.7147C18.1225 20.8879 18.6696 20.4257 18.5568 19.8546L17.424 14.122L21.5363 9.91632L21.6056 9.83509C21.9379 9.3871 21.6722 8.72006 21.0929 8.64777L15.311 7.926L12.6703 2.66359C12.3936 2.11214 11.6064 2.11214 11.3297 2.66359L8.68799 7.926Z"
                                    fill="#FF6600"/>
                            </svg>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.68799 7.926L2.90713 8.64777L2.80225 8.6681C2.26325 8.81155 2.05559 9.49889 2.46372 9.91632L6.57499 14.122L5.44321 19.8546L5.43001 19.9542C5.3925 20.5106 5.97502 20.9272 6.50078 20.6775L12 18.065L17.4992 20.6775L17.5924 20.7147C18.1225 20.8879 18.6696 20.4257 18.5568 19.8546L17.424 14.122L21.5363 9.91632L21.6056 9.83509C21.9379 9.3871 21.6722 8.72006 21.0929 8.64777L15.311 7.926L12.6703 2.66359C12.3936 2.11214 11.6064 2.11214 11.3297 2.66359L8.68799 7.926Z"
                                    fill="#FF6600"/>
                            </svg>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.68799 7.926L2.90713 8.64777L2.80225 8.6681C2.26325 8.81155 2.05559 9.49889 2.46372 9.91632L6.57499 14.122L5.44321 19.8546L5.43001 19.9542C5.3925 20.5106 5.97502 20.9272 6.50078 20.6775L12 18.065L17.4992 20.6775L17.5924 20.7147C18.1225 20.8879 18.6696 20.4257 18.5568 19.8546L17.424 14.122L21.5363 9.91632L21.6056 9.83509C21.9379 9.3871 21.6722 8.72006 21.0929 8.64777L15.311 7.926L12.6703 2.66359C12.3936 2.11214 11.6064 2.11214 11.3297 2.66359L8.68799 7.926Z"
                                    fill="#FF6600"/>
                            </svg>
                        </div>
                    </div>
                    <div className="bg-white w-full h-full rounded-xl p-6 shadow-lg" data-aos="fade-up" data-aos-delay="400">
                        <div className="flex gap-3">
                            <Image src={Review1} alt={"Review 1"} className="w-12 h-12 rounded-full"/>
                            <div>
                                <p className="text-primary text-lg font-medium leading-[145%]">Андрей Ко</p>
                                <p className="text-base font-normal text-gray-500 leading-[145%]">SEO в SMART
                                    ECOSYSTEM</p>
                            </div>
                        </div>
                        <p className="mt-2 text-base font-normal text-primary line-clamp-6">
                            Пользуемся услугами Call to Action уже 3 года. Заметно снизилась нагрузка на наших
                            сотрудников, а также количество пропущенных звонков. Очень доволен оперативностью и
                            исполнительностью команды.
                        </p>
                        <div className="flex gap-1 mt-7">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.68799 7.926L2.90713 8.64777L2.80225 8.6681C2.26325 8.81155 2.05559 9.49889 2.46372 9.91632L6.57499 14.122L5.44321 19.8546L5.43001 19.9542C5.3925 20.5106 5.97502 20.9272 6.50078 20.6775L12 18.065L17.4992 20.6775L17.5924 20.7147C18.1225 20.8879 18.6696 20.4257 18.5568 19.8546L17.424 14.122L21.5363 9.91632L21.6056 9.83509C21.9379 9.3871 21.6722 8.72006 21.0929 8.64777L15.311 7.926L12.6703 2.66359C12.3936 2.11214 11.6064 2.11214 11.3297 2.66359L8.68799 7.926Z"
                                    fill="#FF6600"/>
                            </svg>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.68799 7.926L2.90713 8.64777L2.80225 8.6681C2.26325 8.81155 2.05559 9.49889 2.46372 9.91632L6.57499 14.122L5.44321 19.8546L5.43001 19.9542C5.3925 20.5106 5.97502 20.9272 6.50078 20.6775L12 18.065L17.4992 20.6775L17.5924 20.7147C18.1225 20.8879 18.6696 20.4257 18.5568 19.8546L17.424 14.122L21.5363 9.91632L21.6056 9.83509C21.9379 9.3871 21.6722 8.72006 21.0929 8.64777L15.311 7.926L12.6703 2.66359C12.3936 2.11214 11.6064 2.11214 11.3297 2.66359L8.68799 7.926Z"
                                    fill="#FF6600"/>
                            </svg>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.68799 7.926L2.90713 8.64777L2.80225 8.6681C2.26325 8.81155 2.05559 9.49889 2.46372 9.91632L6.57499 14.122L5.44321 19.8546L5.43001 19.9542C5.3925 20.5106 5.97502 20.9272 6.50078 20.6775L12 18.065L17.4992 20.6775L17.5924 20.7147C18.1225 20.8879 18.6696 20.4257 18.5568 19.8546L17.424 14.122L21.5363 9.91632L21.6056 9.83509C21.9379 9.3871 21.6722 8.72006 21.0929 8.64777L15.311 7.926L12.6703 2.66359C12.3936 2.11214 11.6064 2.11214 11.3297 2.66359L8.68799 7.926Z"
                                    fill="#FF6600"/>
                            </svg>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.68799 7.926L2.90713 8.64777L2.80225 8.6681C2.26325 8.81155 2.05559 9.49889 2.46372 9.91632L6.57499 14.122L5.44321 19.8546L5.43001 19.9542C5.3925 20.5106 5.97502 20.9272 6.50078 20.6775L12 18.065L17.4992 20.6775L17.5924 20.7147C18.1225 20.8879 18.6696 20.4257 18.5568 19.8546L17.424 14.122L21.5363 9.91632L21.6056 9.83509C21.9379 9.3871 21.6722 8.72006 21.0929 8.64777L15.311 7.926L12.6703 2.66359C12.3936 2.11214 11.6064 2.11214 11.3297 2.66359L8.68799 7.926Z"
                                    fill="#FF6600"/>
                            </svg>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.68799 7.926L2.90713 8.64777L2.80225 8.6681C2.26325 8.81155 2.05559 9.49889 2.46372 9.91632L6.57499 14.122L5.44321 19.8546L5.43001 19.9542C5.3925 20.5106 5.97502 20.9272 6.50078 20.6775L12 18.065L17.4992 20.6775L17.5924 20.7147C18.1225 20.8879 18.6696 20.4257 18.5568 19.8546L17.424 14.122L21.5363 9.91632L21.6056 9.83509C21.9379 9.3871 21.6722 8.72006 21.0929 8.64777L15.311 7.926L12.6703 2.66359C12.3936 2.11214 11.6064 2.11214 11.3297 2.66359L8.68799 7.926Z"
                                    fill="#FF6600"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reviews