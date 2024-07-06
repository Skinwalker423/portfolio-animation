import {
  leftovers,
  memories,
  nikeLanding,
  snakeGame,
} from "../public";

export const links = [
  {
    url: "/home",
    title: "Home",
  },
  {
    url: "/about",
    title: "About",
  },
  {
    url: "/portfolio",
    title: "Potfolio",
  },
  {
    url: "/contact",
    title: "Contact",
  },
];

export const socials = [
  {
    alt: "Github icon",
    src: "/github.png",
    href: "https://github.com/Skinwalker423",
  },
  {
    alt: "Linkedin icon",
    src: "/linkedin.png",
    href: "https://www.linkedin.com/in/art-gonzalez-a33799235/",
  },

  {
    alt: "Dribble icon",
    src: "/dribbble.png",
    href: "https://dribbble.com/Skinwalker423",
  },
  {
    alt: "Instagram icon",
    src: "/instagram.png",
    href: "https://instagram.com",
  },
  {
    alt: "X icon",
    src: "/twitter.png",
    href: "https://x.com/artgonzalez423",
  },

  {
    alt: "Pinterest icon",
    src: "/pinterest.png",
    href: "https://www.pinterest.com/Skinwalker423",
  },
];

export const techXp = [
  {
    name: "Javascript",
  },
  {
    name: "Typescript",
  },
  {
    name: "CSS3",
  },
  {
    name: "Tailwind CSS",
  },
  {
    name: "Shadcn/ui",
  },
  {
    name: "HTML5",
  },
  {
    name: "ReactJS",
  },
  {
    name: "NextJS",
  },
  {
    name: "Git",
  },
  {
    name: "Github",
  },
  {
    name: "Prisma",
  },
  {
    name: "MongoDB",
  },
  {
    name: "MySQL",
  },
  {
    name: "PostgeSQL",
  },
  {
    name: "Vite",
  },
  {
    name: "Redux RTK",
  },
  {
    name: "REST API",
  },
  {
    name: "CRUD",
  },
  {
    name: "Express",
  },
  {
    name: "Node.js",
  },
];

export const projects = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "NextJS Food Sharing app",
    desc: "The largest food sharing platform, where you can find local authentic meals being prepared by the community and shared to the community. Search for local participating meal preppers!",
    img: leftovers,
    link: "https://leftovers23.vercel.app/",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Next.js Memories game",
    desc: `Picture memory games have been a beloved pastime
          for generations. Now, you can take the fun to a
          whole new level by using any pictures you like -
          family photos, vacation snapshots, artwork, even
          memes!`,
    img: memories,
    link: "https://github.com/Skinwalker423/memories",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Shoe Shop Landing Page",
    desc: "Discover stlyish new arrivals, quality, comfort, and innovation for you active needs. Check out the store landing page.",
    img: nikeLanding,
    link: "https://main--shoeshoplanding.netlify.app/",
  },
  {
    id: 4,
    color: "from-green-300 to-red-300",
    title: "Python Snake game",
    desc: "A simple version of a classic game Snake. It keeps track of the highest score, so challenge yourself to see how high you can go!",
    img: snakeGame,
    link: "https://github.com/Skinwalker423/snake-game",
  },
];
