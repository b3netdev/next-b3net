"use client";

import React, { useState } from "react";
import { useFormik, FormikErrors } from "formik";
import * as Yup from "yup";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

import ContactFooter from "../server/ContactFooter";
// import { useForm } from "../../hooks/useForm";

type ContactProps = {
  data?: boolean;
};

type ServiceItem = {
  id: number;
  label: string;
  value: string;
};

type ContactFormValues = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  cname: string;
  cwebsite: string;
  message: string;
  services: string[];
};

const servicesList: ServiceItem[] = [
  { id: 1, label: "Creative Design", value: "Creative Design" },
  { id: 2, label: "Web Development", value: "Web Development" },
  { id: 3, label: "Digital Marketing", value: "Digital Marketing" },
  { id: 4, label: "App Development", value: "App Development" },
  { id: 5, label: "AI Integration Services", value: "AI Integration Services" },
  { id: 6, label: "Ecommerce", value: "Ecommerce" },
  { id: 7, label: "Social Media Marketing", value: "Social Media Marketing" },
  { id: 8, label: "Shopify Development", value: "Shopify Development" },
  { id: 9, label: "CRM Consultant", value: "CRM Consultant" },
  { id: 10, label: "Video Production", value: "Video Production" },
];

const validationSchema: Yup.ObjectSchema<ContactFormValues> = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  phone: Yup.string().required("Phone number is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  cname: Yup.string().required("Company name is required"),
  cwebsite: Yup.string().url("Enter a valid URL").required("Website is required"),
  message: Yup.string().required("Message is required"),
  services: Yup.array().of(Yup.string().required()).min(1, "Please select at least one service"),
});

const Contact: React.FC<ContactProps> = ({ data = false }) => {
  const [selectService, setSelectService] = useState<string[]>([]);
//   const { submitcontact } = useForm();
  const router = useRouter();

  const formik = useFormik<ContactFormValues>({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      cname: "",
      cwebsite: "",
      message: "",
      services: [],
    },
    validationSchema,
    onSubmit: async (values) => {
      // keep your original behavior: build FormData and submit
      const formData = new FormData();

      formData.append("fname", values.firstName);
      formData.append("lname", values.lastName);
      formData.append("phone", values.phone);
      formData.append("email", values.email);
      formData.append("cname", values.cname);
      formData.append("cwebsite", values.cwebsite);
      formData.append("message", values.message);

      values.services.forEach((service) => {
        formData.append("services[]", service);
      });

    //   const res: any = await submitcontact(formData, 12634);

    //   if (res?.status === "mail_sent") {
    //     router.push("/thank-you.html");
    //   }
    },
  });

  const handleSelectService = (value: string) => {
    const exists = selectService.includes(value);
    const updated = exists
      ? selectService.filter((item) => item !== value)
      : [...selectService, value];

    setSelectService(updated);
    formik.setFieldValue("services", updated);
  };

  return (
    <div id="contact" style={{ paddingTop: data ? "" : "50px" }}>
      <div className="container">
        <div className="row justify-content-center mb-5">
          {!data && (
            <div className="col-lg-8 text-center">
              <div className="heading-title">
                <p>Request for a Service</p>
                <h2>Get Your Free Proposal</h2>
              </div>
            </div>
          )}
        </div>

        <div className="common-form pb-5">
          <div className="common-form pb-5">
            <form onSubmit={formik.handleSubmit}>
              <div className="row">
                <div className="col-md-4 form-group">
                  <label>
                    First Name <span>*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    className="form-control"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                  />
                  {formik.touched.firstName && formik.errors.firstName && (
                    <small className="text-danger">{formik.errors.firstName}</small>
                  )}
                </div>

                <div className="col-md-4 form-group">
                  <label>
                    Last Name <span>*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    className="form-control"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                  />
                  {formik.touched.lastName && formik.errors.lastName && (
                    <small className="text-danger">{formik.errors.lastName}</small>
                  )}
                </div>

                <div className="col-md-4 form-group">
                  <label>
                    Phone Number <span>*</span>
                  </label>
                  <input
                    type="text"
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
              </div>

              <div className="row">
                <div className="col-md-4 form-group">
                  <label>
                    Your Email <span>*</span>
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

                <div className="col-md-4 form-group">
                  <label>
                    Company Name <span>*</span>
                  </label>
                  <input
                    type="text"
                    name="cname"
                    className="form-control"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.cname}
                  />
                  {formik.touched.cname && formik.errors.cname && (
                    <small className="text-danger">{formik.errors.cname}</small>
                  )}
                </div>

                <div className="col-md-4 form-group">
                  <label>
                    Company Website <span>*</span>
                  </label>
                  <input
                    type="text"
                    name="cwebsite"
                    className="form-control"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.cwebsite}
                  />
                  {formik.touched.cwebsite && formik.errors.cwebsite && (
                    <small className="text-danger">{formik.errors.cwebsite}</small>
                  )}
                </div>
              </div>

              <div className="select-part">
                <div className="container p-0 text-center mt-4 mb-4">
                  <h5 className="text-prim">
                    Let Us Know What Services You're Looking For <span>*</span>
                  </h5>

                  <div className="choose-services-row">
                    {servicesList.map((item) => (
                      <label
                        key={item.id}
                        className={
                          selectService.includes(item.value)
                            ? "activeServiceButton"
                            : "service-btn"
                        }
                      >
                        <input
                          type="checkbox"
                          checked={selectService.includes(item.value)}
                          onChange={() => handleSelectService(item.value)}
                        />
                        {item.label}
                      </label>
                    ))}
                  </div>

                  {formik.touched.services && formik.errors.services && (
                    <div className="text-danger mt-2">
                      {formik.errors.services as string}
                    </div>
                  )}
                </div>
              </div>

              <div className="form-group">
                <label>
                  Your Message <span>*</span>
                </label>
                <textarea
                  name="message"
                  className="form-control"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                />
                {formik.touched.message && formik.errors.message && (
                  <small className="text-danger">{formik.errors.message}</small>
                )}
              </div>

              <div className="mb-0 text-center pt-md-5">
                <button type="submit" className="btn btn-primary">
                  SUBMIT NOW <i className="fa-solid fa-arrow-right-long"> </i>
                </button>
              </div>
            </form>
          </div>
        </div>

        <ContactFooter />
      </div>
    </div>
  );
};

export default Contact;
