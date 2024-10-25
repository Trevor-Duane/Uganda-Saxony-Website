import { AiFillHome } from "react-icons/ai";

export const menuItems = [
    {
        id: 1,
        title: "HOME",
        url:"/"
    },
    {
        id: 2,
        title: "ABOUT US",
        url:"/about_us"
    },
    {
        id: 3,
        title: "PARTNERSHIPS",
        url:"",
        submenu: [
            {
                id: 1,
                title: "SCHOOLS",
                url: "/partner_schools"
            },
            {
                id: 2,
                title: "CSOs",
                url: "/partner_cso"
            },

        ],
    },
    {
        id: 4,
        title: "EVENTS",
        url:"/events"
    },
    {
        id: 7,
        title: "GALLERY",
        url: "/gallery"
    },
    {
        id: 5,
        title: "RESOURCE CENTER",
        url:"",
        submenu: [
            {
                id: 1,
                title: "INFORMATION ON UGANDA",
                url: "/uganda_information"
            },
            {
                id: 2,
                title: "INFORMATION ON SAXONY",
                url: "/saxony_information"
            },
            {
                id: 3,
                title: "FUNDING OPPORTUNITIES",
                url: "/funding_opportunities"
            },
        ],
    },
    {
        id: 6,
        title: "CONTACT US",
        url:"/contact"
    },
 
];