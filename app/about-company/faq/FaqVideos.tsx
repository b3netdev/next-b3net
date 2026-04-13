"use client";

import React from "react";
import { memo } from "react";
type Video = {
  video_link: any;
};

type Props = {
  video: Video;
  index: number;
};

const FaqVideos = ({ video, index }: Props) => {
    console.log(video)
  return (
    <div className="col-md-6 col-lg-4" key={index}>
      <div className="video-card text-center">
        <div className="video-thumbnail">
          <div
            dangerouslySetInnerHTML={{
              __html: video?.video_link ?? "",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default memo(FaqVideos);