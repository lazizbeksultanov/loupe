import Logo from '@/app/assets/images/logo.png'
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return(
      <div className="bg-primary">
          <div className="container py-2 flex justify-between items-center">
              <Link href='/' className="flex-none">
                  <Image src={Logo} alt={"Logo"} />
              </Link>
              <div className="flex gap-x-10 text-white">
                  <Link href=''>Услуги</Link>
                  <Link href=''>О нас</Link>
                  <Link href=''>Отзывы</Link>
                  <Link href=''>FAQ</Link>
                  <Link href=''>Блог</Link>
                  <Link href=''>Связаться с нами</Link>
              </div>
              <a href="tel:+998712809401" target="_blank" className="text-white border-b border-white">+998 71 280 9401</a>
          </div>
      </div>
  )
}

export default Header;