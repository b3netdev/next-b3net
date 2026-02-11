"use client";

import React, { useState } from "react";

type CardItem = {
  id: 1 | 2 | 3 | 4;
  title: string;
  desc: string;
};

type NavButton = {
  id: 1 | 2 | 3 | 4;
  btnClass: string;
  colorClass: string;
  iconClass: string;
};

type ColorClass = "blue" | "teal" | "bluegreen" | "drakgreen";
type Direction = "prev" | "next";

const CardData: CardItem[] = [
  {
    id: 1,
    title: "AI-Driven Visibility",
    desc: "Stay ahead as search engines shift toward AI-first discovery. We craft content that aligns with intent-based search, enabling your brand to surface in conversational results and predictive answers",
  },
  {
    id: 2,
    title: "Smart AI Overviews",
    desc: "Be referenced in AI-generated overviews as a trusted source. Our optimization strategies position your content to answer multi-layered questions and increase authority with both users and algorithms.",
  },
  {
    id: 3,
    title: "LLM Content Optimization",
    desc: "We design high-quality, engaging resources that large language models pull into responses. Through digital PR and strategic citations, your brand becomes visible where AI conversations happen.",
  },
  {
    id: 4,
    title: "Future-Ready AI SEO",
    desc: "Prepare for emerging platforms like Gemini and beyond. We apply semantic analysis, structured data, and natural language strategies so your content is AI-friendly across evolving ecosystems.",
  },
];

const navButtons: NavButton[] = [
  { id: 1, btnClass: "nav-button-1", colorClass: "blue", iconClass: "fas fa-bolt fa-lg" },
  { id: 2, btnClass: "nav-button-2", colorClass: "teal", iconClass: "fas fa-lightbulb fa-lg" },
  { id: 3, btnClass: "nav-button-3", colorClass: "bluegreen", iconClass: "fas fa-brain fa-lg" },
  { id: 4, btnClass: "nav-button-4", colorClass: "drakgreen", iconClass: "fas fa-network-wired fa-lg" },
];

function getColorClass(id: CardItem["id"]): ColorClass {
  if (id === 1) return "blue";
  if (id === 2) return "teal";
  if (id === 3) return "bluegreen";
  return "drakgreen";
}

function getIcon(id: CardItem["id"]): React.ReactElement {
  if (id === 1) return <i className="fas fa-bolt" />;
  if (id === 2) return <i className="fas fa-lightbulb" />;
  if (id === 3) return <i className="fas fa-brain" />;
  return <i className="fas fa-network-wired" />;
}

export default function AiModelClient(): React.ReactElement {
  const [selectCard, setSelectCard] = useState<CardItem["id"]>(1);

  const handleButtonClick = (dir: Direction) => {
    setSelectCard((prev) => {
      if (dir === "prev") return (prev === 1 ? 4 : ((prev - 1) as CardItem["id"]));
      return (prev === 4 ? 1 : ((prev + 1) as CardItem["id"]));
    });
  };

  const activeColor = getColorClass(selectCard);

  return (
    <div className="slidercontent">
      {/* Mobile nav */}
      <div className="d-lg-none d-block m-0 mb-4 mb-lg-0">
        <div className="nav-icons">
          {navButtons.map((item) => {
            const isActive = selectCard === item.id;
            return (
              <button
                key={item.id}
                type="button"
                className={`nav-btn ${item.btnClass} ${isActive ? "active" : ""}`}
                onClick={() => setSelectCard(item.id)}
                aria-pressed={isActive}
              >
                <span className={item.colorClass}>
                  <i className={item.iconClass}></i>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Cards */}
      <div className="card-container">
        {CardData.map((data) => {
          const isActive = data.id === selectCard;

          return (
            <div
              key={data.id}
              className={`flip-card gradient-border ${isActive ? "active" : ""}`}
            >
              <div className="gradient-inner">
                <div className="card-header">
                  <div className={`icon-circle ${activeColor}`}>
                    <span className={activeColor}>{getIcon(selectCard)}</span>
                  </div>
                  <h5>{data.title}</h5>
                </div>
                <p>{data.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Arrows */}
      <div className="arrow-container">
        <button className="arrow-btn" id="prevBtn" onClick={() => handleButtonClick("prev")}>
          <i className="fas fa-chevron-up"></i>
        </button>
        <button className="arrow-btn" id="nextBtn" onClick={() => handleButtonClick("next")}>
          <i className="fas fa-chevron-down"></i>
        </button>
      </div>

      {/* Desktop nav */}
      <div className="d-lg-block d-none">
        <div className="nav-icons">
          {navButtons.map((item) => {
            const isActive = selectCard === item.id;
            return (
              <button
                key={item.id}
                type="button"
                className={`nav-btn ${item.btnClass} ${isActive ? "active" : ""}`}
                onClick={() => setSelectCard(item.id)}
                aria-pressed={isActive}
              >
                <span className={item.colorClass}>
                  <i className={item.iconClass}></i>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
