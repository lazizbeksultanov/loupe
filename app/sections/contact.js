import React from 'react';

const Contact = () => {
    return (
        <div className="bg-gray-50 pb-6">
            <div className="container">
                <div className="w-full rounded-xl bg-contact-section py-14 bg-primary bg-no-repeat bg-cover bg-[center_bottom_-1rem]">
                    <div className="text-center">
                        <p className="text-white text-4xl font-medium mb-2">Ваш Бизнес, Наши Исследования</p>
                        <p className="text-gray-300 max-w-[540px] mx-auto text-center">Откройте новые возможности с
                            нашими маркетинговыми исследованиями!</p>
                    </div>
                    <form action="#" method="POST" className="mt-8">
                        <div className="flex items-end w-5/6 mx-auto gap-x-4">
                            <div className="w-[38%]">
                                <label htmlFor="first-name"
                                       className="block text-sm font-normal leading-[145%] text-gray-300">
                                    Ваше имя
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        placeholder="Введите ваше имя"
                                        className="block w-full text-base font-normal rounded-lg border-0 px-3.5 py-2.5 text-gray-500 placeholder:text-gray-500 outline-none"
                                    />
                                </div>
                            </div>
                            <div className="w-[38%]">
                                <label htmlFor="first-name"
                                       className="block text-sm font-normal leading-[145%] text-gray-300">
                                    Номер телефона
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        defaultValue="+998"
                                        className="block w-full text-base font-normal rounded-lg border-0 px-3.5 py-2.5 text-gray-500 placeholder:text-gray-500 outline-none"
                                    />
                                </div>
                            </div>
                            <div className="w-[24%]">
                                <button className="w-full bg-secondary rounded-lg py-3 px-4 text-white text-base font-medium text-center">Отправить</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact