import React, { useState } from 'react'
import { useField } from "formik";
import styles from './textbox.module.css'
/**
* @author
* @function TextBox
**/

export const TextBox = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div>

            <input
                {...field}
                {...props}
                placeholder={label}
                className={`text__box ${meta.touched && meta.error ? "input-error" : ""} `}
            />
            {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
        </div>
    )

}