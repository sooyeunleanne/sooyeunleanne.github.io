import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

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

  const onResumeClick = useCallback(() => {
    window.open(
      "https://drive.google.com/drive/folders/1Z4RtdjrIXqIc6ge516YFRHC2PeBl6dq7"
    );
  }, []);

  return (
    <div className={styles.home}>
      <div className={styles.header}>
        <div className={styles.headerBackground} />
        <div className={styles.home1}>Home</div>
        <div className={styles.projects} onClick={onProjectsTextClick}>
          Projects
        </div>
        <div className={styles.leadership} onClick={onLeadershipTextClick}>
          Leadership
        </div>
      </div>
      <b className={styles.name}>Leanne Kim</b>
      <div className={styles.description}>
        <span>{`A prospective `}</span>
        <b>Systems Design Engineering</b>
        <span> Student at University of Waterloo.</span>
      </div>
      <div className={styles.pronoun}>(She/Her)</div>
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
  );
};

export default Home;
