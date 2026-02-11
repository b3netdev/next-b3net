"use client";

import React from "react";
import { useFormik } from "formik";

type FormValues = {
  name: string;
  email: string;
  phone: string;
};

const validate = (values: FormValues) => {
  const errors: Partial<Record<keyof FormValues, string>> = {};

  if (!values.name.trim()) errors.name = "Name is required";

  if (!values.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email";
  }

  if (!values.phone.trim()) {
    errors.phone = "Phone number is required";
  } else if (!/^[0-9+\-\s()]{7,20}$/.test(values.phone)) {
    errors.phone = "Enter a valid phone number";
  }

  return errors;
};

export default function NewsletterForm() {
  const formik = useFormik<FormValues>({
    initialValues: { name: "", email: "", phone: "" },
    validate,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        // 🔁 Replace this with your actual endpoint
        // await fetch("/api/newsletter", { method: "POST", body: JSON.stringify(values) })
        console.log("Newsletter submit:", values);

        resetForm();
      } finally {
        setSubmitting(false);
      }
    },
  });

  const fieldClass = (touched?: boolean, error?: string) =>
    `form-control${touched && error ? " is-invalid" : ""}`;

  return (
    <div className="newsletter-blog">
      <h3>Join Our Newsletter</h3>

      <form onSubmit={formik.handleSubmit} noValidate>
        <div className="input-group-icon">
          <i className="fa-solid fa-circle-user"></i>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className={fieldClass(formik.touched.name, formik.errors.name)}
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.touched.name && formik.errors.name && (
          <div className="invalid-feedback d-block">{formik.errors.name}</div>
        )}

        <div className="input-group-icon">
          <i className="fa-solid fa-envelope"></i>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className={fieldClass(formik.touched.email, formik.errors.email)}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.touched.email && formik.errors.email && (
          <div className="invalid-feedback d-block">{formik.errors.email}</div>
        )}

        <div className="input-group-icon">
          <i className="fa-solid fa-phone"></i>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className={fieldClass(formik.touched.phone, formik.errors.phone)}
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.touched.phone && formik.errors.phone && (
          <div className="invalid-feedback d-block">{formik.errors.phone}</div>
        )}

        <div className="mb-0 text-end pt-md-4">
          <button
            type="submit"
            className="btn btn-primary orange-1"
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? "SUBMITTING..." : "SUBMIT NOW"}{" "}
            <i className="fa-solid fa-arrow-right-long"></i>
          </button>
        </div>
      </form>
    </div>
  );
}
