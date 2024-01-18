import Image from "next/image";
import Blog1 from "@/app/assets/images/blog1.png";
import Link from "next/link";

const BlogCard = ({img, title, description, link}) => {
    return (
        <div className="bg-white group rounded-t-xl">
            <div className="relative overflow-hidden rounded-t-xl">
                <Image src={img} alt={"Blog 1"} className="rounded-t-xl transition duration-300 ease-in-out group-hover:scale-110"/>
            </div>
            <div className="p-6 rounded-b-xl border-b border-x border-gray-200">
                <p className="text-xl font-medium text-gray-900 mb-1.5">{title}</p>
                <p className="line-clamp-3 text-base font-normal text-gray-700 mb-3">{description}</p>
                <Link href={link} className="text-secondary flex items-center">
                    <span className="text-lg font-medium">Прочитать статью</span>
                    <span className="group-hover:translate-x-1 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             strokeWidth="2" stroke="currentColor" className="w-5 h-5 mt-0.5 stroke-secondary">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
                        </svg>
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default BlogCard