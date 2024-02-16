//functional imports
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Projects.module.css";
import PopupProject from './components/PopupProject';
import './components/Popup.css';
import GridItem from './components/GridItem';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

//images
import foodieco from '../images/foodieco.png';
import foodieco1 from '../images/foodieco1.png';
import foodieco2 from '../images/foodieco2.png';
import lovethyhood from '../images/lovethyhood.png';
import healthyme from '../images/healthyme.png';
import healthyme1 from '../images/healthyme1.png';
import readbetter from '../images/readbetter.png';
import readbetter1 from '../images/readbetter1.png';
import ccc from '../images/ccc.png';
import ccc1 from '../images/ccc1.png';
import bodyindepth from '../images/bodyindepth.png';
import bodyindepth1 from '../images/bodyindepth1.png';
import bodyindepth2 from '../images/bodyindepth2.png';
import studyspace from '../images/studyspace.png';
import devpost from '../images/devpost.svg';

const Projects = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onExperiencesTextClick = useCallback(() => {
    navigate("/Experiences");
  }, [navigate]);

  const onDevpostButtonClick = useCallback(() => {
    window.open("https://devpost.com/sooyeunleanne");
  }, []);

  const [popupFoodieco, openFoodieco] = useState(false);
  const [popupLoveThyHood, openLoveThyHood] = useState(false);
  const [popupHealThyme, openHealThyme] = useState(false);
  const [popupReadBetter, openReadBetter] = useState(false);
  const [popupBodyInDepth, openBodyInDepth] = useState(false);
  const [popupStudySpace, openStudySpace] = useState(false);
  const [popupCCC, openCCC] = useState(false);

  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());

  return (
    <div className={styles.projects}>
      <div style={{width: "100%"}}>
        <h1>Projects</h1>
        <h2>Software Projects / Design Projects</h2>
        <img className={styles.devpostButton} src={devpost} onClick={onDevpostButtonClick}></img>
      </div>

      <div className = {styles.gridContainer} style = {{boxShadow: "10px 10px grey"}}>
        <GridItem 
        image = {foodieco}
        name="Application"
        role="Foodieco" 
        startYear = "2022/06"
        endYear = "Full-stack"
        trigger={popupFoodieco} setTrigger={openFoodieco} ></GridItem>

        {/* <GridItem 
        image = {lovethyhood}
        name="Website"
        role="LoveThyHood" 
        startYear = "2022/07"
        endYear = "Front-end"
        trigger={popupLoveThyHood} setTrigger={openLoveThyHood} ></GridItem> */}

        <GridItem 
        image = {healthyme}
        name="Website"
        role="HealThyme" 
        startYear = "2022/10"
        endYear = "Full-stack"
        trigger={popupHealThyme} setTrigger={openHealThyme}></GridItem>

        <GridItem 
        image = {ccc}
        name="Design Project"
        role="Community Changemaker Challenge" 
        startYear = "2022/12"
        endYear = "Winner"
        trigger={popupCCC} setTrigger={openCCC}></GridItem>
        
        <GridItem 
        image = {bodyindepth}
        name="Application"
        role="Body In Depth" 
        startYear = "2023/02"
        endYear = "Full-stack"
        trigger={popupBodyInDepth} setTrigger={openBodyInDepth}></GridItem>
        
        <GridItem
        image = {studyspace}
        name="Application"
        role="StudySpace" 
        startYear = "2023/02"
        endYear = "Full-stack"
        trigger={popupStudySpace} setTrigger={openStudySpace}></GridItem>

        <GridItem 
        image = {readbetter}
        name="Website"
        role="ReadBetter" 
        startYear = "2023/06"
        endYear = "Developer"
        trigger={popupReadBetter} setTrigger={openReadBetter}></GridItem>    
      </div>

    <PopupProject 
    image = {foodieco1}
    name="Application"
    role="Foodieco" 
    startYear = "2022/06"
    endYear = "Full-stack"
    description = {["Developed an app that provides a full view of fridge items and suggests possible replacements for certain ingredients in a 4-people team.", 
    "Built with Python, Tkinter.", 
    "Worked on front-end and back-end."]}
    githublink = "https://github.com/acrenw/FoodiEco"
    trigger={popupFoodieco} setTrigger={openFoodieco}></PopupProject>

    {/* <Popup 
    image = {lovethyhood}
    name="Website"
    role="LoveThyHood" 
    startYear = "2022/07"
    endYear = "Front-end"
    description = {["Developed an app that provides a full view of fridge items and suggests possible replacements for certain ingredients in a 4-people team.", 
    "Built with ReactJS (Javascript, HTML, CSS)", 
    "Worked on front-end."]}
    trigger={popupLoveThyHood} setTrigger={openLoveThyHood}></Popup> */}

    <PopupProject 
    image = {healthyme1}
    name="Website"
    role="HealThyme" 
    startYear = "2022/10"
    endYear = "Full-stack"
    description = {["Developed the 3 main pages of a website that allows the user to compare the number of people on the waitlist of nearby hospitals/clinics and book an appointment.", 
    "Built with ReactJS (Javascript, HTML, CSS).", 
    "Mainly worked on front-end and Google Maps API Integration."]}
    githublink = "https://github.com/acrenw/my-app"
    trigger={popupHealThyme} setTrigger={openHealThyme}></PopupProject>

    <PopupProject 
    image = {ccc1}
    name="Design Project"
    role="Community Changemaker Challenge by SHAD Canada, &Vision Inc, ECD Key Club" 
    startYear = "2022/12"
    endYear = "Winner"
    description = {["Participated in a 1-month long project design challenge in a 4-people team",
    "For students struggling to find post-secondary pathways, my team designed an event week with university program fairs, workplaces visits, and peer support.", 
    "Was awarded Best Overall Project, Most Synchronized and Organized, and Strong Pitch"]}
    trigger={popupCCC} setTrigger={openCCC}></PopupProject>
    
    <PopupProject 
    image = {readbetter1}
    name="Website"
    role="ReadBetter" 
    startYear = "2023/06"
    endYear = "Developer"
    description = {["Developed a Flask application to assist people in reading by providing artificial fixation points, using integrations of assemblyai, pypdf2, and EasyOCR.",
    "Observed a decrease in the total reading time by approximately 35% from a reading efficiency experiment.", 
    "Was a Runner-up for Best University Hacks at JAMHacks 7."]}
    githublink = "https://github.com/acrenw/JAMHacks7"
    trigger={popupReadBetter} setTrigger={openReadBetter}></PopupProject>

    <PopupProject 
    image = {bodyindepth2}
    name="Application"
    role="Body In Depth" 
    startYear = "2023/02"
    endYear = "Full-stack"
    description = {["Engineered a body composition analysis calculator that plans out a dietary plan for weight loss/gain.",
    "Built with Processing, a graphical library that uses Java as its primary language using object-oriented programming (OOP).", 
    "Worked alone as a full-stack developer."]}
    githublink = "https://github.com/sooyeunleanne/Body-In-Depth"
    trigger={popupBodyInDepth} setTrigger={openBodyInDepth}></PopupProject>

    <PopupProject 
    image = {studyspace}
    name="Application"
    role="StudySpace" 
    startYear = "2023/02"
    endYear = "Full-stack"
    description = {["Worked as a full-stack developer to develop a study assistant program",
    "Has a stopwatch that measures your total study time, music/audio features to help with concentration, and a checklist feature.", 
    "Built in Processing (a graphical library that uses Java as its primary language) using OOP in a 3-people team."]}
    trigger={popupStudySpace} setTrigger={openStudySpace}><h3>StudySpace</h3></PopupProject>
  </div>
  );
};

export default Projects;
