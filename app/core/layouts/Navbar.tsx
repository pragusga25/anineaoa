import logout from "app/auth/mutations/logout"
import { Link, Routes, useMutation } from "blitz"
import { Button } from "../components/Button"
import { useCurrentUser } from "../hooks/useCurrentUser"
import { LayoutProps } from "./Layout"

const menus = [
  {
    name: "Home",
    link: Routes.HomePage(),
  },
  {
    name: "Post",
    link: Routes.LoginPage(),
  },
]

type NavbarProps = Pick<LayoutProps, "fromLogin">

const Navbar = ({ fromLogin }: NavbarProps) => {
  const currentUser = useCurrentUser()
  const [logoutMutation] = useMutation(logout)

  let text = "Login"
  let href = Routes.LoginPage()

  if (fromLogin) {
    text = "Signup"
    href = Routes.SignupPage()
  }

  return (
    <nav className="flex text-white items-center justify-between px-4 md:px-6 xl:px-10 h-16 bg-blue-500">
      <div className="font-extrabold">ANINEAOA</div>
      <div className="flex items-center gap-10 font-bold">
        {menus.map(({ name, link }) => (
          <Link key={name} href={link}>
            {name}
          </Link>
        ))}
        {!currentUser && <Button type="primary" text={text} href={href} />}
        {currentUser && (
          <Button
            type="secondary"
            text="Logout"
            onClick={async () => {
              await logoutMutation()
            }}
          />
        )}
      </div>
    </nav>
  )
}

export default Navbar
