"use client";

import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "@/hooks/useForm";

/*
 * Lead form shared by the static location landing pages (Houston, Dallas…).
 * Fields: Name, Work email, Phone, one optional extra field (text input or select),
 * consent checkbox and reCAPTCHA. Submits to the Contact Form 7 form given in `cf7`.
 */

const CONSENT_TEXT =
  "I consent to being contacted by B3NET regarding my inquiry, services, and relevant updates via email, phone, or SMS. I may unsubscribe at any time.";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[0-9+\-\s().]{7,20}$/;

/** Contact Form 7 form id and the CF7 field name for each form field. */
export type Cf7Config = {
  formId: number;
  fields: { name: string; email: string; phone: string; extra: string };
};

type ExtraField =
  | { kind: "input"; label: string; placeholder?: string; inputMode?: "url" | "text" }
  | { kind: "select"; label: string; options: string[] };

type Props = {
  cf7: Cf7Config;
  idPrefix: string;
  extra: ExtraField;
  placeholders: { name: string; email: string; phone: string };
  submitLabel: string;
  reply?: React.ReactNode;
};

type Key = "name" | "email" | "phone" | "extra";
type Errors = Partial<Record<Key | "consent" | "captcha" | "submit", string>>;

export default function LeadForm({ cf7, idPrefix, extra, placeholders, submitLabel, reply }: Props) {
  const router = useRouter();
  const { submitcontact, loading } = useForm();
  const recaptchaRef = useRef<ReCAPTCHA | null>(null);

  const [values, setValues] = useState<Record<Key, string>>({ name: "", email: "", phone: "", extra: "" });
  const [consent, setConsent] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");
  const [errors, setErrors] = useState<Errors>({});

  const id = (k: string) => `${idPrefix}-${k}`;

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const key = e.target.name as Key;
    const { value } = e.target;
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const validate = (): Errors => {
    const er: Errors = {};
    if (!values.name.trim()) er.name = "Name is required";
    if (!values.email.trim()) er.email = "Email is required";
    else if (!EMAIL_RE.test(values.email.trim())) er.email = "Enter a valid email";
    if (!values.phone.trim()) er.phone = "Phone is required";
    else if (!PHONE_RE.test(values.phone.trim())) er.phone = "Enter a valid phone number";
    if (!consent) er.consent = "Please give consent so we can contact you";
    if (!captchaToken) er.captcha = "Please verify that you are not a robot.";
    return er;
  };

  const resetCaptcha = () => {
    recaptchaRef.current?.reset();
    setCaptchaToken("");
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const er = validate();
    setErrors(er);
    if (Object.keys(er).length) {
      const first = (["name", "email", "phone", "consent"] as const).find((k) => er[k]);
      if (first) document.getElementById(id(first))?.focus();
      return;
    }

    if (!cf7.formId) {
      console.error("LeadForm: Contact Form 7 form id is not set for this page.");
      setErrors({ submit: "This form isn't connected yet. Please call 877-890-8986 or email info@b3net.com." });
      return;
    }

    const f = cf7.fields;
    try {
      const data = await submitcontact(
        {
          [f.name]: values.name.trim(),
          [f.email]: values.email.trim(),
          [f.phone]: values.phone.trim(),
          [f.extra]: values.extra.trim(),
          recaptcha_token: captchaToken,
        },
        cf7.formId
      );

      if (data?.status === "mail_sent") {
        resetCaptcha();
        router.push("/thankyou");
        return;
      }

      resetCaptcha();
      setErrors({ submit: data?.message || "Something went wrong. Please verify the captcha and try again." });
    } catch (err) {
      console.error("Submit error:", err);
      resetCaptcha();
      setErrors({ submit: "Something went wrong. Please try again or call 877-890-8986." });
    }
  };

  const a11y = (key: Key) => ({
    id: id(key),
    name: key,
    value: values[key],
    onChange,
    className: errors[key] ? "hw-invalid" : undefined,
    "aria-invalid": errors[key] ? ("true" as const) : ("false" as const),
    "aria-describedby": errors[key] ? id(`${key}-err`) : undefined,
  });

  const fieldError = (key: Key) =>
    errors[key] && (
      <small id={id(`${key}-err`)} className="hw-err">
        {errors[key]}
      </small>
    );

  const input = (key: Key, label: React.ReactNode, attrs: React.InputHTMLAttributes<HTMLInputElement>) => (
    <div className="hw-field">
      <label htmlFor={id(key)}>{label}</label>
      <input {...a11y(key)} {...attrs} />
      {fieldError(key)}
    </div>
  );

  const extraLabel = (
    <>
      {extra.label} <small>(optional)</small>
    </>
  );

  return (
    <form onSubmit={onSubmit} noValidate>
      {input("name", "Name", { autoComplete: "name", required: true, placeholder: placeholders.name })}
      {input("email", "Work email", {
        type: "email",
        autoComplete: "email",
        required: true,
        placeholder: placeholders.email,
      })}
      {input("phone", "Phone", {
        type: "tel",
        inputMode: "tel",
        autoComplete: "tel",
        required: true,
        placeholder: placeholders.phone,
      })}

      {extra.kind === "input" ? (
        input("extra", extraLabel, { inputMode: extra.inputMode ?? "text", placeholder: extra.placeholder })
      ) : (
        <div className="hw-field">
          <label htmlFor={id("extra")}>{extraLabel}</label>
          <select {...a11y("extra")}>
            <option value="">Choose one</option>
            {extra.options.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
      )}

      <label className={`hw-consent${errors.consent ? " hw-invalid" : ""}`} htmlFor={id("consent")}>
        <input
          id={id("consent")}
          name="consent"
          type="checkbox"
          required
          checked={consent}
          onChange={() => {
            setConsent((c) => !c);
            setErrors((er) => ({ ...er, consent: undefined }));
          }}
        />
        {CONSENT_TEXT}
      </label>

      <div className="hw-captcha">
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
          onChange={(token) => {
            setCaptchaToken(token || "");
            setErrors((er) => ({ ...er, captcha: undefined }));
          }}
          onExpired={() => {
            setCaptchaToken("");
            setErrors((er) => ({ ...er, captcha: "Captcha expired. Please verify again." }));
          }}
        />
        {errors.captcha && <small className="hw-err">{errors.captcha}</small>}
      </div>

      <button className="hw-btn" type="submit" disabled={loading}>
        {loading ? "Sending…" : submitLabel}
      </button>

      {errors.submit && (
        <p className="hw-err" role="alert" style={{ textAlign: "center" }}>
          {errors.submit}
        </p>
      )}

      {reply && <p className="hw-reply">{reply}</p>}
    </form>
  );
}
