"use client";

import React, { useEffect, useRef } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { BASE_URL } from "@/lib/url";
import { useAppDispatch } from "@/redux/hooks";
import { SetshowLayout } from "@/redux/slicers/menuSlicer";
import SignaturePad from "signature_pad";
import axios from "axios";


const stateOptions = [
  { value: "", label: "Select State" },
  { value: "AL", label: "Alabama" },
  { value: "AK", label: "Alaska" },
  { value: "AZ", label: "Arizona" },
  { value: "AR", label: "Arkansas" },
  { value: "CA", label: "California" },
  { value: "CO", label: "Colorado" },
  { value: "CT", label: "Connecticut" },
  { value: "DE", label: "Delaware" },
  { value: "FL", label: "Florida" },
  { value: "GA", label: "Georgia" },
  { value: "HI", label: "Hawaii" },
  { value: "ID", label: "Idaho" },
  { value: "IL", label: "Illinois" },
  { value: "IN", label: "Indiana" },
  { value: "IA", label: "Iowa" },
  { value: "KS", label: "Kansas" },
  { value: "KY", label: "Kentucky" },
  { value: "LA", label: "Louisiana" },
  { value: "ME", label: "Maine" },
  { value: "MD", label: "Maryland" },
  { value: "MA", label: "Massachusetts" },
  { value: "MI", label: "Michigan" },
  { value: "MN", label: "Minnesota" },
  { value: "MS", label: "Mississippi" },
  { value: "MO", label: "Missouri" },
  { value: "MT", label: "Montana" },
  { value: "NE", label: "Nebraska" },
  { value: "NV", label: "Nevada" },
  { value: "NH", label: "New Hampshire" },
  { value: "NJ", label: "New Jersey" },
  { value: "NM", label: "New Mexico" },
  { value: "NY", label: "New York" },
  { value: "NC", label: "North Carolina" },
  { value: "ND", label: "North Dakota" },
  { value: "OH", label: "Ohio" },
  { value: "OK", label: "Oklahoma" },
  { value: "OR", label: "Oregon" },
  { value: "PA", label: "Pennsylvania" },
  { value: "RI", label: "Rhode Island" },
  { value: "SC", label: "South Carolina" },
  { value: "SD", label: "South Dakota" },
  { value: "TN", label: "Tennessee" },
  { value: "TX", label: "Texas" },
  { value: "UT", label: "Utah" },
  { value: "VT", label: "Vermont" },
  { value: "VA", label: "Virginia" },
  { value: "WA", label: "Washington" },
  { value: "WV", label: "West Virginia" },
  { value: "WI", label: "Wisconsin" },
  { value: "WY", label: "Wyoming" },
];

const luhnCheck = (cardNumber: string) => {
  const digitsOnly = cardNumber.replace(/\D/g, "");

  let sum = 0;
  let shouldDouble = false;

  for (let i = digitsOnly.length - 1; i >= 0; i--) {
    let digit = parseInt(digitsOnly.charAt(i), 10);

    if (shouldDouble) {
      digit *= 2;

      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return sum % 10 === 0;
};

const validationSchema = Yup.object({
  txtdomain: Yup.string().required("Customer Domain Name(s) is required"),
  txtcardtype: Yup.string().required("Card Type is required"),
  txtcardnumber: Yup.string()
    .required("Card number is required")
    .test("card-length", "Invalid card number length", function (value) {
      if (!value) return false;

      const { txtcardtype } = this.parent;
      const digitsOnly = value.replace(/\D/g, "");

      if (txtcardtype === "American Express") {
        return digitsOnly.length === 15;
      }

      return digitsOnly.length === 16;
    })
    .test("luhn-check", "Invalid card number", function (value) {
      if (!value) return false;

      return luhnCheck(value);
    }),

  txtexpirationmonth: Yup.string().required("Expiration month is required"),
  txtexpirationyr: Yup.string().required("Expiration year is required"),
  txtsecuritycode: Yup.string()
    .required("Security Code is required")
    .matches(/^[0-9]+$/, "Security Code must contain only numbers"),
  txtcardname: Yup.string().required("Name on Credit Card is required"),
  txtstrtadd: Yup.string().required("Street Address is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  zip: Yup.string().required("Zip code is required"),
  txtphone: Yup.string().required("Phone Number is required"),
  txtemail: Yup.string()
    .email("Enter a valid email address")
    .required("Contact Email is required"),
  txtamount: Yup.string().required("Amount is required"),
  checkme: Yup.boolean().oneOf([true], "You must accept the authorization"),
  applicantsign_image: Yup.string().required("Applicant signature is required"),
});

const Page = () => {
  const initialValues = {
    txtdomain: "",
    company_name: "",
    txtcardtype: "",
    txtcardnumber: "",
    txtexpirationmonth: "",
    txtexpirationyr: "",
    txtsecuritycode: "",
    txtcardname: "",
    txtstrtadd: "",
    city: "",
    state: "",
    zip: "",
    txtphone: "",
    txtemail: "",
    txtamount: "",
    comments: "",
    applicantsign_image: "",
    checkme: false,
  };

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(SetshowLayout(false));

    return () => {
      dispatch(SetshowLayout(true));
    };
  }, []);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const signaturePadRef = useRef<SignaturePad | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;

    const resizeCanvas = () => {
      const ratio = Math.max(window.devicePixelRatio || 1, 1);

      canvas.width = canvas.offsetWidth * ratio;
      canvas.height = canvas.offsetHeight * ratio;

      const context = canvas.getContext("2d");
      context?.scale(ratio, ratio);

      signaturePadRef.current?.clear();
    };

    resizeCanvas();

    signaturePadRef.current = new SignaturePad(canvas, {
      backgroundColor: "rgb(255, 255, 255)",
      penColor: "rgb(0, 0, 0)",
    });

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      signaturePadRef.current?.off();
    };
  }, []);

  const renderError = (touched: any, errors: any, field: string) =>
    touched[field] && errors[field] ? (
      <div className="text-danger" style={{ marginTop: "5px", fontSize: "13px" }}>
        {errors[field]}
      </div>
    ) : null;

  const formatCardNumber = (value: string) => {
    const digitsOnly = value.replace(/\D/g, "");

    const limitedDigits = digitsOnly.slice(0, 16);

    return limitedDigits.replace(/(.{4})/g, "$1 ").trim();
  };

  const luhnCheck = (cardNumber: string) => {
    const digitsOnly = cardNumber.replace(/\D/g, "");

    let sum = 0;
    let shouldDouble = false;

    for (let i = digitsOnly.length - 1; i >= 0; i--) {
      let digit = parseInt(digitsOnly.charAt(i), 10);

      if (shouldDouble) {
        digit *= 2;

        if (digit > 9) {
          digit -= 9;
        }
      }

      sum += digit;
      shouldDouble = !shouldDouble;
    }

    return sum % 10 === 0;
  };



const submitCreditCardForm = async (values: any) => {
  try {
    const formData = new URLSearchParams();

    formData.append("txtdomain", values.txtdomain);
    formData.append("company_name", values.company_name);
    formData.append("txtcardtype", values.txtcardtype);
    formData.append("txtcardnumber", values.txtcardnumber);
    formData.append("txtexpirationmonth", values.txtexpirationmonth);
    formData.append("txtexpirationyr", values.txtexpirationyr);
    formData.append("txtsecuritycode", values.txtsecuritycode);
    formData.append("txtcardname", values.txtcardname);
    formData.append("txtstrtadd", values.txtstrtadd);
    formData.append("city", values.city);
    formData.append("state", values.state);
    formData.append("zip", values.zip);
    formData.append("txtphone", values.txtphone);
    formData.append("txtemail", values.txtemail);
    formData.append("txtamount", values.txtamount);
    formData.append("comments", values.comments);
    formData.append("applicantsign_image", values.applicantsign_image);
    formData.append("checkme", values.checkme ? "1" : "0");

    const response = await axios.post(
      `${BASE_URL}/cca/ajax.php`,
      formData,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    if(response.data.success){
      window.location.href = "/cca/thankyou";
    }
    return response.data;
  } catch (error: any) {
    console.error("API Error:", error.response?.data || error.message);
    throw error;
  }
};


  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        try {
          const response = await submitCreditCardForm(values);
      
          console.log("Submitted successfully:", response);
      
          resetForm();
        } catch (error) {
          console.log("Something went wrong while submitting the form");
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
        setFieldError,
      }) => (
        <div className="container px-3 sm:px-4 primary-bodyText">
          <div className="contentBox row">
            <div className="w-full flex flex-col">
              {/* header area open */}
              <div className="header_area text-center">
                <div className="cardsec-logo">
                  <img
                    src={`${BASE_URL}/wp-content/uploads/2025/06/logo-2.png`}
                    alt="B3NET Logo"
                  />
                </div>

                <div className="cardsec-address">
                  8992 Preston Rd, Ste 110 -114 Frisco, TX 75034, Ph: (714)
                  936-0208, Ph: (214) 586-0650
                </div>
                <ul className="list-inline">
                  <li>
                    <Link href="/">www.b3net.com</Link>
                  </li>
                  <li>|</li>
                  <li>
                    Email: <a href="mailto:billing@b3net.com">billing@b3net.com</a>
                  </li>
                </ul>
              </div>
              {/* header area closed */}

              <h2 className="text-center card-title-sec">
                Credit Card Authorization Form
              </h2>

              {/* full form area open */}
              <div className="form_full_area">
                {/* form box 1 open */}
                <div id="ccbox1" className="flex justify-center">
                  <form
                    className="form-horizonta w-full md:w-[90%] max-w-[1100px] flex flex-col gap-4 justify-center items-center"
                    id="creditcardfrm"
                    onSubmit={handleSubmit}
                  >
                    <input className="hidden" type="text" />
                    <input className="hidden" type="password" />

                    <div className="flex flex-col md:flex-row md:flex-wrap w-full gap-2">
                      <label className="font-bold w-full md:w-auto">
                        <span id="cdn" className="star">*</span>
                        Customer Domain Name(s)
                      </label>
                      <div className="col-md-9 col-sm-8 col-xs-12 w-full md:flex-1">
                        <input
                          name="txtdomain"
                          type="text"
                          className="form-control w-full"
                          value={values.txtdomain}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {renderError(touched, errors, "txtdomain")}
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:flex-wrap w-full gap-2">
                      <label className="font-bold w-full md:w-auto">
                        Company Name
                      </label>
                      <div className="col-md-9 col-sm-8 col-xs-12 w-full md:flex-1">
                        <input
                          name="company_name"
                          type="text"
                          className="form-control w-full"
                          value={values.company_name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row w-full gap-2 md:gap-3">
                      <label className="font-bold w-full md:w-[20%]">
                        <span id="ctype" className="star">*</span>
                        Card Type:
                      </label>
                      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-6 w-full md:flex-1">
                        <label className="radio-inline">
                          <input
                            type="radio"
                            name="txtcardtype"
                            value="Visa"
                            checked={values.txtcardtype === "Visa"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />{" "}
                          Visa
                        </label>
                        <label className="radio-inline">
                          <input
                            type="radio"
                            name="txtcardtype"
                            value="MasterCard"
                            checked={values.txtcardtype === "MasterCard"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />{" "}
                          MasterCard
                        </label>
                        <label className="radio-inline">
                          <input
                            type="radio"
                            name="txtcardtype"
                            value="American Express"
                            checked={values.txtcardtype === "American Express"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />{" "}
                          American Express
                        </label>
                        <label className="radio-inline">
                          <input
                            type="radio"
                            name="txtcardtype"
                            value="Discover"
                            checked={values.txtcardtype === "Discover"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />{" "}
                          Discover
                        </label>
                        {renderError(touched, errors, "txtcardtype")}
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row w-full gap-2 md:gap-3">
                      <label className="font-bold w-full md:w-[20%]">
                        <span id="cnumber" className="star">*</span>
                        Card Number
                      </label>

                      <div className="col-md-8 col-sm-6 col-xs-10 w-full md:flex-1">
                        <input
                          name="txtcardnumber"
                          type="text"
                          id="txtcardnumber"
                          className="form-control w-full"
                          value={values.txtcardnumber}
                          onChange={(e) => {
                            const formattedValue = formatCardNumber(e.target.value);
                            setFieldValue("txtcardnumber", formattedValue);
                          }}
                          onBlur={(e) => {
                            handleBlur(e);

                            const cardNumber = e.target.value;
                            const isValidCard = luhnCheck(cardNumber);

                            if (!isValidCard) {
                              setFieldError("txtcardnumber", "Invalid card number");
                            } else {
                              setFieldError("txtcardnumber", "");
                            }
                          }}
                          placeholder=""
                          inputMode="numeric"
                          autoComplete="cc-number"
                          maxLength={22}
                        />
                        {renderError(touched, errors, "txtcardnumber")}
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row w-full gap-2 md:gap-3">
                      <label className="font-bold w-full md:w-[20%]">
                        <span id="exp" className="star">*</span>
                        Expiration Date
                      </label>

                      <div className="col-md-2 col-xs-12 w-full md:w-auto md:min-w-[120px]">
                        <select
                          name="txtexpirationmonth"
                          className="form-control w-full"
                          id="txtexpirationmonth"
                          value={values.txtexpirationmonth}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        >
                          <option value="">mm</option>
                          <option value="01">01</option>
                          <option value="02">02</option>
                          <option value="03">03</option>
                          <option value="04">04</option>
                          <option value="05">05</option>
                          <option value="06">06</option>
                          <option value="07">07</option>
                          <option value="08">08</option>
                          <option value="09">09</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                        </select>
                        {renderError(touched, errors, "txtexpirationmonth")}
                      </div>

                      <div className="col-md-2 col-xs-12 w-full md:w-auto md:min-w-[120px]">
                        <select
                          name="txtexpirationyr"
                          className="form-control w-full"
                          id="txtexpirationyr"
                          value={values.txtexpirationyr}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        >
                          <option value="">yyyy</option>
                          <option value="2026">2026</option>
                          <option value="2027">2027</option>
                          <option value="2028">2028</option>
                          <option value="2029">2029</option>
                          <option value="2030">2030</option>
                          <option value="2031">2031</option>
                          <option value="2032">2032</option>
                          <option value="2033">2033</option>
                          <option value="2034">2034</option>
                          <option value="2035">2035</option>
                          <option value="2036">2036</option>
                          <option value="2037">2037</option>
                          <option value="2038">2038</option>
                          <option value="2039">2039</option>
                          <option value="2040">2040</option>
                          <option value="2041">2041</option>
                          <option value="2042">2042</option>
                          <option value="2043">2043</option>
                          <option value="2044">2044</option>
                          <option value="2045">2045</option>
                          <option value="2046">2046</option>
                          <option value="2047">2047</option>
                          <option value="2048">2048</option>
                          <option value="2049">2049</option>
                          <option value="2050">2050</option>
                          <option value="2051">2051</option>
                          <option value="2052">2052</option>
                          <option value="2053">2053</option>
                          <option value="2054">2054</option>
                          <option value="2055">2055</option>
                          <option value="2056">2056</option>
                        </select>
                        {renderError(touched, errors, "txtexpirationyr")}
                      </div>

                      <div className="col-md-5 col-xs-12 w-full md:flex-1">
                        <div className="row flex flex-col sm:flex-row gap-2 sm:gap-0 items-start sm:items-center">
                          <div className="col-md-5 w-full sm:w-auto">
                            <label className="control-label">
                              <span id="security" className="star">*</span>
                              Security Code
                            </label>
                          </div>
                          <div className="col-md-5 w-full sm:flex-1">
                            <input
                              name="txtsecuritycode"
                              type="password"
                              id="txtsecuritycode"
                              className="form-control w-full"
                              value={values.txtsecuritycode}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {renderError(touched, errors, "txtsecuritycode")}
                          </div>
                          <div className="col-md-2">
                            <a
                              className="help"
                              data-toggle="popover"
                              data-trigger="click"
                              title=""
                              data-content={`<img src='${BASE_URL}/cca/images/card_help.png' height='80' />`}
                              data-placement="top"
                            >
                              <img
                                src={`${BASE_URL}/cca/images/help.png`}
                                width="25"
                                height="25"
                                alt="help"
                              />
                              <img
                                src={`${BASE_URL}/cca/images/card_help.png`}
                                className="hidden"
                                alt="card_help"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row w-full gap-2 md:gap-3">
                      <label className="font-bold w-full md:w-[20%]">
                        <span className="star">*</span>
                        Name on Credit Card
                      </label>
                      <div className="flex flex-col w-full md:flex-1">
                        <input
                          name="txtcardname"
                          type="text"
                          className="form-control w-full"
                          value={values.txtcardname}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {renderError(touched, errors, "txtcardname")}
                      </div>
                    </div>

                    <h4 className="page-header w-full text-base sm:text-lg">
                      Billing Address for Card Holder (as shown on credit card statement)
                    </h4>

                    <div className="flex flex-col md:flex-row w-full gap-2 md:gap-3">
                      <label className="font-bold w-full md:w-[20%]">
                        <span className="star">*</span>
                        Street Address <br />
                        (incl. unit # or Suite #)
                      </label>
                      <div className="col-md-8 col-sm-6 col-xs-10 w-full md:flex-1">
                        <textarea
                          name="txtstrtadd"
                          className="form-control w-full"
                          cols={5}
                          rows={2}
                          value={values.txtstrtadd}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        ></textarea>
                        {renderError(touched, errors, "txtstrtadd")}
                      </div>
                    </div>

                    <div className="flex flex-col lg:flex-row w-full gap-2 lg:gap-3">
                      <label className="font-bold w-full lg:w-[5%]">
                        <span className="star">*</span>
                        City
                      </label>
                      <div className="flex flex-col w-full lg:flex-1">
                        <input
                          name="city"
                          type="text"
                          className="form-control w-full"
                          value={values.city}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {renderError(touched, errors, "city")}
                      </div>

                      <label className="font-bold w-full lg:w-[10%]">
                        <span className="star">*</span>
                        State
                      </label>
                      <div className="flex flex-col w-full lg:flex-1">
                        <select
                          name="state"
                          className="form-control w-full"
                          value={values.state}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        >
                          {stateOptions.map((state) => (
                            <option key={state.value} value={state.value}>
                              {state.label}
                            </option>
                          ))}
                        </select>
                        {renderError(touched, errors, "state")}
                      </div>

                      <label className="font-bold w-full lg:w-[10%]">
                        <span className="star">*</span>
                        Zip code
                      </label>
                      <div className="flex flex-col w-full lg:flex-1">
                        <input
                          name="zip"
                          type="text"
                          className="form-control w-full"
                          value={values.zip}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {renderError(touched, errors, "zip")}
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row w-full gap-2 md:gap-3">
                      <label className="font-bold w-full md:w-[20%]">
                        <span className="star">*</span>
                        Phone Number
                      </label>
                      <div className="col-md-8 col-sm-6 col-xs-10 w-full md:flex-1">
                        <input
                          name="txtphone"
                          type="text"
                          className="form-control w-full"
                          value={values.txtphone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {renderError(touched, errors, "txtphone")}
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row w-full gap-2 md:gap-3">
                      <label className="font-bold w-full md:w-[20%]">
                        <span className="star">*</span>
                        Contact Email
                      </label>
                      <div className="col-md-8 col-sm-6 col-xs-10 w-full md:flex-1">
                        <input
                          name="txtemail"
                          type="text"
                          className="form-control w-full"
                          value={values.txtemail}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {renderError(touched, errors, "txtemail")}
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row w-full gap-2 md:gap-3">
                      <label className="font-bold w-full md:w-[20%]">
                        <span className="star">*</span>
                        Amount $
                      </label>
                      <div className="col-md-8 col-sm-6 col-xs-10 w-full md:flex-1">
                        <input
                          name="txtamount"
                          type="text"
                          className="form-control w-full"
                          value={values.txtamount}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {renderError(touched, errors, "txtamount")}
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row w-full gap-2 md:gap-3">
                      <label className="font-bold w-full md:w-[20%]">
                        Comments
                      </label>
                      <div className="col-md-8 col-sm-6 col-xs-10 w-full md:flex-1">
                        <textarea
                          id="w3review"
                          name="comments"
                          rows={4}
                          cols={50}
                          className="form-control w-full"
                          value={values.comments}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        ></textarea>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row w-full gap-2 md:gap-3">
                      <div className="row sign-pad-sec w- full ">
                        <div className="col-md-7 col-xs-12 w-full ">
                          <div id="signature-pad" className="m-signature-pad w-full">
                            <div className="m-signature-pad--body w-full">
                              <canvas
                                ref={canvasRef}
                                id="applicant_signature"
                                style={{
                                  width: "100%",
                                  height: "220px",
                                  border: "1px solid #ccc",
                                  borderRadius: "6px",
                                  background: "#fff",
                                }}
                              />
                            </div>

                            <div className="m-signature-pad--footer">
                              <div
                                className="description"
                                style={{
                                  fontSize: "16px",
                                  margin: "7px 0 15px 0",
                                }}
                              >
                                Sign above{" "}
                                <span style={{ fontWeight: "normal" }}>
                                  (after sign save it to use)
                                </span>
                              </div>

                              <button
                                type="button"
                                id="clear_applicant"
                                className="button clear"
                                data-action="clear"
                                onClick={() => {
                                  signaturePadRef.current?.clear();
                                  setFieldValue("applicantsign_image", "");
                                }}
                              >
                                Clear
                              </button>

                              <button
                                type="button"
                                id="save_applicant"
                                className="button save"
                                data-action="save"
                                onClick={() => {
                                  if (!signaturePadRef.current) return;

                                  if (signaturePadRef.current.isEmpty()) {
                                    setFieldValue("applicantsign_image", "");
                                    return;
                                  }

                                  const signatureBase64 =
                                    signaturePadRef.current.toDataURL("image/png");
                                  setFieldValue(
                                    "applicantsign_image",
                                    signatureBase64
                                  );
                                }}
                              >
                                Save
                              </button>
                            </div>

                            {values.applicantsign_image && (
                              <div style={{ marginTop: "15px" }}>
                                <p>Saved Signature:</p>
                                <img
                                  src={values.applicantsign_image}
                                  alt="Applicant Signature"
                                  style={{
                                    maxWidth: "100%",
                                    width: "300px",
                                    border: "1px solid #ddd",
                                    background: "#fff",
                                  }}
                                />
                              </div>
                            )}

                            <input
                              data-rule-signature="true"
                              type="hidden"
                              name="applicantsign_image"
                              id="applicantsign_image"
                              value={values.applicantsign_image}
                              readOnly
                            />

                            {renderError(touched, errors, "applicantsign_image")}
                          </div>
                        </div>

                        <div className="col-md-5 col-xs-12 text-left md:text-right mt-3 md:mt-0">
                          <span className="control-label">Date: </span>03/19/2026
                        </div>
                      </div>
                    </div>

                    <div className="checkbox w-full text-sm sm:text-base leading-relaxed">
                      <label>
                        <input
                          type="checkbox"
                          name="checkme"
                          value="1"
                          checked={values.checkme}
                          onChange={(e) =>
                            setFieldValue("checkme", e.target.checked)
                          }
                          onBlur={handleBlur}
                        />{" "}
                        I understand that this is a service, and the fees are
                        non-refundable. By signing my name electronically, I hereby
                        authorize B3NET Inc. to keep my credit card information on file
                        and charge the card once the work is complete. I acknowledge that
                        my electronic signature is the legal equivalent of my manual
                        signature on this credit card authorization form. B3NET Inc. may
                        use the credit card provided above to make one-time payments or
                        schedule monthly automatic payments as needed. Please note that a
                        service fee of 3% will be charged at the time of payment, and
                        B3NET Inc. does not receive any portion of this fee.
                      </label>
                      {renderError(touched, errors, "checkme")}
                    </div>

                    <div
                      className="form-group text-center w-full"
                      style={{ margin: "34px 0 0 0" }}
                    >
                      <button
                        type="submit"
                        className="btn btn-info-gradiant btn-md btn-arrow m-t-20 w-full sm:w-auto"
                      >
                        <span>
                          Submit Information <i className="fa fa-arrow-right"></i>
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Page;
