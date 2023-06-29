"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const supportedPieces = [
  "https://cdn.activepieces.com/pieces/calendly.png",
  "https://cdn.activepieces.com/pieces/airtable.png",
  "https://cdn.activepieces.com/pieces/salesforce.png",
  "https://cdn.activepieces.com/pieces/zoom.png",
  "https://cdn.activepieces.com/pieces/slack.png",
  "https://cdn.activepieces.com/pieces/discord.png",
  "https://cdn.activepieces.com/pieces/telegram-bot.png",
  "https://cdn.activepieces.com/pieces/hubspot.png",
  "https://cdn.activepieces.com/pieces/intercom.png",
  "https://cdn.activepieces.com/pieces/wordpress.png",
  "https://cdn.activepieces.com/pieces/pipedrive.png",
  "https://cdn.activepieces.com/pieces/asana.png",
];

const repeatedPieces = Array.from({ length: 4 }, () => supportedPieces).flat();


const ImageSlider = () => {

  return (
    <div className="flex relative w-[1024px] h-[100px] overflow-hidden">
      <div
        className="flex absolute image-slider"
      >
        {repeatedPieces.map((piece, index) => (
          <div
            key={index}
            className={`border border-gray-900 p-2 m-2`}
            style={{}}
          >
            <Image src={piece} alt="Integration logo" width={64} height={64} style={{
              objectFit: "contain"
            }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
