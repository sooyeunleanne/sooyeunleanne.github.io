import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Leadership.module.css";
import PopupLeadership from './components/PopupLeadership.js';
import './components/Popup.css';
import GridItem from './components/GridItem';

import keyclub from '../images/keyclub.png';
import mathletes from '../images/mathletes.png';
import turtlehacks from '../images/turtlehacks.png';
import lhss from '../images/lhss.png';
import akcse from '../images/akcse.png';
import ksa from '../images/ksa.png';

const Leadership = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onProjectsTextClick = useCallback(() => {
    navigate("/projects");
  }, [navigate]);

  const onLeadershipTextClick = useCallback(() => {
    navigate("/leadership");
  }, [navigate]);

  const [popupKeyClub, openKeyClub] = useState(false);
  const [popupKCI, openKCI] = useState(false);
  const [popupMathletes, openMathletes] = useState(false);
  const [popupStudentLeadership, openStudentLeadership] = useState(false);
  const [popupTurtleHacks, openTurtleHacks] = useState(false);
  const [popupAKCSE, openAKCSE] = useState(false);
  const [popupKSA, openKSA] = useState(false);

  return (
    <div className={styles.leadership}>
      <div className={styles.header}>
        <div className={styles.headerBackground} />
        <div className={styles.home} onClick={onHomeTextClick}>
          Home
        </div>
        <div className={styles.projects} onClick={onProjectsTextClick}>
          Projects
          </div>
        <div className={styles.leadership1} onClick={onLeadershipTextClick}>
          Leadership
        </div>
        
      <div className={styles.text}>
        <b className={styles.heading1}>Leadership</b>
        <br/>
        <b className={styles.heading2}>Experiences</b>

        <div className = {styles.gridContainer} style = {{boxShadow: "10px 10px grey"}}>
          <GridItem 
          image = {keyclub}
          name="LHSS Key Club"
          role="President" 
          startYear = "Jun 2020"
          endYear = "Jun 2023"
          trigger={popupKeyClub} 
          setTrigger={openKeyClub} ></GridItem>

          <GridItem 
          image= {mathletes}
          name="LHSS Mathletes"
          role="Executive" 
          startYear = "Jun 2021"
          endYear = "Jun 2023"
          trigger={popupMathletes} 
          setTrigger={openMathletes}></GridItem>
          
          <GridItem 
          image= {keyclub}
          name="Key Club International"
          role="Global Relations Committee" 
          startYear = "Dec 2021"
          endYear = "Jun 2022"
          trigger={popupKCI} 
          setTrigger={openKCI}></GridItem> 

          <GridItem 
          image= {lhss}
          name="LHSS"
          role="Student Leadership" 
          startYear = "Sep 2021"
          endYear = "Jun 2023" 
          trigger={popupStudentLeadership} 
          setTrigger={openStudentLeadership}></GridItem>

          <GridItem 
          image= {turtlehacks}
          name="TurtleHacks"
          role="Logistics Executive" 
          startYear = "Jun 2022"
          endYear = "May 2023" 
          children="TurtleHacks: Logistics Executive" 
          trigger={popupTurtleHacks} 
          setTrigger={openTurtleHacks}></GridItem>
          
          <GridItem 
          image= {akcse}
          name="AKCSE UW"
          role="Marketing Specialist" 
          startYear = "Sep 2023"
          endYear = "" 
          trigger={popupAKCSE} setTrigger={openAKCSE}></GridItem> 

          <GridItem 
          image = {ksa}
          name = "UW KSA"
          role = "Public Relations Specialist" 
          startYear = "Sep 2023"
          endYear = "" 
          trigger={popupKSA}
          setTrigger={openKSA}></GridItem>
        </div>
        
        <PopupLeadership 
        trigger={popupKeyClub} 
        setTrigger={openKeyClub}
        image = {keyclub}
        name="LHSS Key Club"
        role="President" 
        startYear = "Jun 2020"
        endYear = "Jun 2023"       
        description= {["Led 331 students to organize leadership workshops, divisional meetups, cultural potlucks, and volunteer opportunities.", 
        "Maintained club engagement during the pandemic by introducing online volunteer/leadership opportunities in weekly meetings.",
         "Coordinated an online communication skills workshop with Mike Farwell (a local talkshow host) and a club-wide meetup with Key Club alumni for post-secondary guidance."]}></PopupLeadership>

        <PopupLeadership 
        trigger={popupKCI} 
        setTrigger={openKCI}
        image = {keyclub}
        name="Key Club International"
        role="Global Relations Committee" 
        startYear = "Dec 2021"
        endYear = "Jun 2022"
        description = {["Planned a Key Club Pledge Video project, a video in which club members from different countries do the Key Club pledge in their own language in front of their national flags.", 
        "Pursued diversity/inclusion within the worldwide Key Club community.", 
        "Worked as an Eastern Canada Representative"]}
        ></PopupLeadership>

        <PopupLeadership 
        trigger={popupMathletes} 
        setTrigger={openMathletes}
        image = {mathletes}
        name="LHSS Mathletes"
        role="Executive" 
        startYear = "Jun 2021"
        endYear = "Jun 2023"
        description = {["Taught mathematical concepts (probabilities, sequences and series, etc.) from math contests to students from grade 9 to 12.", 
        "Organized Ontario Mathematics Competition 2023 (https://sites.google.com/view/ontariocmc/home) for 224 students from 10 Ontario schools.", 
        "Worked as a Junior Executive in 2021-2022 and a Senior Executive in 2022-2023"]}></PopupLeadership>

        <PopupLeadership 
        trigger={popupStudentLeadership} 
        setTrigger={openStudentLeadership}
        image = {lhss}
        name="Laurel Heights Secondary School"
        role="Student Leadership" 
        startYear = "Sep 2021"
        endYear = "Jun 2023"
        description = {["Organized Horizons Leadership Conference (March 22nd, 2023) for 200+ student leaders from different schools.", 
        "Coordinated the Grad Week (backyard bash, grad breakfast, time capsule letters, and prom) for Class of 2023. Approximately 90% of the graduating class (400+ students) participated in this project.", 
        "Received 90%+ positive feedback from the participants of both the Horizons Leadership Conference and Grad Week"]}
        ></PopupLeadership>

        <PopupLeadership 
        trigger={popupTurtleHacks} 
        setTrigger={openTurtleHacks}
        image = {turtlehacks}
        name = "TurtleHacks"
        role = "Logistics Executive"
        startYear = "Jun 2022"
        endYear = "May 2023"
        description = {["Helped organize the high-school led hybrid hackathon with 342 participants in the Logistics Team.", 
        "Facilitated communication with sponsors and workshop leaders, planned food and venue, organized activities/events for hackers.", 
        "Ensured that all events were happening in a timely manner with adequate resources."]}></PopupLeadership>

        <PopupLeadership 
        trigger={popupAKCSE} 
        setTrigger={openAKCSE}
        image = {akcse}
        name = "Association of Korean Scientists and Engineers UW"
        role = "Marketing Specialist"
        startYear = "Sep 2023"
        endYear = ""
        description = {["Advertised club events (Midterm Emergency Kit give-outs, Resume Critique, etc.) by creating instagram posters, writing post captions, and planning marketing strategies.", 
        "Resulted in a rapid sold-out of 40 midterm emergency kits within 48 hours after the instagram post.", 
        "Represented the Faculty of Engineering at an open house presentation to 200+ parents and high school students."]}
        ></PopupLeadership>

        <PopupLeadership 
        trigger={popupKSA} 
        setTrigger={openKSA}
        image = {ksa}
        name = "Korean Student Association UW"
        role = "Public Relations Specialist"
        startYear = "Sep 2023"
        endYear = ""
        description = {["Wrote formal emails to potential sponsors/partners of the club for sponsorship/partnership.", 
        "Brainstormed potential partnership events (e.g. school vs. school tournaments) in weekly team meetings.", 
        "Developed/produced an official sponsorship package to reach out to sponsors."]}
        ></PopupLeadership>
      </div>
      </div>
    </div>
  );
};

export default Leadership;
