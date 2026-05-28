"use client";

import { useForm } from "@/hooks/useForm";
import CircularProgress from "@mui/material/CircularProgress";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  const { submitcontact, loading } = useForm();
  const router = useRouter();

  const [captchaToken, setCaptchaToken] = useState("");
  const [captchaError, setCaptchaError] = useState("");
  const recaptchaRef = useRef<ReCAPTCHA | null>(null);
  const [checked, setChecked] = useState(false);

  const formik = useFormik({
    initialValues: {
      fname: "",
      company: "",
      email: "",
      phone: "",
      message: "",
      yourConsent: "I consent to being contacted by B3NET regarding my inquiry, services, and relevant updates via email, phone, or SMS. I may unsubscribe at any time.",

    },

    validate: (values) => {
      const errors: {
        fname?: string;
        company?: string;
        email?: string;
        phone?: string;
        message?: string;
      } = {};

      if (!values.fname.trim()) {
        errors.fname = "Name is required";
      }

      if (!values.company.trim()) {
        errors.company = "Company is required";
      }

      if (!values.email.trim()) {
        errors.email = "Email is required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Please enter a valid email address";
      }

      if (!values.phone.trim()) {
        errors.phone = "Phone is required";
      }

      if (!values.message.trim()) {
        errors.message = "Message is required";
      }

      return errors;
    },

    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        if (!captchaToken) {
          setCaptchaError("Please verify that you are not a robot.");
          setSubmitting(false);
          return;
        }

        setCaptchaError("");

        const data = await submitcontact(
          {
            ...values,
            recaptcha_token: captchaToken,
          },
          14015
        );

        if (data?.status === "mail_sent") {
          recaptchaRef.current?.reset();
          setCaptchaToken("");
          resetForm();
          router.push("/thankyou");
        } else {
          recaptchaRef.current?.reset();
          setCaptchaToken("");
          setCaptchaError("Captcha expired. Please verify again.");
        }
      } catch (error) {
        console.error("Contact form submit error:", error);
        recaptchaRef.current?.reset();
        setCaptchaToken("");
        setCaptchaError("Something went wrong. Please try again.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="row g-3">
        <div className="col-md-6">
          <label>Name *</label>
          <input
            type="text"
            name="fname"
            className="form-control"
            placeholder="John Smith"
            value={formik.values.fname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.fname && formik.errors.fname && (
            <div className="text-danger small mt-1">{formik.errors.fname}</div>
          )}
        </div>

        <div className="col-md-6">
          <label>Company *</label>
          <input
            type="text"
            name="company"
            className="form-control"
            placeholder="Acme Digital Marketing"
            value={formik.values.company}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.company && formik.errors.company && (
            <div className="text-danger small mt-1">
              {formik.errors.company}
            </div>
          )}
        </div>

        <div className="col-md-6">
          <label>Email *</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="john@company.com"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-danger small mt-1">{formik.errors.email}</div>
          )}
        </div>

        <div className="col-md-6">
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            className="form-control"
            placeholder="+1 (555) 000-0000"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.phone && formik.errors.phone && (
            <div className="text-danger small mt-1">{formik.errors.phone}</div>
          )}
        </div>

        <div className="col-12">
          <label>Message</label>
          <textarea
            name="message"
            className="form-control"
            rows={4}
            placeholder="Tell us about your project requirements..."
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></textarea>
          {formik.touched.message && formik.errors.message && (
            <div className="text-danger small mt-1">
              {formik.errors.message}
            </div>
          )}
        </div>

        <div className="form-group mt-3">
          <label className="consent-checkbox">
            <div className="flex gap-1" >
              <input type="checkbox" name="consent"
                checked={checked}
                onChange={() => setChecked(!checked)}
                required
              />
              <span className="required">*</span>
            </div>
            I consent to being contacted by B3NET regarding my inquiry, services, and relevant updates via email, phone, or SMS. I may unsubscribe at any time.
          </label>
        </div>

        <div className="inputrow nitro-offscreen">
          <div className="inputcol f-w">
            <div className="flex flex-col items-center mb-4 sm:mb-6 w-full">
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
              </div>

              {captchaError && (
                <small className="text-red-500 mt-2 text-sm sm:text-base text-center px-2">
                  {captchaError}
                </small>
              )}
            </div>
          </div>
        </div>

        <div className="col-12">
          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={loading || formik.isSubmitting}
          >
            {loading || formik.isSubmitting ? (
              <CircularProgress
                size={20}
                sx={{ color: "#fff" }}
                className="mx-16"
              />
            ) : (
              <>
                Request a Free Consultation{" "}
                <i className="fa-regular fa-paper-plane"></i>
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;