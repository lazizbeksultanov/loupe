import Link from "next/link";

const Button = ({ children }) => {
  return(
      <button className="rounded-lg bg-none border border-secondary text-secondary py-4 px-6 hover:text-white text-lg font-medium text-nowrap w-full sm:w-auto btn-hover relative">
          {children}
      </button>
  )
}

export default Button