"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/router";
import { setId } from "@/redux/slicers/idSlicer";


import { menulist, serviceMegaMenuColumns } from "../../helper/Menulist";

// import SideMenu from "./SideMenu";
// import { setHeaderMenu } from "../../../redux/slicers/menuSlicer";

type MenuChild = {
    id: number;
    title: string;
    url: string;
    object_id?: number;
    page:any
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
    to: string;
    state?: Record<string, any>;
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
    const { showDefault } = useAppSelector((state) => state.menu);
    const [hoverService, setHoverService] = useState(false);
    const [aboutHover, setAboutHover] = useState(false);
    const [wesolveHover, setWesolveHover] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const dispatch = useAppDispatch();
    // const router = useRouter()

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



    const HandleNavigate = (id:number) =>{
        dispatch(setId(id))
        
    }



    const ServiceMenuGroup = ({ group }: { group: ServiceMegaMenuGroup }) => {
        return (
            <div className="menu-inner-col">
                <h4>
                    <img src={group.icon?.src ?? group.icon} alt="" /> {group.title}
                </h4>

                <div className="d-flex flex-column gap-0">
                    {group.items.map((item, idx) => (
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

                            <Link href={item.to} 
                            className="service-menu-link"
                            onClick={() => HandleNavigate(item.state?.id)}
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

                                            <form>
                                                <div className="row">
                                                    <div className="col-md-6 form-group">
                                                        <label>
                                                            First Name<span>*</span>
                                                        </label>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                    <div className="col-md-6 form-group">
                                                        <label>
                                                            Last Name<span>*</span>
                                                        </label>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-12 form-group">
                                                        <label>
                                                            Your Email<span>*</span>
                                                        </label>
                                                        <input type="email" className="form-control" />
                                                    </div>
                                                </div>

                                                <div className="mb-0 text-center pt-md-3">
                                                    <button type="submit" className="btn btn-primary">
                                                        SUBMIT NOW
                                                        <i className="fa-solid fa-arrow-right-long"></i>
                                                    </button>
                                                </div>
                                            </form>
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

    const gepath = (url?: string) => {
        if (!url || url === "#") return "";
        if (url.startsWith("http")) return new URL(url).pathname.split("/").pop() || "";
        return url.split("/").pop() || "";
    };

    const AboutSubmenu = ({ data }: { data: MenuChild }) => {
        const url = data.url;
        const pathUrl = new URL(url).pathname.split("/").pop() || "";

        return (
            <div className="aboutSubMenu" key={data.id}>
                <span className="about-item force-black">
                    {data.id === 13477 ? (
                        <i className="fa-solid fa-bullhorn"></i>
                    ) : data.id === 13484 ? (
                        <i className="fa-solid fa-circle-question"></i>
                    ) : data.id === 13485 ? (
                        <i className="fa-regular fa-pen-to-square"></i>
                    ) : (
                        <i className="fa-solid fa-users-viewfinder"></i>
                    )}

                    {/* React Router state -> query */}
                    <Link href={`/about-company/${ data?.page?.slug !== "about-company"? data?.page?.slug : ''}`}
                        
                    >{data.title}</Link>
                </span>
            </div>
        );
    };

    const WesolveSubMenu = ({ data }: { data: MenuChild }) => {
        const slug = new URL(data.url).pathname.split("/").filter(Boolean).pop() || "";
        return (
            <div className="aboutSubMenu WesolveBox" key={data.id}>
                <span className="about-item">
                    <Link href={`/wesolve/${data?.page?.slug}`}
                    onClick={() => HandleNavigate(data.object_id!)}
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
            <div className="NavContainer">
                <div
                    style={{
                        width: "10em",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingLeft: "10px",
                    }}
                >
                    <div className="site_logo">
                        <Link className="site_link" href="/">
                            {/* keeping <img> to not change structure */}
                            <img
                                src="https://www.b3net.com/wp-content/uploads/2025/06/logo-2.png"
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

                            const raw = (item.url ?? item.path ?? "#") as string;
                            const pathUrl = gepath(raw);
                            const toPath = raw.startsWith("http") ? new URL(raw).pathname : raw;

                            if (item.children?.length) {
                                if (isAbout) {
                                    return (
                                        <li
                                            key={item.id}
                                            className="has-children position-relative"
                                            onMouseEnter={() => setAboutHover(true)}
                                            onMouseLeave={() => setAboutHover(false)}
                                        >
                                            <span style={{ opacity: "1", color: labelColor }}>
                                                <Link
                                                    href={`/${item?.page?.slug}`}
                                                    onClick={()=>HandleNavigate(item?.object_id)}
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

                                            <div className={`submenu-anim ${aboutHover ? "open" : ""}`}>
                                                {item.children.map((data) => (
                                                    <AboutSubmenu key={data.id} data={data} />
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
                                                    href={`${item?.page?.slug}`}
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
                                            onMouseEnter={() => setWesolveHover(true)}
                                            onMouseLeave={() => setWesolveHover(false)}
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

                                            <div className={`submenu-anim ${wesolveHover ? "open" : ""}`}>
                                                {item.children.map((subData) => (
                                                    <WesolveSubMenu key={subData.id} data={subData} />
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
                                        href={`/${item?.page?.slug == "home"? "/":item?.page?.slug}`}
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
                                    href="/requestforproposal.html"
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

            {/* <SideMenu
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        serviceMegaMenuColumns={serviceMegaMenuColumns}
        menu={menulist}
      /> */}
        </div>
    );
}
