import { div } from "three/examples/jsm/nodes/Nodes.js";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  home_invest,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Person 1",
    icon: web,
  },
  {
    title: "Person 2",
    icon: mobile,
  },
  {
    title: "Person 3",
    icon: backend,
  },
  {
    title: "Person 4",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "About us",
    company_name: "Shree Balaji Group",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "March 2020 - April 2021",
    points: [
      "At Shree Balaji Group, with 9 years of experience in the real estate industry, we have earned a reputation for excellence and trust", 

      "Our track record speaks volumes, with successful projects like Sai Enclave in Chaprola, Radhey Shyam Enclave in Sain, and the swift delivery of Shyam Enclave 1 in just six months, boasting of 88 meticulously designed plots in Sector 148, Safipur",
      
      "Our commitment to quality and timely delivery sets us apart, ensuring that each project reflects our dedication to customer satisfaction. As we continue to innovate and evolve, Shree Balaji Group remains your trusted partner in turning your real estate dreams into reality.",
      
    ],
  },
  {
    title: "Shree Shyam Enclave",
    company_name: "Shree Balaji Group",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Hope to see you soon .",
    ],
  },
  {
    title: "Shree Shyam Enclave-II",
    company_name: "Shree Balaji Group",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Connecting the major areas of Delhi-NCR, Shree Balaje Group is Proposing many economical Residential Plots. With the non-stop rising demand the wide-spread Lavish Green Area. The Shree Shyam Enclave-II is near to Jewar International Airport: 4th largest INTERNATIONAL AIRPORT, In Jewar, Noida-Delhi NCR.",
      "A much-awaited project, Shree Shyam Envlave -II is situated in Prime Location - at Aligarh - Palwal Proposed 6-Lane Highway(NH-22A). The residential plot at the Shree Shyam Enclave -II are internally well connected and well Located with nearby residential colonies. All the plots are uniquely designed and internally well connected. Shree Shyam Enclave -II has an exotic environment that promotes healthy living Moreover, Shree Shyam Enclave-II is well-connected to Mathura, Vrindavan, Agra, Gurugram, Aligarh, Bulandshehar, Palwal, Delhi & NCR etc.",
      "Shree Shyam Enclave -II it is worth-buying affordable plots in gated community that will charm its residents while bringing in a convenient lifestyle to live in.",
    ],
  },
  {
    title: "Our Future Goals",
    company_name: "Shree Shyam Enclave",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I've had the pleasure of working with Shree Balaji Group on multiple occasions, and each time, they have delivered excellence. Their commitment to customer satisfaction is truly commendable. Thanks to their expertise, I now own a portfolio of properties that have proven to be lucrative investments.",
    name: "Mr. Shubham Panchal ",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "As a first-time investor, I was apprehensive about entering the real estate market. However, Shree Balaji Group made the entire process seamless. Their team provided valuable insights and helped me make an informed decision. Today, I'm proud to say that my investment in Shyam Enclave - I has exceeded my expectations.",
    name: "Mr. Devendra Singh",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "My experience with Shree Balaji Group has been exceptional. From the moment I contacted them, I was impressed by their professionalism and dedication. Thanks to their guidance, I found the perfect plot for my future home. I highly recommend Shree Balaji Group to anyone looking for quality real estate solutions.",
    name: "Mr. Suraj Kumar",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Scan Me",
    description:
      "Scan the QR code and connect with us on different platforms and share you experience with others .",
    tags: [
      
    ],
    image: carrent,
    source_code_link: "https://beacons.ai/shreebalajigroup",
  },
  {
    name: "Our Location",
    description:
      "Visit our site and see the location first hand and get the idea of your home on the given location.",
    tags: [
     
    ],
    image: jobit,
    source_code_link: "https://online.publuu.com/500060/1122286",
  },
  {
    name: "Book a Consultation",
    description:
      "Book a free consultation and know more about our site and future plans .",
    tags: [
     
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Buy/Invest",
    description:
      "Buy a house in your dream location or invest for a secure future ahead for your family and yourself.",
    tags: [
      
    ],
    image: home_invest,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
