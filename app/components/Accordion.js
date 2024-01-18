'use client'
import React, {useState} from "react";

const Accordion = ({ title, answer }) => {
    const [active, setActive] = useState(false)

    return (
        <div onClick={() => setActive(!active)} className="cursor-pointer py-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
                <p className="text-xl font-medium text-primary">
                    {title ?? 'No data'}
                </p>
                <div className="rounded-full border-2 border-gray-400 p-1">
                    <div
                        className={`w-3.5 h-3.5 relative before:w-full before:absolute before:bg-gray-400 before:h-0.5 before:rounded-lg before:top-1/2 before:left-0 before:block before:duration-[350ms] before:-translate-y-1/2 before:rotate-90 ${active ? 'before:-translate-y-1/2 before:rotate-0' : ''}
                         after:w-full after:absolute after:bg-gray-400 after:h-0.5 after:rounded-lg after:top-1/2 after:left-0 after:block after:duration-[350ms] after:-translate-y-1/2 ${active ? 'after:-translate-y-1/2 after:-rotate-90 after:opacity-0' : ''}`}></div>
                </div>
            </div>
            <div
                className={`text-base font-normal text-gray-700 grid overflow-hidden transition-all duration-300 ease-in-out ${
                    active
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                }`}>
                <p className="overflow-hidden">
                    {answer ?? 'No data'}
                </p>
            </div>
        </div>
    )
}

export default Accordion