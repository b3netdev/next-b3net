"use client";

import React, { useEffect, useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useForm } from "@/hooks/useForm";
import { useRouter } from "next/navigation";
import CircularProgress from '@mui/material/CircularProgress';
import ReCAPTCHA from "react-google-recaptcha";

type ContactUsFormValues = {
  fname: string;
  email: string;
  phone: string;
  Message: string;
  subject: string;
  yourConsent: string;
};

const validationSchema: any = Yup.object({
  fname: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Mobile number is required"),
  subject: Yup.string().required("Subject is required"),
  Message: Yup.string().required("Message is required"),
  yourConsent: Yup.string()
    .required("Consent is required")
    .defined(),
});

export default function ContactUsForm() {
  const { submitcontact } = useForm()
  const router = useRouter()

  const [captchaToken, setCaptchaToken] = useState("");
  const [captchaError, setCaptchaError] = useState("");
  const recaptchaRef = useRef<ReCAPTCHA | null>(null);
  const [consentChecked, setConsentChecked] = useState(false);
  // Stays true from submit until the redirect to /thankyou finishes
  const [submitting, setSubmitting] = useState(false);

  const formik = useFormik<ContactUsFormValues>({
    initialValues: {
      fname: "",
      email: "",
      phone: "",
      Message: "",
      subject: "",
      yourConsent: "I consent to being contacted by B3NET regarding my inquiry, services, and relevant updates via email, phone, or SMS. I may unsubscribe at any time.",
    },
    validationSchema,
    onSubmit: async (values) => {

      if (!captchaToken) {
        setCaptchaError("Please verify that you are not a robot.");
        return;
      }

      setCaptchaError("");
      setSubmitting(true);

      try {
        const data = await submitcontact(
          { ...formik.values, recaptcha_token: captchaToken },
          12474
        );

        if (data?.status === "mail_sent") {
          recaptchaRef.current?.reset();
          setCaptchaToken("");
          router.push("/thankyou");
          return;
        }

        recaptchaRef.current?.reset();
        setCaptchaToken("");
        setCaptchaError("Captcha expired. Please verify again.");
      } catch {
        recaptchaRef.current?.reset();
        setCaptchaToken("");
        setCaptchaError("Something went wrong. Please try again.");
      }
      setSubmitting(false);
    },
  });

  // Consent checkbox unlocks only after all required fields are valid
  const requiredFields = ["fname", "email", "phone", "subject", "Message"] as const;
  const requiredFilled = requiredFields.every(
    (field) => formik.values[field].trim() !== "" && !formik.errors[field]
  );

  // Require consent to be given again if a required field is cleared
  useEffect(() => {
    if (!requiredFilled) setConsentChecked(false);
  }, [requiredFilled]);

  return (
    <section className="contact-sec sp">
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
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Message}
                />
                {formik.touched.Message && formik.errors.Message && (
                  <small className="text-danger">{formik.errors.Message}</small>
                )}
              </div>
            </div>

            <div className="form-group mt-3">
              <label
                className="consent-checkbox"
                style={{
                  opacity: requiredFilled ? 1 : 0.5,
                  cursor: requiredFilled ? "pointer" : "not-allowed",
                }}
                title={requiredFilled ? undefined : "Please fill in all required fields first"}
              >
                <div className="flex gap-1" >
                  <input
                    type="checkbox"
                    name="yourConsent"
                    required
                    disabled={!requiredFilled}
                    checked={consentChecked}
                    onChange={(e) => setConsentChecked(e.target.checked)}
                  />
                </div>
                I consent to being contacted by B3NET regarding my inquiry, services, and relevant updates via email, phone, or SMS. I may unsubscribe at any time.
              </label>
              {formik.touched.yourConsent && formik.errors.yourConsent && (
                <small className="text-danger font-semibold text-lg d-block">
                  {formik.errors.yourConsent}
                </small>
              )}
            </div>


            <div className="mt-3 d-flex flex-column align-items-center">
              <div className="scale-100 sm:scale-100 max-[400px]:scale-90 max-[350px]:scale-75 origin-center">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                  onChange={(token) => {
                    setCaptchaToken(token || "");
                    setCaptchaError("");
                  }}
                  onExpired={() => {
                    setCaptchaToken("");
                    setCaptchaError("Captcha expired. Please verify again.");
                  }}
                />

                {captchaError && (
                  <small className="text-danger mt-2">{captchaError}</small>
                )}
              </div>
            </div>

            <div className="mb-0 text-center pt-md-3">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={submitting}
                aria-busy={submitting}
                style={submitting ? { cursor: "wait", opacity: 0.85 } : undefined}
              >
                {submitting ? (
                  <>
                    <CircularProgress size={18} sx={{ color: "#fff" }} className="me-2" />
                    Submitting...
                  </>
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