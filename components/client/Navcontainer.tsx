"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { getServicePath } from "../../lib/servicePath";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setId } from "@/redux/slicers/idSlicer";
import HeaderForm from "./HeaderForm";
import { setAboutHover, setWesolveHover } from "@/redux/slicers/hoverSlicer";



import { menulist, serviceMegaMenuColumns } from "../../helper/Menulist";
import SideMenu from "./SideMenu";
import { BASE_URL } from "@/lib/url";


type MenuChild = {
    id: number;
    title: string;
    url: string;
    object_id?: number;
    page: any
};

type MenuItem = {
    id: number;
    title: string;
    url?: string;
    path?: string;
    object_id?: number;
    page?: any;
    children?: MenuChild[];
};

type RootState = {
    menu: {
        headerMenu: { items?: MenuItem[] } | any;
        showDefault: boolean;
    };
};

type ServiceMegaMenuItem = {
    label: string;
    to?: string;
    state?: Record<string, any>;
    slug: string
};

type ServiceMegaMenuGroup = {
    title: string;
    icon: any;
    listType: "dot" | "ul";
    dotSize?: number;
    items: ServiceMegaMenuItem[];
};

type ServiceMegaMenuColumn = {
    type: "groups";
    colClass: string;
    groups: ServiceMegaMenuGroup[];
};

export default function Navbar() {

    const { showDefault, showLayout } = useAppSelector((state) => state.menu);
    const { abouthover, wesolvehover } = useAppSelector((state) => state.hoverMenu);
    const [hoverService, setHoverService] = useState(false);


    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const dispatch = useAppDispatch();


    const [isSticky, setIsSticky] = useState(false);
    const navRef = useRef<HTMLDivElement | null>(null);






    useEffect(() => {
        setIsSticky(showDefault);
        const handleScroll = () => {
            if (showDefault === false) {
                if (window.scrollY > 10) setIsSticky(true);
                else setIsSticky(false);
                setHoverService(false);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [showDefault]);

    useEffect(() => {
        document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileMenuOpen]);



    const HandleNavigate = (id: number) => {
        dispatch(setId(id))

    }


    if (showLayout == false) {
        return null;
    }


    const ServiceMenuGroup = ({ group }: { group: any }) => {
        return (
            <div className="menu-inner-col">
                <h4>
                    <img src={group.icon?.src ?? group.icon} alt="" /> {group.title}
                </h4>

                <div className="d-flex flex-column gap-1">
                    {group.items.map((item: any, idx: any) => (
                        <span
                            key={idx}
                            className="d-flex align-items-center service-menu-item gap-2 ms-4"
                            style={{ color: "black" }}
                            onClick={() => setHoverService(false)}
                        >
                            <i
                                className="fa-solid fa-circle"
                                style={{ color: "#3b58a2 ", fontSize: "8px" }}
                            ></i>

                            <Link href={getServicePath(item?.slug)}
                                className="service-menu-link text-base!"

                            >
                                {item.label}
                            </Link>
                        </span>
                    ))}
                </div>
            </div>
        );
    };

    const ServiceSubMenu = () => {
        return (
            <div className="hoverService position-absolute start-0 top-100 sub-menu">
                <div className="position-absolute start-0 top-100">
                    <div className="wsmegamenu clearfix">
                        <div className="typography-text clearfix">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="cl"></div>

                                    <div className="col-xxl-3 col-lg-4 col-sm-12 mega-form-part bg-blue">
                                        <div className="mega-menu-form">
                                            <h2>
                                                Delivering Results <br />
                                                <span>That Matter</span>
                                            </h2>
                                            <p>
                                                Serving businesses since 1999, B3NET Inc. has assisted
                                                hundreds of local and national businesses across various
                                                industries.
                                            </p>

                                            <HeaderForm setHoverService={setHoverService} />
                                        </div>
                                    </div>

                                    {serviceMegaMenuColumns.map((col, colIdx) => (
                                        <div key={colIdx} className={col.colClass}>
                                            {col.groups.map((group, gIdx) => (
                                                <ServiceMenuGroup key={gIdx} group={group} />
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };



    const AboutSubmenu = ({ data }: { data: any }) => {



        return (
            <div className="aboutSubMenu" key={data.id}>
                <span className="about-item force-black">
                    {data.id === 13477 ? (
                        <i className="fa-solid fa-bullhorn"></i>
                    ) : data.id === 13484 ? (
                        <i className="fa-solid fa-circle-question"></i>
                    ) : data.id === 13485 ? (
                        <i className="fa-solid fa-pen-to-square"></i>
                    ) : (
                        <i className="fa-solid fa-users-viewfinder"></i>
                    )}
                    <Link href={`${data?.page?.slug !== "/about-company/" ? data?.page?.slug : ''}`}
                        onClick={() => dispatch(setAboutHover(false))}
                    >{data.title}</Link>
                </span>
            </div>
        );
    };

    const WesolveSubMenu = ({ data }: { data: any }) => {

        return (
            <div className="aboutSubMenu WesolveBox" key={data.id}>
                <span className="about-item">
                    <Link href={`/${data?.page?.slug}`}
                        onClick={() => {
                            dispatch(setWesolveHover(false))
                            HandleNavigate(data.object_id!)
                        }
                        }
                    >{data.title}</Link>
                </span>
            </div>
        );
    };

    return (
        <div
            ref={navRef}
            className={`NavHeading nav-floating ${isSticky ? "nav-sticky" : "nav-top"}`}
        >
            <div className="NavContainer site_header ps-0 ps-sm-3 pe-0 pe-sm-3">
                <div
                    className="header-col-1 "
                >
                    <div className="site_logo">
                        <Link className="site_link" href="/">

                            <img
                                src={`${BASE_URL}/wp-content/uploads/2025/06/logo-2.png`}
                                alt="logo"
                                className="logo_img"
                                style={{ filter: !isSticky ? "brightness(0) invert(1)" : "none" }}
                            />
                        </Link>
                    </div>
                </div>

                <div className="NavMenuContainer">
                    <ul>
                        {menulist?.map((item) => {
                            const labelColor = isSticky ? "black" : "white";

                            const isAbout = item.title === "About Us";
                            const isServices = item.title === "Services";
                            const isWeSolve = item.title === "We Solve";


                            if (item.children?.length) {
                                if (isAbout) {
                                    return (
                                        <li
                                            key={item.id}
                                            className="has-children position-relative"
                                            onMouseEnter={() => dispatch(setAboutHover(true))}
                                            onMouseLeave={() => dispatch(setAboutHover(false))}
                                        >
                                            <span style={{ opacity: "1", color: labelColor }}>
                                                <Link
                                                    href={`/${item?.page?.slug}`}
                                                    onClick={() => HandleNavigate(item?.object_id)}
                                                    className="nav-link"
                                                >
                                                    {item.title}
                                                </Link>
                                            </span>

                                            <span>
                                                <i
                                                    className="fa-solid fa-chevron-down"
                                                    style={{ opacity: isSticky ? "0.8" : "1", color: labelColor }}
                                                ></i>
                                            </span>

                                            <div className={`submenu-anim ${abouthover ? "open" : ""}`}>
                                                {item.children.map((data, index) => (
                                                    <AboutSubmenu key={index} data={data} />
                                                ))}
                                            </div>
                                        </li>
                                    );
                                }

                                if (isServices) {
                                    return (
                                        <li
                                            key={item.id}
                                            onMouseEnter={() => setHoverService(true)}
                                            onMouseLeave={() => setHoverService(false)}
                                        >
                                            <span style={{ opacity: "1", color: labelColor }}>
                                                <Link
                                                    href={`/${item?.page?.slug}`}
                                                    className="nav-link"
                                                    style={{ color: labelColor }}
                                                >
                                                    {item.title}
                                                </Link>
                                            </span>

                                            <span>
                                                <i
                                                    className="fa-solid fa-chevron-down"
                                                    style={{ opacity: isSticky ? "0.8" : "1", color: labelColor }}
                                                ></i>
                                            </span>
                                        </li>
                                    );
                                }

                                if (isWeSolve) {
                                    return (
                                        <li
                                            key={item.id}
                                            className="has-children position-relative"
                                            onMouseEnter={() => dispatch(setWesolveHover(true))}
                                            onMouseLeave={() => dispatch(setWesolveHover(false))}
                                        >
                                            <span style={{ opacity: "1", color: labelColor }}>
                                                {/* <Link href={`/${pathUrl}`} className="nav-link" style={{ color: labelColor }}> */}
                                                {item.title}
                                                {/* </Link> */}
                                            </span>

                                            <span>
                                                <i
                                                    className="fa-solid fa-chevron-down"
                                                    style={{ opacity: isSticky ? "0.8" : "1", color: labelColor }}
                                                ></i>
                                            </span>

                                            <div className={`submenu-anim ${wesolvehover ? "open" : ""}`}>
                                                {item.children.map((subData, index) => (
                                                    <WesolveSubMenu key={index} data={subData} />
                                                ))}
                                            </div>
                                        </li>
                                    );
                                }

                                return (
                                    <li key={item.id} className="has-children position-relative">
                                        <span style={{ opacity: "1", color: labelColor }}>
                                            <Link
                                                href={`/${item?.page?.slug}`}
                                                className="nav-link"
                                                style={{ color: labelColor }}
                                            >
                                                {item.title}
                                            </Link>
                                        </span>
                                    </li>
                                );
                            }

                            return (
                                <li key={item.id} style={{ color: labelColor }}>
                                    <Link
                                        href={`/${item?.page?.slug == "home" ? "/" : item?.page?.slug}`}
                                        className="nav-link"
                                        style={{ color: labelColor }}
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div className="footerButton">
                    <ul className="header_btns_group unordered_list d-flex gap-2 justify-content-end">
                        <li>
                            <div className="d-none d-sm-block">
                                <Link
                                    href="/request-for-proposal"
                                    className="btn btn-outline-light new-btnn"
                                    style={
                                        !isSticky
                                            ? {
                                                color: "#3b58a1",
                                                backgroundImage: "linear-gradient(#ffffff, #ffffff)",
                                                border: "1px solid #ffffff",
                                            }
                                            : {}
                                    }
                                >
                                    <span className="btn_label" data-text="Get A Free Proposal" style={{ opacity: "1" }}>
                                        Get A Free Proposal
                                    </span>
                                    <span className="btn_icon">
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </span>
                                </Link>
                            </div>
                        </li>

                        <div
                            className={`hamberger ${mobileMenuOpen ? "open" : ""}`}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-list-ul"></i>}
                        </div>
                    </ul>
                </div>
            </div>

            {hoverService && (
                <div onMouseEnter={() => setHoverService(true)} onMouseLeave={() => setHoverService(false)}>
                    <ServiceSubMenu />
                </div>
            )}

            <SideMenu
                open={mobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
                serviceMegaMenuColumns={serviceMegaMenuColumns}
                menu={menulist}
            />
        </div>
    );
}
