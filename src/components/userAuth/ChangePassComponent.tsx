import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

import changePassword from '../../services/changePassService';

const changePasswordSchema = yup.object().shape({
  oldPassword: yup.string().required("Old Password required"),
  newPassword: yup.string().required("New Password required"),
});

type FormikCpassData = {
  oldPassword: string;
  newPassword: string;
};

const ChangePassComponent = () => {
  const [errorsLog, setErrorsLog] = useState("");
  const [success, setSuccess] = useState(false);
  const [errorsAnimation, setErrorsAnimation] = useState({
    oldPassword: false,
    newPassword: false
  });

  const handleChangePass = async (formikData: FormikCpassData) => {
    try {
      const emailJsData = await changePassword(formikData)

      await emailjs.send(
        import.meta.env.VITE_EJS_SERVICE_ID,
        import.meta.env.VITE_EJS_TEMPLATE_IDCP,
        emailJsData,
        import.meta.env.VITE_EJS_PUBLIC_KEY,
      );

      setSuccess(true)

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

  const handleErrorsOnClick = (oldpassword: string, newpassword: string) => {

    const showErrorsAnimation = {
      oldPassword: oldpassword === "",
      newPassword: newpassword === ""
    };

    setErrorsAnimation(showErrorsAnimation);

    if (showErrorsAnimation.oldPassword || showErrorsAnimation.newPassword) {
      const errorAnimationTimeout = setTimeout(() => setErrorsAnimation({
        oldPassword: false,
        newPassword: false
      }), 500);

      return () => clearTimeout(errorAnimationTimeout);
    }

  };

  return (
    <>
    {!success && <Formik
      validationSchema={changePasswordSchema}
      onSubmit={handleChangePass}
      initialValues={{
        oldPassword: "",
        newPassword: ""
      }}
    >
      {({ values, isSubmitting }) => (
        <Form>
          <div className='formsInputDiv'>
            <Field
              type="password"
              name="oldPassword"
              placeholder="Old Password"
              className={errorsAnimation.oldPassword ? "inputError" : ""}
            />
          </div>
          <div className='formsInputDiv'>
            <Field
              type="password"
              name="newPassword"
              placeholder="New Password"
              className={errorsAnimation.newPassword ? "inputError" : ""}
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
                  handleErrorsOnClick(values.oldPassword, values.newPassword)
                }}>
                Change Password
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
        <h3>Password Changed!</h3>
      </div>
    }
</>
  )
}

export default ChangePassComponent