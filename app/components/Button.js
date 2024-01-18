import Link from "next/link";

const Button = ({ children }) => {
  return(
      <button className="rounded-lg bg-secondary py-4 px-6 text-white text-lg font-medium text-nowrap w-full sm:w-auto">
          {children}
      </button>
  )
}

export default Button