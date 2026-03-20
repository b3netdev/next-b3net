"use client";
import { useFormik } from 'formik';
import React from 'react'
import * as Yup from "yup";

const BlogDetailForm = () => {


    const formik = useFormik({
        initialValues: {
          name: "",
          email: "",
          phone: "",
        },
        validationSchema: Yup.object({
          name: Yup.string()
            .trim()
            .min(2, "Name must be at least 2 characters")
            .required("Name is required"),
          email: Yup.string()
            .trim()
            .email("Enter a valid email address")
            .required("Email is required"),
          phone: Yup.string()
            .trim()
            .matches(/^[0-9+\-() ]{7,20}$/, "Enter a valid phone number")
            .required("Phone number is required"),
        }),
        onSubmit: (values) => {
    
          console.log("Form Values:", values);
        },
      });
  return (
    
        <form onSubmit={formik.handleSubmit} noValidate>
                      <div className="input-group-icon">
                        <i className="fa-solid fa-circle-user"></i>
                        <input
                          type="text"
                          placeholder="Name"
                          name="name"
                          value={formik.values.name}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                      </div>
                      {formik.touched.name && formik.errors.name ? (
                        <small className="text-danger d-block mt-1">{formik.errors.name}</small>
                      ) : null}

                      <div className="input-group-icon">
                        <i className="fa-solid fa-envelope"></i>
                        <input
                          type="email"
                          placeholder="Email Address"
                          name="email"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                      </div>
                      {formik.touched.email && formik.errors.email ? (
                        <small className="text-danger d-block mt-1">{formik.errors.email}</small>
                      ) : null}

                      <div className="input-group-icon">
                        <i className="fa-solid fa-phone"></i>
                        <input
                          type="tel"
                          placeholder="Phone Number"
                          name="phone"
                          value={formik.values.phone}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                      </div>
                      {formik.touched.phone && formik.errors.phone ? (
                        <small className="text-danger d-block mt-1">{formik.errors.phone}</small>
                      ) : null}

                      <div className="mb-0 text-end pt-md-4">
                        <button type="submit" className="btn btn-primary orange-1">
                          SUBMIT NOW <i className="fa-solid fa-arrow-right-long"></i>
                        </button>
                      </div>
                    </form>
  )
}

export default BlogDetailForm
