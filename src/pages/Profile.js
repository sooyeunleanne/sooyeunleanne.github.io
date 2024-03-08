import { useCallback } from "react";
import styles from "./Home.module.css";

//images
import me from '../images/me.JPG';
import angular from '../images/angular.png';
import react from '../images/react.png';
import processing from '../images/processing.svg';
import springboot from '../images/springboot.png';
import c from '../images/C++.png';
import java from '../images/java.png';
import javascript from '../images/javascript.png';
import typescript from '../images/typescript.png';
import css from '../images/css.svg';
import html from '../images/html.svg';
import python from '../images/python.png';
import instagram from '../images/instagram.webp';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import devpost from '../images/devpost.png';

const Profile = () => {
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

    return (
        <div className={styles.home} id="Home">
          <div>
            <div className={styles.filler}></div>
            <b className={styles.name}>Leanne Kim</b>
            <div className={styles.pronoun}>(She/Her)</div>
            <div className={styles.description}>
              <span>Hello! I am a </span>
              <b>Systems Design Engineering</b>
              <span> (Class of 28') student at University of Waterloo.</span>
            </div>
    
            <div className={styles.content}>
              <b>Frameworks:</b>
              <p><img src={angular} className={styles.icon}></img> Angular, 
              <img src={react} className={styles.icon}></img> ReactJS/ReactTS,
              <img src={processing} className={styles.icon}></img> Processing, 
              <img src={springboot} className={styles.icon}></img> Springboot</p>
              <br/>
              <b>Languages:</b>
              <p><img src={c} className={styles.icon}></img> C++, 
              <img src={java} className={styles.icon}></img> Java, 
              <img src={javascript} className={styles.icon}></img> JavaScript, 
              <img src={typescript} className={styles.icon}></img> Typescript, 
              <img src={css} className={styles.icon}></img> CSS,
              <img src={html} className={styles.icon}></img> HTML,
              <img src={python} className={styles.icon}></img> Python</p>
              <br/>
              <b>Interests: </b>
              <p>Full-stack development (front-end + back-end), software development, project management, machine learning</p>
              <br/>
              <b>Hobbies: </b>
              <p>
              👩‍💻 Coding, 📚 Reading, 🍞 Baking, 🩰 Dancing, 🎹 Piano, 🎧 Listening to music, 🌎 Studying new languages</p>
            </div>
    
            <div className={styles.buttonContainer}>
              <img src={instagram} className={styles.linkButton} onClick={onInstagramClick} />
              <img src={linkedin} className={styles.linkButton} onClick={onLinkedInClick} />
              <img src={github} className={styles.linkButton} onClick={onGithubClick}/>
              <img src={devpost} className={styles.linkButton} onClick={onDevpostClick}/>
            </div>
    
            <img src={me} className={styles.mypicture}></img>
    
          </div>
    </div>
    );
};

export default Profile;
