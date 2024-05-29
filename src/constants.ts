// src\constants.ts
import { PublicKey } from "@solana/web3.js";

// Platform fees
export const PLATFORM_CREATOR_FEE = 0.05; // 5%
export const PLATFORM_JACKPOT_FEE = 0.01; // 1%

// Toggle live toast events - (true = on, false = off)
export const LIVE_EVENT_TOAST = true;

/******************************************
 * ┌──────────────────────────────────────┐ *
 * │          FOOTER LINKS                │ *
 * └──────────────────────────────────────┘ *
 ******************************************/

export const FOOTER_LINKS = [
  {
    href: "https://solcasino.fun",
    title: "👨‍💻 Degenerate Casino",
  },
  {
    href: "https://explorer.gamba.so/pools",
    title: "🚀 Create Pool",
  },
  {
    href: "https://discord.com/",
    title: "💬 Join Discord",
  },
];

export const FOOTER_TWITTER_LINK = {
  href: "https://twitter.com/SolCasino",
  title: "© 2024 made with ❤️",
};

/******************************************
 * ┌──────────────────────────────────────┐ *
 * │          METATAGS (SEO)              │ *
 * └──────────────────────────────────────┘ *
 ******************************************/

export const BASE_SEO_CONFIG = {
  defaultTitle: "SolCasino",
  description:
    "The gambleFi protocol for on-chain degeneracy on Solana.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://play-gamba.vercel.app/",
    title: "SolCasion",
    description:
      "The gambleFi for on-chain degeneracy on Solana.",
    images: [
      {
        url: "https://play-gamba.vercel.app/seo.png",
        alt: "SolCasino",
      },
    ],
    site_name: "SolCasino",
  },
  /*twitter: {
    cardType: "summary_large_image",
    site: "https://twitter.com/gambalabs",
    handle: "@gambalabs",
  },*/
  additionalMetaTags: [
    {
      name: "keywords",
      content: "casino, gaming, rewards, gambling, entertainment",
    },
    {
      name: "theme-color",
      content: "#000000",
    },
  ],
};

/******************************************
 * ┌──────────────────────────────────────┐ *
 * │      SUPPORTED PLATFORM TOKENS       │ *
 * └──────────────────────────────────────┘ *
 ******************************************/

export const TOKENLIST = [
  // SOL
  {
    mint: new PublicKey("So11111111111111111111111111111111111111112"),
    name: "Solana",
    symbol: "SOL",
    image:
      "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png",
    decimals: 9,
    baseWager: 0.01e9,
  },
  // USDC
  {
    mint: new PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"),
    name: "USD Coin",
    symbol: "USDC",
    image:
      "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png",
    decimals: 9,
    baseWager: 0.01e9,
  },
  // SPEND
  {
    mint: new PublicKey("3mp1MN5v7zdGXTvvcC9zUMoszMrh9pNdaCDkAQKc7Fec"),
    name: "SolSpend",
    symbol: "SPEND",
    image:
      "https://bafkreic4r56jg7fvkthkfzmmfy2z6ypfltqgowjvs44ghf32nh2nz77tva.ipfs.nftstorage.link/",
    decimals: 5,
    baseWager: 2e3,
  },

  // Add New Public pool
  // {
  //   mint: new PublicKey(""),
  //   name: "",
  //   symbol: "",
  //   image: "",
  //   decimals: 0,
  //   baseWager: 0,
  // },

  // Add New Private pool
  // {
  //   mint: new PublicKey(""),
  //   poolAuthority: new PublicKey(""), // REQUIRED FOR PRIVATE POOLS ONLY
  //   name: "",
  //   symbol: "",
  //   image: "",
  //   decimals: 0,
  //   baseWager: 0,
  // },
];
