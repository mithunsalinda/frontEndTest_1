import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState, } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Button, Header, TextBox } from '../components'
import actions from '../redux/actions/createuser.action';
import styles from '../styles/Home.module.css'
import { Form, Formik } from "formik";
import { nameFormSchema, emailFormSchema } from "../lib/schema";

export default function Home() {
  const dispatch = useDispatch();
  const { firstName, lastName, email, nameForm, emailForm, confirmedForm } = useSelector((state) => state.userReducer)




  const NameForm = () => {
    const [txtName, setName] = useState('')
    const [txtLastName, setLastName] = useState('')
    const [validFirstName, setValidFirstName] = useState(false)
    const [validLastName, setValidLastName] = useState(false)
    const [enableNext, setEnableNext] = useState(false)
    const nextStep1 = (values) => {
      console.log("Formik.isValid ", values);
      dispatch(actions.userCreate({ type: 'firstName', firstName: values.firstName }))
      dispatch(actions.userCreate({ type: 'lastName', lastName: values.lastName }))
      dispatch(actions.userCreate({ type: 'nameForm', nameForm: false, }))
      dispatch(actions.userCreate({ type: 'emailForm', emailForm: true }))
    }
    return (
      <Formik
        initialValues={{ firstName: "", lastName: "" }}
        validationSchema={nameFormSchema}
        validateOnChange={true}
        validateOnBlur={true}
        onSubmit={nextStep1}

      >
        {({ isSubmitting, isValid, dirty, handleChange, values, errors }) => (
          <form onSubmit={(event) => { event.preventDefault(); console.log('formik', Formik); nextStep1(values) }}>
            <div>
              <h2>Name {enableNext.toString()}</h2>
              <TextBox
                label="First Name"
                name="firstName"
                type="text"
                placeholder="Enter your username"
              />
              <TextBox
                label="Last Name"
                name="lastName"
                type="text"
                placeholder="Enter your username"
              />
              <Button
                isButtonLight={false}
                buttonName='Next'
                disable={!(isValid && dirty)}
              />
            </div>
          </form>
        )}
      </Formik>)
  }

  const EmailForm = () => {
    const [txtEmail, setTxtEmail] = useState('')
    const [txtEmailCofirm, setTxtEmailConfirm] = useState('')

    const nextStep2 = (values) => {
      dispatch(actions.userCreate({ type: 'email', email: values.email }))
      dispatch(actions.userCreate({ type: 'emailForm', emailForm: false }))
      dispatch(actions.userCreate({ type: 'confirmedForm', confirmedForm: true }))
    }
    const oneStepBack = (errors) => {
      console.log(errors);
      dispatch(actions.userCreate({ type: 'email', email: '' }))
      dispatch(actions.userCreate({ type: 'nameForm', nameForm: true }))
      dispatch(actions.userCreate({ type: 'emailForm', emailForm: false }))
      dispatch(actions.userCreate({ type: 'confirmedForm', confirmedForm: false }))
    }
    return (
      <Formik
        initialValues={{ email: "", email2: "" }}
        validationSchema={emailFormSchema}
        validateOnChange={true}
        validateOnBlur={true}
        onSubmit={nextStep2}
      >
        {({ isSubmitting, isValid, dirty, handleChange, values, errors }) => (
          <form onSubmit={(event) => { event.preventDefault(); console.log(errors); nextStep2(values) }}>
            <div>
              <h2>Email{txtEmail}</h2>
              <TextBox
                label="email"
                name="email"
                type="text"

              />
              <TextBox
                label="Confirm email"
                name="email2"
                type="text"

              />
              <Button
                isButtonLight={true}
                buttonName='Back'
                style={{ marginRight: 10 }}
                buttonClick={oneStepBack}

              />
              <Button
                isButtonLight={false}
                buttonName='Next'
                disable={!(isValid && dirty)}
              />
            </div>
          </form>
        )}
      </Formik>
    )

  }
  const ConfirmationForm = () => {
    const oneStepBack = () => {

      //dispatch(actions.userCreate({ type: 'email', email: txtEmail }))

      dispatch(actions.userCreate({ type: 'emailForm', emailForm: true }))
      dispatch(actions.userCreate({ type: 'confirmedForm', confirmedForm: false }))
      console.log(nameForm, emailForm, confirmedForm);
    }
    return (
      <div>
        <h2>Confirmation</h2>
        <p><span className={styles.label__name}>First Name</span><label>{firstName}</label></p>
        <p><span className={styles.label__name}>Last Name</span><label>{lastName}</label></p>
        <p><span className={styles.label__name}>Email Name</span><label>{email}</label></p>
        <Button
          isButtonLight={true}
          buttonName='Back'
          style={{ marginRight: 10 }}
          buttonClick={oneStepBack}
        />
        <Button
          isButtonLight={false}
          buttonName='Submit'

        />
      </div>)
  }



  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header formOne={nameForm} formTwo={emailForm} formThree={confirmedForm} />
        {nameForm && <NameForm />}
        {emailForm && <EmailForm />}
        {confirmedForm && <ConfirmationForm />}
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
