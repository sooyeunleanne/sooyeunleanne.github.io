import { useRef } from "react";
import styles from "./Home.module.css";
import Starfield from "./page-component/Starfield";
import Profile from './Profile';
import Projects from "./Projects";
import Experiences from "./Experiences";

const Home = () => {

  //navigations
  const profileRef = useRef(null);
  const projectsRef = useRef(null);
  const experiencesRef = useRef(null);

  const onProfileClick = (e) => {
    e.preventDefault();
    profileRef.current?.scrollIntoView({behaviour: "smooth"});
  };

  const onProjectsClick = (e) => {
    e.preventDefault();
    projectsRef.current?.scrollIntoView({behaviour: "smooth"});
  };

  const onExperiencesClick = (e) => {
    e.preventDefault();
    experiencesRef.current?.scrollIntoView({behavior: "smooth"});
  };

  return (
    <div className={styles.home} id="Home">

      <meta http-equiv='cache-control' content='no-cache'/>
      <meta http-equiv='expires' content='0'/>
      <meta http-equiv='pragma' content='no-cache'/>

      <Starfield />

      <div ref={profileRef}>
        <Profile />
      </div>
      
      <div ref={projectsRef}>
        <Projects/>
      </div>
      
      <div ref={experiencesRef}>
        <Experiences/>
      </div>
      
      {/* <Awards /> */}

      
      <div className={styles.header} id="Header">
        <div className={styles.router} onClick={onProfileClick}>Profile</div>
        <div className={styles.router} onClick={onProjectsClick}>
          Projects
        </div>
        <div className={styles.router} onClick={onExperiencesClick}>
          Experiences
        </div>
      </div>

      <div className={styles.contacts}>
          <p>
            <div className={styles.bottomLine}/>
            Built by <b>Leanne Kim</b>
            <br/>
            <br/>
            <b>Email</b>: sooyeunleanne@gmail.com
            <br/>
            <b>Phone</b>: +1 519-722-3291
          </p>
        </div>
    </div>
    
  );
};

export default Home;
