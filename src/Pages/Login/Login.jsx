import React, { useEffect, useState } from 'react'
import './login.css'
import { Link, useNavigate } from 'react-router-dom'
import { useUserContext } from '../../utils/hooks/userContext'
import { regGet, regPost } from '../../lib/api-funtions/register'
import { ErrorMessage, Field, Form, Formik } from 'formik'
const Login = () => {
  const [user, setUser] = useState(null);
  console.log(user);
  let initial= {
    id: 1,
    email: "",
    password: "",
  };
  const navigater = useNavigate();

  useEffect(() => {
    regGet().then(({ data }) => setUser(data));
  }, []);

  const validate = (values) => {
    let errors = {};

    if (!values.email) errors.email = "Enter Your Email";
    else if (!values.email.endsWith("@gmail.com"))
      errors.email = "Invalid Email";
    if (!values.password) errors.password = "Enter Your password";
    else if (values.password.length < 7) errors.password = "Invalid password";
    return errors;
  };

  const handlesubmit = (values, props) => {
    const getuse = (values) => {
      const value = user?.find((val) => val.email === values.email);

      if (value?.email === values.email) {
        localStorage.setItem("users",JSON.stringify(values))
        navigater("/home");
        props.resetForm();
      } else {
        alert("no user");
      }
    };
    getuse(values);
  };

  return (
   <Formik onSubmit={handlesubmit}
   initialValues={initial}
   validate={validate}>
     {({isValid})=>{
      return(
        <div className='login-container flex justify-center text-white '>
     <Form className='login-container1 w-[400px] bg-black h-[70vh] flex flex-col p-10'>
      <h1 className='login-h1 font-sans font-bold  '>Sign in</h1>
      <div className='inpt-container relative'>
      <Field  className='login-inpt1 padding p-left' placeholder=" " type="text" name="email"
      />
      <label className='login-lab1 absolute' htmlFor="">Enter Email</label>
      <ErrorMessage name='email'>{(error)=><h1>{error}</h1>}</ErrorMessage>
      <Field className='login-inpt2 padding p-left' placeholder=" " type="password" name='password'
      />
      <label className='login-lab2 absolute' htmlFor="">Enter Password</label>
      <ErrorMessage name='password'>{(error)=><h1>{error}</h1>}</ErrorMessage>
      </div>
      <input type='submit' className='bg-red-600 padding' value={"Sign in" } />
      <div className=' flex '><div className='ch-container1' ><input type="checkbox"/>
      <label htmlFor="">Remainder Me</label></div>
      <h1 className='ch-container2'>Need to help?</h1>
      </div>
      <p className='padding'>New to Netflix?<Link to={"/register"}><span className='font-sans font-bold font ' >Sign up now.</span></Link></p>
      <p className='padding'>this page protected by Google to ensure 
        your're not bot.<span className='text-blue-900'>Learn more</span>
      </p>
     </Form>
    </div>
      )
     }}
   </Formik>

  )
}

export default Login;