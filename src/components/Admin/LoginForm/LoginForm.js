import React from 'react'
import { Button, Form } from "semantic-ui-react"
import { useFormik } from "formik"
import * as Yup from "yup"
import "./LoginForm.scss"


export function LoginForm() {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema),
    onSubmit: (formValue) => {
      console.log('Login OK')
      console.log(formValue)
    }
  })
  return (
    <Form className="login-form-admin" onSubmit={formik.handleSubmit}>
        <Form.Input 
        name="email"
        type='email' 
        placeholder="Correo electrónico" 
        value={formik.values.email} 
        onChange={formik.handleChange}
        error={formik.errors.email}
        />
        <Form.Input 
        name="password" 
        type="password" 
        placeholder="Contraseña" 
        values={formik.values.password}
        onChange={formik.handleChange} 
        error={formik.errors.password}
        />
        <Button type="submit" content="Iniciar sesion" primary fluid />
    </Form>
  )
}

function initialValues() {
  return {
    email: "",
    password: ""
  }
}

function validationSchema() {
  return {
    email: Yup.string().email(true).required(true),
    password: Yup.string().required(true)
  }
}







