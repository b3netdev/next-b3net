"use client";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

type ContactUsFormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const validationSchema: Yup.ObjectSchema<ContactUsFormValues> = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Mobile number is required"),
  message: Yup.string().required("Message is required"),
});

export default function ContactUsForm() {
  const formik = useFormik<ContactUsFormValues>({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log("Contact Form Data:", values);

      // ✅ TODO: submit to API route / CF7 endpoint here
      // await fetch("/api/contact", { method: "POST", body: JSON.stringify(values) })
    },
  });

  return (
    <section className="contact-sec bg-grey sp">
      <div className="container px-4">
        <div className="row justify-content-center mb-2 mb-md-4">
          <div className="col-lg-12 text-start">
            <div className="heading-title">
              <h2>
                Send Us a <span>Message</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="common-form pb-5">
          <form className="common-form" onSubmit={formik.handleSubmit}>
            <div className="row">
              <div className="col-12 col-md-6 form-group">
                <label>
                  Name <span>*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Enter your name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name && (
                  <small className="text-danger">{formik.errors.name}</small>
                )}
              </div>

              <div className="col-12 col-md-6 form-group">
                <label>
                  Email <span>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter your email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email && (
                  <small className="text-danger">{formik.errors.email}</small>
                )}
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-md-6 form-group">
                <label>
                  Mobile Number <span>*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="form-control"
                  placeholder="Enter your mobile number"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                />
                {formik.touched.phone && formik.errors.phone && (
                  <small className="text-danger">{formik.errors.phone}</small>
                )}
              </div>
            </div>

            <div className="row">
              <div className="col-12 form-group">
                <label>
                  Message <span>*</span>
                </label>
                <textarea
                  name="message"
                  className="form-control"
                  rows={5}
                  placeholder="Enter your message"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                />
                {formik.touched.message && formik.errors.message && (
                  <small className="text-danger">{formik.errors.message}</small>
                )}
              </div>
            </div>

            <div className="mb-0 text-center pt-md-3">
              <button type="submit" className="btn btn-primary">
                Submit Now <i className="fa-solid fa-arrow-right-long"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
