import { ReactNode, Suspense } from "react"
import { Head } from "blitz"
import Navbar from "./Navbar"

export type LayoutProps = {
  title?: string
  children: ReactNode
  fromLogin?: boolean
}

const Layout = ({ title, children, fromLogin }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title || "anineaoa"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen overflow-hidden">
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar fromLogin={fromLogin} />
        </Suspense>
        <main>{children}</main>
      </main>
    </>
  )
}

export default Layout
