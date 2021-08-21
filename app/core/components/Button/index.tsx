import { RouteUrlObject, Link } from "blitz"
import { FC } from "react"

type ButtonType = "primary" | "secondary"

interface ButtonProps {
  type: ButtonType
  text: string
  href?: RouteUrlObject
  onClick?: () => void
}

export const Button: FC<ButtonProps> = ({ type, href, text, onClick }) => {
  let btnColor = "bg-green-400"

  if (type === "secondary") {
    btnColor = "bg-red-400"
  }

  const button = (
    <div
      className={`h-10 w-20 ${btnColor} text-white px-6 py-2 rounded flex justify-center items-center cursor-pointer`}
      onClick={onClick}
    >
      {text}
    </div>
  )
  if (href) return <Link href={href}>{button}</Link>

  return button
}
