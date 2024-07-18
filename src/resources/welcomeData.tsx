import { ReactNode } from "react";

import BitCoin from "../../assets/images/splashScreen/Splash";

import CrowdReal1 from "../../assets/welcomeSection/logos/CrowdRealEstate1";
import CrowdReal2 from "../../assets/welcomeSection/logos/CrowdRealEstate2";
import CrowdReal3 from "../../assets/welcomeSection/logos/CrowdRealEstate3";

import Etfs1 from "../../assets/welcomeSection/logos/Etf1";
import Etfs2 from "../../assets/welcomeSection/logos/Etf2";
import Etfs3 from "../../assets/welcomeSection/logos/Etf3";

import CrowdLendings2 from "../../assets/welcomeSection/logos/CrowdLendings2";
import CrowdLendings1 from "../../assets/welcomeSection/logos/CrowdLendings1";

import Commodities1 from "../../assets/welcomeSection/logos/Commodities1";
import Commodities2 from "../../assets/welcomeSection/logos/Commodities2";
import Commodities3 from "../../assets/welcomeSection/logos/Commodities3";

import Crypto1 from "../../assets/welcomeSection/logos/Crypto1";
import Crypto2 from "../../assets/welcomeSection/logos/Crypto2";
import Crypto3 from "../../assets/welcomeSection/logos/Crypto3";

export interface WelcomeDataItem {
  id: number;
  title?: string;
  images: ReactNode[] | ReactNode;
}

export const welcomeData: WelcomeDataItem[] = [
  {
    images: <BitCoin />,
    id: 1,
  },
  {
    title: "Crowd lending",
    images: [<CrowdLendings1 />, <CrowdLendings2 />, <CrowdLendings1 />],
    id: 2,
  },
  {
    title: "Crowd real estate",
    images: [<CrowdReal1 />, <CrowdReal2 />, <CrowdReal3 />],
    id: 3,
  },
  {
    title: "Commodities",
    images: [<Commodities1 />, <Commodities2 />, <Commodities3 />],
    id: 4,
  },
  {
    title: "ETFs",
    images: [<Etfs1 />, <Etfs2 />, <Etfs3 />],
    id: 5,
  },
  {
    title: "Crypto",
    images: [<Crypto1 />, <Crypto2 />, <Crypto3 />],
    id: 6,
  },
];
