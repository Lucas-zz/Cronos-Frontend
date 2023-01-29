import ETHCoin from "../../public/assets/ethereum.png";
import SecurityBadge from "../../public/assets/badge-check.png";
import PieChart from "../../public/assets/chart.png";
import StarBadge from "../../public/assets/badge-star.png";

export const header_content = {
    logo: {
        title: "CRONOS",
    },
    menu: [
        {
            title: "Learn",
            active: true,
        },
        {
            title: "Build",
            active: false,
        },
        {
            title: "Explore",
            active: false,
        }
    ],
    link: {
        title: "Get CRONOS",
    },
};

export const hub_content = [
    {
        title: "MarketPlace",
        text: "Set to operate a next-gen decentralized exchange, swapping digital assets from across the Interchain, with very low fees and instant transaction confirmation.",
        image: ETHCoin,
    },
    {
        title: "Secutiry Provider",
        text: "With the upcoming Interchain Security feature, HEDRON will soon be securing many chains, in exchange for additional staking rewards.",
        image: SecurityBadge,
    },
    {
        title: "Router",
        text: "A core mission of the Hub – to connect chains by establishing IBC connections with compatible chains and operating decentralized bridges with chains like Ethereum and Bitcoin.",
        image: PieChart,
    },
    {
        title: "Custodian",
        text: "Located at the crossroads of the Interchain, the Hub is extremely secure, the best place to hold digital assets and manage accounts across many chains.",
        image: StarBadge,
    }
];

export const footer_content = [
    {
        subject: {
            title: "Learn",
            subtitles: [
                "Introduction",
                "Features",
                "Staking",
                "Get HEDRON",
                "FAQ",
            ],
        },
    },
    {
        subject: {
            title: "Build",
            subtitles: [
                "Developer Portal",
                "Ignite CLI",
                "Cronos SDK",
                "IBC Protocol",
            ],
        },
    },
    {
        subject: {
            title: "Explore",
            subtitles: [
                "Tokens",
                "Apps & Service",
                "Wallets",
                "Gravity DEX",
                "Blog",
            ],
        },
    },
    {
        subject: {
            title: "Participate",
            subtitles: [
                "Community",
                "Contributors",
                "Events",
                "Newsletters",
            ],
        },
    },
    {
        subject: {
            title: "Resources",
            subtitles: [
                "About",
                "Press Kit",
                "Design",
                "Resources",
            ],
        },
    },
];
