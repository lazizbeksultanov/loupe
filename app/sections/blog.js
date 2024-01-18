import Image from "next/image";
import Blog1 from "@/app/assets/images/blog1.png"
import Link from "next/link";
import Button from "@/app/components/Button";
import BlogCard from "@/app/components/BlogCard";

const Blog = () => {

    const data = [
        {
            img: Blog1,
            title: 'Понимаем ваши цели',
            description: 'Глубоко изучаем ваш рынок и потребности для выработки четкого плана. Глубоко изучаем ваш рынок и потребности для выработки четкого плана.',
            link: '/blog/1'
        },
        {
            img: Blog1,
            title: 'Понимаем ваши цели',
            description: 'Глубоко изучаем ваш рынок и потребности для выработки четкого плана. Глубоко изучаем ваш рынок и потребности для выработки четкого плана.',
            link: '/blog/1'
        },
        {
            img: Blog1,
            title: 'Понимаем ваши цели',
            description: 'Глубоко изучаем ваш рынок и потребности для выработки четкого плана. Глубоко изучаем ваш рынок и потребности для выработки четкого плана.',
            link: '/blog/1'
        }
    ]

    return (
        <div className="bg-gray-50">
            <div className="container py-24">
                <p className="md:text-4xl text-3xl text-center text-gray-900 font-semibold" data-aos="fade-up" data-aos-delay="200">Блог</p>
                <div className="my-10 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5" data-aos="fade-up" data-aos-delay="400">
                    {data.map((item, index) => {
                        return(
                            <div key={index}>
                                <BlogCard img={item.img} title={item.title} description={item.description} link={item.link} />
                            </div>
                        )
                    })}
                </div>
                <div className="flex justify-center" data-aos="fade-up" data-aos-delay="500">
                    <Link href='/blog'>
                        <Button>
                            Посмотреть все
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Blog