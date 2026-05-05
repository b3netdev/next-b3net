"use client"
import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import { useForm } from "@/hooks/useForm";
import { useRouter } from "next/navigation";
import CircularProgress from '@mui/material/CircularProgress';

type HeaderFormProps = {
    setHoverService: React.Dispatch<React.SetStateAction<boolean>>;
};

const HeaderForm = ({ setHoverService }: HeaderFormProps) => {
    const { submitcontact, loading } = useForm()
    const router = useRouter()

    const validationSchema = Yup.object({
        fname: Yup.string().trim().required("First name is required"),
        lname: Yup.string().trim().required("Last name is required"),
        email: Yup.string()
            .trim()
            .email("Please enter a valid email address")
            .required("Email is required"),
    });

    const formik = useFormik({
        initialValues: {
            fname: "",
            lname: "",
            email: "",
        },
        validationSchema,
        onSubmit: async (values) => {
            const data = await submitcontact(formik?.values, 12739)
            if (data?.status === "mail_sent") {
                router.push("/thankyou");
                setHoverService(false)
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

            <div className="mb-0 text-center pt-md-3">
                <button type="submit" className="btn btn-primary">
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
    )
}

export default HeaderForm