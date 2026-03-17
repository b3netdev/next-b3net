"use client";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useForm } from "@/hooks/useForm";
import { useRouter } from "next/navigation";
import CircularProgress from '@mui/material/CircularProgress';

type ContactUsFormValues = {
  fname: string;
  email: string;
  phone: string;
  Message: string;
  subject: string
};

const validationSchema: any = Yup.object({
  fname: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Mobile number is required"),
  Message: Yup.string().required("Message is required"),
});

export default function ContactUsForm() {
  const { submitcontact, loading, error } = useForm()
  const router = useRouter()
  const formik = useFormik<ContactUsFormValues>({
    initialValues: {
      fname: "",
      email: "",
      phone: "",
      Message: "",
      subject: ""
    },
    validationSchema,
    onSubmit: async (values) => {
      // console.log(formik.values,"data")
      // return
      const data = await submitcontact(formik.values, 12474)
      if (data?.status === "mail_sent") {
        router.push("/thankyou");
      }
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
                  name="fname"
                  className="form-control"
                  placeholder="Enter your fname"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.fname}
                />
                {formik.touched.fname && formik.errors.fname && (
                  <small className="text-danger">{formik.errors.fname}</small>
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

              <div className="col-12 col-md-6 form-group">
                <label>
                  Subject <span>*</span>
                </label>
                <input
                  type="tel"
                  name="subject"
                  className="form-control"
                  placeholder="Enter subject"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.subject}
                />
                {formik.touched.subject && formik.errors.subject && (
                  <small className="text-danger">{formik.errors.subject}</small>
                )}

              </div>
            </div>
            <div className="row">
              <div className="col-12 form-group">
                <label>
                  Message <span>*</span>
                </label>
                <textarea
                  name="Message"
                  className="form-control"
                  rows={5}
                  placeholder="Enter your Message"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Message}
                />
                {formik.touched.Message && formik.errors.Message && (
                  <small className="text-danger">{formik.errors.Message}</small>
                )}
              </div>
            </div>

            <div className="mb-0 text-center pt-md-3">
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? (
                <CircularProgress size={20} sx={{ color: "#fff" }} className="mx-16" />
                ) : (
                  <>
                    Submit Now <i className="fa-solid fa-arrow-right-long"></i>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
