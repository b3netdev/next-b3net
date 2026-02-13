"use client";

import React from "react";
import { Link } from "react-scroll";

type ScrollLinkWrapperProps = {
  to: string;                // target Element name
  children: React.ReactNode;
  className?: string;
  offset?: number;
  duration?: number;
  smooth?: boolean;
  key?: string | number;
};

const Scroll: React.FC<ScrollLinkWrapperProps> = ({
  to,
  children,
  className,
  offset = -80,
  duration = 500,
  smooth = true,
}) => {
  return (
    <Link
      to={to}
      key={key}
      spy={false}
      smooth={smooth}
      duration={duration}
      offset={offset}
      className={className}
    >
   
        {children}

    </Link>
  );
};

export default Scroll;
