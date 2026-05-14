import ShowNav from '@/components/client/ShowNav'
import { BASE_URL } from '@/lib/url'
import type { Metadata } from "next";




export const metadata: Metadata = {
    title: "WDW",
    robots: {
      index: false,
      follow: false,
    },
  };

const page = () => {





    return (
        <>
            <ShowNav />
            <div className="wdw-container ">
                <div className="container">
                    <div className="wdw_txtbox1">
                        <div className="wdw-txt primary-bodyText">
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
                                        <img src={`${BASE_URL}/wp-content/uploads/2026/05/wdw1.png`} alt="wdw" />
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="https://docs.google.com/a/b3net.org/forms/d/1ExufZ0z_5NOAqK-gZvm9mYdmiEJ53U_NtugDyrRtAJI/edit#"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <img src={`${BASE_URL}/wp-content/uploads/2026/05/wdw2.png`} alt="wdw2" />
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="https://docs.google.com/a/b3net.org/forms/d/1R63Hhr9w_MVBUU4lcbeWIIZJFoiad1nXSv6oX3uG-Do/edit#"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <img src={`${BASE_URL}/wp-content/uploads/2026/05/wdw3.png`} alt="wdw3" />
                                    </a>
                                </li>

                                <li >
                                    <a
                                        href="https://docs.google.com/a/b3net.org/forms/d/1rSodxBBRGQFSz2_SnEg7auJNFuAZ51TdHnFBHEzr89k/viewform"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <img src={`${BASE_URL}/wp-content/uploads/2026/05/wdw4.png`} />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://docs.google.com/forms/d/e/1FAIpQLSfpRxeWuHK-88WjzFrjgGNcZCW1nN3XZtXckpRC9Co1TX2jMA/viewform"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <img src={`${BASE_URL}/wp-content/uploads/2026/05/wdw5.png`} />
                                    </a>
                                </li>
                            </ul>
                            <div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default page
