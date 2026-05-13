"use client"
import { BASE_URL } from '@/lib/url'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useAppDispatch } from "@/redux/hooks";
import { SetshowLayout } from "@/redux/slicers/menuSlicer";


const page = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(SetshowLayout(false));

        return () => {
            dispatch(SetshowLayout(true));
        }
    }, [])

    return (
        <>
            <div className="header_section">
                <div className="blue_part"></div>
                <div className="wrapper_main">
                    <div className="wrapin1">
                        <div className="header_left">
                            <div className="logo">
                                <Link href="/">
                                    <img
                                        src={`${BASE_URL}/wp-content/uploads/2025/06/logo-2.png`}
                                        alt="logo"
                                        className="logo_img"

                                    />

                                </Link>
                            </div>
                        </div>

                        <div className="header_right">
                            <div className="click-mobile">
                                <a href="">
                                    <img src="images/mobile-btnup.png" alt="" />
                                </a>
                            </div>

                            <div className="phone_no">
                                <div className="pho_pic">
                                    <img src="images/pho_pic.png" alt="Phone" />
                                </div>

                                <div className="pho_txt">
                                    For help you may call us at <a href="tel:714-936-0208">
                                        <strong> 714-936-0208</strong>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Request for quote */}
                        <div className="sell_txt">
                            <ul>
                                <li>
                                    <Link
                                        href="/request-for-proposal"
                                        className="btn btn-outline-light new-btnn"
                                        style={

                                            {
                                                color: "#3b58a1",
                                                backgroundImage: "linear-gradient(#3979F3, #3979F3)",
                                                border: "1px solid #ffffff",
                                            }

                                        }
                                    >
                                        <span className="btn_label text-amber-50" data-text="Get A Free Proposal" style={{ opacity: "1" }}>
                                            Get A Free Proposal
                                        </span>
                                        <span className="btn_icon">
                                            <i className="fa-solid fa-arrow-right text-amber-50"></i>
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="our_servicesbg">
                <div className="wrapper_main">
                    <div className="wdw_txtbox1">
                        <div className="wdw-txt">
                            Thank you for choosing B3NET. We appreciate your business.
                            To execute your project, we request you to fill in the
                            appropriate worksheet below to the best of your ability. If
                            you have any questions please do not hesitate to contact us.
                            If you are building a Website with us then please select
                            "Website Design Brief". For E-Commerce select
                            "E-Commerce Design Brief" and so on. We look forward
                            working with you.
                        </div>

                        <div className="wdw-pic1">
                            <ul>
                                <li>
                                    <a
                                        href="https://docs.google.com/forms/d/1PnowF7qC50g2tqEbCZ-O2mtlZIXCftHvVL0BRk-sumA/edit#"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <img src={`${BASE_URL}/wdw/images/wdw1.png`} alt="wdw" />
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="https://docs.google.com/a/b3net.org/forms/d/1ExufZ0z_5NOAqK-gZvm9mYdmiEJ53U_NtugDyrRtAJI/edit#"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <img src={`${BASE_URL}/wdw/images/wdw2.png`} alt="wdw2" />
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="https://docs.google.com/a/b3net.org/forms/d/1R63Hhr9w_MVBUU4lcbeWIIZJFoiad1nXSv6oX3uG-Do/edit#"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <img src={`${BASE_URL}/wdw/images/wdw3.png`} alt="wdw3" />
                                    </a>
                                </li>

                                <li style={{ margin: '10px 20px 0 0' }}>
                                    <a
                                        href="https://docs.google.com/a/b3net.org/forms/d/1rSodxBBRGQFSz2_SnEg7auJNFuAZ51TdHnFBHEzr89k/viewform"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <img src={`${BASE_URL}/wdw/images/im.png`} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* footer section */}
            <div className="footer_section">
                <div className="footer_logobg">
                    <div className="wrapper_main">
                        <div className="wrapin1">
                            {/* <div className="footer_logobox">


                                <div className="logo1">
                                    <Link href="/">
                                        <img
                                            src={`${BASE_URL}/wp-content/uploads/2025/06/logo-2.png`}
                                            alt="logo"
                                            className="logo_img"

                                        />

                                    </Link></div>

                            </div> */}

                        </div>
                    </div>
                    <div className="main_footerbg">
                        <div className="wrapper_main">
                            <div className="wrapin1">
                                <div className="footerlft">
                                    <div className="footernav">
                                        <div className="footernav1">
                                            <ul>
                                                <li><strong>Company:</strong></li>
                                                <li><Link href="/">Home</Link></li>
                                                <li><Link href="/about-company">About Us</Link></li>
                                                <li><Link href="/responsive-web-design-framework-5-challenging-web-development-aspects">Portfolio</Link></li>
                                                <li><Link href="/testimonial">Testimonials</Link></li>
                                                <li><Link href="/blog">Blog</Link></li>
                                                <li><Link href="/contact">Contact Us</Link></li>

                                            </ul>
                                        </div>
                                        <div className="footernav1">
                                            <ul>
                                                <li><strong>Services:</strong></li>
                                                <li><Link href="/services">Web</Link></li>
                                                {/* <li><Link href="https://www.searchoptimal.com/" target="_blank" rel="nofollow">Online marketing</Link></li> */}


                                            </ul>
                                        </div>
                                        <div className="footernav1">
                                            <ul>
                                                <li><strong>Support:</strong></li>
                                                <li><Link href="/contact">Tech Support</Link></li>
                                                <li><Link href="https://launchpad.37signals.com/signin" rel="nofollow" target="_blank">
                                                    Client Login</Link></li>
                                                <li><Link href="/request-for-proposal">Request for Proposal</Link></li>
                                            </ul>
                                        </div>
                                        <div className="footerrgt">
                                            <div className="footertxt">
                                                Contact Information</div>
                                            <div className="contactbox">
                                                <ul>
                                                    <li className="home" style={{ lineHeight: "31px" }}>1570 E. Edinger, Suite 1
                                                        <br />
                                                        Santa Ana, CA 92705, USA</li>
                                                    <li className="pho">714.936.0208</li>
                                                    <li className="fax">714.459.7081</li>
                                                    <li className="msg"><a href="mailto:info@b3net.com">info (at) b3net (dot) com</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="footer-mobile">
                                        <ul>
                                            <li><Link href="/">Home</Link></li>
                                            <li><Link href="/about-company">About Us</Link></li>
                                            <li><a href="https://www.b3net.com/services.html">SERVICES</a></li>
                                            <li><a href="https://www.searchoptimal.com/" target="_blank" rel="nofollow">ONLINE MARKETING</a></li>


                                            <li><Link href="/responsive-web-design-framework-5-challenging-web-development-aspects">Portfolio</Link></li>
                                            <li><Link href="/blog">Blog</Link></li>
                                            <li><Link href="/contact">CONTACT Us</Link></li>
                                            <li><Link href="/request-for-proposal">Request for Proposal</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="qrcode_box">
                                    <div className="qrcode_pic">
                                        <img
                                            src="/images/qrcode_call.png"
                                            alt="QR code of Website Design Orange County"
                                        />
                                    </div>
                                    <div className="qrcode_txt">
                                        Scan to call us</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer_lastbg">
                        <div className="wrapper_main">
                            <div className="wrapin1">
                                <div className="footer_link">
                                    <div className="privecy">
                                        <ul>
                                            <li><Link href="/privacy-policy" rel="nofollow">Privacy Policy </Link></li>
                                            <li><a href="javascript:void(0);">I</a></li>
                                            <li><Link href="/terms-of-use" rel="nofollow">Terms of Use</Link></li>

                                        </ul>
                                        <div className="founder">Founder:
                                            <a href="https://plus.google.com/107126249784748935863?rel=author">Sudeep Banerjee</a></div>
                                    </div>
                                    <div className="copy_right">
                                        Copyright @1999-2014, B3NET INC. All rights reserved.</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div >
        </>
    )
}

export default page
