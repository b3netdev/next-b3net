"use client";
import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
const ServiceContact1 = () => {

    const formik = useFormik({
        initialValues: {
            fname: "",
            phone: "",
            company: "",
            website: "",
            email: "",
            subject: "",
            Message: "",
        },
        validationSchema: Yup.object({
            fname: Yup.string().trim().required("Your name is required"),
            phone: Yup.string()
                .trim()
                .required("Phone number is required")
                .matches(/^[0-9+\-\s()]{7,20}$/, "Enter a valid phone number"),
            company: Yup.string().trim(),
            website: Yup.string()
                .trim()
                .test("is-valid-url", "Enter a valid website URL", (val) => {
                    if (!val) return true;

                    const v = val.trim();
                    try {
                        const url =
                            v.startsWith("http://") || v.startsWith("https://")
                                ? v
                                : `https://${v}`;
                        new URL(url);
                        return true;
                    } catch {
                        return false;
                    }
                }),
            email: Yup.string()
                .trim()
                .email("Enter a valid email")
                .required("Email is required"),
            subject: Yup.string().trim().required("Subject is required"),
            Message: Yup.string().trim().required("Message is required"),
        }),
        onSubmit: async (values, { resetForm, setSubmitting }) => {
            try {
                // TODO: your submit API call here
                console.log("Submit values:", values);
                // resetForm();
            } finally {
                setSubmitting(false);
            }
        },
    });
    return (
        <div>
            <form onSubmit={formik.handleSubmit} noValidate>
                <div className="quote-form">
                    <div className="inputrow">
                        <div className="inputcol">
                            <div className="inputsblocks">
                                <span
                                    className="wpcf7-form-control-wrap"
                                    data-name="fname"
                                >
                                    <input
                                        type="text"
                                        name="fname"
                                        value={formik.values.fname}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        size={40}
                                        className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required input-control"
                                        aria-required="true"
                                        aria-invalid={
                                            formik.touched.fname && formik.errors.fname
                                                ? "true"
                                                : "false"
                                        }
                                        placeholder="Your name"
                                    />
                                </span>

                                {formik.touched.fname && formik.errors.fname ? (
                                    <small
                                        style={{
                                            color: "red",
                                            display: "block",
                                            marginTop: "6px",
                                        }}
                                    >
                                        {formik.errors.fname}
                                    </small>
                                ) : null}
                            </div>
                        </div>
                    </div>

                    <div className="inputrow nitro-offscreen">
                        <div className="inputcol">
                            <div className="inputsblocks">
                                <span
                                    className="wpcf7-form-control-wrap"
                                    data-name="phone"
                                >
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formik.values.phone}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        size={40}
                                        className="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel input-control"
                                        aria-required="true"
                                        aria-invalid={
                                            formik.touched.phone && formik.errors.phone
                                                ? "true"
                                                : "false"
                                        }
                                        placeholder="Phone no"
                                    />
                                </span>

                                {formik.touched.phone && formik.errors.phone ? (
                                    <small
                                        style={{
                                            color: "red",
                                            display: "block",
                                            marginTop: "6px",
                                        }}
                                    >
                                        {formik.errors.phone}
                                    </small>
                                ) : null}
                            </div>
                        </div>
                    </div>

                    <div className="inputrow nitro-offscreen">
                        <div className="inputcol">
                            <div className="inputsblocks">
                                <span
                                    className="wpcf7-form-control-wrap"
                                    data-name="company"
                                >
                                    <input
                                        type="text"
                                        name="company"
                                        value={formik.values.company}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        size={40}
                                        className="wpcf7-form-control wpcf7-text input-control"
                                        aria-invalid={
                                            formik.touched.company &&
                                                formik.errors.company
                                                ? "true"
                                                : "false"
                                        }
                                        placeholder="Company"
                                    />
                                </span>

                                {formik.touched.company &&
                                    formik.errors.company ? (
                                    <small
                                        style={{
                                            color: "red",
                                            display: "block",
                                            marginTop: "6px",
                                        }}
                                    >
                                        {formik.errors.company}
                                    </small>
                                ) : null}
                            </div>
                        </div>

                        <div className="inputcol">
                            <div className="inputsblocks">
                                <span
                                    className="wpcf7-form-control-wrap"
                                    data-name="website"
                                >
                                    <input
                                        type="text"
                                        name="website"
                                        value={formik.values.website}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        size={40}
                                        className="wpcf7-form-control wpcf7-text input-control"
                                        aria-invalid={
                                            formik.touched.website &&
                                                formik.errors.website
                                                ? "true"
                                                : "false"
                                        }
                                        placeholder="Website"
                                    />
                                </span>

                                {formik.touched.website &&
                                    formik.errors.website ? (
                                    <small
                                        style={{
                                            color: "red",
                                            display: "block",
                                            marginTop: "6px",
                                        }}
                                    >
                                        {formik.errors.website}
                                    </small>
                                ) : null}
                            </div>
                        </div>
                    </div>

                    <div className="inputrow nitro-offscreen">
                        <div className="inputcol">
                            <div className="inputsblocks">
                                <span
                                    className="wpcf7-form-control-wrap"
                                    data-name="email"
                                >
                                    <input
                                        type="email"
                                        name="email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        size={40}
                                        className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email input-control"
                                        aria-required="true"
                                        aria-invalid={
                                            formik.touched.email && formik.errors.email
                                                ? "true"
                                                : "false"
                                        }
                                        placeholder="Email Address"
                                    />
                                </span>

                                {formik.touched.email && formik.errors.email ? (
                                    <small
                                        style={{
                                            color: "red",
                                            display: "block",
                                            marginTop: "6px",
                                        }}
                                    >
                                        {formik.errors.email}
                                    </small>
                                ) : null}
                            </div>
                        </div>
                    </div>

                    <div className="inputrow nitro-offscreen">
                        <div className="inputcol f-w">
                            <div className="inputsblocks">
                                <span
                                    className="wpcf7-form-control-wrap"
                                    data-name="subject"
                                >
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formik.values.subject}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        size={40}
                                        className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required input-control"
                                        aria-required="true"
                                        aria-invalid={
                                            formik.touched.subject &&
                                                formik.errors.subject
                                                ? "true"
                                                : "false"
                                        }
                                        placeholder="Subject"
                                    />
                                </span>

                                {formik.touched.subject &&
                                    formik.errors.subject ? (
                                    <small
                                        style={{
                                            color: "red",
                                            display: "block",
                                            marginTop: "6px",
                                        }}
                                    >
                                        {formik.errors.subject}
                                    </small>
                                ) : null}
                            </div>
                        </div>
                    </div>

                    <div className="inputrow nitro-offscreen">
                        <div className="inputcol f-w">
                            <div className="inputsblocks">
                                <span
                                    className="wpcf7-form-control-wrap"
                                    data-name="Message"
                                >
                                    <textarea
                                        name="Message"
                                        value={formik.values.Message}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        cols={40}
                                        rows={10}
                                        className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required input-control"
                                        aria-required="true"
                                        aria-invalid={
                                            formik.touched.Message &&
                                                formik.errors.Message
                                                ? "true"
                                                : "false"
                                        }
                                        placeholder="Message"
                                    ></textarea>
                                </span>

                                {formik.touched.Message &&
                                    formik.errors.Message ? (
                                    <small
                                        style={{
                                            color: "red",
                                            display: "block",
                                            marginTop: "6px",
                                        }}
                                    >
                                        {formik.errors.Message}
                                    </small>
                                ) : null}
                            </div>
                        </div>
                    </div>

                    <div className="inputrow nitro-offscreen">
                        <div className="inputcol f-w">
                            <div className="submit-btn-sec">
                                <input
                                    type="submit"
                                    className="wpcf7-form-control has-spinner wpcf7-submit submit-btn btn btn-primary"
                                    value={
                                        formik.isSubmitting
                                            ? "Submitting..."
                                            : "Submit"
                                    }
                                    disabled={formik.isSubmitting}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="wpcf7-response-output"
                    aria-hidden="true"
                ></div>
            </form>
        </div>
    )
}

export default ServiceContact1