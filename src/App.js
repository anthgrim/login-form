import React from "react";
import './App.css'
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

      if(!values.password) errors.password = "Field Required"
      
      
      return errors
    }
  });

  const errorStyles = {
    fontSize: "15px",
    color: "#e5383b",
    width: "fit-content",
    margin: "0px",
    padding: "0"
  }

  return (
    <div className="container">
      
        <form className="custom-form" onSubmit={formik.handleSubmit}>

          <div className="title">Welcome!</div>

          <div className="label">Username</div>
          <input className="custom-textbox" name="email" id="emailField" type="text" onChange={formik.handleChange} value={formik.values.email}/>
          {formik.errors.email ? <div style={errorStyles} id="emailError">{formik.errors.email}</div> : null}

          <div className="label">Password</div>
          <input className="custom-textbox" name="password" id="pswField" type="text" onChange={formik.handleChange} value={formik.values.password}/>
          {formik.errors.password ? <div style={errorStyles} id="pswError">{formik.errors.password}</div> : null}

          <br/>
          <button className="custom-btn" type="submit" id="submitBtn">Submit</button>
        </form>
    </div>
  );
}

export default App;
