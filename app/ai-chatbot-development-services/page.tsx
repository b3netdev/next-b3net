
import CountUp from '@/components/client/CountUp';
import Accordian from './Accordian';
import ContactForm from './ContactForm';
import ScrollLink from '@/components/client/ScrollLink';

const page = () => {
    const faqLeft = [
        {
            id: "faq1",
            question: "What types of AI chatbots do you develop?",
            answer: "We build a wide range of AI chatbots including customer support bots, lead generation bots, GPT-powered conversational agents, ecommerce assistants, knowledge base bots, and internal business workflow bots — all custom-tailored to your business.",
            show: true,
        },
        {
            id: "faq2",
            question: "Do you build GPT-powered custom chatbots?",
            answer: "Yes, fully customized GPT-based chatbot solutions.",
            show: false,
        },
        {
            id: "faq3",
            question: "Do you provide ongoing support and maintenance?",
            answer: "Yes, we offer full maintenance and optimization support.",
            show: false,
        },
    ];

    const faqRight = [
        {
            id: "faq4",
            question: "Can you integrate the chatbot into our existing website?",
            answer: "Yes, seamless integration with any platform or CMS.",
            show: false,
        },
        {
            id: "faq5",
            question: "Can the chatbot be trained on our business data?",
            answer: "Absolutely, we train bots using your business data.",
            show: false,
        },
        {
            id: "faq6",
            question: "How long does it take to build an AI chatbot?",
            answer: "Typically 1–3 weeks depending on complexity.",
            show: false,
        },
    ];

    return (
        <div className="ai-chatbot-container">
            <section className="hero site_header_1">
                <div className="container">
                    <div className="hero-content">
                        <h1>AI Chatbot <span className="accent ml-1"> Development</span>
                            <br/> Services
                        </h1>
                        <p>B3NET builds custom AI chatbot solutions that transform customer support, capture leads, automate sales, and streamline business workflows — tailored to your unique needs.</p>
                        <div className="hero-btns">
                            <ScrollLink
                                targetId='contactFormBox'
                                className="hero-btn primary">
                                Request a Free Consultation
                                <i className="fa-solid fa-arrow-right"></i>
                            </ScrollLink>
                            <a href="#" className="hero-btn secondary">
                                See Our AI Solutions
                                <i className="fa-solid fa-arrow-right"></i>
                            </a>
                        </div>
                        <div className="hero-stats">
                            <div className="stat-item">
                                <h4>
                                    <span className="counter" data-count="150">
                                        <CountUp value={150} duration={2000} />
                                    </span>+
                                </h4>
                                <p>Projects Delivered</p>
                            </div>
                            <div className="stat-item">
                                <h4>
                                    <span className="counter" data-count="98">
                                        <CountUp value={98} duration={2000} />
                                    </span>%
                                </h4>
                                <p>Client Satisfaction</p>
                            </div>
                            <div className="stat-item">
                                <h4>24/7</h4>
                                <p>Bot Availability</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-space section-intelligent">
                <div className="container position-relative">
                    <div className="text-center mb-4 mb-lg-5">
                        <h2 className="section-title">
                            Your Technology Partner for <span className="accent">Intelligent Automation</span>
                        </h2>
                        <p className="section-subtitle">B3NET is a technology and digital solutions company with deep expertise in web development, AI integrations, business automation, and data-driven strategies. We help businesses leverage the power of artificial intelligence to stay competitive and efficient.</p>
                    </div>
                    <div className="row">

                        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                            <div className="feature-card">
                                <div className="icon-box">
                                    <img src="assets/images/intelligent-automation-1.svg" alt="" />
                                </div>
                                <h5>Custom Solutions</h5>
                                <p>Tailored to your exact business requirements</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                            <div className="feature-card">
                                <div className="icon-box">
                                    <img src="assets/images/intelligent-automation-2.svg" alt="" />
                                </div>
                                <h5>Scalable Development</h5>
                                <p>Architecture that grows with your business</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                            <div className="feature-card">
                                <div className="icon-box">
                                    <img src="assets/images/intelligent-automation-3.svg" alt="" />
                                </div>
                                <h5>Business-Focused Strategy</h5>
                                <p>ROI-driven approach to every project</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                            <div className="feature-card">
                                <div className="icon-box">
                                    <img src="assets/images/intelligent-automation-4.svg" alt="" />
                                </div>
                                <h5>Ongoing Support</h5>
                                <p>Continuous optimization and maintenance</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-space services-sec-new pb-3 pb-md-5 dark-gradient">
                <div className="container position-relative">
                    <div className="text-center mb-4 mb-lg-5">
                        <h2 className="section-title white-title">
                            AI Chatbot Development <span className="accent">Services</span>
                        </h2>
                        <p className="section-subtitle white-subtitle">From customer-facing support bots to internal workflow assistants, we deliver end-to-end
                            chatbot solutions that drive measurable results.</p>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-3 mb-4">
                            <div className="services-sec">
                                <div className="service-card">
                                    <div className="service-top">
                                        <div className="service-icon">
                                            <img src="assets/images/development-services-icon-1.svg" alt="" />
                                        </div>
                                        <h5>Custom AI Chatbot Development</h5>
                                    </div>
                                    <p>Fully bespoke chatbots designed around your business processes, brand voice, and customer journey.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 mb-4">
                            <div className="services-sec">
                                <div className="service-card">
                                    <div className="service-top">
                                        <div className="service-icon">
                                            <img src="assets/images/development-services-icon-2.svg" alt="" />
                                        </div>
                                        <h5>Website Chatbot Integration</h5>
                                    </div>
                                    <p>Seamless embedding of intelligent chatbots into your existing website or web application.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 mb-4">
                            <div className="services-sec">
                                <div className="service-card">
                                    <div className="service-top">
                                        <div className="service-icon">
                                            <img src="assets/images/development-services-icon-3.svg" alt="" />
                                        </div>
                                        <h5>AI Customer Support Bots</h5>
                                    </div>
                                    <p>Automated support agents that resolve queries instantly, reducing wait times and ticket volume.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 mb-4">
                            <div className="services-sec">
                                <div className="service-card">
                                    <div className="service-top">
                                        <div className="service-icon">
                                            <img src="assets/images/development-services-icon-4.svg" alt="" />
                                        </div>
                                        <h5>Lead Generation Chatbots</h5>
                                    </div>
                                    <p>Conversational bots that qualify leads, capture information, and feed your sales pipeline 24/7.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 mb-4">
                            <div className="services-sec">
                                <div className="service-card">
                                    <div className="service-top">
                                        <div className="service-icon">
                                            <img src="assets/images/development-services-icon-5.svg" alt="" />
                                        </div>
                                        <h5>GPT-Powered Chatbot Solutions</h5>
                                    </div>
                                    <p>Advanced chatbots powered by GPT and large language models for natural, human-like conversations.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 mb-4">
                            <div className="services-sec">
                                <div className="service-card">
                                    <div className="service-top">
                                        <div className="service-icon">
                                            <img src="assets/images/development-services-icon-6.svg" alt="" />
                                        </div>
                                        <h5>Knowledge Base / FAQ Chatbots</h5>
                                    </div>
                                    <p>Intelligent bots trained on your documentation to provide instant, accurate answers.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 mb-4">
                            <div className="services-sec">
                                <div className="service-card">
                                    <div className="service-top">
                                        <div className="service-icon">
                                            <img src="assets/images/development-services-icon-7.svg" alt="" />
                                        </div>
                                        <h5>Ecommerce Chatbots</h5>
                                    </div>
                                    <p>Product recommendations, order tracking, and shopping assistance to boost conversions.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 mb-4">
                            <div className="services-sec">
                                <div className="service-card">
                                    <div className="service-top">
                                        <div className="service-icon">
                                            <img src="assets/images/development-services-icon-8.svg" alt="" />
                                        </div>
                                        <h5>Internal Business Assistant Bots</h5>
                                    </div>
                                    <p>Streamline HR, IT, and operations with AI assistants for your team.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-space why-chatbots">
                <div className="container">
                    <div className="text-center mb-4 mb-lg-5">
                        <h2 className="section-title">
                            Why Businesses Need <span className="accent">AI Chatbots</span>
                        </h2>
                        <p className="section-subtitle">AI chatbots are no longer optional — they're a competitive advantage that directly
                            impacts revenue, efficiency, and customer satisfaction.</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-4">
                            <div className="why-item d-flex">
                                <div className="why-icon">
                                    <img src="assets/images/businesses-need-icon-1.svg" alt="" />
                                </div>
                                <div>
                                    <h5>24/7 Customer Engagement</h5>
                                    <p>Never miss a customer query — your chatbot works around the clock, across time zones.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="why-item d-flex">
                                <div className="why-icon">
                                    <img src="assets/images/businesses-need-icon-2.svg" alt="" />
                                </div>
                                <div>
                                    <h5>Faster Support Response</h5>
                                    <p>Instant answers to common questions, reducing average response times by up to 80%.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="why-item d-flex">
                                <div className="why-icon">
                                    <img src="assets/images/businesses-need-icon-3.svg" alt="" />
                                </div>
                                <div>
                                    <h5>Improved Lead Qualification</h5>
                                    <p>Never miss a customer query — your chatbot works around the clock, across time zones.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="why-item d-flex">
                                <div className="why-icon">
                                    <img src="assets/images/businesses-need-icon-4.svg" alt="" />
                                </div>
                                <div>
                                    <h5>Reduced Manual Workload</h5>
                                    <p>Free your team from repetitive tasks to focus on strategic, high-value activities.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="why-item d-flex">
                                <div className="why-icon">
                                    <img src="assets/images/businesses-need-icon-5.svg" alt="" />
                                </div>
                                <div>
                                    <h5>Better Customer Experience</h5>
                                    <p>Personalized, conversational interactions that build trust and loyalty.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="why-item d-flex">
                                <div className="why-icon">
                                    <img src="assets/images/businesses-need-icon-6.svg" alt="" />
                                </div>
                                <div>
                                    <h5>Scalable Sales & Support</h5>
                                    <p>Handle thousands of simultaneous conversations without adding headcount.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-space process-sec">
                <div className="container">
                    <div className="text-center mb-4 mb-lg-5">
                        <h2 className="section-title">
                            Our Development <span className="accent">Process</span>
                        </h2>
                        <p className="section-subtitle">A structured, transparent approach from discovery to deployment — so you always know
                            what's happening and what's next.</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-4">
                            <div className="process-card">
                                <div className="process-top d-flex justify-content-between align-items-start">
                                    <div className="process-icon">
                                        <img src="assets/images/development-process-icon-1.svg" alt="" />
                                    </div>
                                    <div className="process-number">01</div>
                                </div>
                                <h5>Discovery & Strategy</h5>
                                <p>We analyze your business goals, audience, and use cases to define the chatbot strategy.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="process-card">
                                <div className="process-top d-flex justify-content-between align-items-start">
                                    <div className="process-icon">
                                        <img src="assets/images/development-process-icon-2.svg" alt="" />
                                    </div>
                                    <div className="process-number">02</div>
                                </div>
                                <h5>Use Case Planning</h5>
                                <p>Mapping out conversation scenarios, user intents, and integration points.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="process-card">
                                <div className="process-top d-flex justify-content-between align-items-start">
                                    <div className="process-icon">
                                        <img src="assets/images/development-process-icon-3.svg" alt="" />
                                    </div>
                                    <div className="process-number">03</div>
                                </div>
                                <h5>UX Conversation Design</h5>
                                <p>Crafting natural, engaging conversation flows that reflect your brand voice.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="process-card">
                                <div className="process-top d-flex justify-content-between align-items-start">
                                    <div className="process-icon">
                                        <img src="assets/images/development-process-icon-4.svg" alt="" />
                                    </div>
                                    <div className="process-number">04</div>
                                </div>
                                <h5>Development & Integration</h5>
                                <p>Building and integrating the chatbot with your website, CRM, and APIs.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="process-card">
                                <div className="process-top d-flex justify-content-between align-items-start">
                                    <div className="process-icon">
                                        <img src="assets/images/development-process-icon-5.svg" alt="" />
                                    </div>
                                    <div className="process-number">05</div>
                                </div>
                                <h5>Training & Testing</h5>
                                <p>Training the AI on your data and rigorously testing for accuracy and edge cases.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="process-card">
                                <div className="process-top d-flex justify-content-between align-items-start">
                                    <div className="process-icon">
                                        <img src="assets/images/development-process-icon-6.svg" alt="" />
                                    </div>
                                    <div className="process-number">06</div>
                                </div>
                                <h5>Deployment & Optimization</h5>
                                <p>Launching the chatbot and continuously optimizing based on real-world performance.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-space section-intelligent section-serve">
                <div className="container position-relative">
                    <div className="text-center mb-4 mb-lg-5">
                        <h2 className="section-title">
                            Industries We <span className="accent">Serve</span>
                        </h2>
                        <p className="section-subtitle">We've built AI chatbot solutions for businesses across diverse sectors — each with its <br />own unique challenges and opportunities.
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 mb-3 mb-md-4">
                            <div className="d-flex align-items-center serve-card">
                                <div className="icon-box">
                                    <img src="assets/images/we-serve-icon-1.svg" alt="" />
                                </div>
                                <h5>Healthcare</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-3 mb-md-4">
                            <div className="d-flex align-items-center serve-card">
                                <div className="icon-box">
                                    <img src="assets/images/we-serve-icon-2.svg" alt="" />
                                </div>
                                <h5>Ecommerce</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-3 mb-md-4">
                            <div className="d-flex align-items-center serve-card">
                                <div className="icon-box">
                                    <img src="assets/images/we-serve-icon-3.svg" alt="" />
                                </div>
                                <h5>Professional Services</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-3 mb-md-4">
                            <div className="d-flex align-items-center serve-card">
                                <div className="icon-box">
                                    <img src="assets/images/we-serve-icon-4.svg" alt="" />
                                </div>
                                <h5>Education</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-3 mb-md-4">
                            <div className="d-flex align-items-center serve-card">
                                <div className="icon-box">
                                    <img src="assets/images/we-serve-icon-5.svg" alt="" />
                                </div>
                                <h5>Real Estate</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-3 mb-md-4">
                            <div className="d-flex align-items-center serve-card">
                                <div className="icon-box">
                                    <img src="assets/images/we-serve-icon-6.svg" alt="" />
                                </div>
                                <h5>Manufacturing</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-3 mb-md-4">
                            <div className="d-flex align-items-center serve-card">
                                <div className="icon-box">
                                    <img src="assets/images/we-serve-icon-7.svg" alt="" />
                                </div>
                                <h5>Local Businesses</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-3 mb-md-4">
                            <div className="d-flex align-items-center serve-card">
                                <div className="icon-box">
                                    <img src="assets/images/we-serve-icon-8.svg" alt="" />
                                </div>
                                <h5>Startups & SaaS</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-space services-sec-new pb-3 pb-md-5 dark-gradient">
                <div className="container position-relative">
                    <div className="text-center mb-4 mb-lg-5">
                        <h2 className="section-title white-title">
                            Powerful Chatbot <span className="accent">Features</span>
                        </h2>
                        <p className="section-subtitle white-subtitle text-white">Every chatbot we build is packed with enterprise-grade features designed for
                            real business impact.</p>
                    </div>
                    <div className="row">

                        <div className="col-md-6 col-lg-3 mb-4">
                            <div className="services-sec">
                                <div className="service-card">
                                    <div className="service-top">
                                        <div className="service-icon">
                                            <img src="assets/images/chatbot-features-icon-1.svg" alt="" />
                                        </div>
                                        <h5>Natural Language Conversations</h5>
                                    </div>
                                    <p className='primary-bodyText'>Human-like interactions powered by advanced NLP.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 mb-4">
                            <div className="services-sec">
                                <div className="service-card">
                                    <div className="service-top">
                                        <div className="service-icon">
                                            <img src="assets/images/chatbot-features-icon-2.svg" alt="" />
                                        </div>
                                        <h5>Lead Capture Forms</h5>
                                    </div>
                                    <p className='primary-bodyText'>Built-in forms that capture visitor info mid-conversation.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 mb-4">
                            <div className="services-sec">
                                <div className="service-card">
                                    <div className="service-top">
                                        <div className="service-icon">
                                            <img src="assets/images/chatbot-features-icon-3.svg" alt="" />
                                        </div>
                                        <h5>CRM / API Integrations</h5>
                                    </div>
                                    <p className='primary-bodyText'>Connect with HubSpot, Salesforce, Zapier, and more.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 mb-4">
                            <div className="services-sec">
                                <div className="service-card">
                                    <div className="service-top">
                                        <div className="service-icon">
                                            <img src="assets/images/chatbot-features-icon-4.svg" alt="" />
                                        </div>
                                        <h5>Live Chat Handoff</h5>
                                    </div>
                                    <p className='primary-bodyText'>Seamless escalation to human agents when needed.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 mb-4">
                            <div className="services-sec">
                                <div className="service-card">
                                    <div className="service-top">
                                        <div className="service-icon">
                                            <img src="assets/images/chatbot-features-icon-5.svg" alt="" />
                                        </div>
                                        <h5>Multi-Language Support</h5>
                                    </div>
                                    <p className='primary-bodyText'>Engage global audiences in their preferred language.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 mb-4">
                            <div className="services-sec">
                                <div className="service-card">
                                    <div className="service-top">
                                        <div className="service-icon">
                                            <img src="assets/images/chatbot-features-icon-6.svg" alt="" />
                                        </div>
                                        <h5>Smart Recommendations</h5>
                                    </div>
                                    <p className='primary-bodyText'>Context-aware suggestions that drive conversions.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 mb-4">
                            <div className="services-sec">
                                <div className="service-card">
                                    <div className="service-top">
                                        <div className="service-icon">
                                            <img src="assets/images/chatbot-features-icon-7.svg" alt="" />
                                        </div>
                                        <h5>Custom Workflows</h5>
                                    </div>
                                    <p className='primary-bodyText'>Automate complex multi-step business processes.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 mb-4">
                            <div className="services-sec">
                                <div className="service-card">
                                    <div className="service-top">
                                        <div className="service-icon">
                                            <img src="assets/images/chatbot-features-icon-8.svg" alt="" />
                                        </div>
                                        <h5>Analytics & Reporting</h5>
                                    </div>
                                    <p className='primary-bodyText'>Actionable insights into chatbot performance and user behavior.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-space section-intelligent">
                <div className="container position-relative">
                    <div className="text-center mb-4 mb-lg-5">
                        <h2 className="section-title">
                            Why Choose <span className="accent">B3NET</span>
                        </h2>
                        <p className="section-subtitle primary-bodyText">We combine technical excellence with business strategy to deliver AI chatbot solutions
                            that actually work.</p>
                    </div>
                    <div className="row">

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="feature-card">
                                <div className="icon-box">
                                    <img src="assets/images/choose-b3net-icon-1.svg" alt="" />
                                </div>
                                <h5>Custom-Built Solutions</h5>
                                <p className='primary-bodyText'>No templates — every chatbot is engineered from the ground up for your specific needs.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="feature-card">
                                <div className="icon-box">
                                    <img src="assets/images/choose-b3net-icon-2.svg" alt="" />
                                </div>
                                <h5>Experienced AI & Web Team</h5>
                                <p>Developers, designers, and strategists with deep AI and web development expertise.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="feature-card">
                                <div className="icon-box">
                                    <img src="assets/images/choose-b3net-icon-3.svg" alt="" />
                                </div>
                                <h5>Business-First Approach</h5>
                                <p className='primary-bodyText'>We start with your goals and KPIs, not the technology. Results drive every decision.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="feature-card">
                                <div className="icon-box">
                                    <img src="assets/images/choose-b3net-icon-4.svg" alt="" />
                                </div>
                                <h5>Seamless Website Integration</h5>
                                <p className='primary-bodyText'>Your chatbot integrates perfectly with your existing website and tech stack.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="feature-card">
                                <div className="icon-box">
                                    <img src="assets/images/choose-b3net-icon-5.svg" alt="" />
                                </div>
                                <h5>Scalable Architecture</h5>
                                <p className='primary-bodyText'>Built to handle growth — from hundreds to millions of conversations.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="feature-card">
                                <div className="icon-box">
                                    <img src="assets/images/choose-b3net-icon-6.svg" alt="" />
                                </div>
                                <h5>Ongoing Support & Optimization</h5>
                                <p className='primary-bodyText'>We don't disappear after launch. Continuous monitoring, updates, and improvements.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="results-sec section-space">
                <div className="container">
                    <div className="text-center mb-4 mb-lg-5">
                        <h2 className="section-title">
                            Real Impact, Measurable <span className="accent">Results</span>
                        </h2>
                        <p className="section-subtitle primary-bodyText">Our AI chatbot solutions deliver tangible business outcomes. Here's what our clients have achieved</p>
                    </div>
                    <div className="row g-4 justify-content-center pb-4 pb-md-5 primary-bodyText">
                        <div className="col-lg-3 col-md-6">
                            <div className="results-card text-center h-100">
                                <div className="icon-box">
                                    <img src="assets/images/real-impact-icon-1.svg" />
                                </div>
                                <h3 className="result-value">3x</h3>
                                <h6>Lead Conversion Increase</h6>
                                <p>AI chatbot-driven qualification boosted conversion rates across campaigns.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="results-card text-center h-100">
                                <div className="icon-box">
                                    <img src="assets/images/real-impact-icon-2.svg" />
                                </div>
                                <h3 className="result-value">80%</h3>
                                <h6>Faster Response Times</h6>
                                <p>Automated support slashed average first-response time dramatically.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="results-card text-center h-100">
                                <div className="icon-box">
                                    <img src="assets/images/real-impact-icon-3.svg" />
                                </div>
                                <h3 className="result-value">60%</h3>
                                <h6>Reduced Support Burden</h6>
                                <p>Routine queries handled entirely by AI, freeing up the support team.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="results-card text-center h-100">
                                <div className="icon-box">
                                    <img src="assets/images/real-impact-icon-4.svg" />
                                </div>
                                <h3 className="result-value">95%</h3>
                                <h6>Customer Satisfaction</h6>
                                <p>Users rated their chatbot experience as excellent or very good.</p>
                            </div>
                        </div>
                    </div>
                    <div className="section-divider"></div>
                    <div className="text-center my-4 my-lg-5">
                        <h2 className="section-title">
                            Frequently Asked <span className="accent">Questions</span>
                        </h2>
                    </div>
                    <div className="row g-lg-4">
                        <div className="col-lg-6">
                            <Accordian items={faqLeft} parentId="faqLeft" />
                        </div>

                        <div className="col-lg-6">
                            <Accordian items={faqRight} parentId="faqRight" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="ai-contact-sec section-space">
                <div className="container">
                    <div className="row align-items-center g-4">
                        <div className="col-lg-6">
                            <div className="contact-content">
                                <h2 className="section-title">
                                    Ready to Build a Smarter
                                    <br />
                                    <span className="accent">AI Chatbot </span>
                                    for Your Business?
                                </h2>
                                <p className="section-subtitle primary-bodyText">
                                    Tell us about your project and our team will get back to you within 24 hours with a tailored strategy and free consultation.
                                </p>
                                <ul className="contact-points ">
                                    <li className='primary-bodyText'>No obligation consultation</li>
                                    <li className='primary-bodyText'>Custom strategy for your business</li>
                                    <li className='primary-bodyText'>Response within 24 hours</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="contact-form-box" id="contactFormBox">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>




    )
}

export default page
