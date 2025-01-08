import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

import forgetPassword from '../../services/forgetPassService';

const signupSchema = yup.object().shape({
  email: yup.string().email().required("Email required"),
});

type FormikFpassData = {
  email: string;
};

const ForgetPassComponent = () => {
  const [errorsLog, setErrorsLog] = useState("");
  const [success, setSuccess] = useState(false);
  const [errorsAnimation, setErrorsAnimation] = useState(false);

  const handleForgetPass = async (formikData: FormikFpassData) => {

    try {

      const emailJsData = await forgetPassword(formikData)

      await emailjs.send(
        import.meta.env.VITE_EJS_SERVICE_ID,
        import.meta.env.VITE_EJS_TEMPLATE_IDFP,
        emailJsData,
        import.meta.env.VITE_EJS_PUBLIC_KEY,
      );

      setSuccess(true);

    } catch (error) {
      if (error instanceof TypeError) {
        setErrorsLog("Server Error, please contact admin");
      } else if (error instanceof Error) {
        setErrorsLog(`${error.message}`);
      } else {
        setErrorsLog("Client Error");
      };
    };

  };

  const handleErrorsOnClick = (email: string) => {

    if (email === "") {
      setErrorsAnimation(true);
      const errorAnimationTimeout = setTimeout(() => setErrorsAnimation(false), 500);
      return clearTimeout(errorAnimationTimeout);
    };

  };

  return (
    <>
      {!success &&
        <Formik
          validationSchema={signupSchema}
          onSubmit={handleForgetPass}
          initialValues={{
            email: "",
          }}
        >
          {({ values, isSubmitting }) => (
            <Form>
              <div className='formsInputDiv'>
                <Field
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  className={errorsAnimation ? "inputError" : ""}
                />
              </div>
              <div className='formsInputDiv'>
                {isSubmitting ?
                  <div className='loader'>
                  </div>
                  :
                  <button
                    type="submit"
                    className='buttonsAuth'
                    onClick={() => {
                      handleErrorsOnClick(values.email)
                    }}>
                    Forgot Password
                  </button>
                }
              </div>
              <div className='formsErrorDiv'>
                <p>{errorsLog}</p>
              </div>
            </Form>
          )}
        </Formik>}
      {success &&
        <div className='formSuccess'>
          <h3>Your temporary password has been emailed to you. Please wait for 5 minutes if you have not recieved any email.</h3>
        </div>
      }
    </>

  )
}

export default ForgetPassComponent