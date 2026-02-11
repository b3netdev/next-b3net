import React from "react";

import AiModelClient from "../client/AiModelCard";

export default function AiModel() {
  return (
    <div className="slider-ai-slider new-gap" id="ai-integration-model">
      <div className="aisliderwrapper">
        <div className="container">
          <div className="aislider-content text-center mb-3 mb-md-5 heading-title">
            <p className="title">AI Integration Model</p>
            <h2 className="wp-block-heading has-text-align-center">
              Your Trusted Digital Partner in the <span>Age of AI</span>
            </h2>
          </div>
          <div className="row align-items-start">
            <div className="col-lg-6 mb-0 mb-lg-0">
              <div className="para-content">
                <p>
                  Artificial Intelligence is reshaping the way people search,
                  discover, and connect with businesses. The old rules of SEO
                  are no longer enough to capture attention in today’s
                  fast-moving digital landscape. Search engines are smarter,
                  users are more selective, and competition is more intense than
                  ever.
                </p>
                <p>
                  <strong>B3NET</strong> specializes in creating powerful
                  AI-driven SEO strategies built for this new era. We go beyond
                  traditional methods by combining advanced research, real-time
                  testing, and data-driven insights to ensure your brand doesn’t
                  just appear in search results—but stands out. Our approach is
                  designed to keep your business visible and relevant in
                  AI-first search environments.
                </p>
                <p className="text-underlin">
                  With <strong>B3NET</strong>, you don’t just keep up with
                  change—you stay ahead of it. We position your brand where it
                  matters most in AI-powered search, helping you attract the
                  right audience, increase visibility, build authority, and grow
                  with confidence in a constantly evolving digital world.
                </p>
              </div>
            </div>
            <div className="col-lg-6 position-relative">
              <AiModelClient />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
