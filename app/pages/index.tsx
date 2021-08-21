import Layout from "app/core/layouts/Layout"
import { BlitzPage } from "blitz"

const HomePage: BlitzPage = () => {
  return <div>Hello World</div>
}

HomePage.suppressFirstRenderFlicker = true
HomePage.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default HomePage
