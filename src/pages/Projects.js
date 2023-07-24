import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Projects.module.css";
const Projects = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLeadershipTextClick = useCallback(() => {
    navigate("/leadership");
  }, [navigate]);

  const onDevpostButtonContainerClick = useCallback(() => {
    window.open("https://devpost.com/sooyeunleanne");
  }, []);

  const onButtonContainerClick = useCallback(() => {
    window.open("https://youtu.be/2BrVxchByck");
  }, []);

  const onButtonContainer1Click = useCallback(() => {
    window.open("https://www.youtube.com/watch?v=rGr_D0UZhUU");
  }, []);

  const onButtonClick = useCallback(() => {
    window.open("https://youtu.be/d77sW5xHxH4");
  }, []);

  const onButtonContainer2Click = useCallback(() => {
    window.open("https://youtu.be/BRFJ2iNiig0");
  }, []);

  const onButtonContainer3Click = useCallback(() => {
    window.open("https://youtu.be/BRFJ2iNiig0");
  }, []);

  const onHealThymeDemonstrationPicturClick = useCallback(() => {
    window.open("https://youtu.be/iKNFji-NY80");
  }, []);

  const onButtonContainer4Click = useCallback(() => {
    window.open("https://github.com/sooyeunleanne/Body-In-Depth");
  }, []);

  return (
    <div className={styles.projects}>
      <div className={styles.header}>
        <div className={styles.headerBackground} />
        <div className={styles.home} onClick={onHomeTextClick}>
          Home
        </div>
        <div className={styles.projects1}>Projects</div>
        <div className={styles.leadership} onClick={onLeadershipTextClick}>
          Leadership
        </div>
      </div>
      <div className={styles.text}>
        <b className={styles.projects2}>Projects</b>
        <b className={styles.hackathons}>Hackathons</b>
        <b className={styles.others}>Others</b>
        <div className={styles.foodiecoHighlanderContainer}>
          <p className={styles.foodiecoHighlanderEngineer}>
            <span className={styles.foodiecoHighlanderEngineer1}>
              <i className={styles.foodieco}>{`Foodieco - `}</i>
              <b>Highlander Engineering Challenge (2022/06) 👑</b>
            </span>
          </p>
          <p className={styles.myFirstHackathon}>
            My first hackathon where I won the Best Software Project award.
          </p>
          <p className={styles.myFirstHackathon}>
            I used python to work on the back-end, the front-end, and the UI
            design.
          </p>
          <p className={styles.myFirstHackathon}>
            Our application, FoodiEco offers a fridge page that allows the user
            to have a full view of the items in their fridge, helping reduce
            food waste and impulse buying. There is also a recipe page that
            allows the user to save their own recipes to help with the
            organization of cooking. Moreover, there is a replacement page that
            informs the user of healthier and more eco-friendly replacements for
            certain ingredients
          </p>
          <p className={styles.myFirstHackathon}>&nbsp;</p>
          <p className={styles.foodiecoHighlanderEngineer}>
            <span className={styles.foodiecoHighlanderEngineer1}>
              <i className={styles.foodieco}>Love Thy Neighbourhood</i>
              <b> - Recess Hacks 2.0 (2022/07)</b>
            </span>
          </p>
          <p className={styles.myFirstHackathon}>
            Since COVID-19 has started, the virtual environment and quarantine
            made people numb to the lack of social interaction within the
            community. In-person interactions diminished and connections in
            neighborhoods are lost. People got distant and are more used to
            online socialization. They rarely meet new people
          </p>
          <p className={styles.myFirstHackathon}>
            Our team figured out a solution to this problem. We created a
            webpage called “NeighborHood” where people can access information
            about nearby community events. When they log into their account,
            they can choose the community that they want to join. After the
            log-in process, they will see a list of community events in their
            regions. They can also post community events that they are hosting
            or participating in. This webpage will connect people by inviting
            them to various face-to-face regional events.
          </p>
          <p className={styles.myFirstHackathon}>&nbsp;</p>
          <p className={styles.foodiecoHighlanderEngineer}>
            <span className={styles.foodiecoHighlanderEngineer1}>
              <i className={styles.foodieco}>HealThyme</i>
              <b> - Hack the Valley 7 (2022/10)</b>
            </span>
          </p>
          <p className={styles.inHackTheValley7AHackat}>
            <span className={styles.inHackTheValley7AHackat1}>
              <span>
                In Hack The Valley 7, a hackathon for high school and university
                students, my team designed a website that helps community and
                healthcare workers, called HealThyme. HealThyme takes the
                location of the user and generates a map indicating each of the
                nearby hospitals as well as the number of people in the
                waitlist. Once the user has chosen a hospital/clinic they think
                is the best fit for them, they are able to book a time and join
                the online waitlist, saving them time and maybe even their life.
              </span>
            </span>
          </p>
          <p className={styles.blankLine2}>
            <span className={styles.inHackTheValley7AHackat1}>
              <span>&nbsp;</span>
            </span>
          </p>
          <p className={styles.foodiecoHighlanderEngineer}>
            <span className={styles.foodiecoHighlanderEngineer1}>
              <i className={styles.foodieco}>{`Read Better - `}</i>
              <b>JamHacks 7 (2023/06)</b>
            </span>
          </p>
          <p className={styles.myFirstHackathon}>
            At JamHacks7, a hackathon for high school and university students,
            me and my team collaborated to develop a bionic reading website
            called ReadBetter. 
          </p>
          <p className={styles.bionicReadingIs}>
            Bionic reading is a technology of guiding people’s eyes across texts
            to assist in reading by providing artificial fixation points. By
            bolding initial letters of words with a specific rule that creates
            the highest efficiency in reading, it allows the reader to easily
            follow the text. ReadBetter accepts pdf files, image files (.jpeg,
            .jpg, and .png), and audio files and displays them in a bionic
            reading form for the users.
          </p>
        </div>
        <div className={styles.communityChangemakerChallengContainer}>
          <p className={styles.inHackTheValley7AHackat}>
            <b className={styles.foodiecoHighlanderEngineer1}>
              Community Changemaker Challenge (2022/12)
            </b>
          </p>
          <p className={styles.inTheCommunity}>
            In the Community Changemaker Challenge, my team collaborated to
            propose a solution to a chronic problem in the community. For
            students who struggle to find post-secondary pathways, we designed
            an event week with university program fairs, workplaces visits, and
            peer support. We were awarded Most Synchronized and Organized,
            Strong Pitch, and Best Overall Project.
          </p>
          <p className={styles.inHackTheValley7AHackat}>
            <span className={styles.foodiecoHighlanderEngineer1}>
              <b>&nbsp;</b>
            </span>
          </p>
          <p className={styles.inHackTheValley7AHackat}>
            <span className={styles.foodiecoHighlanderEngineer1}>
              <i className={styles.bodyInDepth}>Body In Depth</i>
              <b className={styles.b}> (2023/02)</b>
            </span>
          </p>
          <p className={styles.inTheCommunity}>
            For a side project, I developed a body composition analysis
            calculator that plans out a dietary plan for weight loss/gain. The
            program with built with Processing, a graphical library that uses
            Java as its primary language. I also added a dictionary page and a
            unit converter to better the user experience.
          </p>
        </div>
      </div>
      <div
        className={styles.devpostButton}
        onClick={onDevpostButtonContainerClick}
      >
        <div className={styles.devpostButtonChild} />
        <b className={styles.devpost}>Devpost</b>
      </div>
      <div className={styles.lovethyhood}>
        <img
          className={styles.lovethyhoodPitchVideo}
          alt=""
          src="/lovethyhood-pitch-video@2x.png"
        />
        <div className={styles.button} onClick={onButtonContainerClick}>
          <div className={styles.buttonChild} />
          <b className={styles.pitchVideo}>Pitch Video</b>
        </div>
      </div>
      <div className={styles.foodieco1}>
        <img className={styles.imageIcon} alt="" src="/image@2x.png" />
        <img className={styles.imageIcon1} alt="" src="/image1@2x.png" />
        <div className={styles.button1} onClick={onButtonContainer1Click}>
          <div className={styles.buttonItem} />
          <b className={styles.demoVideo}>DeMo Video</b>
        </div>
        <button className={styles.button2} onClick={onButtonClick}>
          <div className={styles.buttonInner} />
          <b className={styles.demoVideo1}>Pitch Video</b>
        </button>
      </div>
      <div className={styles.ccc}>
        <div className={styles.ccc1}>Best Overall Project Certificate</div>
        <img
          className={styles.cccOverallProject}
          alt=""
          src="/ccc-overall-project@2x.png"
        />
      </div>
      <div className={styles.readbetter}>
        <div className={styles.button3} onClick={onButtonContainer2Click}>
          <div className={styles.buttonChild} />
          <b className={styles.pitchVideo}>Pitch/Demo Video</b>
        </div>
        <img
          className={styles.readbetterDemoVideo}
          alt=""
          src="/readbetter-demo-video@2x.png"
        />
      </div>
      <div className={styles.healthyme1}>
        <div className={styles.button4} onClick={onButtonContainer3Click}>
          <div className={styles.buttonChild} />
          <b className={styles.pitchVideo}>Demo Video</b>
        </div>
        <img
          className={styles.healthymeDemonstrationPictur}
          alt=""
          src="/healthyme-demonstration-picture@2x.png"
          onClick={onHealThymeDemonstrationPicturClick}
        />
      </div>
      <img
        className={styles.lineDecorationsIcon}
        alt=""
        src="/line-decorations1.svg"
      />
      <div className={styles.bodyindepth}>
        <div className={styles.button5} onClick={onButtonContainer4Click}>
          <div className={styles.buttonChild} />
          <b className={styles.pitchVideo}>Open Repository</b>
        </div>
        <img className={styles.imageIcon2} alt="" src="/image2@2x.png" />
        <img className={styles.imageIcon3} alt="" src="/image3@2x.png" />
      </div>
    </div>
  );
};

export default Projects;
