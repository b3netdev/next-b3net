"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import { Dot } from "lucide-react";
import Link from "next/link";
import ContactFooter from "../server/ContactFooter";
import { useAppSelector } from "@/redux/hooks";
import ChatBot from "./Chatbot";
import { useFooter } from "@/hooks/useFooter";
import { BASE_URL } from "@/lib/url";
import ScrollLink from "./ScrollLink";

const makeDomId = (str: string | number) =>
  String(str)
    .toLowerCase()
    .replace(/[^a-z0-9_-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

function chunkArray<T>(arr: T[], chunkSize: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize));
  }
  return chunks;
}

function LocationColumns({ columns, country }: { columns: any[][]; country: string }) {
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
              const hasLinks = (item?.children?.length ?? 0) > 0;
              const key = `${cIdx}-${iIdx}-${item.title}`;
              const isOpen = openKey === key;

              return (
                <li key={item.id || item.title} className={isOpen ? "open" : ""}>
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
                      style={{
                        display: isOpen ? "block" : "none",
                        transition: "0.3s ease",
                      }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {item.children.map((l: any, index: number) => {
                        const isUSA = country?.toLowerCase() === "usa";

                        const href = isUSA
                          ? l.slug || "/"
                          : l.url || l.slug || "/";

                        const isExternal = !isUSA;

                        return (
                          <div
                            key={l.id || index}
                            className="flex !items-cennter gap-0 !justifycenter pl-3.5"
                          >
                            <Dot color="#ff4f02" strokeWidth={7}  className="mt-2"/>
                            

                            {isExternal ? (
                              <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {l.title}
                              </a>
                            ) : (
                              <Link href={href}>
                                {l.title}
                              </Link>
                            )}
                          </div>
                        );
                      })}
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

function ExploreList({ items }: { items: any[] }) {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggle = (title: string) => {
    setOpenItem((prev) => (prev === title ? null : title));
  };

  return (
    <ul className="d-flx explore-list">
      {items?.map((item: any) => {
        const hasLinks = (item?.children?.length ?? 0) > 0;
        const isOpen = openItem === item.title;

        return (
          <li key={item.id || item.title}>
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
                    {item.children.map((l: any, index: number) => (
                      <div
                        key={l.id || index}
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          paddingLeft: "20px",
                        }}
                      >
                        <Dot color="#ff4f02" strokeWidth={7} className="mt-2" />
                        <Link
                          href={l.slug || l.url || "/"}
                          target={l.target || undefined}
                        >
                          {l.title}
                        </Link>
                      </div>
                    ))}
                  </span>
                )}
              </>
            ) : (
              <div className="haslinksFooterExplore">
                <i className="fa-solid fa-caret-right"></i>
                <Link
                  href={
                    item.id === 13964
                      ? item.url || "/"
                      : item.slug || item.url || "/"
                  }
                  target={item.target || undefined}
                >
                  {item.title}
                </Link>
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
  const [footerMenus, setFooterMenus] = useState<any[]>([]);
  const { getFooterData } = useFooter();
  const [activeDesktopTab, setActiveDesktopTab] = useState<string>("");
  const [openMobileAcc, setOpenMobileAcc] = useState<string>("");

  useEffect(() => {
    const getData = async () => {
      const data = await getFooterData();
      setFooterMenus(Array.isArray(data) ? data : []);
    };

    getData();
  }, [getFooterData]);

  const footerMenu = useMemo(() => {
    return footerMenus.find((menu) => menu?.name === "Footer Menu");
  }, [footerMenus]);

  const exploreMenu = useMemo(() => {
    return footerMenus.find((menu) => menu?.name === "Explore");
  }, [footerMenus]);

  const footerTabs = useMemo(() => {
    return (footerMenu?.items ?? []).filter(
      (item: any) => item && typeof item === "object" && item.id && item.title
    );
  }, [footerMenu]);

  useEffect(() => {
    if (!footerTabs.length) return;

    if (typeof window !== "undefined") {
      const screenWidth = window.innerWidth;

      if (screenWidth > 500) {
        const firstLocationId = String(footerTabs[0].id);

        setActiveDesktopTab((prev) => prev || firstLocationId);
        setOpenMobileAcc((prev) => prev || firstLocationId);
      }
    }
  }, [footerTabs]);


  if (showLayout === false) {
    return null;
  }


  const handleTabClick = (tabId: string) => {
    setActiveDesktopTab(tabId);
    setOpenMobileAcc(tabId);

    if (typeof window !== "undefined" && window.innerWidth <= 500) {

      setTimeout(() => {
        const el = document.getElementById(`tab-section-${tabId}`);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300);
    }
  };
  const pathname = usePathname()
  const showContactfooter = pathname != "/request-for-proposal"

  return (
    <main className="page_content-1">
      { showContactfooter?
        <ContactFooter />
        : null}

      <div className="footer-col">
        <div
          className={`top-footer ${!showContactfooter ? "pt-5":""}`}
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
              {footerTabs.map((loc: any) => {
                const domId = makeDomId(loc.id);
                const open = openMobileAcc === String(loc.id);
                const collapseId = `flush-collapse-${domId}`;
                const columns = chunkArray(loc.children ?? [], 6);

                return (
                  <div className="accordion-item"
                    id={`tab-section-${loc.id}`}
                    key={loc.id}>
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button !flex !justify-between ${open ? "" : "collapsed"}`}
                        type="button"
                        aria-expanded={open ? "true" : "false"}
                        aria-controls={collapseId}
                        onClick={() => handleTabClick(String(loc.id))}
                      >
                        {loc.title}
                        <span className="icon">{open ? "−" : "+"}</span>
                      </button>
                    </h2>

                    {/* ///mobile devices */}
                    <div
                      id={collapseId}
                      className={`accordion-collapse ${open ? "show" : ""} bg-amber-700`}
                      style={{ display: open ? "block" : "none" }}
                    >
                      <div className="accordion-body">
                        <div className="footer-col">
                          <div
                            className="top-footer new-footer"
                            style={{
                              backgroundImage: `url(${BASE_URL}/wp-content/uploads/2026/04/footer-bg.webp)`,
                            }}
                          >
                            <div className="container">
                              <div className="row">
                                <div className="col-lg-12 col-xl-12">
                                  <div className="menu-list">
                                    <LocationColumns columns={columns} country={loc.title} />
                                    {
                                      columns?.length == 0 &&
                                      <div className="w-full">
                                        <p className="font-semibold ">Comming soon....</p>
                                      </div>
                                    }
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

            <div className="d-none d-md-block">
              <ul
                className="nav nav-tabs d-flex justify-content-between"
                id="myTab"
                role="tablist"
                style={{ gap: "10px" }}
              >
                {footerTabs.map((loc: any) => {
                  const domId = makeDomId(loc.id);
                  const isActive = activeDesktopTab === String(loc.id);

                  return (
                    <li
                      className="nav-item flex-grow-1"
                      role="presentation"
                      key={loc.id}
                    >
                      <button
                        className={`nav-link d-flex justify-content-between w-100 ${isActive ? "active" : ""
                          }`}
                        id={`${domId}-tab`}
                        type="button"
                        role="tab"
                        aria-controls={domId}
                        aria-selected={isActive ? "true" : "false"}
                        onClick={() => setActiveDesktopTab(String(loc.id))}
                      >
                        {loc.title}{" "}
                        <span className="icon">{isActive ? "−" : "+"}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>

              <div className="tab-content" id="myTabContent">
                {footerTabs.map((loc: any) => {
                  const domId = makeDomId(loc.id);
                  const isActive = activeDesktopTab === String(loc.id);
                  const columns = chunkArray(loc.children ?? [], 6);

                  return (
                    <div
                      key={loc.id}
                      className={`tab-pane fade ${isActive ? "show active" : ""}`}
                      id={domId}
                      role="tabpanel"
                      aria-labelledby={`${domId}-tab`}
                    >
                      <div className="footer-col">
                        <div
                          className="top-footer new-footer"
                          style={{
                            backgroundImage: `url(${BASE_URL}/wp-content/uploads/2026/04/footer-bg.webp)`,
                          }}
                        >
                          <div className="container">
                            <div className="row">
                              <div className="col-lg-12 col-xl-12">
                                <div className="menu-list desktopFooterMenu">
                                  <LocationColumns columns={columns} country={loc.title} />
                                  {
                                    columns?.length == 0 &&
                                    <div className="w-full">
                                      <p className="font-semibold ">Comming soon....</p>
                                    </div>
                                  }
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
                  <ExploreList items={exploreMenu?.items ?? []} />
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
                        <li>
                          <Link href="https://www.facebook.com/B3NET">
                            <i className="fa-brands fa-facebook-f"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.instagram.com/b3netinc/">
                            <i className="fa-brands fa-instagram"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.linkedin.com/company/b3net-inc/">
                            <i className="fa-brands fa-linkedin-in"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="https://x.com/b3net">
                            <i className="fa-brands fa-x-twitter"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="menu-list">
                      <h3>Partners</h3>
                      <ul className="partners">
                        <li>
                          <a
                            href="https://www.zoho.com/partners/find-partner-profile.html?partnerid=d1b91bec8996f03d23320e2caa316b72">
                            <img src="https://old.b3net.com/wp-content/themes/b3net/assets/images/zoho.png" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              src="https://old.b3net.com/wp-content/themes/b3net/assets/images/google-authorised.png" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-3 success-container">
                <div className="menu-list">
                  <div className="success">
                    <img
                      src={`${BASE_URL}/wp-content/themes/b3net/assets/images/success-img.png`}
                      alt=""
                    />
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
            <p>
              <span>Copyright © 1999-2026, </span>
              <a href="#">
                <strong>B3net</strong> inc.
              </a>
            </p>
            <p>
              <Link href="/privacy-policy">Privacy Policy </Link> |{" "}
              <Link href="/terms-of-use">Terms of Use</Link>
            </p>
          </div>
        </div>
      </div>

      <ChatBot />
    </main>
  );
}