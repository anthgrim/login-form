import React from "react";
// TODO: import useFormik from formik library
import {useFormik} from 'formik'

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: values => {
      console.log(values);
      alert("Login Successful")
    },
    validate: values => {
      let errors = {}

      if(!values.email) {
        errors.email = "Field Required";
      }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = "Username should be an email"
      }

      if(!values.password) errors.password = "Field Required";
      
      return errors
    }
  });

  const errorStyles = {
    color: "red"
  }

  return (
    <div>
      <p>
        <form onSubmit={formik.handleSubmit}>

          <div>Email</div>
          <input name="email" id="emailField" type="text" onChange={formik.handleChange} value={formik.values.email}/>
          {formik.errors.email ? <div style={errorStyles} id="emailError">{formik.errors.email}</div> : null}

          <div>Password</div>
          <input name="password" id="pswField" type="text" onChange={formik.handleChange} value={formik.values.password}/>
          {formik.errors.password ? <div style={errorStyles} id="pswError">{formik.errors.password}</div> : null}

          <br/>
          <button type="submit" id="submitBtn">Submit</button>
        </form>
      </p>
    </div>
  );
}

export default App;
