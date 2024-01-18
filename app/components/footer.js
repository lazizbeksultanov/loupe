import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/assets/images/logo.png";

const Footer = () => {
    return (
        <div className="bg-gray-50 md:py-2 pb-6">
            <div className="container py-2 flex sm:flex-row flex-col gap-y-8 justify-between lg:items-center items-start">
                <Link href='/' className="flex-none">
                    <Image src={Logo} alt={"Logo"}/>
                </Link>
                <div className="flex lg:flex-row flex-col transition-all gap-x-10 gap-y-5 text-primary">
                    <Link href=''>Услуги</Link>
                    <Link href=''>О нас</Link>
                    <Link href=''>Отзывы</Link>
                    <Link href=''>FAQ</Link>
                    <Link href=''>Блог</Link>
                    <Link href=''>Связаться с нами</Link>
                </div>
                <a href="tel:+998712809401" target="_blank"
                   className="text-primary border-b border-primary">+998 71 280
                    9401</a>
            </div>
        </div>
    )
}

export default Footer