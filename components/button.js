import React from 'react'
import styles from './button.module.css'
/**
* @author
* @function Button
**/

export const Button = (props) => {
    const { isButtonLight, buttonName, style, buttonClick, disable } = props


    return (
        <button

            className={`${isButtonLight ? styles.button__primary_light : styles.button__primary} ${disable ? styles.button__disable : ''}`}
            style={style}
            onClick={buttonClick}
            disabled={disable}
            type="submit"
        >{buttonName}
        </button>
    )

}