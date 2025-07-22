import { use, useState, useRef, useEffect } from 'react'
import About from './layouts/About.jsx'
import viteLogo from '/vite.svg'
import selfPhoto from './assets/images/download.jpg'
import './App.css'
import Card from './components/Card.jsx'
import ImageWrapper from './components/ImageWrapper.jsx'
import Title from './components/Title.jsx'
import Chip from './components/Chip.jsx'
import { faFileCode, faLaptopCode, faLocationDot, faMobileScreenButton, faGlobe, faPaintBrush, faObjectGroup, faFilm, faGraduationCap, faSchool, faSchoolFlag, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SectionTitle from './components/SectionTitle.jsx'
import HeaderTitle from './components/HeaderTitle.jsx'
import LabelTitle from './components/LabelTitle.jsx'
import Carousel from './components/Carousel.jsx'
import AnimatedGradientBackground from './components/AnimatedGradientBackground.jsx';
import {  faCss3, faFacebook, faFigma, faFlutter, faGithub, faHtml5, faJava, faJs, faLaravel, faLinkedin, faPhp, faPython, faReact, faVuejs } from '@fortawesome/free-brands-svg-icons'
import Icon from './components/Icon.jsx'
import Meter from './components/Meter.jsx'
import Background from './layouts/Background.jsx'
import Projects from './layouts/Projects.jsx'
import ProjectContent from './layouts/ProjectContent.jsx'

function App() {
  const [isExpanded, setIsExpanded] = useState(0);
  const [isMinimized, setIsMinimized] = useState(1);
  const expanding = useRef(null);
  const cursorRef = useRef(null);
  const [expandingWidth, setExpandingWidth] = useState(0);
  const [selectedContent, setSelectedContent] = useState("about");
  const [isLoading, setIsLoading] = useState(0);
  const [cardClickedId, setCardClickedId] = useState("");

  const handleOverlayClick = (e) => {
    e.target.style.pointerEvents = 'none';
    const elementBelow = document.elementFromPoint(e.clientX, e.clientY);

    e.target.style.pointerEvents = 'auto';
    if (elementBelow && elementBelow.closest('.clickable-content')) {
      elementBelow.click();
    }
  };

  useEffect(() => {
    // Loading Devicons
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css";
    document.head.appendChild(link);

    // Expanding width observer for hover overlay
    if(!expanding.current) return;

    const observer = new ResizeObserver(entries => {
      for (let entry of entries) {
        const width = entry.contentRect.width;
        setExpandingWidth(width);
      }
    });

    observer.observe(expanding.current);

    return () => observer.disconnect();
  }, []);

  const loadExpanded = () => {
    setIsExpanded(true);
    setTimeout(() => setIsMinimized(false), 250);
  }

  const loadMinimized = () => {
    setIsMinimized(true);
    setTimeout(() => setIsExpanded(false), 250);
  }

  const changeSection = (text) => {
    if (text != selectedContent){
      setIsLoading(true);
      setTimeout(() => {
        setSelectedContent(text);
        setIsLoading(false);
      }, 250);
    }
  }

  const expandCard = (id) => {
    setCardClickedId(id);
    changeSection("proj_content");
  }

  const [expandedImageIndex, setExpandedImageIndex] = useState(null);

  const expandView = (index) => {
      setExpandedImageIndex(prev => (prev === index ? null : index));
  }

  return (
    <>
      <AnimatedGradientBackground>
        <div className='relative'>
          <div className="max-w-3/4 h-screen m-auto flex flex-row justify-center items-center transition-all ease-in-out duration-100 relative z-20"
            style={{
              pointerEvents: 'auto'
            }}
          >
            { selectedContent == "about" && <About selfPhoto={selfPhoto} isLoading={isLoading}/>}
            { selectedContent == "bg" && <Background isLoading={isLoading}/>}
            { selectedContent == "proj" && <Projects isLoading={isLoading} expandCard={expandCard}/>}
            { selectedContent == "proj_content" && <ProjectContent isLoading={isLoading} content={cardClickedId} expandedIndex={expandedImageIndex} expandView={expandView}/>}
            <div className={`gap-2 h-full h-shrink-0 flex justify-start transition-all ease-in-out duration-300 relative ${isExpanded ? 'w-[240px]' : 'w-16'} clickable-content`} ref={expanding}
              
            >
              { 
                isMinimized && <div className={`h-full w-full pl-8 m-auto absolute inset-0 flex flex-col justify-center gap-2 transition-all ease-in-out duration-250 opacity-0 ${isExpanded ? 'opacity-0' : 'opacity-100'}`}>
                  <hr className={`border-2 rounded-full w-0 transition-all ease-in-out duration-100 ${selectedContent == "about" ? 'h-[80px]' : 'h-[32px]'}`}/>
                  <hr className={`border-2 rounded-full w-0 transition-all ease-in-out duration-100 ${selectedContent == "bg" ? 'h-[80px]' : 'h-[32px]'}`}/>
                  <hr className={`border-2 rounded-full w-0 transition-all ease-in-out duration-100 ${selectedContent == "proj" ? 'h-[80px]' : 'h-[32px]'}`}/>
                </div>
              }
              {/* Hover Content */}
              { 
                isExpanded && <div className={`h-fit w-full pl-8 m-auto absolute inset-0 flex flex-col justify-center gap-2 transition-all ease-in-out duration-250 opacity-0 ${isMinimized ? 'opacity-0' : 'opacity-100'}`}>
                  <SectionTitle text="About Me" condition="about" selectedText={selectedContent} onClick={changeSection}/>
                  <SectionTitle text="Background" condition="bg" selectedText={selectedContent} onClick={changeSection}/>
                  <SectionTitle text="Projects" condition="proj" selectedText={selectedContent} onClick={changeSection}/>
                </div>
              }
            </div>
          </div>
          {/*Hover overlay*/}
          <div className='absolute inset-y-0 right-0 z-30'
            style={{
              width: `calc(12.5% + ${expandingWidth}px)`,
            }}
            onClick={handleOverlayClick}
            onMouseEnter={expandedImageIndex == null ? loadExpanded : undefined}
            onMouseLeave={expandedImageIndex == null ? loadMinimized : undefined}
          />
        </div>
      </AnimatedGradientBackground>
    </>
  )
}

export default App
