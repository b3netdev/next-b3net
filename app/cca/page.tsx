"use client";

import React, { useEffect } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { BASE_URL } from "@/lib/url";
import { useAppDispatch } from "@/redux/hooks";
import { SetshowLayout } from "@/redux/slicers/menuSlicer";

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

const validationSchema = Yup.object({
  txtdomain: Yup.string().required("Customer Domain Name(s) is required"),
  txtcardtype: Yup.string().required("Card Type is required"),
  txtcardnumber: Yup.string()
    .required("Card Number is required")
    .matches(/^[0-9\s]+$/, "Card Number must contain only numbers"),
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
  applicantsign_image: Yup.string().required("Signature is required"),
  checkme: Yup.boolean().oneOf([true], "You must accept the authorization"),
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


  useEffect(()=>{
    dispatch(SetshowLayout(false));

    return()=>{
        dispatch(SetshowLayout(true));
    }
  },[])

  const renderError = (touched: any, errors: any, field: string) =>
    touched[field] && errors[field] ? (
      <div className="text-danger" style={{ marginTop: "5px", fontSize: "13px" }}>
        {errors[field]}
      </div>
    ) : null;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("Form Submitted:", values);
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
      }) => (
        <div className="container">
          <div className="contentBox row">
            <div className="w-full flex flex-col">
              {/* header area open */}
              <div className="header_area text-center">
                
                <div className="cardsec-logo">
                  <img 
                   src={`${BASE_URL}/wp-content/uploads/2025/06/logo-2.png`}
                  alt="B3NET Logo" />
                </div>
                
                <div className="cardsec-address">
                  8992 Preston Rd, Ste 110 -114 Frisco, TX 75034, Ph: (714)
                  936-0208, Ph: (214) 586-0650
                </div>
                <ul className="list-inline">
                  <li>
                    <Link href="/" >
                      www.b3net.com
                    </Link>
                  </li>
                  <li>|</li>
                  <li>
                    Email: <a href="mailto:billing@b3net.com">billing@b3net.com</a>
                  </li>
                </ul>
              </div>
              {/* header area closed */}

              <h2 className="text-center card-title-sec">Credit Card Authorization Form</h2>

              {/* full form area open */}
              <div className="form_full_area">
                {/* form box 1 open */}
                <div id="ccbox1" className="flex  justify-center">
                  <form className="form-horizonta w-[90%] flex flex-col gap-4 justify-center items-center" id="creditcardfrm" onSubmit={handleSubmit}>
                    <input className="hidden" type="text" />
                    <input className="hidden" type="password" />

                    <div className="flex w-full gap-3">
                      <label className="font-bold">
                        <span id="cdn" className="star">*</span>
                        Customer Domain Name(s)
                      </label>
                      <div className="col-md-9 col-sm-8 col-xs-12">
                        <input
                          name="txtdomain"
                          type="text"
                          className="form-control"
                          value={values.txtdomain}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {renderError(touched, errors, "txtdomain")}
                      </div>
                    </div>

                    <div className="flex w-full gap-3">
                      <label className="font-bold w-[20%]">
                        Company Name
                      </label>
                      <div className="col-md-9 col-sm-8 col-xs-12">
                        <input
                          name="company_name"
                          type="text"
                          className="form-control"
                          value={values.company_name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                    </div>

                    <div className="flex w-full gap-3">
                      <label className="font-bold w-[20%]">
                        <span id="ctype" className="star">*</span>
                        Card Type:
                      </label>
                      <div className="flex gap-6">
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

                    <div className="flex w-full gap-3">
                      <label className="font-bold w-[20%]">
                        <span id="cnumber" className="star">*</span>
                        Card Number
                      </label>
                      <div className="flex flex-col">
                        <input
                          name="txtcardnumber"
                          type="text"
                          id="txtcardnumber"
                          className="form-control"
                          value={values.txtcardnumber}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {renderError(touched, errors, "txtcardnumber")}
                      </div>
                    </div>

                    <div className="flex w-full gap-3">
                      <label className="font-bold w-[20%]">
                        <span id="exp" className="star">*</span>
                        Expiration Date
                      </label>

                      <div className="col-md-2 col-xs-12">
                        <select
                          name="txtexpirationmonth"
                          className="form-control"
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

                      <div className="col-md-2 col-xs-12">
                        <select
                          name="txtexpirationyr"
                          className="form-control"
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

                      <div className="col-md-5 col-xs-12">
                        <div className="row">
                          <div className="col-md-5">
                            <label className="control-label">
                              <span id="security" className="star">*</span>
                              Security Code
                            </label>
                          </div>
                          <div className="col-md-5">
                            <input
                              name="txtsecuritycode"
                              type="password"
                              id="txtsecuritycode"
                              className="form-control"
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
                              <img src={`${BASE_URL}/cca/images/card_help.png`} className="hidden" alt="card_help" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex w-full gap-3">
                      <label className="font-bold w-[20%]">
                        <span className="star">*</span>
                        Name on Credit Card
                      </label>
                      <div className="flex flex-col">
                        <input
                          name="txtcardname"
                          type="text"
                          className="form-control"
                          value={values.txtcardname}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {renderError(touched, errors, "txtcardname")}
                      </div>
                    </div>

                    <h4 className="page-header">
                      Billing Address for Card Holder (as shown on credit card statement)
                    </h4>

                    <div className="flex w-full gap-3">
                      <label className="font-bold w-[20%]">
                        <span className="star">*</span>
                        Street Address <br />
                        (incl. unit # or Suite #)
                      </label>
                      <div className="flex flex-col" >
                        <textarea
                          name="txtstrtadd"
                          className="form-control"
                          cols={5}
                          rows={2}
                          value={values.txtstrtadd}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        ></textarea>
                        {renderError(touched, errors, "txtstrtadd")}
                      </div>
                    </div>

                    <div className="flex w-full gap-3">
                      <label className="font-bold w-[5%]">
                        <span className="star">*</span>
                        City
                      </label>
                      <div className="flex flex-col" >
                        <input
                          name="city"
                          type="text"
                          className="form-control"
                          value={values.city}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {renderError(touched, errors, "city")}
                      </div>

                      <label className="font-bold w-[10%]">
                        <span className="star">*</span>
                        State
                      </label>
                      <div className="flex flex-col" >
                        <select
                          name="state"
                          className="form-control"
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

                      <label className="font-bold w-[10%]">
                        <span className="star">*</span>
                        Zip code
                      </label>
                      <div className="flex flex-col">
                        <input
                          name="zip"
                          type="text"
                          className="form-control"
                          value={values.zip}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {renderError(touched, errors, "zip")}
                      </div>
                    </div>

                    <div className="flex w-full gap-3">
                      <label className="font-bold w-[20%]">
                        <span className="star">*</span>
                        Phone Number
                      </label>
                      <div className="flex flex-col">
                        <input
                          name="txtphone"
                          type="text"
                          className="form-control"
                          value={values.txtphone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {renderError(touched, errors, "txtphone")}
                      </div>
                    </div>

                    <div className="flex w-full gap-3">
                      <label className="font-bold w-[20%]">
                        <span className="star">*</span>
                        Contact Email
                      </label>
                      <div className="flex flex-col">
                        <input
                          name="txtemail"
                          type="text"
                          className="form-control"
                          value={values.txtemail}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {renderError(touched, errors, "txtemail")}
                      </div>
                    </div>

                    

                    <div className="flex w-full gap-3">
                      <label className="font-bold w-[20%]">
                        <span className="star">*</span>
                        Amount $
                      </label>
                      <div className="flex flex-col">
                        <input
                          name="txtamount"
                          type="text"
                          className="form-control"
                          value={values.txtamount}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {renderError(touched, errors, "txtamount")}
                      </div>
                    </div>

                    <div className="flex w-full gap-3">
                      <label className="font-bold w-[20%]">
                        Comments
                      </label>
                      <div className="flex gap-6">
                        <textarea
                          id="w3review"
                          name="comments"
                          rows={4}
                          cols={50}
                          className="form-control"
                          value={values.comments}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        ></textarea>
                      </div>
                    </div>

                    <div className="flex w-full gap-3">
                      <div className="row sign-pad-sec">
                        <div className="col-md-7 col-xs-12">
                          

                          <div id="signature-pad" className="m-signature-pad">
                            <div className="m-signature-pad--body">
                              <canvas id="applicant_signature"></canvas>
                            </div>
                            <div className="m-signature-pad--footer">
                              <div
                                className="description"
                                style={{ fontSize: "16px", margin: "7px 0 15px 0" }}
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
                                onClick={() => setFieldValue("applicantsign_image", "")}
                              >
                                Clear
                              </button>
                              <button
                                type="button"
                                id="save_applicant"
                                className="button save"
                                data-action="save"
                                onClick={() => {
                                  const fakeBase64Signature = "signature-saved";
                                  setFieldValue("applicantsign_image", fakeBase64Signature);
                                }}
                              >
                                Save
                              </button>
                            </div>
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

                        <div className="col-md-5 col-xs-12 text-right">
                          <span className="control-label">Date: </span>03/19/2026
                        </div>
                      </div>
                    </div>

                    <div className="checkbox">
                      <label>
                        <input
                          type="checkbox"
                          name="checkme"
                          value="1"
                          checked={values.checkme}
                          onChange={(e) => setFieldValue("checkme", e.target.checked)}
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
                      className="form-group text-center"
                      style={{ margin: "34px 0 0 0" }}
                    >
                      <button
                        type="submit"
                        className="btn btn-info-gradiant btn-md btn-arrow m-t-20"
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