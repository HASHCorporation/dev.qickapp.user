import React, { useState } from 'react';
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import axios from 'axios';
import InputForm from '../component/CustomInputForms/InputForm';
import eye from '../assets/images/passwordeye.svg';

const validate = Yup.object({
    Name: Yup.string().required('Full Name is required'),
    Password: Yup.string()
        .min(6, 'Password must be at least 6 charaters')
        .required('Password is required'),
    Phone: Yup.string()
        .max(10, 'Number must be 10 digits')
        .min(10, 'Number must be 10 digits')
        .required('Phone Number is required'),
    Email: Yup.string().email('Email is invalid').required('Email is required')
});

export default function SignUp() {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <Formik
            initialValues={{
                Name: '',
                Phone: '',
                Email: '',
                Password: ''
            }}
            validationSchema={validate}
            onSubmit={async (values) => {
                alert('Click');
                await axios
                    .post('https://webapi.qick.co.in/api/user/signup', JSON.stringify(values), {
                        headers: { 'content-type': 'application/json' },
                    })
                    .then((res) => {
                        if (res?.status === 200) {
                            localStorage.setItem('store', JSON.stringify(res?.data));
                            window.location.href = '/';
                        }
                    })
                    .catch((err) => console.log(err));
            }}
        >
            {(formik) => (
                <div className="qick_container">
                    {console.log(formik)}
                    <div className="row mt-5 justify-content-center">
                        <div className="col-12">
                            <div className="text-center mb-4">
                                <img src="assets/img/header/logo.png" alt="logo" />
                            </div>
                            <h1 className="font_24 font_700 text-center mb-2 pb-1">Sign Up</h1>
                            <p className="qick_pera text_gray text-center mb-0">Enter your details below</p>
                            {/* start form  */}
                            <Form className="mt-4 pt-1">
                                <div className="mb-4">
                                    <InputForm
                                        label="Full Name"
                                        name="Name"
                                        placeholder="Full Name"
                                        type="text"
                                    />
                                </div>
                                <div style={{ position: 'relative' }}>
                                    <InputForm
                                        label="Phone"
                                        name="Phone"
                                        placeholder="Phone number"
                                        type="text"
                                    />
                                </div>
                                <div style={{ position: 'relative' }}>
                                    <InputForm
                                        label="Email"
                                        name="Email"
                                        placeholder="Email address"
                                        type="text"
                                    />
                                </div>
                                <div className="loginpassword">
                                    <InputForm
                                        label="password"
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

                                <button type="submit" className="btn btn-primary w-100 quick_button">
                                    Sign Up
                                </button>
                                <p className="text-center quick_foot text_gray font_14 font_400">Already have an account?
                                    <Link to={"/"} className="text_blue mb-4 text-decoration-none"> Log In</Link></p>
                            </Form>
                            {/* end form  */}
                        </div>
                    </div>
                </div>
            )}
        </Formik>
    )
}