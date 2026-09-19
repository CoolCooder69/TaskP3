import "./App.css";
import ArticleCard from "./components/articleCard";
import Btn1 from "./components/Btn1";
import Btn2 from "./components/Btn2";
import GalleryCard from "./components/galleryCard";
import Heading1 from "./components/heading1";
import Logo from "./components/logo";
import ProfileCard from "./components/profileCard";
import CustomLink from "./components/link";
import CustomCursor from "./components/cursor";
import { Mail, Globe, MessageCircle, Phone, Heart } from "lucide-react";
import { Routes, Route } from "react-router-dom";
import NewsLetter from "./newsletter.jsx";
import { navItems } from "./navItems";

// Database Calls
const articles = [
  {
    Name: "Learn React",
    Description: "Learn React in 30 days",
    Example: "React Hooks",
    AuthorName: "Ravneet",
    ArticleImg: "https://picsum.photos/200/300?random=4",
    Stars: "4.5",
  },
  {
    Name: "JavaScript Basics",
    Description: "Learn JavaScript from scratch",
    Example: "Functions and Arrays",
    AuthorName: "Reuel",
    ArticleImg: "https://picsum.photos/200/300?random=5",
    Stars: "3.7",
  },
  {
    Name: "Node.js Guide",
    Description: "Learn backend development with Node.js",
    Example: "Express API",
    AuthorName: "Tejas",
    ArticleImg: "https://picsum.photos/200/300?random=6",
    Stars: "4.6",
  },
];

const tutorials = [
  {
    Name: "Master CSS Flexbox",
    Description: "A step-by-step guide to building responsive layouts",
    Example: "Navbar and Card Layout",
    AuthorName: "Navpreet",
    ArticleImg: "https://picsum.photos/200/300?random=7",
    Stars: "4.8",
  },
  {
    Name: "Build Your First REST API",
    Description: "Learn how to create APIs using Node.js and Express",
    Example: "GET, POST and DELETE Requests",
    AuthorName: "Gaurav",
    ArticleImg: "https://picsum.photos/200/300?random=8",
    Stars: "4.7",
  },
  {
    Name: "Git & GitHub for Beginners",
    Description: "Learn version control from your first commit to GitHub",
    Example: "Commit, Branch and Pull Request",
    AuthorName: "Harnoor",
    ArticleImg: "https://picsum.photos/200/300?random=9",
    Stars: "4.9",
  },
];

const galleryImages = [
  "https://picsum.photos/200/300?random=1",
  "https://picsum.photos/200/300?random=2",
  "https://picsum.photos/200/300?random=3",
];

const exploreLinks = [
  { title: "Home", url: "/" },
  { title: "Gallery", url: "/gallery" },
  { title: "Articles", url: "/articles" },
  { title: "Tutorials", url: "/tutorials" },
];

const supportLinks = [
  { title: "FAQ", url: "/faq" },
  { title: "Contact Us", url: "/contact" },
  { title: "Privacy Policy", url: "/privacy" },
  { title: "Terms of Service", url: "/terms" },
];

const socialLinks = [
  { name: "Email", url: "mailto:#", icon: Mail },
  { name: "Website", url: "/", icon: Globe },
  { name: "Contact", url: "#", icon: MessageCircle },
  { name: "Phone", url: "tel:+911234567890", icon: Phone },
];

// Home page
function Home() {
  return (
    <>
      {/* Navbar */}
      <header className="min-h-[25vh] w-full bg-white text-lg pt-16 flex justify-center">
        <div className="border h-full gap-20 px-5 py-5 flex justify-between">
          <Logo name="Cool Coody" />
          {navItems.map((item) => (
            <Btn1 key={item.title} name={item.title} link={item.url} />
          ))}
        </div>
      </header>

      {/* Profile */}
      <section className="my-20">
        <ProfileCard />
      </section>

      {/* Gallery */}
      <Heading1 title="Gallery" />
      <div className="w-full h-96 grid grid-cols-3 gap-4 p-4">
        {galleryImages.map((img) => (
          <GalleryCard key={img} ImgUrl={img} />
        ))}
      </div>

      {/* Featured Articles */}
      <Heading1 title="Featured Article" />
      <div className="flex px-14 py-7 justify-around items-center">
        {articles.map((article) => (
          <ArticleCard key={article.Name} {...article} />
        ))}
        <Btn2 title="See all Articles" />
      </div>

      {/* Featured Tutorials */}
      <Heading1 title="Featured Tutorials" />
      <div className="flex px-14 py-7 justify-around items-center">
        {tutorials.map((tutorial) => (
          <ArticleCard key={tutorial.Name} {...tutorial} />
        ))}
        <Btn2 title="See all Tutorials" />
      </div>

      {/* Footer */}
      <footer>
        <div className="w-full min-h-64 flex justify-between items-start pt-8 px-20 bg-gray-900 text-white border-t">
          {/* Explore */}
          <div className="flex flex-col gap-2">
            <Heading1 title="Explore" />
            {exploreLinks.map((link) => (
              <CustomLink key={link.title} url={link.url} title={link.title} />
            ))}
          </div>

          {/* Support */}
          <div className="flex flex-col gap-2">
            <Heading1 title="Support" />
            {supportLinks.map((link) => (
              <CustomLink key={link.title} url={link.url} title={link.title} />
            ))}
          </div>

          {/* Stay Connected */}
          <div className="flex flex-col gap-3">
            <Heading1 title="Stay Connected" />

            <p className="text-gray-400 max-w-xs">
              Connect with us and stay updated with the latest articles,
              tutorials and projects.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    className="p-2 rounded-full bg-gray-800 hover:bg-white hover:text-black transition duration-200"
                    aria-label={link.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="w-full px-20 py-4 bg-gray-950 text-gray-500 flex justify-between text-sm">
          <span className="w-full flex gap-1.5 justify-center items-center">
            Made with <Heart size={18} /> by Ravneet.
          </span>
        </div>
      </footer>
    </>
  );
}

function App() {
  return (
    <>
      {/* Custom Cursor (shows on every page) */}
      <CustomCursor />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newsletter" element={<NewsLetter />} />
      </Routes>
    </>
  );
}

export default App;