import React from "react";
import { Link } from "react-router-dom";
import { useState } from 'react';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import axios from 'axios';
import eye from '../assets/images/passwordeye.svg';
import InputForm from '../component/CustomInputForms/InputForm';
//import './login.css';

const Login = () => {
  const validate = Yup.object({
    Email: Yup.string().email('Email is invalid').required('Email is required'),
    Password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
  });

  const [isVisible, setIsVisible] = useState(false);
  return (
    <Formik
    initialValues={{
        Email: '',
        Password: '',
    }}
    validationSchema={validate}
    onSubmit={async (values) => {
        console.log("post requst")
        await axios
        .post('https://localhost:5001/api/user/login', JSON.stringify(values), {
            headers: { 'content-type': 'application/json' },
        })
        .then((res) => {
            if (res?.status === 200) {
                console.log("200 status...")
                localStorage.setItem('store', JSON.stringify(res?.data));
                window.location.href = '/storelist#/storelist';
            }
        })
        .catch((err) => console.log(err));
    }}
    >
        {(formik) => (
            <div className="qick_container">
            <div className="h_100vh d-flex flex-column justify-content-between">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="text-center mb-4">
                            <img src="assets/img/header/logo.png" alt="logo" />
                        </div>
                        <h1 className="font_24 font_700 text-center mb-2 pb-1">Log In</h1>
                        <p className="qick_pera text_gray text-center">Enter your email and password below</p>
                        {/* start form  */}
                    
                        <Form className="mt-5">
                                
                                <div className="filterInput">
                                    <InputForm
                                    label="Email"
                                    name="Email"
                                    placeholder="Email address"
                                    type="text"
                                    />
                                </div>
                                <div className="mb-4">
                                    <div className="d-flex justify-content-between">
                                        <label htmlFor="exampleInputPassword1" className="form-label qick_lable">
                                            Password
                                        </label>
                                        <Link to={"/forgotpassword"} className="text_gray font_10 font_400 mb-0 text-decoration-none">
                                            Forgot password?</Link>
                                    </div>
                                <div className="loginpassword">
                                  <InputForm
                                    //label="password"
                                    name="Password"
                                    placeholder="Password"
                                    type={isVisible ? 'text' : 'password'}
                                  />
                                  <button
                                    type="button"
                                    className="btn"
                                    onClick={() => setIsVisible(!isVisible)}
                                  > 
                                  <img src={eye} alt={eye} />
                                  </button>
                                </div>
                              </div> 
                              <button type="submit" className="btn btn-primary w-100 quick_button">
                                    Log In
                              </button>
                            </Form>
                          </div>
                          <p className="text-center quick_foot text_gray font_14 font_400">Don’t have an account?
                          <Link to={"/signup"} className="text_blue mb-4 text-decoration-none"> Sign up</Link></p>
                        </div>
                    </div>
                    </div>
                )}
        </Formik>
        );
    };
export default Login;