"use client";

import React, { useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import { useRouter } from "next/navigation";
import { useForm } from "@/hooks/useForm";

type ContactFormValues = {
  fname: string;
  company: string;
  email: string;
  websiteUrl: string;
  yourConsent: boolean;
};

const consentText =
  "I consent to being contacted by B3NET regarding my inquiry, services, and relevant updates via email, phone, or SMS. I may unsubscribe at any time.";

const validationSchema = Yup.object({
  fname: Yup.string().required("Name is required"),
  company: Yup.string().required("Company is required"),
  email: Yup.string().email("Invalid email").required("Work email is required"),
  websiteUrl: Yup.string(),
  yourConsent: Yup.boolean()
    .oneOf([true], "Consent is required")
    .required("Consent is required"),
});

const Contact = () => {
  const { submitcontact, loading } = useForm();
  const router = useRouter();

  const [captchaToken, setCaptchaToken] = useState("");
  const [captchaError, setCaptchaError] = useState("");
  const recaptchaRef = useRef<ReCAPTCHA | null>(null);
  const [error, setError] = useState("")

  const formik = useFormik<ContactFormValues>({
    initialValues: {
      fname: "",
      company: "",
      email: "",
      websiteUrl: "",
      yourConsent: false,
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      if (!captchaToken) {
        setCaptchaError("Please verify that you are not a robot.");
        return;
      }

      setCaptchaError("");

      const formData = {
        fname: values.fname,
        email: values.email,
        subject: "WordPress to React Upgrade Quote Request",
        yourConsent: values.yourConsent ? consentText : "",
        recaptcha_token: captchaToken,
        company: values.company,
        website_url: values.websiteUrl,
      };

      const data = await submitcontact(formData, 12739);

      if (data?.status === "mail_sent") {
        recaptchaRef.current?.reset();
        setCaptchaToken("");
        resetForm();
        router.push("/thankyou");
      } else {
        recaptchaRef.current?.reset();
        setCaptchaToken("");
        setError(data.message)
        // setCaptchaError("Captcha expired. Please verify again.");
      }
    },
  });

  return (
    <section
      id="react-page-contact"
      className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden"
    >

      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-2/5 bg-blue-600 p-10 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4 react-page-contactheading">
                Let's Modernize Your Stack
              </h3>
              <p className="text-blue-100 mb-8">
                Get a free consultation to see how a Headless architecture can
                transform your business metrics.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-server"></i>
                  <span>Keep your Data</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-code"></i>
                  <span>Upgrade your Code</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-lock"></i>
                  <span>Secure your Future</span>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <div className="text-sm text-blue-200 font-medium">
                Trusted by forward-thinking companies
              </div>
              <div className="flex gap-3 mt-3 opacity-70">
                {/* Mock Logos circles */}
                <div className="w-8 h-8 rounded-full bg-white/20"></div>
                <div className="w-8 h-8 rounded-full bg-white/20"></div>
                <div className="w-8 h-8 rounded-full bg-white/20"></div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="md:w-3/5 p-10">
            <form onSubmit={formik.handleSubmit} className="space-y-6">
              <h4 className="text-2xl font-bold text-slate-800 react-page-quoteheading">
                Request Free Quote
              </h4>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="fname"
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    placeholder="John Doe"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.fname}
                  />
                  {formik.touched.fname && formik.errors.fname && (
                    <small className="text-red-600 font-medium">
                      {formik.errors.fname}
                    </small>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    placeholder="Your Company"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.company}
                  />
                  {formik.touched.company && formik.errors.company && (
                    <small className="text-red-600 font-medium">
                      {formik.errors.company}
                    </small>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Work Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  placeholder="john@company.com"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email && (
                  <small className="text-red-600 font-medium">
                    {formik.errors.email}
                  </small>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Current Website URL
                </label>
                <input
                  type="text"
                  name="websiteUrl"
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  placeholder="https://..."
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.websiteUrl}
                />
                {formik.touched.websiteUrl && formik.errors.websiteUrl && (
                  <small className="text-red-600 font-medium">
                    {formik.errors.websiteUrl}
                  </small>
                )}
              </div>

              <div>
                <label className="flex items-start gap-2 text-sm text-slate-600 cursor-pointer">
                  <input
                    type="checkbox"
                    name="yourConsent"
                    checked={formik.values.yourConsent}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="mt-1"
                  />
                  <span>
                    <span className="text-red-600">*</span> {consentText}
                  </span>
                </label>

                {formik.touched.yourConsent && formik.errors.yourConsent && (
                  <small className="text-red-600 font-medium d-block">
                    {formik.errors.yourConsent}
                  </small>
                )}
              </div>

              <div className="d-flex flex-column align-items-center">
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
                    <small className="text-red-600 font-medium mt-2 d-block">
                      {captchaError}
                    </small>
                  )}
                </div>
              </div>
              {
                error && error?.length > 0 &&
                <p className="text-red-800 font-bold-" >{error}</p>
              }

              <button
                type="submit"
                disabled={loading}
                className="react-page-contactButton w-full bg-black hover:bg-slate-800 p-3 rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="text-white font-semibold text-lg">
                    Submitting ...
                  </span>
                ) : (
                  <span className="text-white font-semibold text-lg">
                    Upgrade My WordPress Site
                  </span>
                )}
              </button>

              <p className="text-xs text-center text-slate-400 mt-4">
                No obligation. 100% Privacy Guaranteed.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;