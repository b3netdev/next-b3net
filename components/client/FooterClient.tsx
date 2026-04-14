"use client";

import React, { useEffect, useState } from "react";
import { Dot } from "lucide-react";
import type { FooterData, FooterExploreItem, FooterLocationItem } from "../server/Footer";
import Link from "next/link";
import ContactFooter from "../server/ContactFooter";
import { useAppSelector } from "@/redux/hooks";
import ChatBot from "./Chatbot";
import { normalizeServicePath } from "@/lib/servicePath";
// import { footerdata } from "@/helper/Footer";
import { useFooter } from "@/hooks/useFooter";
import { BASE_URL } from "@/lib/url";

const makeDomId = (str: string) =>
  String(str)
    .toLowerCase()
    .replace(/[^Link-z0-9_-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

function LocationColumns({ columns }: { columns: FooterLocationItem[][] }) {

  const [openKey, setOpenKey] = useState<string | null>(null);

  const colClassByCount = (count: number) =>
    count === 1
      ? "col-12 col-sm-12 col-lg-12 col-xl-12"
      : "col-12 col-sm-4 col-lg-3 col-xl-2";

  const toggle = (key: string) => {
    setOpenKey((prev) => (prev === key ? null : key));
  };




  return (
    <div className="row d-flex-2">
      {columns?.map((col, cIdx) => (
        <div className={colClassByCount(columns?.length)} key={cIdx}>
          <ul id="locationList">
            {col?.map((item, iIdx) => {
              const hasLinks = (item.links?.length ?? 0) > 0;
              const key = `${cIdx}-${iIdx}-${item.title}`;
              const isOpen = openKey === key;

              return (
                <li key={item.title} className={isOpen ? "open" : ""}>
                  <Link
                    className="main-link flex items-center justify-between"
                    href="/"
                    role={hasLinks ? "button" : undefined}
                    aria-expanded={hasLinks ? isOpen : undefined}
                    onClick={(e) => {
                      if (!hasLinks) return;
                      e.preventDefault();
                      e.stopPropagation();
                      toggle(key);
                    }}
                  >
                    <div className="flex items-baseline w-3xs">
                      {hasLinks && (
                        <i
                          className={`fa-solid fa-caret-${isOpen ? "down" : "right"} toggle-arrow`}
                          aria-hidden="true"
                          style={{
                            transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
                            transition: "0.3s ease",
                          }}
                        />
                      )}
                      <span>{item.title}</span>
                    </div>
                  </Link>

                  {hasLinks && (
                    <div
                      className="dropdown-content"
                      style={{ display: isOpen ? "block" : "none", transition: "0.3s ease", }}
                      onClick={(e) => e.stopPropagation()}

                    >
                      {item?.links?.map((l: any, index: any) => (
                        <div
                          key={index}
                          className="d-flex align-items-cennter justify-content-center"
                        >
                          <Dot color="#ff4f02" strokeWidth={7} />
                          <Link href={l.url} >
                            {/* {l.label} */}
                            {l.url}
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}




function ExploreList({ items }: { items: any }) {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggle = (title: string) => {
    setOpenItem((prev) => (prev === title ? null : title));
  };

  return (
    <ul className="d-flx explore-list">
      {items?.map((item: any) => {
        const hasLinks = "links" in item && (item.links?.length ?? 0) > 0;
        const isOpen = openItem == item.title;

        return (
          <li key={item.title}>
            {hasLinks ? (
              <>
                <span

                  className="haslinksFooterExplore"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggle(item.title);
                  }}
                >
                  <i
                    className="fa-solid fa-caret-right"
                    style={{
                      transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
                      transition: "0.3s ease",
                    }}
                  ></i>

                  <Link
                    href="/"
                    className="main-link"
                    role="button"
                    aria-expanded={isOpen}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      toggle(item.title);
                    }}
                  >
                    {item.title}
                  </Link>
                </span>

                {isOpen && (
                  <span className="dropdown-content active">
                    {item?.links?.map((l: any, index: any) => (
                      <div
                        key={index}
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          paddingLeft: "20px",
                        }}
                      >
                        <Dot color="#ff4f02" strokeWidth={7} />
                        <Link href={l.url}>{l.label}</Link>
                      </div>
                    ))}
                  </span>
                )}
              </>
            ) : (
              <div
                className="haslinksFooterExplore"
              >
                <i className="fa-solid fa-caret-right"></i>
                <Link href={item.url}>{item.title}</Link>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default function FooterClient() {
  const { showLayout } = useAppSelector((state) => state.menu);
  const [footerdata, setFooterdata] = useState<any>({})
  const { getFooterData } = useFooter()
  const [activeDesktopTab, setActiveDesktopTab] = useState<string>();
  const [openMobileAcc, setOpenMobileAcc] = useState<string>();

  if (showLayout == false) {
    return null;
  }

  useEffect(() => {
    const getData = async () => {
     
      const data = await getFooterData()
      setFooterdata(data)
    }
    getData()
  }, [])

  useEffect(() => {
    const firstLocationId = footerdata?.locations?.[0]?.id ?? "";
    setActiveDesktopTab(firstLocationId)
    setOpenMobileAcc(firstLocationId)
  }, [footerdata])


  const baseUrl =
    typeof window !== "undefined"
      ? window.location.origin
      : "";

  return (
    <main className="page_content-1">
      <ContactFooter />
      <div className="footer-col">
        <div className="top-footer"
          style={{
            backgroundImage: `url(${BASE_URL}/wp-content/uploads/2026/04/footer-bg.webp)`,
          }}
        >
          <div className="container">
            <div className="menu-list">
              <h3>Serving Your Location</h3>
            </div>


            <div
              className="accordion accordion-flush footer-accordian d-md-none"
              id="accordionFlushExample"
            >
              {footerdata?.tabs?.map((loc: any) => {
                const domId = makeDomId(loc.id);
                const open = openMobileAcc === loc.id;
                const collapseId = `flush-collapse-${domId}`;

                return (
                  <div className="accordion-item" key={loc.id}>
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button ${open ? "" : "collapsed"}`}
                        type="button"
                        aria-expanded={open ? "true" : "false"}
                        aria-controls={collapseId}
                        onClick={() =>
                          setOpenMobileAcc((p) =>
                            (p === loc.id ? "" : loc.id)
                          )
                        }
                      >
                        {loc.label}
                      </button>
                    </h2>

                    <div
                      id={collapseId}
                      className={`accordion-collapse  ${open ? "show" : ""} bg-amber-700`}
                      style={{ display: open ? "block" : "none" }}
                    >
                      <div className="accordion-body">
                        <div className="footer-col">
                          <div className="top-footer new-footer"
                            style={{
                              backgroundImage: `url(${BASE_URL}/wp-content/uploads/2026/04/footer-bg.webp)`,
                            }}
                          >
                            <div className="container">
                              <div className="row">
                                <div className="col-lg-12 col-xl-12">
                                  <div className="menu-list">
                                    <LocationColumns columns={loc.columns} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>

            {/* DESKTOP TABS */}
            <div className="d-none d-md-block">
              <ul
                className="nav nav-tabs d-flex justify-content-between"
                id="myTab"
                role="tablist"
                style={{ gap: "10px" }}
              >
                {footerdata?.tabs?.map((loc: any) => {

                  const domId = makeDomId(loc.id);
                  const isActive = activeDesktopTab === loc.id;

                  return (
                    <li className="nav-item flex-grow-1" role="presentation" key={loc.id}>
                      <button
                        className={`nav-link d-flex justify-content-between w-100 ${isActive ? "active" : ""}`}
                        id={`${domId}-tab`}
                        type="button"
                        role="tab"
                        aria-controls={domId}
                        aria-selected={isActive ? "true" : "false"}
                        onClick={() => setActiveDesktopTab(loc.id)}
                      >
                        {loc.name}  <span className="icon">{isActive ? "−" : "+"}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>

              <div className="tab-content" id="myTabContent">
                {footerdata?.locations?.map((loc: any) => {

                  const domId = makeDomId(loc.id);
                  const isActive = activeDesktopTab === loc.id;

                  return (
                    <div
                      key={loc.id}
                      className={`tab-pane fade ${isActive ? "show active" : ""}`}
                      id={domId}
                      role="tabpanel"
                      aria-labelledby={`${domId}-tab`}
                    >
                      <div className="footer-col ">
                        <div className="top-footer new-footer"
                          style={{
                            backgroundImage: `url(${BASE_URL}/wp-content/uploads/2026/04/footer-bg.webp)`,
                          }}
                        >
                          <div className="container">
                            <div className="row">
                              <div className="col-lg-12 col-xl-12">
                                <div className="menu-list  desktopFooterMenu">
                                  <LocationColumns columns={loc.columns} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="menu-list new-menu-list new-lst">
                  <h3>Explore</h3>
                  {/* <ExploreList items={footerdata?.explore} /> */}
                </div>
              </div>
            </div>


            <div className="row mt-4 mt-lg-5">
              <div className="col-md-9">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="menu-list new-menu-list">
                      <h3 className="">Find us on Social Media</h3>
                      <ul className="footer-social">
                        {footerdata?.socials?.map((s: any) => (
                          <li key={s.url}>
                            <Link href={s.url}>
                              <i className={`fa-brands ${s.icon}`}></i>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* <div className="col-sm-6">
                    <div className="menu-list">
                      <h3>Partners</h3>
                      <ul className="partners">
                        {footerdata?.partners?.map((p:any) => (
                          <li key={p.img}>
                            <Link
                              href={p.url}

                            >
                              <img src={p.img} alt={p.alt || ""} />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div> */}
                </div>
              </div>

              <div className="col-md-3">
                <div className="menu-list">
                  <div className="success">
                    <img src={footerdata?.successImg} alt="" />
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
      <div className="copyright-sec">
        <div className="container">
          <div className="copyright-part">
            <p><span>Copyright © 1999-2026, </span><Link href="/"><strong>B3net</strong> inc.</Link></p>
            <p><Link href="/privacy-policy">Privacy Policy </Link> | <Link href="/terms-of-use">Terms of Use</Link></p>
          </div>
        </div>
      </div>
      <ChatBot />
    </main>
  );
}
