import { lazy, PropsWithChildren, Suspense, useEffect, useState } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import setSplitText from "./utils/splitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TechStack = lazy(() => import("./TechStack"));

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
      ScrollTrigger.refresh();
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    
    // Refresh GSAP after a delay to ensure all dynamically loaded components have their heights calculated
    const timeoutId = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1500);

    return () => {
      window.removeEventListener("resize", resizeHandler);
      clearTimeout(timeoutId);
    };
  }, [isDesktopView]);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />
      {isDesktopView && children}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing>{!isDesktopView && children}</Landing>
            <About />
            <WhatIDo />
            <Career />
            <Work />
            {isDesktopView && (
              <Suspense 
                fallback={
                  <div className="techstack" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h2>Loading...</h2>
                  </div>
                }
              >
                <TechStack />
              </Suspense>
            )}
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
