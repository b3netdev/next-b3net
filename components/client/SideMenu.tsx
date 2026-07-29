"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { getServicePath } from "@/lib/servicePath";
import { useRouter } from 'next/navigation'

type Props = {
    open: any;
    onClose: any;
    menu?: any;
    serviceMegaMenuColumns?: any;
};

export default function SideMenu({
    open,
    onClose,
    menu = [],
    serviceMegaMenuColumns,
}: Props) {
    const [openMap, setOpenMap] = useState<any>({});
    const drawerRef = useRef<any>(null);
    const router = useRouter()
    useEffect(() => {
        const onKeyDown = (e: any) => {
            if (e.key === "Escape") onClose?.();
        };
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [onClose]);


    useEffect(() => {
        if (!open) setOpenMap({});
    }, [open]);


    useEffect(() => {
        if (!open) return;

        const handleClickOutside = (e: any) => {
            if (drawerRef.current && !drawerRef.current.contains(e.target)) {
                onClose?.();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [open, onClose]);

    const toPath = (raw: any) => {
        if (!raw || raw === "#") return "/";
        try {
            return raw.startsWith("http") ? new URL(raw).pathname : raw;
        } catch {
            return "/";
        }
    };

    const toggle = (id: any) => {

        setOpenMap((prev: any) => {
            const nextOpen = !prev[id];
            return nextOpen ? { [id]: true } : {};
        });
    };

    const redirect = (item: any) => {
        router.push(item?.page?.slug)
        onClose?.();
    }


    const ServiceMenuGroup = ({ group }: { group: any }) => {
        return (
            <div className="menu-inner-col">
                <div className="flex items-center gap-2 text-lg font-semibold text-black">
                    <img src={group.icon?.src ?? group.icon} alt="" /> {group.title}
                </div>

                <div className="d-flex flex-column gap-0">
                    {group.items.map((item: any, idx: any) => (
                        <span
                            key={idx}
                            className="d-flex align-items-center service-menu-item gap-2 ms-4"
                            style={{ color: "black" }}
                            onClick={onClose}
                        >
                            <i
                                className="fa-solid fa-circle"
                                style={{ color: "#3b58a2 ", fontSize: "8px" }}
                            ></i>

                            <Link href={getServicePath(item?.slug)}
                                className="service-sub-menu-link text-black"
                                onClick={onClose}
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
            <div className="service-side-vertical ">
                <div className="service-sidemenu-wrapper">
                    {serviceMegaMenuColumns?.map((col: any, colIdx: any) => (
                        <div key={colIdx} className="service-column-vertical">
                            {col.groups.map((group: any, gIdx: any) => (
                                <ServiceMenuGroup key={gIdx} group={group} />
                            ))}
                        </div>
                    ))}
                </div>

            </div>
        );
    };

    return (
        <>
            <div className={`sideMenuOverlay ${open ? "open" : ""}`} onClick={onClose} />
            <aside ref={drawerRef} className={`sideMenuDrawer ${open ? "open" : ""}`}>
                <nav className="sideMenuNav">
                    <ul className="sideMenuList">
                        {menu?.map((item: any) => {
                            const hasChildren = Array.isArray(item.children) && item.children.length > 0;
                            const expanded = !!openMap[item.id];


                            return (
                                <li key={item.id} className="sideMenuItem">

                                    <div className="sideMenuRow "
                                    >
                                        {hasChildren ? (
                                            <div
                                                style={{
                                                    width: "100%",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "space-between",
                                                }}
                                            >
                                                <button
                                                    type="button"
                                                    className="sideMenuParentBtn"
                                                    onClick={() => redirect(item)}
                                                >
                                                    {item.title}
                                                </button>

                                                <span onClick={() => toggle(item.id)}>
                                                    {
                                                        expanded ?
                                                            <i className="fa-solid fa-angle-up"></i>
                                                            :
                                                            <i className="fa-solid fa-angle-down"></i>
                                                    }
                                                </span>
                                            </div>
                                        ) : (
                                            <Link
                                                href={`/${item?.page?.slug !== "home" ? item?.page?.slug : ''}`}
                                                className="sideMenuLink w-full"
                                                onClick={onClose}
                                            >
                                                {item.title}
                                            </Link>
                                        )}
                                    </div>

                                    {hasChildren ? (
                                        <div className={`sideMenuPanel ${expanded ? "open" : ""}`}>
                                            <div className="">
                                                {
                                                    item?.object_id == 12050 ?
                                                        <ServiceSubMenu />
                                                        :

                                                        <ul className="sideMenuSubList">
                                                            {item.children.map((child: any, index: any) => (

                                                                <li key={index} className="sideMenuSubItem">
                                                                    {child.parent_id == 13477 ? (
                                                                        child.id == 13477 ? (
                                                                            <i className="fa-solid fa-bullhorn  sideMenuSubItem" style={{ color: "#3B58A2" }}></i>
                                                                        ) : child.id == 13484 ? (
                                                                            <i className="fa-solid fa-circle-question sideMenuSubItem"></i>
                                                                        ) : child.id == 13485 ? (
                                                                            <i className="fa-regular fa-pen-to-square sideMenuSubItem"></i>
                                                                        ) : (
                                                                            <i className="fa-solid fa-users-viewfinder sideMenuSubItem"></i>
                                                                        )
                                                                    ) : child.parent_id == 13479 ? (
                                                                        <i
                                                                            className="fa-solid fa-angles-right"
                                                                            style={{ color: "#FF4F0C" }}
                                                                        ></i>
                                                                    ) : (
                                                                        null
                                                                    )}
                                                                    <Link
                                                                        href={
                                                                            child.parent_id == 13477
                                                                                ? `/about-company/${child?.page?.slug !== "about-company"
                                                                                    ? child?.page?.slug
                                                                                    : ""
                                                                                }`
                                                                                : `/${child?.page?.slug}`
                                                                        }
                                                                        className="sideMenuSubLink w-full"
                                                                        onClick={onClose}
                                                                    >
                                                                        {child.title}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                }
                                            </div>
                                        </div>
                                    ) : null}
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </aside>
        </>
    );
}