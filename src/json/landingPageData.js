/* eslint-disable import/extensions */

// Services Img Imports
import Web from "../assets/images/Services/Web.png";
import Mobile from "../assets/images/Services/Mobile.png";
import UIUX from "../assets/images/Services/Design.png";

// Portfolio Img Imports
import Recruiting from "../assets/images/Portfolio/Recruiting.png";
import Stream from "../assets/images/Portfolio/Stream.png";
import Freelance from "../assets/images/Portfolio/Freelance.png";
import Aura from "../assets/images/Portfolio/Aura.png";
import Surtido from "../assets/images/Portfolio/Surtido.png";
import ManagementApp from "../assets/images/Portfolio/ManagementApp.png";

// Advantages
import Communicative from "../assets/images/Advantages/Communicative.png";
import Collaborative from "../assets/images/Advantages/Collaborative.png";
import Management from "../assets/images/Advantages/Management.png";
import Favorite from "../assets/images/Advantages/Favorite.png";

// Testimonials
import Sasha from "../assets/images/Testimonials/Sasha.jpg";
import Reiner from "../assets/images/Testimonials/Reiner.jpg";
import Kruger from "../assets/images/Testimonials/Kruger.jpg";

export const Services = [
  {
    title: "Web Development",
    imageUrl: Web,
    animation: "left",
  },
  {
    title: "Mobile Development",
    imageUrl: Mobile,
    animation: "up",
  },
  {
    title: "UI/UX Design",
    imageUrl: UIUX,
    animation: "right",
  },
];

export const Portfolios = [
  {
    id: "portfolio-recruiting-app-01",
    title: "Recruiting App",
    imageUrl: Recruiting,
    type: "Mobile Apps",
    responsibility: ["Mobile Development", "UI/UX Design"],
    description:
      "This concept demonstrates how we can build a fully functional recruiting application for HR teams and job seekers. The design focuses on seamless navigation, smart job matching algorithms, and an intuitive user interface. A solution like this enables companies to streamline hiring processes, manage candidates efficiently, and improve the overall recruitment experience.",
    credit: "https://dribbble.com/shots/15164950-Recruiting-app",
  },
  {
    id: "portfolio-stream-app-02",
    title: "Stream+",
    imageUrl: Stream,
    type: "Mobile Apps",
    responsibility: ["Mobile Development", "UI/UX Design"],
    description:
      "Stream+ is a modern streaming platform concept designed to provide smooth content delivery and an engaging viewing experience. It showcases our capability to develop mobile apps that handle multimedia content, personalized recommendations, and subscription-based features. We can create streaming platforms that scale for thousands of users while maintaining high performance.",
    credit: "https://dribbble.com/shots/15276430-Stream",
  },
  {
    id: "portfolio-freelance-app-03",
    title: "Freelance App",
    imageUrl: Freelance,
    type: "Mobile Apps",
    responsibility: ["Mobile Development", "UI/UX Design"],
    description:
      "A freelance marketplace application concept that illustrates how we can build platforms to connect freelancers and clients. This type of app requires secure payment integration, advanced search and filtering, user profiles, and rating systems. Our expertise lies in delivering feature-rich applications that create trust and efficiency in digital marketplaces.",
    credit: "https://dribbble.com/shots/15223131-Freelance-Mobile-App-Concept",
  },
  {
    id: "portfolio-aura-website-04",
    title: "Aura Website",
    imageUrl: Aura,
    type: "Website",
    responsibility: ["Web Development", "UI/UX Design"],
    description:
      "Aura is a clean and visually appealing website concept that reflects our ability to design and build impactful brand websites. With strong attention to typography, layout, and responsive design, a solution like this helps businesses strengthen their digital presence and engage their audience effectively across devices.",
    credit: "https://dribbble.com/shots/15176338-Aura-Website-Main-Page",
  },
  {
    id: "portfolio-surtido-rico-05",
    title: "Surtido Rico",
    imageUrl: Surtido,
    type: "Website",
    responsibility: ["Web Development", "UI/UX Design"],
    description:
      "This e-commerce website concept highlights how we can build online retail solutions that combine functionality with an enjoyable shopping experience. From product catalogs and shopping carts to secure checkout and responsive layouts, we create e-commerce platforms that are optimized for conversions and scalability.",
    credit: "https://dribbble.com/shots/15173118-Surtido-Rico",
  },
  {
    id: "portfolio-courses-management-06",
    title: "Courses Management",
    imageUrl: ManagementApp,
    type: "Website",
    responsibility: ["Web Development", "UI/UX Design"],
    description:
      "An education-focused platform concept that demonstrates our capability to develop robust e-learning solutions. This type of application can include features such as course creation, progress tracking, student dashboards, and integrations with video conferencing tools. We specialize in creating digital learning environments that are engaging, interactive, and scalable for institutions or businesses.",
    credit:
      "https://dribbble.com/shots/15197890-Courses-Management-and-Promoting-Web-App",
  },
];

export const Advantages = [
  [
    {
      title: "Communicative",
      description:
        "We communicate our project ideas and progress to make it clear.",
      imageUrl: Communicative,
    },
    {
      title: "Management",
      description:
        "We manage our project properly to make our project done well.",
      imageUrl: Management,
    },
  ],
  [
    {
      title: "Collaborative​",
      description:
        "Our team are very collaborative to make our project done well.",
      imageUrl: Collaborative,
    },
    {
      title: "Favorite",
      description: "We've did so many project and all of our client love it.",
      imageUrl: Favorite,
    },
  ],
];
export const Testimonials = [
  {
    id: 1,
    name: "Sasha Rose",
    company: "Owner, Surveyor Corps",
    testimoni:
      "Thanks for Racxstudio, you guys are the best! Keep up the great work!",
    imageUrl: Sasha,
  },
  {
    id: 2,
    name: "Kruger Khan",
    company: "Director, Shultan Oil",
    testimoni:
      "I just wanted to let you know that it’s been great working with Racxstudio.",
    imageUrl: Kruger,
  },
  {
    id: 3,
    name: "Reiner John",
    company: "CEO, Marley CO",
    testimoni: "Racxstudio is so great. Thank you so much for a job well done.",
    imageUrl: Reiner,
  },
];
