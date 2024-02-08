import { useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import Starfield from "./page-component/Starfield";

const Home = () => {
  const navigate = useNavigate();

  const onProjectsTextClick = useCallback(() => {
    navigate("/projects");
  }, [navigate]);

  const onLeadershipTextClick = useCallback(() => {
    navigate("/leadership");
  }, [navigate]);

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
    <div className={styles.home}>
      <Starfield />
      <div className={styles.header}>
        <div className={styles.router}>Home</div>
        <div className={styles.router} onClick={onProjectsTextClick}>
          Projects
        </div>
        <div className={styles.router} onClick={onLeadershipTextClick}>
          Leadership
        </div>
      </div>
      <div style={{width: "100%"}}>
        <b className={styles.name}>Leanne Kim</b>
        <div className={styles.pronoun}>(She/Her)</div>
        <div className={styles.description}>
          <span>{`A prospective `}</span>
          <b>Systems Design Engineering</b>
          <span> Student at University of Waterloo.</span>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.linkButton} onClick={onLinkedInClick}>
            LinkedIn
          </button>
          <button className={styles.linkButton} onClick={onGithubClick}>
            Github
          </button>
          <button className={styles.linkButton} onClick={onDevpostClick}>
            Devpost
          </button>
          {/* <button className={styles.linkButton} onClick={onResumeClick}>
            Resume
          </button> */}
        </div>
        <div className={styles.contacts}>
          <p>
            <div className={styles.bottomLine}/>
            <br/>
            <b>Email</b>: sooyeunleanne@gmail.com
            <br/>
            <b>Phone</b>: +1 519-722-3291
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
