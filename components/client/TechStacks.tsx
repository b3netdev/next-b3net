"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

import PHP from "../../assets/images/technologies/PHP.webp";
import REACTJS from "../../assets/images/technologies/react-js.webp";
import WORDPRESS from "../../assets/images/technologies/wordpress.webp";
import SHOPIFY from "../../assets/images/technologies/Shopify.webp";
import PYTHON from "../../assets/images/technologies/Python.webp";
import NODE from "../../assets/images/technologies/Node.webp";
import MONGODB from "../../assets/images/technologies/MongoDB.webp";
import LARAVEL from "../../assets/images/technologies/laravel.webp";
import JQUERY from "../../assets/images/technologies/JQuery.webp";
import MYSQL from "../../assets/images/technologies/mysql.webp";
import JOOMLA from "../../assets/images/technologies/Joomla.webp";
import CODEIGNITER from "../../assets/images/technologies/codeigniter.webp";
import ANGULAR from "../../assets/images/technologies/angular.webp";
import ADOBEPHOTOI from "../../assets/images/design/adobe-photoshop.webp";
import ADOBEILLUS from "../../assets/images/design/Adobe-Illustrator.webp";
import CANVA from "../../assets/images/design/Canva.webp";
import ADOBEXD from "../../assets/images/design/Adobe-xd.webp";
import HTML5 from "../../assets/images/design/HTML5.webp";
import CSS from "../../assets/images/design/css.webp";
import FIGMA from "../../assets/images/design/Figma.webp";
import SKETCH from "../../assets/images/design/Sketch.webp";

import GOOGLESEARCH from "../../assets/images/tools/Google-search-console.webp";
import GOOGLEANALYTICS from "../../assets/images/tools/Google-Analytics.webp";
import SEMRUSH from "../../assets/images/tools/Semrush.webp";
import AHREFS from "../../assets/images/tools/ahrefs.webp";
import HUBSPOT from "../../assets/images/tools/HubSpot.webp";
import MICROSOFTCLARITY from "../../assets/images/tools/Microsoft-clarity.webp";
import SCREAMING from "../../assets/images/tools/Screaming-Frog.webp";
import KEYBOARDPLANER from "../../assets/images/tools/Keyword-planner.webp";
import SIMILARWEB from "../../assets/images/tools/Similarweb.webp";
import SPYFU from "../../assets/images/tools/spyfu.webp";

import AI1 from "../../assets/images/design/ai-1.webp";
import AI2 from "../../assets/images/design/ai-2.webp";
import AI3 from "../../assets/images/design/ai-3.webp";
import AI4 from "../../assets/images/design/ai-4.webp";
import AI5 from "../../assets/images/design/ai-5.webp";
import AI6 from "../../assets/images/design/ai-6.webp";
import AI7 from "../../assets/images/design/ai-7.webp";
import AI8 from "../../assets/images/design/ai-8.webp";
import AI9 from "../../assets/images/design/ai-9.webp";
import AI10 from "../../assets/images/design/ai-10.webp";

// Normal client logos
import CLIENT1 from "../../assets/images/clients-logo/our-client-1.webp";
import CLIENT2 from "../../assets/images/clients-logo/our-client-2.webp";
import CLIENT3 from "../../assets/images/clients-logo/our-client-3.webp";
import CLIENT4 from "../../assets/images/clients-logo/our-client-4.webp";
import CLIENT5 from "../../assets/images/clients-logo/our-client-5.webp";
import CLIENT6 from "../../assets/images/clients-logo/our-client-6.webp";
import CLIENT7 from "../../assets/images/clients-logo/our-client-7.webp";
import CLIENT8 from "../../assets/images/clients-logo/our-client-8.webp";
import CLIENT9 from "../../assets/images/clients-logo/our-client-9.webp";
import CLIENT11 from "../../assets/images/clients-logo/our-client-11.webp";
import CLIENT12 from "../../assets/images/clients-logo/our-client-12.webp";
import CLIENT13 from "../../assets/images/clients-logo/our-client-13.webp";
import CLIENT16 from "../../assets/images/clients-logo/our-client-16.webp";
import CLIENT17 from "../../assets/images/clients-logo/our-client-17.webp";
import CLIENT18 from "../../assets/images/clients-logo/our-client-18.webp";
import CLIENT19 from "../../assets/images/clients-logo/our-client-19.webp";
import CLIENT20 from "../../assets/images/clients-logo/our-client-20.webp";

// Covert images
import CTCGLOBAL from "../../assets/images/clients-logo/covert-images/ctc-global.webp";
import MP from "../../assets/images/clients-logo/covert-images/mp.webp";
import MEDMAPS from "../../assets/images/clients-logo/covert-images/med-maps.webp";
import CABINET from "../../assets/images/clients-logo/covert-images/cabinet.webp";
import IHA from "../../assets/images/clients-logo/covert-images/iha.webp";
import DOCKBOXES from "../../assets/images/clients-logo/covert-images/dock-boxes.webp";
import USDOT from "../../assets/images/clients-logo/covert-images/us.dot-services.webp";
import WISEPLACE from "../../assets/images/clients-logo/covert-images/wise-place.webp";
import THEFITFTH from "../../assets/images/clients-logo/covert-images/the-fitfth.webp";
import OXYGEN8 from "../../assets/images/clients-logo/covert-images/oxygen8.webp";
import MARINBIO from "../../assets/images/clients-logo/covert-images/marin-bio.webp";
import CRYSTALCOVE from "../../assets/images/clients-logo/covert-images/crystal-cove.webp";
import CALIFORNIAH2OT from "../../assets/images/clients-logo/covert-images/calforniah2ot.webp";

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
  alt?:string,
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
    { id: 1, image: CLIENT1 ,alt:""  },
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
                      className={`nav-link ${selectStack === data.id ? "active" : ""
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
                        <Image src={data.image} alt={data.name} unoptimized />
                      ) : (
                        <Image src={data.image} alt={`Item ${index + 1}`} unoptimized />
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
            <div className="d-flex new-b">
              <div className="tech-list-new-slide d-flex">
                {clientLogos.map((item) => (
                  <div className="item" key={item.id}>
                    <div className="tech-list-col">
                      <Image
                        src={item.image} alt={`Client ${item.id}`}
                        unoptimized className="h-20"
                      />
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
