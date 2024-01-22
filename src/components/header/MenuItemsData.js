import { AiFillHome } from "react-icons/ai";

export const menuItemsData = [
    {
        id: 1,
        title: <AiFillHome size={18} color="#fff"/>,
        url:"/"
    },
    {
        id: 2,
        title: "ABOUT US",
        url:"/our_work"
    },
    {
        id: 3,
        title: "JOIN THE PROJECT",
        url:"/join_project"
    },
    {
        id: 4,
        title: "EVENTS",
        url:"/events"
    },
    {
        id: 5,
        title: "RESOURCE CENTER",
        url:"/resources",
        submenu: [
            {
                id: 6,
                title: "Gallery",
                url: "/gallery"
            },
            {
                id: 7,
                title: "Trainings",
                url: "/trainings"
            },
            {
                id: 8,
                title: "Workshops",
                url: "/workshops"
            },
        ],
    },
    {
        id: 6,
        title: "CONTACT US",
        url:"/contact_us"
    },
 
];