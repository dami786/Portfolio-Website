import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>FULL STACK DEVELOPMENT</h3>
              <h4>What I do</h4>
              <p>
                I build complete web applications from frontend to backend. I
                create responsive user interfaces, develop secure APIs, connect
                databases, and deploy production-ready solutions with clean
                architecture and scalable code.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">JavaScript</div>
                <div className="what-tags">TypeScript</div>
                <div className="what-tags">React</div>
                <div className="what-tags">Next.js</div>
                <div className="what-tags">Node.js</div>
                <div className="what-tags">Express.js</div>
                <div className="what-tags">MongoDB</div>
                <div className="what-tags">MySQL</div>
                <div className="what-tags">REST API</div>
                <div className="what-tags">Firebase</div>
                <div className="what-tags">Git</div>
                <div className="what-tags">GitHub</div>
                <div className="what-tags">Vite</div>
                <div className="what-tags">CSS</div>
                <div className="what-tags">Tailwind CSS</div>
                <div className="what-tags">Bootstrap</div>
                <div className="what-tags">Postman</div>
              </div>
              <h5>AI skills</h5>
              <div className="what-content-flex">
                <div className="what-tags">Full Stack Development</div>
                <div className="what-tags">APP Development</div>
                <div className="what-tags">AI Agents</div>
                <div className="what-tags">Freelauncin</div>
                <div className="what-tags">3js</div>
                <div className="what-tags">Ecommerce</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>WHAT I BUILD</h3>
              <h4>Projects and workflow</h4>
              <p>
                I build portfolio websites, business websites, admin dashboards,
                landing pages, and full-stack web apps. In Cursor, I handle the
                complete workflow: planning, UI development, backend integration,
                debugging, optimization, and deployment.
              </p>
              <h5>Core work areas</h5>
              <div className="what-content-flex">
                <div className="what-tags">Frontend Development</div>
                <div className="what-tags">Backend Development</div>
                <div className="what-tags">API Integration</div>
                <div className="what-tags">Database Design</div>
                <div className="what-tags">Authentication</div>
                <div className="what-tags">Performance Optimization</div>
                <div className="what-tags">Bug Fixing</div>
                <div className="what-tags">Deployment</div>
                <div className="what-tags">Maintenance</div>
              </div>
              <h5>AI skills</h5>
              <div className="what-content-flex">
                <div className="what-tags">Prompt Engineering</div>
                <div className="what-tags">AI Automation</div>
                <div className="what-tags">OpenAI API</div>
                <div className="what-tags">AI Chatbots</div>
                <div className="what-tags">RAG Basics</div>
                <div className="what-tags">Workflow Integration</div>
                <div className="what-tags">Cursor AI Development</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
