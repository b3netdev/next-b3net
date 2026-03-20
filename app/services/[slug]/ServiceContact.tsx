"use client";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Element } from "react-scroll";
import { useForm } from "@/hooks/useForm";
import { useRouter } from "next/navigation";
import CircularProgress from "@mui/material/CircularProgress";

type FormValues = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  companyName: string;
  companyWebsite: string;
  message: string;
};
type ServiceContactProps = {
  title?: string;
  showTitle?: boolean;
};

const ServiceContact: React.FC<ServiceContactProps> = ({ title = "Request a FREE Consultation", showTitle = true,
}) => {
  const { submitcontact, loading } = useForm()
  const router = useRouter()
  const formik = useFormik<FormValues>({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      companyName: "",
      companyWebsite: "",
      message: "",
    },
    validationSchema: Yup.object({
      first_name: Yup.string().trim().required("First Name is required"),
      last_name: Yup.string().trim().required("Last Name is required"),
      email: Yup.string().trim().email("Invalid email").required("Email is required"),
      phone: Yup.string().trim().required("Phone No is required"),
      companyName: Yup.string().trim().required("Company name required"),
      companyWebsite: Yup.string()
        .trim()
        .test("is-valid-url-or-empty", "Invalid website URL (include https://)", (val) => {
          if (!val) return true;
          return Yup.string().url().isValidSync(val);
        }),
      message: Yup.string().trim().required("Message is required"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
      
        const data = await submitcontact(formik?.values, 12129)
        
        if (data?.status === "mail_sent") {
          router.push("/thankyou");
        }
        resetForm();
      } catch (error) {
        console.error("Submit error:", error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  const fieldError = (key: keyof FormValues) => {
    const touched = formik.touched[key];
    const err = formik.errors[key];
    return touched && err ? String(err) : "";
  };

  const hasErr = (key: keyof FormValues) => !!fieldError(key);

  return (
    <Element name="contact-form">
      <div className="bottom-form" id="contact-form">
        <div className="container">
          <div className="common-form shadow-1 bg-white p-3 p-sm-5">
            <div className="heading5 mb-3 mb-md-5 text-center">
              {
                showTitle &&
                <h2>{title}</h2>
              }
            </div>

            <div role="form" className="wpcf7" id="wpcf7-f12129-o3" lang="en-US" dir="ltr">
              <div className="screen-reader-response">
                <p role="status" aria-live="polite" aria-atomic="true"></p> <ul></ul>
              </div>

              <form className="wpcf7-form init" data-status="init" onSubmit={formik.handleSubmit}>
                <div className="row mb-3">
                  <div className="col-md-6 form-group">
                    <label>
                      First Name <span>*</span>
                    </label>
                    <br />
                    <span className="wpcf7-form-control-wrap" data-name="first-name">
                      <input
                        type="text"
                        name="first_name"
                        value={formik.values.first_name || " "}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        size={40}
                        className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control"
                        aria-required="true"
                        aria-invalid={hasErr("first_name") ? "true" : "false"}
                        aria-describedby={hasErr("first_name") ? "first_name-error" : undefined}
                      />
                    </span>
                    {fieldError("first_name") && (
                      <small id="first_name-error" className="text-danger d-block mt-1">
                        {fieldError("first_name")}
                      </small>
                    )}
                  </div>

                  <div className="col-md-6 form-group">
                    <label>
                      Last Name <span>*</span>
                    </label>
                    <br />
                    <span className="wpcf7-form-control-wrap" data-name="last-name">
                      <input
                        type="text"
                        name="last_name"
                        value={formik.values.last_name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        size={40}
                        className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control"
                        aria-required="true"
                        aria-invalid={hasErr("last_name") ? "true" : "false"}
                        aria-describedby={hasErr("last_name") ? "last_name-error" : undefined}
                      />
                    </span>
                    {fieldError("last_name") && (
                      <small id="last_name-error" className="text-danger d-block mt-1">
                        {fieldError("last_name")}
                      </small>
                    )}
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6 form-group">
                    <label>
                      Email <span>*</span>
                    </label>
                    <br />
                    <span className="wpcf7-form-control-wrap" data-name="email">
                      <input
                        type="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        size={40}
                        className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email form-control"
                        aria-required="true"
                        aria-invalid={hasErr("email") ? "true" : "false"}
                        aria-describedby={hasErr("email") ? "email-error" : undefined}
                      />
                    </span>
                    {fieldError("email") && (
                      <small id="email-error" className="text-danger d-block mt-1">
                        {fieldError("email")}
                      </small>
                    )}
                  </div>

                  <div className="col-md-6 form-group">
                    <label>
                      Phone No <span>*</span>
                    </label>
                    <br />
                    <span className="wpcf7-form-control-wrap" data-name="phone">
                      <input
                        type="tel"
                        name="phone"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        size={40}
                        className="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel form-control"
                        aria-required="true"
                        aria-invalid={hasErr("phone") ? "true" : "false"}
                        aria-describedby={hasErr("phone") ? "phone-error" : undefined}
                      />
                    </span>
                    {fieldError("phone") && (
                      <small id="phone-error" className="text-danger d-block mt-1">
                        {fieldError("phone")}
                      </small>
                    )}
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6 form-group">
                    <label>Company Name</label>
                    <br />
                    <span className="wpcf7-form-control-wrap" data-name="company-name">
                      <input
                        type="text"
                        name="companyName"
                        value={formik.values.companyName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        size={40}
                        className="wpcf7-form-control wpcf7-text form-control"
                        aria-invalid={hasErr("companyName") ? "true" : "false"}
                        aria-describedby={hasErr("companyName") ? "companyName-error" : undefined}
                      />
                    </span>
                    {fieldError("companyName") && (
                      <small id="companyName-error" className="text-danger d-block mt-1">
                        {fieldError("companyName")}
                      </small>
                    )}
                  </div>

                  <div className="col-md-6 form-group">
                    <label>Company Website</label>
                    <br />
                    <span className="wpcf7-form-control-wrap" data-name="company-website">
                      <input
                        type="url"
                        name="companyWebsite"
                        value={formik.values.companyWebsite}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        size={40}
                        className="wpcf7-form-control wpcf7-text wpcf7-url wpcf7-validates-as-url form-control"
                        aria-invalid={hasErr("companyWebsite") ? "true" : "false"}
                        aria-describedby={hasErr("companyWebsite") ? "companyWebsite-error" : undefined}
                      />
                    </span>
                    {fieldError("companyWebsite") && (
                      <small id="companyWebsite-error" className="text-danger d-block mt-1">
                        {fieldError("companyWebsite")}
                      </small>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label>
                    Your Message <span>*</span>
                  </label>
                  <br />
                  <span className="wpcf7-form-control-wrap" data-name="message">
                    <textarea
                      name="message"
                      cols={40}
                      rows={10}
                      className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required form-control"
                      aria-required="true"
                      aria-invalid={hasErr("message") ? "true" : "false"}
                      aria-describedby={hasErr("message") ? "message-error" : undefined}
                      value={formik.values.message}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    ></textarea>
                  </span>
                  {fieldError("message") && (
                    <small id="message-error" className="text-danger d-block mt-1">
                      {fieldError("message")}
                    </small>
                  )}
                </div>

                <div className="mt-md-3 text-center">
                  {/* <input
                    type="submit"
                    className="wpcf7-form-control has-spinner wpcf7-submit services-button"
                    value={formik.isSubmitting ? "Submitting..." : "SUBMIT NOW"}
                    disabled={formik.isSubmitting}
                  /> */}
                  <button type="submit"
                    className="wpcf7-form-control has-spinner wpcf7-submit services-button"
                    disabled={loading}
                  >
                    {loading ? (
                      <CircularProgress size={20} sx={{ color: "#fff" }} className="mx-16" />
                    ) : (
                      <>
                        Submit Now <i className="fa-solid fa-arrow-right-long"></i>
                      </>
                    )}
                  </button>
                </div>

                <div className="wpcf7-response-output" aria-hidden="true"></div>
              </form>
            </div>{" "}
          </div>
        </div>
      </div>
    </Element>
  );
};

export default ServiceContact;
