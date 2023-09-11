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

  const onLinkedInButtonContainerClick = useCallback(() => {
    window.open("https://www.linkedin.com/in/sooyeunleanne/");
  }, []);

  const onDevpostButtonContainerClick = useCallback(() => {
    window.open("https://devpost.com/sooyeunleanne");
  }, []);

  const onInstagramButtonContainerClick = useCallback(() => {
    window.open("https://www.instagram.com/sooyeunleanne/");
  }, []);

  const onResumeButtonContainerClick = useCallback(() => {
    window.open("https://github.com/sooyeunleanne");
  }, []);

  const onResumeButtonContainer1Click = useCallback(() => {
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
      <div className={styles.homeChild} />
      <b className={styles.leanneKim}>Leanne Kim</b>
      <div className={styles.aProspectiveSystemsContainer}>
        <span>{`A prospective `}</span>
        <b>Systems Design Engineering</b>
        <span> Student at University of Waterloo.</span>
      </div>
      <div className={styles.emailSooyeunleannegmailcom}>
        <p className={styles.emailSooyeunleannegmailcom1}>
          <b className={styles.email}>Email</b>
          <span>: sooyeunleanne@gmail.com</span>
        </p>
        <p className={styles.phone15197223291}>
          <b className={styles.email}>{`Phone: `}</b>
          <span>+1 519-722-3291</span>
        </p>
      </div>
      <div className={styles.sheher}>(She/Her)</div>
      <div className={styles.buttons}>
        <div
          className={styles.linkedinButton}
          onClick={onLinkedInButtonContainerClick}
        >
          <div className={styles.linkedinButtonChild} />
          <b className={styles.linkedin}>LinkedIn</b>
        </div>
        <div
          className={styles.devpostButton}
          onClick={onDevpostButtonContainerClick}
        >
          <div className={styles.linkedinButtonChild} />
          <b className={styles.linkedin}>Devpost</b>
        </div>
        <div
          className={styles.instagramButton}
          onClick={onInstagramButtonContainerClick}
        >
          <div className={styles.linkedinButtonChild} />
          <b className={styles.linkedin}>Instagram</b>
        </div>
        <div
          className={styles.resumeButton}
          onClick={onResumeButtonContainerClick}
        >
          <div className={styles.linkedinButtonChild} />
          <b className={styles.linkedin}>GitHub</b>
        </div>
      </div>
      <div
        className={styles.resumeButton1}
        onClick={onResumeButtonContainer1Click}
      >
        <div className={styles.linkedinButtonChild} />
        <b className={styles.linkedin}>Resume</b>
      </div>
      <div className={styles.homeItem} />
    </div>
  );
};

export default Home;
