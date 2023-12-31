import {
  dest1,
  dest2,
  dest3,
  dest4,
  story1,
  story2,
  story3,
  story4,
  fb,
  linkedIn,
  twitter,
  ig,
  yt,
} from "../assets";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#destinations", label: "Destinations" },
  { href: "#stories", label: "Stories" },
];

export const destinationsData = [
  { location: "Raja Ampat", country: "Indonesia", img: dest2 },
  { location: "Fanjingshan", country: "China", img: dest4 },
  { location: "Vevey", country: "Switzerland", img: dest1 },
  { location: "Skadar", country: "Montenegro", img: dest3 },
];

export const storyData = [
  {
    img: story3,
    title: "The many benefits of taking a healing holiday",
    description:
      "'Helaing holidays' are on the rise to help maximise your health and happines...",
  },
  {
    img: story2,
    title: "The best Kyoto restaurant to try Japanese food",
    description:
      "From tofu to teahouses, here's our guide to Kyoto's best restaurants to visit...",
  },
  {
    img: story1,
    title: "Skip Chichen Itza and head to this remote Yucatan",
    description:
      "It's remote and challenging to get, but braving the jungle and exploring these ruins without the...",
  },
  {
    img: story4,
    title: "Surf's up at these beginner spots around the world",
    description:
      "If learning to surf has in on your to- do list for a while, the good news is: it’s never too late...",
  },
];

export const footerData = [
  {
    title: "Destinations",
    values: [
      { value: "Africa" },
      { value: "Antarctica" },
      { value: "Asia" },
      { value: "Europe" },
      { value: "America" },
    ],
  },
  {
    title: "Shop",
    values: [
      { value: "Destination Guides" },
      { value: "Pictorial & Gifts" },
      { value: "Special Offers" },
      { value: "Delivery Times" },
      { value: "FAQs" },
    ],
  },
  {
    title: "Interests",
    values: [
      { value: "Adventure Travel" },
      { value: "Art And Culture" },
      { value: "Wildlife And Nature" },
      { value: "Family Holidays" },
      { value: "Food And Drink" },
    ],
  },
];

export const footerLinks = [
  { id: 1, img: fb },
  { id: 2, img: ig },
  { id: 3, img: linkedIn },
  { id: 4, img: twitter },
  { id: 5, img: yt },
];
