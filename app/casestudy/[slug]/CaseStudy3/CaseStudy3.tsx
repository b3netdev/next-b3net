import { getcaseStudiesData } from "@/lib/getdata";
import Link from "next/link";
import ServiceContact from "@/app/services/[slug]/ServiceContact";

import styles from "./casestudy3.module.css";
import CountUp from "@/components/client/CountUp";
import { BASE_URL } from "@/lib/url";

const statsData = [
  {
    number: 35,
    text: "increase in Organic Traffic",
  },
  {
    number: 72,
    text: "increase in Pageviews",
  },
  {
    number: 103,
    text: "increase in Conversion",
  },
];

const CaseStudy3 = async ({ pageData }: any) => {

  return (
    <main className="page_content">
      <div className="case-study">
        <section className={styles.casebannerSection}>
          <div className="bannerwrap">
            <div className="container">
              <div className={styles.casebannerWrap}>
                <div className={styles.bannerCaption}>
                  <h1>
                    How South America’s Top Tree Care Company Drives Conversion
                    From SEO
                  </h1>
                  <p style={{ color: 'white' }}>
                    We implemented intelligent digital marketing strategies to
                    boost the search engine ranking of the company.{" "}
                  </p>
                  <div className={styles.threeBlocks}>
                    {statsData.map((item, index) => (
                      <div className={styles.organicBlock} key={index}>
                        <h4>
                          <span className="count"><CountUp value={item?.number} duration={3000} /></span>%
                        </h4>
                        <p>{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bnr-img">
                  <img src={`${BASE_URL}/wp-content/themes/b3net/assets/images/banner-tree-care-logo.png`} />
                  <p>
                    <a href="https://treecarearborists.com/">
                      www.treecarearborists.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="profit-door-section sec-pad p-block">
          <div className="container">
            <div className={styles.caseSecTtl}>
              <h2>How B3NET Opens the Door of Profit for TreeCare Arborists</h2>
            </div>
            <p>
              <span>N</span>owadays, TreeCare Arborists is a prominent name
              among the homeowners of California and the neighboring places. But
              the scene was not the same some time back. In this digital age, it
              is impossible for a business to exist without a presence in the
              web world. Well, only presence is not enough. The presence should
              be made keeping in mind the target audience of the business. If
              your website is not able to reach the potential customers, then
              the presence of your business is nothing but futile. BSNET Inc. is
              the company that has made TreeCare Arborists well known to people.
            </p>
          </div>
        </section>

        <section className="pastlook-section sec-pad ">
          <div className="container">
            <div className={styles.caseSecTtl}>
              <h2>Have a Look at the Past</h2>
            </div>
            <p>
              When our professionals at BSNET were assigned to re-design the
              website of TreeCare Arborists, they got a single-page website to
              re-design. The site contained nothing except a few lines
              describing the services and location of the company. Even the few
              lines of text were not enough to draw the attention of the
              potential customers. Above all, the website was not SEO-friendly.
              The meta-title and meta-description of the page (the only page
              contained by the site) were not proper. Let's have a look at the
              previous site of TreeCare Arborists.
            </p>
            <div className="case-img-wrap">
              <img src={`${BASE_URL}/wp-content/themes/b3net/assets/images/old-website-design.png`} />
            </div>
          </div>
        </section>
        <div className={`${styles.hireUsSection} d-bg`}>
          <div className={styles.hireLeft}>
            <div className="sectitl">
              <h2>Our SEO Experts Enhance Your Website’s Visibility</h2>
            </div>
            <p>
              B3NET uses the latest and most advanced SEO tools to improve your
              website’s search ranking.
            </p>
          </div>
          <div className="hire-right">
            <Link
              href="/"
              className={`${styles.hireusBtn} btn btn-primary`}>
              HIRE US NOW
            </Link>
          </div>
        </div>

        <section
          className={`${styles.secPad} ${styles.ddBg} ${styles.remarkableTransformation}`}
        >
          <div className="container" style={{ paddingTop: "100px" }}>
            <div className={`${styles.caseSecTtl} ${styles.lColor}`}>
              <h2>Have a Look at the Remarkable Transformation</h2>
            </div>
            <p>
              Besides re-designing the company's website, B3NET partnered the
              company for digital marketing as well. You will be surprised to
              see the magical transformation of the website. In January 2016,
              the number of visitors of their site was 396. After doing digital
              marketing, the number of visitors of their site was found to be
              535 in the month of September. This data shows a 35.10% increase.
            </p>
            <p>
              Coming to pageviews, the total number of pageviews of their site
              (re-designed by B3NET) in the month of January was 681. After
              performing digital marketing, the total number of pageviews in the
              month of September was 1172. It indicates a 72.10% increase. In
              September, the total number of successful lead submissions was 18.
              The previous site did not have a contact form option.
            </p>
            <div className={`${styles.caseSecTtl} ${styles.newTtl}`}>
              <h2>Let's Have a Look at the Statistics Below</h2>
            </div>
            <div className="marketing-output">
              <div className="row">
                <div
                  className={`${styles.marketCol} ${styles.beforeMarket} col-md-4 col-sm-6  `}
                >
                  <h3>BEFORE DIGITAL MARKETING</h3>
                  <div className="column-2">
                    <div className={styles.marketCircle}>
                      <div className={styles.marketCount}>396</div>
                      <div className={styles.marketVisitors}>Visitors</div>
                      <div className={styles.marketMonth}>in January</div>
                      <div className={styles.marketYear}>2016</div>
                    </div>
                    <div className={styles.marketCircle}>
                      <div className={styles.marketCount}>681</div>
                      <div className={styles.marketVisitors}>Pageviews</div>
                      <div className={styles.marketMonth}>in January</div>
                      <div className={styles.marketYear}>2016</div>
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.marketCol} ${styles.beforeMarket} col-md-4 col-sm-6`}
                >
                  <h3>AFTER DIGITAL MARKETING</h3>
                  <div className="column-2">
                    <div className={styles.marketCircle}>
                      <div className={styles.marketCount}>681</div>
                      <div className={styles.marketVisitors}>Pageviews</div>
                      <div className={styles.marketMonth}>in January</div>
                      <div className={styles.marketYear}>2016</div>
                    </div>
                    <div className={styles.marketCircle}>
                      <div className={styles.marketCount}>681</div>
                      <div className={styles.marketVisitors}>Pageviews</div>
                      <div className={styles.marketMonth}>in January</div>
                      <div className={styles.marketYear}>2016</div>
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.marketCol} ${styles.beforeMarket} col-md-4 col-sm-6`}
                >
                  <h3>PERCENTAGE INCREASE</h3>
                  <div className="column-2">
                    <div className={styles.marketCircle}>
                      <div className={styles.marketCount}>+35%</div>
                    </div>
                    <div className={styles.marketCircle}>
                      <div className={styles.marketCount}>+72%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p>
              We implemented intelligent digital marketing strategies to boost
              the search engine ranking of the company. And as an outcome, you
              can find the keywords suggested by our experts ranking very well.
              After performing digital marketing, as per the keyword ranking of
              November 2016, our three keywords are 1st placeholders, and they
              are - Arborists Long Beach (SERP), crown reduction Fullerton and
              Brea, and TreeCare arborists anaheim.
            </p>
          </div>
        </section>

        <section className={`change-implementation ${styles.secPad}`}>
          <div className="container">
            <div className={`${styles.caseSecTtl}`}>
              <h2>How We Brought the Change?</h2>
            </div>
            <p>
              The success of a website depends on the design to a great extent.
              If you look at the previous site, you can find that it was a
              single page site having no inner page to describe the company and
              the services. Only a vague idea of the services was provided on
              the site. There was no contact form. We gave the site a new look
              having multiple pages such as "Home", "About Us", "Services",
              "Before &amp; After", "Contact Us", "Helpful Tree Care Links",
              "Location" and "Blog". This design helps people to know about the
              company and their services in a better way. In the Services page,
              you will be able to know about the services TreeCare offers such
              as thinning, shaping, crown reduction, corrective pruning, tree
              removal &amp; stump grinding, new tree planting, tree loca- tion,
              and nutrition and fertilization.
            </p>
            <div className="case-img-wrap">
              <img src={`${BASE_URL}/wp-content/themes/b3net/assets/images/new-website-design.png`} />
            </div>
            <p>
              We also work on the search engine optimization of the site.
              Previously, the meta-title and the meta-description of the page
              were not structured with proper keywords. Now, the meta title and
              meta description of each page can be found with proper keywords.
              We have highlighted each of the locations on the landing page. It
              will help the customers find the company only by putting the name
              of the locations which are listed under the "Location" option such
              as Long Beach, Fullerton and Brea, Anaheim Hills, CA and more.
            </p>
            <p>
              We have added a contact form to help the customers. If you are
              looking for the services they offer, you can put your name, phone
              no., email, zip code, the kind of help you want, in the contact
              form and submit it. Tree- Care Arborists will get back to you
              later. Isn't it really user-friendly?
            </p>
            <div className="case-img-wrap">
              <img src={`${BASE_URL}/wp-content/themes/b3net/assets/images/form-design.png`} />
            </div>
          </div>
        </section>

        <section className={`${styles.summingUp}  ${styles.ddBg}`}>
          <div className="container">
            <div className={`${styles.caseSecTtl} ${styles.lColor}`}>
              <h2>Summing Up</h2>
            </div>
            <p className={styles.summingdesc}>
              We started working on the project of TreeCare since the month of
              April in 2016. At the end of November, you can see the result by
              yourself. Recently, the client (owner of TreeCare Arborists) has
              greatly appreciated our work and informed that the business is
              running well:
            </p>
            <div className={`${styles.ownerQuote}`}>
              <p className={styles.summingdesc}>
                You guys have done a great job and I appreciate your work.
                Things are going so well that I am booked clear into next year
                at this point. I will be in touch with some web updates that I
                would like to get done too. <span className="quote-end"></span>
              </p>
              <div className={`${styles.ownerName}`}>
                <span className="long-line"></span>David Cornelison
              </div>
              <div className={`${styles.ownerDesc}`}>
                Owner of TreeCare Arborists
              </div>
            </div>
            <p className={styles.summingdesc}>
              If you also want to reap the benefits of our services like{" "}
              <b>TreeCare Arborists</b>, please feel free to call us!{" "}
            </p>
          </div>
        </section>

        <section className="request-quote-sec sec-pad" id="caserequest-qoute">
          <div className="container">
            <div className={`${styles.caseSecTtl}`}>
              <h2>Request For Quote</h2>
            </div>
            <ServiceContact showTitle={false} />

          </div>
        </section>
      </div>
    </main>
  )
}

export default CaseStudy3