import { useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import Starfield from "./page-component/Starfield";
import Projects from "./Projects";
import Leadership from "./Leadership";

//images
import instagram from '../images/instagram.webp';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import devpost from '../images/devpost.png';

const Home = () => {
  const navigate = useNavigate();
  // const projectsRef = useRef();

  const onProjectsTextClick = useEffect(() => {
    // const {currentProject} = projectsRef;
    // if (currentProject != null) {
    //   currentProject.scrollIntoView({behavior: "smooth"});
    // }
  },[]);

  const onLeadershipTextClick = useCallback(() => {
    // navigate("/leadership");
    window.scrollTo(0, 1750);
  }, [navigate]);

  const onInstagramClick = useCallback(() => {
    window.open("https://www.instagram.com/sooyeunleanne/")
  }, []);

  const onLinkedInClick = useCallback(() => {
    window.open("https://www.linkedin.com/in/sooyeunleanne/");
  }, []);

  const onDevpostClick = useCallback(() => {
    window.open("https://devpost.com/sooyeunleanne");
  }, []);

  const onGithubClick = useCallback(() => {
    window.open("https://github.com/sooyeunleanne");
  }, []);

  //animated coloring of background
  // const homeDivRef = useRef(null);
  // useEffect(() => {
  //   const handleMouseMove = (e) => {
  //     const x = e.offsetX;
  //     const y = e.offsetY;
  //     homeDivRef.current.style.backgroundColor = `rgb(0, 0, ${Math.round(x/50)})`;
  //   };

  //   const homeDiv = homeDivRef.current;
  //   homeDiv.addEventListener('mousemove', handleMouseMove);

  //   return () => {
  //     homeDiv.removeEventListener('mousemove', handleMouseMove);
  //   };
  // }, []); 

  return (
    <div className={styles.home} id="Home">
      <Starfield />
      <div className={styles.header} id="Header">
        <div className={styles.router}>Home</div>
        <div className={styles.router} onClick={onProjectsTextClick}>
          Projects
        </div>
        <div className={styles.router} onClick={onLeadershipTextClick}>
          Leadership
        </div>
      </div>
      <div>
        <b className={styles.name}>Leanne Kim</b>
        <div className={styles.pronoun}>(She/Her)</div>
        <div className={styles.description}>
          <span>Welcome! I am a </span>
          <b>Systems Design Engineering</b>
          <span> (Class of 28') student at University of Waterloo.</span>
        </div>

        <div className={styles.content}>
        <b>Interests: </b>
          <span>Full-stack development (front-end + back-end), software development, project management, machine learning</span>
          <br/>
          <b>Hobbies: </b>
          <span>Reading, stargazing, dancing, piano, web development</span>
        </div>

        <div className={styles.buttonContainer}>
          <img src={instagram} className={styles.linkButton} onClick={onInstagramClick} />
          <img src={linkedin} className={styles.linkButton} onClick={onLinkedInClick} />
          <img src={github} className={styles.linkButton} onClick={onGithubClick}/>
          <img src={devpost} className={styles.linkButton} onClick={onDevpostClick}/>
        </div>
      </div>

      <Projects ref={projectsRef}/>
      <Leadership id="experiences"/>

      <div className={styles.contacts}>
          <p>
            <div className={styles.bottomLine}/>
            <b>Email</b>: sooyeunleanne@gmail.com
            <br/>
            <b>Phone</b>: +1 519-722-3291
          </p>
        </div>
    </div>
    
  );
};

export default Home;
