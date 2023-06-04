import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import uuid from 'react-uuid'
import { regPost } from '../../lib/api-funtions/register'
import { useUserContext } from '../../utils/hooks/userContext'

const Register = () => {
  
  let initial={
    id:uuid(),
    email:"",
    password:"",
  }
  const { userlogin } = useUserContext();
  const navigater = useNavigate();
 

  const validate=(values)=>{
    let errors={};
    if(!values.email) errors.email= "Enter Your Email";
    else if(!values.email.endsWith("@gmail.com")) 
          errors.email="Invalid Email";
    if(!values.password) errors.password="Enter Your password";
    else if(values.password.length < 7)errors.password="Invalid password";
    return errors;
  };

  const handleSubmit=(values,props)=>{
   navigater("/home");
   localStorage.setItem("users",JSON.stringify(values))
   userlogin(values);
   regPost(values);
   props.resetForm();
  }
  return (
    <Formik onSubmit={handleSubmit}
    initialValues={initial}
    validate={validate}>
    {(isValid) => {
      return (
        <div className='login-container flex justify-center text-white '>
          <Form className='login-container1 w-[400px] bg-black h-[70vh] flex flex-col p-10'>
            <h1 className='login-h1 font-sans font-bold  '>Sign up</h1>
            <div className='inpt-container relative'>
              <Field className='login-inpt1 padding p-left' placeholder=" " type="text" name="email"/>
              <label className='login-lab1 absolute' htmlFor="">Enter Email</label>
              <ErrorMessage name='email'>{(error)=><h1>{error}</h1>}</ErrorMessage>
              <Field className='login-inpt2 padding p-left' placeholder=" " type="password" name="password" />
              <label className='login-lab2 absolute' htmlFor="">Enter Password</label>
              <ErrorMessage name='password'>{(error)=><h1>{error}</h1>}</ErrorMessage>
            </div>
            <input type='submit' className='bg-red-600 padding'  value={"Sign up"}/>
            
          </Form>
        </div>
      )
    }}
  </Formik>
  )
}

export default Register