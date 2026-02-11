import React from "react";
import FooterClient from "../client/FooterClient";
import { footerData } from "@/helper/Footer";

export type FooterLink = {
  label: string;
  url: string;
};

export type FooterLocationItem = {
  title: string;
  links: FooterLink[];
};

export type FooterLocation = {
  id: string;
  label: string;
  columns: FooterLocationItem[][];
};

export type FooterExploreItem =
  | { title: string; url: string }
  | { title: string; links: FooterLink[] };

export type FooterSocial = {
  icon: string;
  url: string;
};

export type FooterPartner = {
  img: string;
  url: string;
  alt?: string;
};

export type FooterData = {
  locations: FooterLocation[];
  explore: FooterExploreItem[];
  socials: FooterSocial[];
  partners: FooterPartner[];
  successImg: string;
};


export default function Footer() {
  return <FooterClient footerData={footerData} />;
}
