import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import loginUser from '../../services/loginService';
import { useState } from 'react';
import { useAuth } from '../../contexts/useAuth';
import { useNavigate } from 'react-router-dom';

const loginSchema = yup.object().shape({
  username: yup.string().required("Username required"),
  password: yup.string().required("Password required")
});

type FormikLoginData = {
  username: string;
  password: string;
};

// type LoginComponentProps = {

// };

const LoginComponent = () => {
  const [errorsLog, setErrorsLog] = useState("");
  const [errorsAnimation, setErrorsAnimation] = useState({
    username: false,
    password: false
  });
  const navigate = useNavigate();
  const { login } = useAuth()

  const handleLoginUser = async (formikData: FormikLoginData) => {
    try {
      await loginUser(formikData)
      const token = localStorage.getItem("token");
      if (token) {
        const enter = login(true);
        if (enter !== null){
          navigate("/verified") 
        }
      };

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

  const handleErrorsOnClick = (username: string, password: string) => {

    const showErrorsAnimation = {
      username: username === "",
      password: password === ""
    };

    setErrorsAnimation(showErrorsAnimation);

    if (showErrorsAnimation.username || showErrorsAnimation.password) {
      const errorAnimationTimeout = setTimeout(() => setErrorsAnimation({
        username: false,
        password: false
      }), 500);

      return () => clearTimeout(errorAnimationTimeout);
    }

  };

  return (
    <Formik
      validationSchema={loginSchema}
      onSubmit={handleLoginUser}
      initialValues={{
        username: "",
        password: ""
      }}
    >
      {({ values, isSubmitting }) => (
        <Form>
          <div className='formsInputDiv'>
            <Field
              type="text"
              name="username"
              placeholder="Username"
              className={errorsAnimation.username ? "inputError" : ""}
            />
          </div>
          <div className='formsInputDiv'>
            <Field
              type="password"
              name="password"
              placeholder="Password"
              className={errorsAnimation.password ? "inputError" : ""}
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
                  handleErrorsOnClick(values.username, values.password)
                }}>
                Login
              </button>
            }
          </div>
          <div className='formsErrorDiv'>
            <p>{errorsLog}</p>
          </div>
        </Form>
      )}


    </Formik>

  )
}

export default LoginComponent