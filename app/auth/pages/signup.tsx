import Layout from "app/core/layouts/Layout"
import { BlitzPage } from "blitz"
import AuthForm from "../components/AuthForm"

const SignupPage: BlitzPage = () => <AuthForm type="signup" />

SignupPage.suppressFirstRenderFlicker = true
SignupPage.redirectAuthenticatedTo = "/"

SignupPage.getLayout = (page) => <Layout>{page}</Layout>

export default SignupPage
