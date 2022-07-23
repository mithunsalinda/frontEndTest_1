import React from 'react'
import { useSelector } from 'react-redux'
import styles from './header.module.css'

/**
* @author
* @function Header
**/

export const Header = (props) => {
    const { formOne, formTwo, formThree } = props
    const { firstName, lastName, email } = useSelector((state) => state.userReducer)
    return (
        <header>
            <div className='header-wrapper'>
                <div className={styles.step__monitor}>
                    <div className={styles.step__div}><span className={!formOne && !firstName.length > 0 && !lastName.length > 0 ? styles.active : styles.step}>1</span>Name</div>
                    <div className={styles.step__div}><span className={!formTwo && !email.length > 0 ? styles.active : styles.step}>2</span>Email</div>
                    <div className={styles.step__div}><span className={!formThree ? styles.active : styles.step}>3</span>Confirmation</div>
                </div>

            </div>
        </header>
    )

}