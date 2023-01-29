import { StaticImageData } from "next/image";

export type HeaderComponents = {
    link: string;
    active?: boolean;
};

export type PropsMobileMenu = {
    mobileMenu: boolean;
}

export type MobileMenuComponents = {
    title: string;
    active: boolean;
};

export type HedronType = {
    initialPos: string;
    finalPos: string;
    duration: number;
}

export type TypingTextTypes = {
    title: string;
    textStyles: string;
}

export type HubComponentsTypes = {
    title: string;
    text: string;
    image: StaticImageData;
};

export type FooterComponent = {
    title: string;
    subtitles: string[];
    link: string;
};