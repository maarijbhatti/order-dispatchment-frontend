import React, { Fragment, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { InputField } from "../../components/InputField";
//import Form from "react-bootstrap/Form";
//import Button from "react-bootstrap/Button";
import { Formik, Form } from "formik";
import "./Login.css";
import useLogin from './../../hooks/useLogin';
import { toErrorMap } from "../../utils/toErrorMap";

export default function Login() {

  const [{ showPass, setShowPass }, login] = useLogin()

  return (
    <Fragment>
      <div className="main-wrap">
        <div className="nav-header bg-transparent shadow-none border-0">
          <div className="nav-top w-100">
            {/* <img
              src="assets/images/sammartin391-1.png"
              style={{ width: "250px" }}
            /> */}
            <button className="nav-menu me-0 ms-auto"></button>

            <a
              href="/login"
              className=" fw-500 text-white font-xsss p-3 ms-auto w100 text-center lh-20 rounded-xl"
            ></a>
            <a
              href="/register"
              className=" fw-500 text-white font-xsss p-3 ms-2 w100 text-center lh-20 rounded-xl"
            ></a>
          </div>
        </div>
        <div className="row">
          <div
            className="col-xl-5 d-none d-xl-block p-0 vh-100 bg-image-cover bg-no-repeat"
            style={{
              backgroundImage: `url("assets/images/order-dispatching.png")`,
            }}
          ></div>
          <div className="col-xl-7 vh-100 align-items-center d-flex rounded-3 overflow-hidden">
            <div className="card shadow-none border-0 ms-auto me-auto login-card">
              <Formik
                initialValues={{
                  password: "",
                  email: "",
                  showpass: showPass,
                }}
                onSubmit={async (values, { setErrors }) => {
                  const response = login(values);
                  if (response?.errors[0])
                    setErrors(toErrorMap(response.errors));
                  // else history.replace("/");
                }}
              >
                {({ isSubmitting, values, setFieldValue }) => (
                  <Form>
                    <div className="card-body rounded-0 text-left">
                      <h2 className="fw-600 display1-size display2-md-size mb-3">
                        Website name
                      </h2>

                      <div className="form-group icon-input mb-3">
                        <InputField
                          name="email"
                          type="text"
                          className="style2-input form-control font-xsss input-field"
                          placeholder="Email"
                        />
                      </div>
                      <div className="form-group icon-input mb-1">
                        <InputField
                          name="password"
                          type={showPass ? "text" : "Password"}
                          className="style2-input form-control font-xss ls-3 input-field"
                          placeholder="Password"
                        />
                      </div>
                      <div className="form-check text-left mb-3">
                        <input
                          name="showpass"
                          type="checkbox"
                          className="form-check-input mt-2"
                          onChange={() => setShowPass(!showPass)}
                        />
                        <label className="form-check-label font-xsss text-grey-500">
                          Show password
                        </label>

                      </div>

                      <div className="col-sm-12 p-0 text-left">
                        <div className="form-group mb-1">
                          <div className="form-control text-center style2-input text-white fw-600 bg-purple border-0 p-0 ">
                            {isSubmitting ? (
                              <Spinner animation="border" />
                            ) : (
                              <Button
                                className="form-control text-center style2-input text-white fw-600 bg-purple border-0 p-0"
                                type="submit"
                              >
                                Login
                              </Button>
                            )}
                          </div>
                        </div>
                        <h6 className="text-grey-500 font-xsss fw-500 mt-0 mb-0 lh-32 text-center">
                          Forgot your
                          <a
                            href="/forgot"
                            style={{ color: "#6741A9" }}
                            className="fw-700 ms-1"
                          >
                            password?
                          </a>
                        </h6>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
