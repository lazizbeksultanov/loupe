'use client'

import Accordion from "@/app/components/Accordion";
import React from "react";

const FAQ = () => {
    const faq = [
        {
            title: "Есть ли у Loupe инструменты для сложных бизнесов?",
            answer: "Это всеобъемлющий термин, описывающий аппаратное, программное обеспечение и финансовые услуги, необходимые бизнесу для приема и обработки платежей — кредитных и дебетовых карт, мобильных кошельков с поддержкой NFC и других бесконтактных платежей."
        },
        {
            title: "Как работает \"покупай сейчас, плати позже\"?",
            answer: "Это всеобъемлющий термин, описывающий аппаратное, программное обеспечение и финансовые услуги, необходимые бизнесу для приема и обработки платежей — кредитных и дебетовых карт, мобильных кошельков с поддержкой NFC и других бесконтактных платежей."
        },
        {
            title: "Что такое торговые услуги?",
            answer: "Это всеобъемлющий термин, описывающий аппаратное, программное обеспечение и финансовые услуги, необходимые бизнесу для приема и обработки платежей — кредитных и дебетовых карт, мобильных кошельков с поддержкой NFC и других бесконтактных платежей."
        },
        {
            title: "Как Loupe отличается от других поставщиков программного обеспечения для бизнеса?",
            answer: "Это всеобъемлющий термин, описывающий аппаратное, программное обеспечение и финансовые услуги, необходимые бизнесу для приема и обработки платежей — кредитных и дебетовых карт, мобильных кошельков с поддержкой NFC и других бесконтактных платежей."
        },
        {
            title: "Есть ли у Loupe инструменты для бизнеса, предоставляющего профессиональные услуги?",
            answer: "Это всеобъемлющий термин, описывающий аппаратное, программное обеспечение и финансовые услуги, необходимые бизнесу для приема и обработки платежей — кредитных и дебетовых карт, мобильных кошельков с поддержкой NFC и других бесконтактных платежей."
        },
        {
            title: "Какие ресурсы предоставляет Loupe бизнесу?",
            answer: "Это всеобъемлющий термин, описывающий аппаратное, программное обеспечение и финансовые услуги, необходимые бизнесу для приема и обработки платежей — кредитных и дебетовых карт, мобильных кошельков с поддержкой NFC и других бесконтактных платежей."
        },
    ]

    return(
        <div className="bg-gray-50">
            <div className="container">
                <p className="text-4xl font-semibold text-primary text-center mb-10">Часто задаваемые вопросы</p>
                <div className="flex flex-wrap items-start w-full">
                    {faq.map((item, index) => {
                        return(
                            <div key={index} className="w-1/2 odd:pr-2.5 even:pl-2.5">
                                <Accordion title={item.title} answer={item.answer} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default FAQ