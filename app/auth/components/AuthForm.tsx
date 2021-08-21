import { Form, FORM_ERROR } from "app/core/components/Form"
import LabeledTextField from "app/core/components/Input/LabeledTextField"
import { AuthenticationError, Link, Routes, useMutation, useRouter } from "blitz"
import React, { FC } from "react"
import { inputLoginFields, inputSignupFields } from "../constants"
import login from "../mutations/login"
import signup from "../mutations/signup"
import { Login, Signup } from "../validations"

interface InitialValues {
  email: string
  password: string
  name: string
}

interface Values {
  name: string
  email: string
  password: string
}

const AuthForm: FC<{ type: "login" | "signup" }> = ({ type }) => {
  const [loginMutation] = useMutation(login)
  const [signupMutation] = useMutation(signup)
  const router = useRouter()

  let inputFields = inputLoginFields
  let href = Routes.SignupPage()
  let initialValues: InitialValues = { email: "", password: "", name: "" }
  let schema: typeof Login | typeof Signup = Login

  if (type === "signup") {
    href = Routes.LoginPage()
    inputFields = inputSignupFields
    initialValues = { ...initialValues, name: "" }
    schema = Signup
  }

  return (
    <div style={{ height: "calc(100vh - 4rem)" }} className="flex items-center">
      <Form
        schema={schema}
        initialValues={{ ...initialValues }}
        onSubmit={async (values: Values) => {
          try {
            if (type === "login") {
              await loginMutation(values as Omit<Values, "name">)
            } else {
              await signupMutation(values)
            }

            router.push(Routes.HomePage())
          } catch (error) {
            if (error instanceof AuthenticationError) {
              return { [FORM_ERROR]: "Sorry, those credentials are invalid" }
            } else {
              return {
                [FORM_ERROR]:
                  "Sorry, we had an unexpected error. Please try again. - " + error.toString(),
              }
            }
          }
        }}
        className={`w-full md:w-96 ${
          type === "login" ? "h-96" : "h-98"
        } m-auto border-2 p-4 rounded-lg flex flex-col justify-center gap-5`}
      >
        {inputFields.map((field) => (
          <LabeledTextField key={field.name} {...field} />
        ))}
        {
          <div className="flex justify-end text-blue-600">
            <Link href={href}>{type === "login" ? "Forgot Password?" : "Login"}</Link>
          </div>
        }

        <button
          type="submit"
          className="w-full bg-green-400 px-4 py-2 text-white rounded-lg font-bold hover:bg-green-300 uppercase"
        >
          {type}
        </button>
      </Form>
    </div>
  )
}

export default AuthForm
