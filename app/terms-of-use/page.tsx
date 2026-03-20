import Link from 'next/link'
import React, { cache } from 'react'
import ShowNav from '@/components/client/ShowNav'
import { GetPageData } from '@/lib/getdata';
import { Metadata } from 'next';
import { buildMetadata, getSeoFromPageData } from '@/lib/seo';


const getBlogPageData = cache(async () => {
  
    const data = await GetPageData("terms-of-use", "page");
    return data?.page ?? data;
  });
  
  export async function generateMetadata(): Promise<Metadata> {
    const pageData = await getBlogPageData();
    const seo = getSeoFromPageData(pageData);
  
    return buildMetadata(seo);
  }
  
const page = async () => {
    const pageData = await getBlogPageData();
    console.log(pageData)

    return (
        <section className="product-details-sec shop-sec page_content default_content_class">
            <ShowNav/>
            <div className="port-landing-wrap details-page default-img">
                <div className="menu-design"></div>
                <div className="banner-img">

                    <div className="container">
                        <div className="banner-caption">
                            <h2>{pageData?.title?.rendered}</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact-sec">
                <div className="container new-bg-sec">
                    <div className="breadcrumb-left">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Terms of Use</li>
                            </ol>
                        </nav>
                    </div>
                    {/* <p>Welcome to the website of B3NET Inc. By accessing or using this website (<Link href="/">www.b3net.com</Link>), you agree to comply with and be bound by the following Terms of Use. If you do not agree with these terms, please do not use this website.</p>
                    <h2><strong>1. Copyright &amp; Ownership</strong></h2>
                    <p>All content on this website, including text, graphics, logos, images, design, and layout, is the property of B3NET Inc. and is protected by applicable copyright and intellectual property laws.</p>
                    <p>Copyright © 1999–2026, B3NET Inc. All rights reserved.</p>
                    <h2><strong>2. Permitted Use</strong></h2>
                    <p>You are granted a limited, non-exclusive, non-transferable right to access and use this website for personal, non-commercial, and informational purposes only.</p>
                    <p>You agree that:</p>
                    <ul>
                        <li>You will not modify, copy, or reproduce any content without permission</li>
                        <li>You will retain all copyright and proprietary notices on any permitted copies</li>
                        <li>You will not use any content for commercial purposes without written consent</li>
                    </ul>
                    <h2><strong>3. Restrictions on Use</strong></h2>
                    <p>You may not:</p>
                    <ul>
                        <li>Copy, distribute, republish, upload, or transmit any website material for commercial use</li>
                        <li>Reproduce or reuse website design, layout, or branding elements</li>
                        <li>Use any content in a way that violates applicable laws or regulations</li>
                    </ul>
                    <p>Any unauthorized use may result in legal action.</p>
                    <h2><strong>4. User Conduct</strong></h2>
                    <p>By using this website, you agree not to post or transmit any content that is:</p>
                    <ul>
                        <li>Defamatory, abusive, or discriminatory</li>
                        <li>Obscene, pornographic, or offensive</li>
                        <li>Fraudulent, misleading, or unlawful</li>
                        <li>Intended to harm, threaten, or violate the rights of others</li>
                    </ul>
                    <p>B3NET Inc. reserves the right to take appropriate action and cooperate with law enforcement authorities in response to violations.</p>
                    <h2><strong>5. Artificial Intelligence (AI) Disclaimer</strong></h2>
                    <p>This website may use AI-powered tools, including chatbots, to assist users with information and communication.</p>
                    <p>By using these features, you acknowledge that you are interacting with an automated system and not a human representative. AI-generated responses are provided for general informational purposes only and may not always be accurate, complete, or up to date.</p>
                    <p>B3NET Inc. does not guarantee the reliability of AI-generated content and shall not be held responsible for any decisions made based on such information. Users are encouraged to verify important details with a qualified human representative.</p>
                    <p>We may monitor and review chatbot interactions for quality assurance, training, and compliance purposes.</p>
                    <h2><strong>6. Limitation of Liability</strong></h2>
                    <p>B3NET Inc. shall not be held liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use this website or its content.</p>
                    <p>All content is provided “as is” without warranties of any kind, either express or implied.</p>
                    <h2><strong>7. Third-Party Links</strong></h2>
                    <p>This website may contain links to third-party websites. B3NET Inc. is not responsible for the content, policies, or practices of any third-party sites.</p>
                    <h2><strong>8. Changes to Terms</strong></h2>
                    <p>B3NET Inc. reserves the right to update or modify these Terms of Use at any time without prior notice. Continued use of the website constitutes acceptance of those changes.</p>
                    <h2><strong>9. Contact Information</strong></h2>
                    <p>If you have any questions regarding these Terms of Use, please contact:</p>
                    <p><strong>B3NET INC.</strong><br />
                        <strong>13601 Preston Rd, Ste W706,</strong><br />
                        <strong>Dallas, TX 75240</strong><br />
                        <strong>[Located at Carillon Towers at Dallas Midtown]</strong></p> */}

                        <div 
                        
                        dangerouslySetInnerHTML={{__html:pageData?.content || ""}}
                        />
                </div>
            </div>

        </section>

    )
}

export default page