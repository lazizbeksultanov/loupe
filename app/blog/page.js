import Blog1 from "@/app/assets/images/blog1.png";
import BlogCard from "@/app/components/BlogCard";

const Page = () => {

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
        },
    ]

    return(
        <div className="py-24 bg-gray-50">
            <div className="container mt-2.5">
                <p className="text-center sm:text-5xl text-4xl font-medium text-primary" data-aos="fade-up" data-aos-delay="200">Блог</p>
                <div className="mt-10 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5" data-aos="fade-up" data-aos-delay="300">
                    {data.map((item, index) => {
                        return(
                            <div key={index}>
                                <BlogCard img={item.img} title={item.title} description={item.description} link={item.link} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Page