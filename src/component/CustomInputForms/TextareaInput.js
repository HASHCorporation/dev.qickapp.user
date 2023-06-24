import React from 'react';
import PropTypes from 'prop-types';
import './inputstyle.css';
import { ErrorMessage, useField } from 'formik';

const TextareaInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={field.name}>{label}</label>
            <textarea
                className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
                {...field} {...props} placeholder={props.placeholder}
                autoComplete="off"
            />
            <ErrorMessage component="div" name={field.name} className="error" />
        </>
    )
}
TextareaInput.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
};

export default TextareaInput