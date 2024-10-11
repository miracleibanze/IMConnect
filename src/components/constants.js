import { comment } from "postcss";
import {
  alignCenterSvg,
  arrowRightOnRectanglSvg,
  artUnderwater,
  artUnderwaterSmall,
  beach,
  beachSmall,
  beachWater,
  beachWaterSmal,
  bellSvg,
  blackBoy,
  blackBoySmall,
  burningCity,
  burningSitySmall,
  commentsSvg,
  deepForest,
  deepForestSmall,
  eclipse,
  eclipseSmall,
  forest,
  forestSmall,
  gearSvg,
  horizon,
  horizonSmall,
  hotjarSvg,
  imageSvg,
  machineCity,
  machineCitySmall,
  mapPinSvg,
  moonSvg,
  musicNoteSvg,
  paperclipSvg,
  person1,
  person15,
  person15Small,
  person16,
  person16Small,
  person17,
  person17Small,
  person18,
  person18Small,
  person19,
  person19Small,
  person1Small,
  person20,
  person20Small,
  person3,
  person3Small,
  person5,
  person5Small,
  person6,
  person6Small,
  person7,
  person8,
  person9,
  person9Small,
  plusSquareSvg,
  roadForest,
  roadForestSmall,
  roadToPeak,
  roadToPeakSmall,
  sciFiCoach,
  sciFiCoachSmall,
  searchSvg,
  smileSvg,
  summerRiver,
  summerRiverSmall,
  sunRise,
  sunRiseSmall,
  sunSet,
  sunSetSmall,
  temperatureHighSvg,
  thumbsUpSvg,
  userSvg,
} from "../assets";

export const homeSidebarLinks = [
  {
    id: 0,
    name: "Profile",
    icon: userSvg,
    link: "profile/feed",
  },
  {
    id: 1,
    name: "Explore",
    icon: searchSvg,
    link: "explore",
  },
  {
    id: 2,
    name: "Dark mode",
    icon: moonSvg,
    link: "profile",
  },
];
export const utilitySidebarLinks = [
  {
    id: 0,
    name: "Create Post",
    icon: plusSquareSvg,
  },
  {
    id: 1,
    name: "Likes",
    icon: thumbsUpSvg,
  },
];

export const bottomSidebarLinks = [
  {
    id: 0,
    name: "Setting",
    icon: gearSvg,
  },
  {
    id: 1,
    name: "Log Out",
    icon: arrowRightOnRectanglSvg,
    logOut: true,
  },
];

export const navbarIcons = [
  {
    id: 0,
    icon: commentsSvg,
    link: "/profile/comments",
  },
  {
    id: 1,
    icon: bellSvg,
    link: "/profile/notification",
  },
];

export const goUp = () => {
  window.scrollTo(0, 0);
};

export const postIcons = [
  {
    id: 0,
    name: "image",
    icon: imageSvg,
  },
  {
    id: 1,
    name: "attachment",
    icon: paperclipSvg,
  },
  {
    id: 2,
    name: "location",
    icon: mapPinSvg,
  },
  {
    id: 3,
    name: "emoji",
    icon: smileSvg,
  },
];

export const upcomingEvents = [
  {
    id: 0,
    name: "Garden BBQ",
    icon: alignCenterSvg,
    time: "Sat 16 June",
    location: "Your gardern",
  },
  {
    id: 1,
    name: "City council meeting",
    icon: hotjarSvg,
    time: "Sun 17 June",
    location: "City hall",
  },
  {
    id: 2,
    name: "Post punk music festival",
    icon: musicNoteSvg,
    time: "Sat 16 June",
    location: "Music hall",
  },
  {
    id: 3,
    name: "Stand-up comedy show",
    icon: temperatureHighSvg,
    time: "Sat 16 June",
    location: "comedy club",
  },
  {
    id: 4,
    name: "Welcome to",
    icon: alignCenterSvg,
    caption: "stay connected with friends and family",
  },
];

export const Posts = [
  {
    id: 0,
    name: "ROBERT Hanold",
    description:
      "In this post, I explore the diverse biomes of Earth, from lush rainforests to arid deserts, highlighting the unique flora and fauna that inhabit each ecosystem",
    images: [
      {
        img: deepForest,
        imgBg: deepForestSmall,
      },
      {
        img: forest,
        imgBg: forestSmall,
      },
    ],
    person: person7,
    time: "Two minutes ago",
    likes: 208,
    comments: 29,
    shares: 8,
  },
  {
    id: 1,
    name: "KETY Cloe",
    description:
      "Join me as I share my stargazing experiences, tips for identifying constellations, and the profound sense of wonder that comes from gazing up at the night sky",
    images: [
      {
        img: sciFiCoach,
        imgBg: sciFiCoachSmall,
      },
      {
        img: horizon,
        imgBg: horizonSmall,
      },
      {
        img: beachWater,
        imgBg: beachWaterSmal,
      },
    ],
    person: person8,
    time: "Thursday 17 August, 14h00'",
    likes: 158,
    comments: 22,
    shares: 12,
  },
  {
    id: 2,
    name: "Claire Madson",
    description:
      "I delve into the beauty of sunsets, sharing my favorite spots for viewing them and the emotions they evoke. I'll also discuss tips for photographing these fleeting moments",
    images: [
      {
        img: sunSet,
        imgBg: sunSetSmall,
      },
      {
        img: sunRise,
        imgBg: sunRiseSmall,
      },
    ],
    person: person6,
    time: "Tuesday 22 August, 8h00'",
    likes: 199,
    comments: 32,
    shares: 9,
  },
  {
    id: 3,
    name: "MARK da cascos",
    description:
      "In this post, I recount my experiences with outdoor therapy and how spending time in nature has helped me find peace and clarity in my life",
    images: [
      {
        img: deepForest,
        imgBg: deepForestSmall,
      },
      {
        img: forest,
        imgBg: forestSmall,
      },
    ],
    person: person7,
    time: "Two minutes ago",
    likes: 208,
    comments: 29,
    shares: 8,
  },
  {
    id: 4,
    name: "Jack Reacher",
    description:
      "I recount some memorable wildlife encounters I've had in my travels, emphasizing the beauty and unpredictability of observing animals in their natural habitats.",
    images: [
      {
        img: roadForest,
        imgBg: roadForestSmall,
      },
      {
        img: person17,
        imgBg: person17Small,
      },
      {
        img: roadToPeak,
        imgBg: roadToPeakSmall,
      },
    ],
    person: person16,
    time: "Tuesday 22 August, 8h00'",
    likes: 258,
    comments: 11,
    shares: 3,
  },
  {
    id: 5,
    name: "Kety Selena",
    description:
      "The Impact of Climate Change: How Nature is Responding: In this blog, I discuss the effects of climate change on our planet and share my thoughts on how we can work together to protect our environment.",
    images: [
      {
        img: burningCity,
        imgBg: burningSitySmall,
      },
      {
        img: eclipse,
        imgBg: eclipseSmall,
      },
      {
        img: machineCity,
        imgBg: machineCitySmall,
      },
    ],
    person: person15,
    feeling: "Sad",
    time: "Tuesday 22 August, 8h00'",
    likes: 258,
    comments: 11,
    shares: 3,
  },
];

export const birthDays = [
  {
    id: 0,
    date: "20 August",
    people: [
      {
        image: {
          img: person3,
          imgBg: person3Small,
        },
        name: "BOB Hammond",
        years: 28,
      },
      {
        image: {
          img: person16,
          imgBg: person16Small,
        },
        name: "Harpert Michael",
        years: 27,
      },
    ],
  },
  {
    id: 1,
    date: "22 August",
    people: [
      {
        image: {
          img: person15,
          imgBg: person15Small,
        },
        name: "Madson cooper",
        years: 30,
      },
    ],
  },
  {
    id: 2,
    date: "1 September",
    people: [
      {
        image: {
          img: person17,
          imgBg: person17Small,
        },
        name: "Isabel iguess",
        years: 19,
      },
    ],
  },
];

export const sidebar2content = [
  {
    id: 0,
    name: "Post feeds",
    items: [
      {
        image: { img: artUnderwater, imgBg: artUnderwaterSmall },
        name: "Friend's circle",
      },
      {
        image: { img: machineCity, imgBg: machineCitySmall },
        name: "City explorer",
      },
      { image: { img: beach, imgBg: beachSmall }, name: "Vintage beach" },
    ],
  },
  {
    id: 1,
    name: "Community chats",
    items: [
      {
        image: { img: summerRiver, imgBg: summerRiverSmall },
        name: "Graden BBQ",
      },
      {
        image: { img: person5, imgBg: person5Small },
        name: "City council meeting",
      },
      {
        image: { img: blackBoy, imgBg: blackBoySmall },
        name: "Pop-punk music",
      },
      {
        image: { img: person3, imgBg: person3Small },
        name: "Stand-up commedy",
      },
    ],
  },
  {
    id: 2,
    name: "Online Friends",
    items: [
      {
        image: { img: blackBoy, imgBg: blackBoySmall },
        name: "John Smith",
      },
      {
        image: { img: person6, imgBg: person6Small },
        name: "Emily Johnson",
      },
      {
        image: { img: person18, imgBg: person18Small },
        name: "Olivier Davis",
      },
      {
        image: { img: person1, imgBg: person1Small },
        name: "Sophie Wilson",
      },
      {
        image: { img: person3, imgBg: person3Small },
        name: "Liam Brown",
      },
      {
        image: { img: person20, imgBg: person20Small },
        name: "Emma White",
      },
      {
        image: { img: person19, imgBg: person19Small },
        name: "Jack Green",
      },
      {
        image: { img: person9, imgBg: person9Small },
        name: "Ava Lee",
      },
    ],
  },
];

export const profilePages = [
  {
    id: 0,
    name: "Posts",
  },
  {
    id: 1,
    name: "Profile",
  },
  {
    id: 2,
    name: "Gallery",
  },
  {
    id: 3,
    name: "Clips",
  },
  {
    id: 4,
    name: "Contact",
  },
];
