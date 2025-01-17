import { Field, Form, Formik } from 'formik';
import * as yup from 'yup'
import { useState } from 'react';

import signupUser from '../../services/signupService';

const signupSchema = yup.object().shape({
  email: yup.string().email().required("Email required"),
  username: yup.string().required("Username required"),
  password: yup.string().required("Password required")
});

type FormikSignupData = {
  email: string;
  username: string;
  password: string;
};


const SignupComponent = () => {
  const [errorsLog, setErrorsLog] = useState("");
  const [success, setSuccess] = useState(false);
  const [errorsAnimation, setErrorsAnimation] = useState({
    email: false,
    username: false,
    password: false
  });

  const handleSignupUser = async (formikData: FormikSignupData) => {
    try {
      await signupUser(formikData)
      setSuccess(true);

    } catch (error) {
      if (error instanceof TypeError) {
        setErrorsLog("Server Error, please contact admin");
      } else if (error instanceof Error) {
        setErrorsLog(`${error.message}`);
      } else {
        setErrorsLog("Client Error");
      }
    }

  };

  const handleErrorsOnClick = (email: string, username: string, password: string) => {

    const showErrorsAnimation = {
      email: email === "",
      username: username === "",
      password: password === ""
    };

    setErrorsAnimation(showErrorsAnimation);

    if (showErrorsAnimation.username || showErrorsAnimation.password || showErrorsAnimation.email) {
      const errorAnimationTimeout = setTimeout(() => setErrorsAnimation({
        email: false,
        username: false,
        password: false
      }), 500);

      return () => clearTimeout(errorAnimationTimeout);
    }
  };

  return (
    <>
    {!success && 
    <Formik
      validationSchema={signupSchema}
      onSubmit={handleSignupUser}
      initialValues={{
        email: "",
        username: "",
        password: ""
      }}
    >
      {({ values, isSubmitting }) => (
        <Form>
          <div className='forms-input-div'>
            <Field
              type="text"
              name="username"
              placeholder="Username"
              className={errorsAnimation.username ? "inputError" : ""}
            />
          </div>
          <div className='forms-input-div'>
            <Field
              type="password"
              name="password"
              placeholder="Password"
              className={errorsAnimation.password ? "inputError" : ""}
            />
          </div>
          <div className='forms-input-div'>
            <Field
              type="text"
              name="email"
              placeholder="Email"
              className={errorsAnimation.email ? "inputError" : ""}
            />
          </div>
          <div className='forms-input-div'>
            {isSubmitting ?
              <div className='loader'>
              </div>
              :
              <button
                type="submit"
                className='buttonsAuth'
                onClick={() => {
                  handleErrorsOnClick(values.email, values.username, values.password)
                }}>
                Sign up!
              </button>
            }
          </div>
          <div className='forms-error-div'>
            <p>{errorsLog}</p>
          </div>
        </Form>
      )}
    </Formik>}
    {success && 
    <div className='forms-success-div'>
      <p>You have succefully Signed up!</p>
    </div>
    }
    </>

  )
}

export default SignupComponent