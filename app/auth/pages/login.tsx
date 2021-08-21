import Layout from "app/core/layouts/Layout"
import { BlitzPage } from "blitz"
import React from "react"
import AuthForm from "../components/AuthForm"

const LoginPage: BlitzPage = () => <AuthForm type="login" />

LoginPage.suppressFirstRenderFlicker = true
LoginPage.redirectAuthenticatedTo = "/"
LoginPage.getLayout = (page) => <Layout fromLogin={true}>{page}</Layout>

export default LoginPage
