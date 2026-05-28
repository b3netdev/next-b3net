"use client";

import React, { useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useForm } from "@/hooks/useForm";
import { useRouter } from "next/navigation";
import CircularProgress from "@mui/material/CircularProgress";
import ReCAPTCHA from "react-google-recaptcha";

type HeaderFormProps = {
    setHoverService: React.Dispatch<React.SetStateAction<boolean>>;
};

const HeaderForm = ({ setHoverService }: HeaderFormProps) => {
    const { submitcontact } = useForm();
    const router = useRouter();

    const recaptchaRef = useRef<ReCAPTCHA>(null);
    const [loading, setLoading] = useState(false);
    const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
    const [recaptchaError, setRecaptchaError] = useState("");

    const validationSchema = Yup.object({
        fname: Yup.string().trim().required("First name is required"),
        lname: Yup.string().trim().required("Last name is required"),
        email: Yup.string()
            .trim()
            .email("Please enter a valid email address")
            .required("Email is required"),
        yourConsent: Yup.string().required("Consent is required").defined(),
    });

    const formik = useFormik({
        initialValues: {
            fname: "",
            lname: "",
            email: "",
            yourConsent: "I consent to being contacted by B3NET regarding my inquiry, services, and relevant updates via email, phone, or SMS. I may unsubscribe at any time.",
        },
        validationSchema,
        onSubmit: async (values) => {

            try {
                setLoading(true);
                setRecaptchaError("");

                const formData = {
                    ...values,
                };

                const data = await submitcontact(formData, 12739);

                if (data?.status === "mail_sent") {
                    setHoverService(false);
                    router.push("/thankyou");
                }
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
                recaptchaRef.current?.reset();
                setRecaptchaToken(null);
            }
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} autoComplete="off">
            {/* Dummy hidden fields to confuse browser autofill */}
            <input
                type="text"
                name="fake-user-name"
                autoComplete="username"
                style={{ display: "none" }}
                tabIndex={-1}
            />
            <input
                type="password"
                name="fake-password"
                autoComplete="new-password"
                style={{ display: "none" }}
                tabIndex={-1}
            />

            <div className="row">
                <div className="col-md-6 form-group">
                    <label>
                        First Name<span>*</span>
                    </label>
                    <input
                        type="text"
                        name="fname"
                        className="form-control"
                        value={formik.values.fname}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        autoComplete="chrome-off-fname"
                        autoCorrect="off"
                        autoCapitalize="none"
                        spellCheck={false}
                        readOnly
                        onFocus={(e) => e.currentTarget.removeAttribute("readonly")}
                    />
                    {formik.touched.fname && formik.errors.fname && (
                        <small className="text-danger text-sm">{formik.errors.fname}</small>
                    )}
                </div>

                <div className="col-md-6 form-group">
                    <label>
                        Last Name<span>*</span>
                    </label>
                    <input
                        type="text"
                        name="lname"
                        className="form-control"
                        value={formik.values.lname}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        autoComplete="chrome-off-lname"
                        autoCorrect="off"
                        autoCapitalize="none"
                        spellCheck={false}
                        readOnly
                        onFocus={(e) => e.currentTarget.removeAttribute("readonly")}
                    />
                    {formik.touched.lname && formik.errors.lname && (
                        <small className="text-danger">{formik.errors.lname}</small>
                    )}
                </div>
            </div>

            <div className="row">
                <div className="col-md-12 form-group">
                    <label>
                        Your Email<span>*</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        autoComplete="chrome-off-email"
                        autoCorrect="off"
                        autoCapitalize="none"
                        spellCheck={false}
                        onBlur={formik.handleBlur}
                        readOnly
                        onFocus={(e) => e.currentTarget.removeAttribute("readonly")}
                    />
                    {formik.touched.email && formik.errors.email && (
                        <small className="text-danger">{formik.errors.email}</small>
                    )}
                </div>
            </div>

            <div className="form-group mt-3">
                  <label className="consent-checkbox">
                    <div className="flex gap-1" >
                      <input type="checkbox" name="consent" required
                      />
                      <span className="required">*</span>
                    </div>
                    I consent to being contacted by B3NET regarding my inquiry, services, and relevant updates via email, phone, or SMS. I may unsubscribe at any time.
                  </label>
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
    );
};

export default HeaderForm;