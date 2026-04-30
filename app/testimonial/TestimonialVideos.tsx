"use client"
import React from 'react'

const TestimonialVideos = () => {
    const videos = [
        {
            src: "https://www.youtube.com/embed/u9ftgf6V1QI?si=lveHhHVKAHX4ipeA",
            title: "Scott Stewart, Executive Producer, What's up Orange Country",
        },
        {
            src: "https://www.youtube.com/embed/zHExyh38CsE?si=RavhVD-kngwyzvtn",
            title: "James LeBloch, Business and Estate Planning & Litigation",
        },
        {
            src: "https://www.youtube.com/embed/ey2r4hwa5yc?si=iEB3zaVcQ_f2Tsu0",
            title: "David Schnieder, CEO, American Real Estate",
        },
        {
            src: "https://www.youtube.com/embed/PmiegQ9TlQA?si=nfWm2Rgcl1mYAHQB",
            title: "Brian Reece, Founder & CEO of Sitters4Charities.org",
        },
        {
            src: "https://www.youtube.com/embed/OsvGa2ZzlFk?si=k7MISuNZNM6VkFVl",
            title: "Bob Burnet, Founder & CEO of Arclevers.com",
        },
        {
            src: "https://www.youtube.com/embed/RwMs03qs6Yg?si=kA8k7e5gXQ9n4Tzn",
            title: "Juan Montejand, CEO of UltimateExplorers.com",
        },
    ];
    return (
        <div className="video-section">
            <div className="container">
                <h2 className="text-center">Video Testimonials</h2>
                <div className="row gy-4">
                    {videos.map((video, index) => (
                        <div className="col-md-6 col-lg-4" key={index}>
                            <div className="video-card p-3  text-center">
                                <div className="video-thumbnail">
                                    <p>
                                        <iframe
                                            loading="lazy"
                                            title="YouTube video player"
                                            src={video.src}
                                            width="320"
                                            height="200"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerPolicy="strict-origin-when-cross-origin"
                                            allowFullScreen={true}
                                        ></iframe>
                                    </p>

                                </div>
                                <p className="video-title mt-3">
                                    {video.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TestimonialVideos
