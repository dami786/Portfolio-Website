import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    title: "Babul Quran Academy",
    category: "Online Quran Academy Website",
    tools: "Course pages, responsive UI, student-focused experience",
    image: "/babulquran.png",
  },
  {
    title: "ByForce",
    category: "Ecommerce Website",
    tools: "Product-focused landing, modern UI, conversion-first layout",
    image: "/byforce.png",
  },
  {
    title: "Eats Desk",
    category: "Restaurant Platform",
    tools: "Restaurant operations design, pricing flow, feature sections",
    image: "/eatdesk.png",
  },
  {
    title: "Scentsation",
    category: "Ecommerce Website",
    tools: "Brand storefront design, product display, clean navigation",
    image: "/Scentsation.png",
  },
  {
    title: "Ticketly",
    category: "Online Event Booking Platform",
    tools: "Event discovery UI, booking flow, category exploration",
    image: "/ticketly.png",
  },
  {
    title: "Zuha Hosts",
    category: "Property and Business Management Platform",
    tools: "Property workflow management, dashboard UX, service flow",
    image: "/Zuhahosts.png",
  },
];

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={project.title}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
