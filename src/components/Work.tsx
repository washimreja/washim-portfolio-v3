import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const projects = [
  {
    number: "01",
    name: "Problem Solved",
    category: "YouTube Channel",
    label: "What it does",
    description: "Tech troubleshooting content that helps users solve real problems.",
  },
  {
    number: "02",
    name: "Portfolio Website",
    category: "React + Vite",
    label: "Built with",
    description: "A personal portfolio with a modern UI, responsive motion, and clean sections.",
  },
  {
    number: "03",
    name: "GadgetGhor Blog",
    category: "Tech Blog",
    label: "Focus",
    description: "Practical gadget guides and useful tech content designed for everyday readers.",
  },
];

const Work = () => {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1025px)", () => {
      const workSection = document.querySelector(".work-section") as HTMLElement;
      const workContainer = document.querySelector(
        ".work-container"
      ) as HTMLElement;
      const workFlex = document.querySelector(".work-flex") as HTMLElement;
      if (!workSection || !workContainer || !workFlex) return;

      const getTranslateX = () =>
        Math.max(0, workFlex.scrollWidth - workContainer.clientWidth);

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: workSection,
          start: "top top",
          end: () => `+=${getTranslateX()}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          id: "work",
        },
      });

      timeline.to(workFlex, {
        x: () => -getTranslateX(),
        ease: "none",
      });

      return () => {
        timeline.kill();
        ScrollTrigger.getById("work")?.kill();
        gsap.set(workFlex, { clearProps: "transform" });
      };
    });

    mm.add("(max-width: 1024px)", () => {
      ScrollTrigger.getById("work")?.kill();
      gsap.set(".work-flex", { clearProps: "transform" });
    });

    return () => {
      mm.revert();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project) => (
            <div className="work-box" key={project.number}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.number}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>{project.label}</h4>
                <p>{project.description}</p>
              </div>
              <WorkImage image="/images/placeholder.webp" alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
