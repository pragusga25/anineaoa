type InputType = "text" | "password" | "email" | "number"

interface InputFields {
  type: InputType
  label: string
  placeholder: string
  name: string
}

export const inputLoginFields: InputFields[] = [
  { name: "email", type: "email", label: "Email", placeholder: "Email" },
  { name: "password", type: "password", label: "Password", placeholder: "Password" },
]

export const inputSignupFields: InputFields[] = [
  { name: "name", type: "text", label: "Full Name", placeholder: "Full Name" },
  ...inputLoginFields,
]
