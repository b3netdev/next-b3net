"use client";

import Script from "next/script";

export default function ChatBot() {
  return (
    <div suppressHydrationWarning>
      {/*
        @ts-ignore */}
      <chat-widget
        location-id="7rTUeIEjjhHPyxUd7uk7"
        heading="Welcome to B3NET!"
        sub-heading="Hello I am AI Vera, an AI assistant. I am to provide you general information and answers."
        prompt-msg="Welcome to B3NET! I am AI Vera, an AI assistant"
        prompt-avatar="https://images.leadconnectorhq.com/image/f_webp/q_100/r_180/u_https://assets.cdn.filesafe.space/7rTUeIEjjhHPyxUd7uk7/media/67e3d04e2be3f731e62158ac.png"
        agency-name="B3NET Inc"
        agency-website="b3net.com"
        chat-type="liveChat"
        live-chat-user-inactive-msg="Looks like no one is available. Please leave your contact details. We will get back to you shortly."
        live-chat-feedback-note="Thank you, for taking your time."
        show-live-chat-welcome-msg="false"
        show-consent-checkbox="true"
      ></chat-widget>

      {/* <Script src="https://widgets.leadconnectorhq.com/loader.js" 
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js" 
      data-widget-id="67a1ec7aaa9ec2f9718ffab2"
      strategy="afterInteractive"
      ></Script> */}

    </div>
  );
}