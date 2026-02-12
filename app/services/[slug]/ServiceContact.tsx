"use client";

import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import { Element, Link } from "react-scroll";
const ServiceContact = () => {

    return (
        <Element name="contact-form">
            <div className="bottom-form" id="contact-form">
                <div className="container">
                    <div className="common-form shadow-1 bg-white p-3 p-sm-5">
                        <div className="heading5 mb-3 mb-md-5 text-center">
                            <h2>Request a FREE Consultation</h2>
                        </div>
                        <div
                            role="form"
                            className="wpcf7"
                            id="wpcf7-f12129-o3"
                            lang="en-US"
                            dir="ltr"
                        >
                            <div className="screen-reader-response">
                                <p role="status" aria-live="polite" aria-atomic="true"></p>{" "}
                                <ul></ul>
                            </div>
                            <form
                                // action="/wordpress-development-company.html#wpcf7-f12129-o3"
                                // method="post"
                                className="wpcf7-form init"
                                //   novalidate="novalidate"
                                data-status="init"
                            >
                                <div className="row mb-3">
                                    <div className="col-md-6 form-group">
                                        <label>
                                            First Name <span>*</span>
                                        </label>
                                        <br />
                                        <span
                                            className="wpcf7-form-control-wrap"
                                            data-name="first-name"
                                        >
                                            <input
                                                type="text"
                                                name="first-name"
                                                value=""
                                                size={40}
                                                className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control"
                                                aria-required="true"
                                                aria-invalid="false"
                                            />
                                        </span>
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label>
                                            Last Name <span>*</span>
                                        </label>
                                        <br />
                                        <span
                                            className="wpcf7-form-control-wrap"
                                            data-name="last-name"
                                        >
                                            <input
                                                type="text"
                                                name="last-name"
                                                value=""
                                                size={40}
                                                className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control"
                                                aria-required="true"
                                                aria-invalid="false"
                                            />
                                        </span>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-6 form-group">
                                        <label>
                                            Email <span>*</span>
                                        </label>
                                        <br />
                                        <span
                                            className="wpcf7-form-control-wrap"
                                            data-name="email"
                                        >
                                            <input
                                                type="email"
                                                name="email"
                                                value=""
                                                size={40}
                                                className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email form-control"
                                                aria-required="true"
                                                aria-invalid="false"
                                            />
                                        </span>
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label>
                                            Phone No <span>*</span>
                                        </label>
                                        <br />
                                        <span
                                            className="wpcf7-form-control-wrap"
                                            data-name="phone"
                                        >
                                            <input
                                                type="tel"
                                                name="phone"
                                                value=""
                                                size={40}
                                                className="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel form-control"
                                                aria-required="true"
                                                aria-invalid="false"
                                            />
                                        </span>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-6 form-group">
                                        <label>Company Name</label>
                                        <br />
                                        <span
                                            className="wpcf7-form-control-wrap"
                                            data-name="company-name"
                                        >
                                            <input
                                                type="text"
                                                name="company-name"
                                                value=""
                                                size={40}
                                                className="wpcf7-form-control wpcf7-text form-control"
                                                aria-invalid="false"
                                            />
                                        </span>
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label>Company Website</label>
                                        <br />
                                        <span
                                            className="wpcf7-form-control-wrap"
                                            data-name="company-website"
                                        >
                                            <input
                                                type="url"
                                                name="company-website"
                                                value=""
                                                size={40}
                                                className="wpcf7-form-control wpcf7-text wpcf7-url wpcf7-validates-as-url form-control"
                                                aria-invalid="false"
                                            />
                                        </span>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>
                                        Your Message <span>*</span>
                                    </label>
                                    <br />
                                    <span
                                        className="wpcf7-form-control-wrap"
                                        data-name="message"
                                    >
                                        <textarea
                                            name="message"
                                            cols={40}
                                            rows={10}
                                            className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required form-control"
                                            aria-required="true"
                                            aria-invalid="false"
                                        ></textarea>
                                    </span>
                                </div>
                                <div className="mt-md-3 text-center">
                                    <input
                                        type="submit"
                                        // value="SUBMIT NOW"
                                        className="wpcf7-form-control has-spinner wpcf7-submit services-button"
                                    />
                                </div>
                                <div
                                    className="wpcf7-response-output"
                                    aria-hidden="true"
                                ></div>
                            </form>
                        </div>{" "}
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default ServiceContact