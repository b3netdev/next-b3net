import React from 'react'
import { GetPageData } from '@/lib/getdata'
import ContactFooter from '@/components/server/ContactFooter';
import TestimonialsClientsSlider from './TestimonialSliders';

const Testimonial = async () => {

    const data = await GetPageData("testimonial", "page");


    const pageData = data?.page ?? data;
    return (
        <main className="page_content">
            <div className="portfolio-page testimonials">
                <div className="port-landing-wrap gpp">
                    <div className="banner-img">
                        <img
                            src="https://www.b3net.com/wp-content/uploads/2025/12/testimonials-banner.webp"
                            alt=""
                        />
                        <div className="container">
                            <div className="banner-caption">
                                <h2>What Our</h2>
                                <h1>
                                    Clients Say About <span> B3NET</span>
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-color-part">
                    <div className="breadcrum py-3 py-4 py-sm-5">
                        <div className="container">
                            <nav aria-label="breadcrumb ">
                                <ol className="breadcrumb d-flex align-items-center ">
                                    <li className="breadcrumb-item">
                                        <a href="https://www.b3net.com">Home</a>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Testimonial
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>

                    <div className="testimonials-items pb-5">
                        <div className="container">
                            <div
                                className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4"
                                data-masonry='{"percentPosition": true }'
                            >
                                <div className="col">
                                    <div className="testimonial-card">
                                        <div className="testimonial-header">
                                            <img
                                                src="https://www.b3net.com/wp-content/uploads/2018/05/cynthia.jpg"
                                                alt="Cindy Jacobs"
                                            />
                                            <div className="info">
                                                <h5>Cynthia Lewman</h5>
                                                <p>ToyMakingPlans</p>
                                                <p>(www.toymakingplans.com)</p>
                                            </div>
                                        </div>
                                        <p className="testimonial-text">
                                            <span>
                                                We were looking to grow our online business which
                                                required a new state of the art website. Over the course
                                                of a couple years we interviewed multiple design
                                                agencies but couldn&#8217;t find the right fit plus the
                                                trust that&#8217;s so necessary when you establish a
                                                working relationship. Then we found B3NET. Sudeep was
                                                instantly responsive to our needs and didn&#8217;t make
                                                hollow promises but specifically zeroed in with what his
                                                company could provide for us that would translate into
                                                future growth. We loved his team from the start and have
                                                received highly skilled, super responsive professional
                                                support. We&#8217;re looking forward to a continued
                                                relationship with B3NET as we work with them to grow our
                                                website, SEO, marketing and Social Media presence. B3NET
                                                stands head and shoulders above competitors!
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="testimonial-card">
                                        <div className="testimonial-header">
                                            <img
                                                src="https://www.b3net.com/wp-content/uploads/2017/04/cabinetdiy.jpg"
                                                alt="Cindy Jacobs"
                                            />
                                            <div className="info">
                                                <h5>Kevin Karadag</h5>
                                                <p>Cabinet DIY </p>
                                                <p>(www.cabinetdiy.com)</p>
                                            </div>
                                        </div>
                                        <p className="testimonial-text">
                                            <span>
                                                <span className="r-iWFP2ok_lCak">
                                                    <span className="review-full-text">
                                                        After working with 2 failing SEO companies, I found
                                                        B3NET Inc. They conducted an in-depth research,
                                                        presented me a comprehensive digital strategy and
                                                        got to work. They ranked my keywords, increased
                                                        traffic to my website, tripled my conversion rate
                                                        and I saw a solid increase in my sales. These guys
                                                        know what they are doing and they are really good at
                                                        what they do. I would not hesitate to recommend
                                                        B3NET to anyone. Great team!!
                                                    </span>
                                                </span>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="testimonial-card">
                                        <div className="testimonial-header">
                                            <img
                                                src="https://www.b3net.com/wp-content/uploads/2017/02/james-cameron.jpeg"
                                                alt="Cindy Jacobs"
                                            />
                                            <div className="info">
                                                <h5>James Cameron</h5>
                                                <p>Security Concepts Group</p>
                                                <p>(www.scg-lv.com)</p>
                                            </div>
                                        </div>
                                        <p className="testimonial-text">
                                            <span>
                                                What an outstanding team. From concept to delivery the
                                                entire process was made easy by the staff at B3NET. I
                                                had two projects and they brought my concept and
                                                idea&#8217;s to life. Any future projects that I may
                                                have I will definitely return to them because of their
                                                great service and ability to produce what they said they
                                                could. I would recommend this company and the entire
                                                team without hesitation.
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="testimonial-card">
                                        <div className="testimonial-header">
                                            <img
                                                src="https://www.b3net.com/wp-content/uploads/2017/02/Joe-Patera.jpg"
                                                alt="Cindy Jacobs"
                                            />
                                            <div className="info">
                                                <h5>Joe Patera</h5>
                                                <p>Serv-All Packaging</p>
                                                <p>(serv-allpackaging.com)</p>
                                            </div>
                                        </div>
                                        <p className="testimonial-text">
                                            <span>
                                                After burning through a stack of cash and three web
                                                designers that couldn&#8217;t handle what I wanted I
                                                found B3NET and they not only did what I wanted but did
                                                it quickly and reasonably. They did such a great job we
                                                had them handle our Digital Marketing needs with great
                                                success. Thanks guys.
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="testimonial-card">
                                        <div className="testimonial-header">
                                            <img
                                                src="https://www.b3net.com/wp-content/uploads/2017/02/Perry-Allison.jpg"
                                                alt="Cindy Jacobs"
                                            />
                                            <div className="info">
                                                <h5>Perry Allison</h5>
                                                <p>Synergy Fitness Products</p>
                                                <p>(www.synergyfitproducts.com)</p>
                                            </div>
                                        </div>
                                        <p className="testimonial-text">
                                            <span>
                                                B3NET have done a fantastic job with our website.
                                                Considering our pleasant experience with the website
                                                development we now use B3NET for our SEO Marketing.
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="testimonial-card">
                                        <div className="testimonial-header">
                                            <img
                                                src="https://www.b3net.com/wp-content/uploads/2017/01/Heidi-Leger.jpg"
                                                alt="Cindy Jacobs"
                                            />
                                            <div className="info">
                                                <h5>Heidi Leger</h5>
                                                <p>Lorbel, Inc.</p>
                                                <p>(store.lorbel.com)</p>
                                            </div>
                                        </div>
                                        <p className="testimonial-text">
                                            <span>
                                                B3NET has one of the greatest web design &amp; digital
                                                marketing teams around! Everyone who works for B3NET is
                                                very helpful and ensures your website looks its absolute
                                                best!! They offer support whenever you need it and are
                                                more than willing to help! Thank you guys for taking
                                                such pride in your work! Our company will always
                                                recommend you!
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="testimonial-card">
                                        <div className="testimonial-header">
                                            <img
                                                src="https://www.b3net.com/wp-content/uploads/2016/12/Cedric-Duhamel.jpg"
                                                alt="Cindy Jacobs"
                                            />
                                            <div className="info">
                                                <h5>Cédric Duhamel</h5>
                                                <p>Alain Girault</p>
                                                <p>(www.alaingirault.com)</p>
                                            </div>
                                        </div>
                                        <p className="testimonial-text">
                                            <span>
                                                It&#8217;s always difficult to choose a good web
                                                designer among a large panel of professionals. B3NET has
                                                perfectly met the requirements for my business. They are
                                                very competent, technically &#8220;limitless&#8221; and
                                                always take the necessary actions. There’s no doubt that
                                                I will continue to work with them. I really recommend
                                                them.
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="testimonial-card">
                                        <div className="testimonial-header">
                                            <img
                                                src="https://www.b3net.com/wp-content/uploads/2015/06/Bob-Burnet.png"
                                                alt="Cindy Jacobs"
                                            />
                                            <div className="info">
                                                <h5>Bob Burnet</h5>
                                                <p>CEO, Arc Levers</p>
                                                <p>(www.arclevers.com)</p>
                                            </div>
                                        </div>
                                        <p className="testimonial-text">
                                            <span>
                                                I hired B3NET to design and develop our website. I had a
                                                bunch of complex coding to be deployed. They did an
                                                awesome job. These guys rock.
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="testimonial-card">
                                        <div className="testimonial-header">
                                            <img
                                                src="https://www.b3net.com/wp-content/uploads/2015/06/Lisa-Burnett.png"
                                                alt="Cindy Jacobs"
                                            />
                                            <div className="info">
                                                <h5>Lisa Burnett</h5>
                                                <p>Manager, A-Vac Industries</p>
                                                <p>(www.avac.com)</p>
                                            </div>
                                        </div>
                                        <p className="testimonial-text">
                                            <span>
                                                B3NET INC. has been knowledgeable, efficient, and very
                                                timely in setting up our website. We would recommend
                                                them very highly to anyone
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="testimonial-card">
                                        <div className="testimonial-header">
                                            <img
                                                src="https://www.b3net.com/wp-content/uploads/2016/08/steve.jpg"
                                                alt="Cindy Jacobs"
                                            />
                                            <div className="info">
                                                <h5>Steve Wisotsky</h5>
                                                <p>
                                                    Owner, Discount Auto &amp; Truck Transporters, Inc.{" "}
                                                </p>
                                                <p>(www.theshippers.com)</p>
                                            </div>
                                        </div>
                                        <p className="testimonial-text">
                                            <span>
                                                I&#8217;ve been working with B3NET since 2001 on joint
                                                customers. Finally, after seeing the results
                                                they&#8217;ve been able to attain, I&#8217;ve made to
                                                decision to have them do my business. It&#8217;s a
                                                choice I should have made years ago.
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="testimonial-card">
                                        <div className="testimonial-header">
                                            <img
                                                src="https://www.b3net.com/wp-content/uploads/2015/06/Lucy-Rodriguez-Watson.png"
                                                alt="Cindy Jacobs"
                                            />
                                            <div className="info">
                                                <h5>Lucy Rodriguez Watson</h5>
                                                <p>Filmmaker, Love 10to1</p>
                                                <p>(www.love10to1.com)</p>
                                            </div>
                                        </div>
                                        <p className="testimonial-text">
                                            <span>
                                                They were there to help us every step of the way, from
                                                conception to launch. Thank you team B3NET, we look
                                                forward to collaborating in the future.
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="testimonial-card">
                                        <div className="testimonial-header">
                                            <img
                                                src="https://www.b3net.com/wp-content/uploads/2015/06/James-Gerald-LeBloch-.png"
                                                alt="Cindy Jacobs"
                                            />
                                            <div className="info">
                                                <h5>James Gerald LeBloch</h5>
                                                <p>Tax Lawyer</p>
                                                <p></p>
                                            </div>
                                        </div>
                                        <p className="testimonial-text">
                                            <span>
                                                I highly recommend B3NET since they did justice for my
                                                prospective I did not know anything about and I am 100%
                                                satisfied.
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="testimonial-card">
                                        <div className="testimonial-header">
                                            <img
                                                src="https://www.b3net.com/wp-content/uploads/2015/06/Servet-Hasan.png"
                                                alt="Cindy Jacobs"
                                            />
                                            <div className="info">
                                                <h5>Servet Hasan</h5>
                                                <p>Founder, Servet Hasan</p>
                                                <p>(www.servethasan.org)</p>
                                            </div>
                                        </div>
                                        <p className="testimonial-text">
                                            <span>
                                                They not only possess the skills, but are highly
                                                professional and efficient. I thank them for their hard
                                                work and dedication!!!!
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="testimonial-card">
                                        <div className="testimonial-header">
                                            <img
                                                src="https://www.b3net.com/wp-content/uploads/2015/06/Tracy-Hamilton.png"
                                                alt="Cindy Jacobs"
                                            />
                                            <div className="info">
                                                <h5>Tracy Hamilton</h5>
                                                <p>Owner, Wine Info</p>
                                                <p>(www.wineinfo.com)</p>
                                            </div>
                                        </div>
                                        <p className="testimonial-text">
                                            <span>
                                                I would like you to know how much I appreciate all of
                                                the great work that the staff of B3NET has provided to
                                                us in the development of our website.
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="testimonial-card">
                                        <div className="testimonial-header">
                                            <img
                                                src="https://www.b3net.com/wp-content/uploads/2015/06/Maryl-Gladstone.png"
                                                alt="Cindy Jacobs"
                                            />
                                            <div className="info">
                                                <h5>Maryl Gladstone</h5>
                                                <p>CEO, EFP Group LLC</p>
                                                <p></p>
                                            </div>
                                        </div>
                                        <p className="testimonial-text">
                                            <span>
                                                B3NET INC. is a web design and development company that
                                                is very committed to the success of their clients.
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="testimonial-card">
                                        <div className="testimonial-header">
                                            <img
                                                src="https://www.b3net.com/wp-content/uploads/2015/06/Dr.-Marc-Spitz.png"
                                                alt="Cindy Jacobs"
                                            />
                                            <div className="info">
                                                <h5>Dr. Marc Spitz</h5>
                                                <p>CEO, Dr Marc Spitz</p>
                                                <p></p>
                                            </div>
                                        </div>
                                        <p className="testimonial-text">
                                            <span>
                                                I was very specific on what I was looking for and they
                                                met all the qualifications on my checklist.
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="testimonial-card">
                                        <div className="testimonial-header">
                                            <img
                                                src="https://www.b3net.com/wp-content/uploads/2015/06/David-Schnieder.png"
                                                alt="Cindy Jacobs"
                                            />
                                            <div className="info">
                                                <h5>David Schnieder</h5>
                                                <p>Founder, American Real Estate and Mortgage School</p>
                                                <p></p>
                                            </div>
                                        </div>
                                        <p className="testimonial-text">
                                            <span>
                                                No matter how much complex applications had in our
                                                project, B3NET team implemented all those smoothly.
                                                B3NET is indeed Orange County’s #1 web development firm.
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="testimonial-card">
                                        <div className="testimonial-header">
                                            <img
                                                src="https://www.b3net.com/wp-content/uploads/2015/06/David-Tran.png"
                                                alt="Cindy Jacobs"
                                            />
                                            <div className="info">
                                                <h5>David Tran</h5>
                                                <p>President, MetroFund Financial, Inc.</p>
                                                <p></p>
                                            </div>
                                        </div>
                                        <p className="testimonial-text">
                                            <span>
                                                I&#8217;ve since browsed other competitor
                                                portfolio&#8217;s to see how their work compares &amp; I
                                                can honestly say I have no buyer&#8217;s remorse. We
                                                went with the right company.
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="testimonial-card">
                                        <div className="testimonial-header">
                                            <img
                                                src="https://www.b3net.com/wp-content/uploads/2015/06/PatrickMcNamee.png"
                                                alt="Cindy Jacobs"
                                            />
                                            <div className="info">
                                                <h5>Patrick McNamee</h5>
                                                <p>
                                                    Broker Associate, REALTOR, SRES Evergreen Realty,
                                                    HomeSmart
                                                </p>
                                                <p></p>
                                            </div>
                                        </div>
                                        <p className="testimonial-text">
                                            <span>
                                                It was a pleasure working with B3NET on my new custom
                                                blog on the WordPress platform. I am very pleased with
                                                the result!
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="testimonial-card">
                                        <div className="testimonial-header">
                                            <img
                                                src="https://www.b3net.com/wp-content/uploads/2015/06/gina.png"
                                                alt="Cindy Jacobs"
                                            />
                                            <div className="info">
                                                <h5>Gina B</h5>
                                                <p>CEO, Encore Staffing</p>
                                                <p></p>
                                            </div>
                                        </div>
                                        <p className="testimonial-text">
                                            <span>
                                                B3NET INC. did our website and they were very good,
                                                professional and a great value. I have already
                                                recommended them to other businesses that I know would
                                                benefit. Great Job B3NET INC.
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="testimonial-card">
                                        <div className="testimonial-header">
                                            <img
                                                src="https://www.b3net.com/wp-content/uploads/2016/08/Cindy-Jacobs.jpg"
                                                alt="Cindy Jacobs"
                                            />
                                            <div className="info">
                                                <h5>Cindy Jacobs</h5>
                                                <p>Director of Development, WISEPlace</p>
                                                <p>(www.wiseplace.org)</p>
                                            </div>
                                        </div>
                                        <p className="testimonial-text">
                                            <span>
                                                B3NET went above and beyond with us. As a non-profit,
                                                WISEPlace relies on the kindness of our community
                                                partners to help us navigate change. B3NET expertly
                                                assisted with the redesign of our website under atypical
                                                circumstances. They saw the project through from
                                                inception to completion, which was a very long, arduous
                                                process. They continue to guide us through anything that
                                                comes up and are very quick to respond to any questions
                                                or concerns we have about site maintenance. Sudeep and
                                                Karen are a pleasure to work with, and are great people
                                                to have on your side.
                                            </span>
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="video-section">
                    <div className="container">
                        <h2 className="text-center">Video Testimonials</h2>
                        <div className="row gy-4">
                            <div className="col-md-6 col-lg-4">
                                <div className="video-card p-3  text-center">
                                    <div className="video-thumbnail">
                                        <p>
                                            <iframe
                                                loading="lazy"
                                                title="YouTube video player"
                                                src="https://www.youtube.com/embed/u9ftgf6V1QI?si=lveHhHVKAHX4ipeA"
                                                width="320"
                                                height="200"
                                                frameBorder="0"
                                                allowFullScreen="allowFullScreen"
                                            ></iframe>
                                        </p>
                                        <a href="https://www.youtube.com/watch?v=video3">
                                            <img
                                                src="assets/images/test-video-img-1.png"
                                                alt="Video 3"
                                            />
                                            <span className="play-button">▶</span>
                                        </a>
                                    </div>
                                    <p className="video-title mt-3">
                                        Scott Stewart, Executive Producer, What’s up Orange Country{" "}
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4">
                                <div className="video-card p-3  text-center">
                                    <div className="video-thumbnail">
                                        <p>
                                            <iframe
                                                loading="lazy"
                                                title="YouTube video player"
                                                src="https://www.youtube.com/embed/zHExyh38CsE?si=RavhVD-kngwyzvtn"
                                                width="320"
                                                height="200"
                                                frameBorder="0"
                                                allowFullScreen="allowFullScreen"
                                            >
                                                <span
                                                    data-mce-type="bookmark"
                                                    style={{
                                                        display: "inline-block",
                                                        width: "0px",
                                                        overflow: "hidden",
                                                        lineHeight: "0",
                                                    }}
                                                    className="mce_SELRES_start"
                                                >

                                                </span>
                                            </iframe>
                                        </p>
                                        <a href="https://www.youtube.com/watch?v=video3">
                                            <img
                                                src="assets/images/test-video-img-1.png"
                                                alt="Video 3"
                                            />
                                            <span className="play-button">▶</span>
                                        </a>
                                    </div>
                                    <p className="video-title mt-3">
                                        James LeBloch, Business and Estate Planning &amp; Litigation{" "}
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4">
                                <div className="video-card p-3  text-center">
                                    <div className="video-thumbnail">
                                        <p>
                                            <iframe
                                                loading="lazy"
                                                width="320"
                                                height="200"
                                                src="https://www.youtube.com/embed/ey2r4hwa5yc?si=iEB3zaVcQ_f2Tsu0"
                                                title="YouTube video player"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                referrerPolicy="strict-origin-when-cross-origin"
                                                allowFullScreen
                                            ></iframe>
                                        </p>
                                        <a href="https://www.youtube.com/watch?v=video3">
                                            <img
                                                src="assets/images/test-video-img-1.png"
                                                alt="Video 3"
                                            />
                                            <span className="play-button">▶</span>
                                        </a>
                                    </div>
                                    <p className="video-title mt-3">
                                        David Schnieder, CEO, American Real Estate{" "}
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4">
                                <div className="video-card p-3  text-center">
                                    <div className="video-thumbnail">
                                        <p>
                                            <iframe
                                                loading="lazy"
                                                title="YouTube video player"
                                                src="https://www.youtube.com/embed/PmiegQ9TlQA?si=nfWm2Rgcl1mYAHQB"
                                                width="320"
                                                height="200"
                                                frameBorder="0"
                                                allowFullScreen="allowFullScreen"
                                            >
                                                <span
                                                    data-mce-type="bookmark"
                                                    style={{
                                                        display: "inline-block",
                                                        width: 0,
                                                        overflow: "hidden",
                                                        lineHeight: 0,
                                                    }}
                                                    className="mce_SELRES_start"
                                                >

                                                </span>
                                            </iframe>
                                        </p>
                                        <a href="https://www.youtube.com/watch?v=video3">
                                            <img
                                                src="assets/images/test-video-img-1.png"
                                                alt="Video 3"
                                            />
                                            <span className="play-button">▶</span>
                                        </a>
                                    </div>
                                    <p className="video-title mt-3">
                                        Brian Reece, Founder &amp; CEO of Sitters4Charities.org{" "}
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4">
                                <div className="video-card p-3  text-center">
                                    <div className="video-thumbnail">
                                        <p>
                                            <iframe
                                                loading="lazy"
                                                title="YouTube video player"
                                                src="https://www.youtube.com/embed/OsvGa2ZzlFk?si=k7MISuNZNM6VkFVl"
                                                width="320"
                                                height="200"
                                                frameBorder="0"
                                                allowFullScreen="allowFullScreen"
                                            >
                                                <span
                                                    data-mce-type="bookmark"
                                                    style={{
                                                        display: "inline-block",
                                                        width: "0px",
                                                        overflow: "hidden",
                                                        lineHeight: "0",
                                                    }}
                                                    className="mce_SELRES_start"
                                                >

                                                </span>
                                            </iframe>
                                        </p>
                                        <a href="https://www.youtube.com/watch?v=video3">
                                            <img
                                                src="assets/images/test-video-img-1.png"
                                                alt="Video 3"
                                            />
                                            <span className="play-button">▶</span>
                                        </a>
                                    </div>
                                    <p className="video-title mt-3">
                                        Bob Burnet, Founder &amp; CEO of Arclevers.com{" "}
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4">
                                <div className="video-card p-3  text-center">
                                    <div className="video-thumbnail">
                                        <p>
                                            <iframe
                                                loading="lazy"
                                                title="YouTube video player"
                                                src="https://www.youtube.com/embed/RwMs03qs6Yg?si=kA8k7e5gXQ9n4Tzn"
                                                width="320"
                                                height="200"
                                                frameBorder="0"
                                                allowFullScreen="allowFullScreen"
                                            >
                                                <span
                                                    data-mce-type="bookmark"
                                                    style={{
                                                        display: "inline-block",
                                                        width: "0px",
                                                        overflow: "hidden",
                                                        lineHeight: "0",
                                                    }}
                                                    className="mce_SELRES_start"
                                                >

                                                </span>
                                            </iframe>
                                        </p>
                                        <a href="https://www.youtube.com/watch?v=video3">
                                            <img
                                                src="assets/images/test-video-img-1.png"
                                                alt="Video 3"
                                            />
                                            <span className="play-button">▶</span>
                                        </a>
                                    </div>
                                    <p className="video-title mt-3">
                                        Juan Montejand, CEO of UltimateExplorers.com{" "}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="our-clients-sec sp">
                <div className="container">
                    <div className="row justify-content-center mb-4">
                        <div className="col-lg-8 text-center">
                            <div className="heading-title">
                                <p
                                    className="title aos-init aos-animate"
                                    data-aos="fade-left"
                                    data-aos-duration="800"
                                >
                                    Our Clients
                                </p>
                                <h2>
                                    Trusted by Businesses <span>Nationwide</span>{" "}
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ✅ CLIENT COMPONENT (Swiper) */}
                <TestimonialsClientsSlider pageData={pageData} />
            </div>

            <ContactFooter />
        </main>
    )
}

export default Testimonial