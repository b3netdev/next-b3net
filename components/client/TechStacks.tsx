"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

import PHP from "../../assets/images/technologies/PHP.png";
import REACTJS from "../../assets/images/technologies/react-js.png";
import WORDPRESS from "../../assets/images/technologies/wordpress.png";
import SHOPIFY from "../../assets/images/technologies/Shopify.png";
import PYTHON from "../../assets/images/technologies/Python.png";
import NODE from "../../assets/images/technologies/Node.png";
import MONGODB from "../../assets/images/technologies/MongoDB.png";
import LARAVEL from "../../assets/images/technologies/laravel.png";
import JQUERY from "../../assets/images/technologies/JQuery.png";
import MYSQL from "../../assets/images/technologies/mysql.png";
import JOOMLA from "../../assets/images/technologies/Joomla.png";
import CODEIGNITER from "../../assets/images/technologies/codeigniter.png";
import ANGULAR from "../../assets/images/technologies/angular.png";
import ADOBEPHOTOI from "../../assets/images/design/adobe-photoshop.png";
import ADOBEILLUS from "../../assets/images/design/Adobe-Illustrator.png";
import CANVA from "../../assets/images/design/Canva.png";
import ADOBEXD from "../../assets/images/design/Adobe-xd.png";
import HTML5 from "../../assets/images/design/HTML5.png";
import CSS from "../../assets/images/design/css.png";
import FIGMA from "../../assets/images/design/Figma.png";
import SKETCH from "../../assets/images/design/Sketch.png";

import GOOGLESEARCH from "../../assets/images/tools/Google-search-console.png";
import GOOGLEANALYTICS from "../../assets/images/tools/Google-Analytics.png";
import SEMRUSH from "../../assets/images/tools/Semrush.png";
import AHREFS from "../../assets/images/tools/ahrefs.png";
import HUBSPOT from "../../assets/images/tools/HubSpot.png";
import MICROSOFTCLARITY from "../../assets/images/tools/Microsoft-clarity.png";
import SCREAMING from "../../assets/images/tools/Screaming-Frog.png";
import KEYBOARDPLANER from "../../assets/images/tools/Keyword-planner.png";
import SIMILARWEB from "../../assets/images/tools/Similarweb.png";
import SPYFU from "../../assets/images/tools/spyfu.png";

import AI1 from "../../assets/images/design/ai-1.jpg";
import AI2 from "../../assets/images/design/ai-2.jpg";
import AI3 from "../../assets/images/design/ai-3.jpg";
import AI4 from "../../assets/images/design/ai-4.jpg";
import AI5 from "../../assets/images/design/ai-5.jpg";
import AI6 from "../../assets/images/design/ai-6.jpg";
import AI7 from "../../assets/images/design/ai-7.jpg";
import AI8 from "../../assets/images/design/ai-8.jpg";
import AI9 from "../../assets/images/design/ai-9.jpg";
import AI10 from "../../assets/images/design/ai-10.jpg";

// Normal client logos
import CLIENT1 from "../../assets/images/clients-logo/our-client-1.png";
import CLIENT2 from "../../assets/images/clients-logo/our-client-2.png";
import CLIENT3 from "../../assets/images/clients-logo/our-client-3.png";
import CLIENT4 from "../../assets/images/clients-logo/our-client-4.png";
import CLIENT5 from "../../assets/images/clients-logo/our-client-5.png";
import CLIENT6 from "../../assets/images/clients-logo/our-client-6.png";
import CLIENT7 from "../../assets/images/clients-logo/our-client-7.png";
import CLIENT8 from "../../assets/images/clients-logo/our-client-8.png";
import CLIENT9 from "../../assets/images/clients-logo/our-client-9.png";
import CLIENT11 from "../../assets/images/clients-logo/our-client-11.png";
import CLIENT12 from "../../assets/images/clients-logo/our-client-12.png";
import CLIENT13 from "../../assets/images/clients-logo/our-client-13.png";
import CLIENT16 from "../../assets/images/clients-logo/our-client-16.png";
import CLIENT17 from "../../assets/images/clients-logo/our-client-17.png";
import CLIENT18 from "../../assets/images/clients-logo/our-client-18.png";
import CLIENT19 from "../../assets/images/clients-logo/our-client-19.png";
import CLIENT20 from "../../assets/images/clients-logo/our-client-20.svg";

// Covert images
import CTCGLOBAL from "../../assets/images/clients-logo/covert-images/ctc-global.jpg";
import MP from "../../assets/images/clients-logo/covert-images/mp.jpg";
import MEDMAPS from "../../assets/images/clients-logo/covert-images/med-maps.jpg";
import CABINET from "../../assets/images/clients-logo/covert-images/cabinet.jpg";
import IHA from "../../assets/images/clients-logo/covert-images/iha.jpg";
import DOCKBOXES from "../../assets/images/clients-logo/covert-images/dock-boxes.jpg";
import USDOT from "../../assets/images/clients-logo/covert-images/us.dot-services.jpg";
import WISEPLACE from "../../assets/images/clients-logo/covert-images/wise-place.jpg";
import THEFITFTH from "../../assets/images/clients-logo/covert-images/the-fitfth.jpg";
import OXYGEN8 from "../../assets/images/clients-logo/covert-images/oxygen8.jpg";
import MARINBIO from "../../assets/images/clients-logo/covert-images/marin-bio.jpg";
import CRYSTALCOVE from "../../assets/images/clients-logo/covert-images/crystal-cove.jpg";
import CALIFORNIAH2OT from "../../assets/images/clients-logo/covert-images/calforniah2ot.jpg";

type StackId = "dev" | "seo" | "ai";

type TechItem = {
  name: string;
  image: StaticImageData;
  category?: string;
};

type AiImageItem = {
  id: number;
  image: StaticImageData;
};

type ClientLogoItem = {
  id: number;
  image: StaticImageData;
};

const TechStacks: React.FC = () => {
  const [selectStack, setSelectStack] = useState<StackId>("dev");

  const technologies: TechItem[] = [
    { name: "PHP", image: PHP, category: "backend" },
    { name: "React JS", image: REACTJS, category: "frontend" },
    { name: "WordPress", image: WORDPRESS, category: "cms" },
    { name: "Shopify", image: SHOPIFY, category: "cms" },
    { name: "Python", image: PYTHON, category: "backend" },
    { name: "Node.js", image: NODE, category: "backend" },
    { name: "MongoDB", image: MONGODB, category: "database" },
    { name: "Laravel", image: LARAVEL, category: "backend" },
    { name: "jQuery", image: JQUERY, category: "frontend" },
    { name: "MySQL", image: MYSQL, category: "database" },
    { name: "Joomla", image: JOOMLA, category: "cms" },
    { name: "CodeIgniter", image: CODEIGNITER, category: "backend" },
    { name: "Angular", image: ANGULAR, category: "frontend" },
    { name: "Adobe Photoshop", image: ADOBEPHOTOI, category: "design" },
    { name: "Adobe Illustrator", image: ADOBEILLUS, category: "design" },
    { name: "Canva", image: CANVA, category: "design" },
    { name: "Adobe XD", image: ADOBEXD, category: "design" },
    { name: "HTML5", image: HTML5, category: "frontend" },
    { name: "CSS3", image: CSS, category: "frontend" },
    { name: "Figma", image: FIGMA, category: "design" },
    { name: "Sketch", image: SKETCH, category: "design" },
  ];

  const seoTools: TechItem[] = [
    { name: "Google Search Console", image: GOOGLESEARCH, category: "seo" },
    { name: "Google Analytics", image: GOOGLEANALYTICS, category: "analytics" },
    { name: "SEMrush", image: SEMRUSH, category: "seo" },
    { name: "Ahrefs", image: AHREFS, category: "seo" },
    { name: "HubSpot", image: HUBSPOT, category: "marketing" },
    { name: "Microsoft Clarity", image: MICROSOFTCLARITY, category: "analytics" },
    { name: "Screaming Frog", image: SCREAMING, category: "seo" },
    { name: "Keyword Planner", image: KEYBOARDPLANER, category: "seo" },
    { name: "SimilarWeb", image: SIMILARWEB, category: "analytics" },
    { name: "SpyFu", image: SPYFU, category: "seo" },
  ];

  const aiDesignImages: AiImageItem[] = [
    { id: 1, image: AI1 },
    { id: 2, image: AI2 },
    { id: 3, image: AI3 },
    { id: 4, image: AI4 },
    { id: 5, image: AI5 },
    { id: 6, image: AI6 },
    { id: 7, image: AI7 },
    { id: 8, image: AI8 },
    { id: 9, image: AI9 },
    { id: 10, image: AI10 },
  ];

  const clientLogos: ClientLogoItem[] = [
    { id: 1, image: CLIENT1 },
    { id: 2, image: CTCGLOBAL },
    { id: 3, image: CLIENT2 },
    { id: 4, image: MP },
    { id: 5, image: CLIENT3 },
    { id: 6, image: CLIENT4 },
    { id: 7, image: MEDMAPS },
    { id: 8, image: CABINET },
    { id: 9, image: CLIENT5 },
    { id: 10, image: IHA },
    { id: 11, image: CLIENT6 },
    { id: 12, image: DOCKBOXES },
    { id: 13, image: CLIENT7 },
    { id: 14, image: USDOT },
    { id: 15, image: CLIENT8 },
    { id: 16, image: CLIENT9 },
    { id: 17, image: CLIENT11 },
    { id: 18, image: CLIENT12 },
    { id: 19, image: CLIENT13 },
    { id: 20, image: CLIENT16 },
    { id: 21, image: CLIENT17 },
    { id: 22, image: CLIENT18 },
    { id: 23, image: CLIENT19 },
    { id: 24, image: CLIENT20 },
    { id: 25, image: WISEPLACE },
    { id: 26, image: THEFITFTH },
    { id: 27, image: OXYGEN8 },
    { id: 28, image: MARINBIO },
    { id: 29, image: CRYSTALCOVE },
    { id: 30, image: CALIFORNIAH2OT },
  ];

  const selectStackArry: { title: string; id: StackId }[] = [
    { title: "Design and Development", id: "dev" },
    { title: "Digital Marketing", id: "seo" },
    { title: "Artificial Intelligence", id: "ai" },
  ];

  const renderItems = () => {
    if (selectStack === "dev") return technologies;
    if (selectStack === "seo") return seoTools;
    // ai
    return aiDesignImages;
  };

  return (
    <>
      <div className="technologies-sec sp new-gap" id="technologies">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="heading-title">
                <h2>
                  The Technology Behind
                  <span> Your Success</span>
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="custom-tabs1">
            <div className="d-flex justify-content-center mb-3 mb-md-5">
              <ul className="nav nav-tabs" id="carouselTabs" role="tablist">
                {selectStackArry.map((data) => (
                  <li
                    className="nav-item"
                    key={data.id}
                    onClick={() => setSelectStack(data.id)}
                  >
                    <button
                      className={`nav-link ${
                        selectStack === data.id ? "active" : ""
                      }`}
                      id="tech-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#tech"
                      type="button"
                      role="tab"
                    >
                      {data.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="tab-content" id="carouselTabContent">
              <div className="tech-list-new-slide d-flex">
                {renderItems().map((data: any, index: number) => (
                  <div className="item" key={data.id ?? index}>
                    <div className="tech-list-col">
                      {"name" in data ? (
                        <Image src={data.image} alt={data.name} />
                      ) : (
                        <Image src={data.image} alt={`Item ${index + 1}`} />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="our-clients-sec sp new-gap" id="our-clients-sec">
        <div className="container-fluid">
          <div className="row justify-content-center mb-4">
            <div className="col-lg-8 text-center">
              <div className="heading-title">
                <h2>
                  Trusted by Businesses
                  <span>Nationwide</span>
                </h2>
              </div>
            </div>
          </div>

          <div className="full-tech-list-1">
            <div className="tech-list-new-slide d-flex new-b">
              <div className="tech-list-new-slide d-flex">
                {clientLogos.map((item) => (
                  <div className="item" key={item.id}>
                    <div className="tech-list-col">
                      <Image src={item.image} alt={`Client ${item.id}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechStacks;
