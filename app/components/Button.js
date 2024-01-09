import Link from "next/link";

const Button = ({ children }) => {
  return(
      <Link href='/' className="rounded-lg bg-secondary py-4 px-6 text-white text-lg font-medium">
          {children}
      </Link>
  )
}

export default Button