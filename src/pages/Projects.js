import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Projects.module.css";
const Projects = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onLeadershipTextClick = useCallback(() => {
    navigate("/");
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

  const onButtonContainer2Click = useCallback(() => {
    window.open("https://youtu.be/d77sW5xHxH4");
  }, []);

  const onButtonContainer3Click = useCallback(() => {
    window.open("https://youtu.be/BRFJ2iNiig0");
  }, []);

  const onButtonContainer4Click = useCallback(() => {
    window.open("https://youtu.be/BRFJ2iNiig0");
  }, []);

  const onHealThymeDemonstrationPicturClick = useCallback(() => {
    window.open("https://youtu.be/iKNFji-NY80");
  }, []);

  const onButtonContainer5Click = useCallback(() => {
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
          <ul className={styles.foodiecoHighlanderEngineer}>
            <li className={styles.blankLine}>
              <span className={styles.foodiecoHighlanderEngineer2}>
                <i className={styles.foodieco}>{`Foodieco - `}</i>
                <b>Highlander Engineering Challenge (2022/06) 👑</b>
              </span>
            </li>
          </ul>
          <p className={styles.myFirstHackathonWhereIWon}>
            <span className={styles.myFirstHackathonWhereIWon1}>
              <span>
                My first hackathon where I won the Best Software Project award.
              </span>
            </span>
          </p>
          <p className={styles.myFirstHackathonWhereIWon}>
            <span className={styles.myFirstHackathonWhereIWon1}>
              <span>
                I used python to work on the back-end, the front-end, and the UI
                design.
              </span>
            </span>
          </p>
          <p className={styles.myFirstHackathonWhereIWon}>
            <span className={styles.myFirstHackathonWhereIWon1}>
              <span>
                Our application, FoodiEco offers a fridge page that allows the
                user to have a full view of the items in their fridge, helping
                reduce food waste and impulse buying. There is also a recipe
                page that allows the user to save their own recipes to help with
                the organization of cooking. Moreover, there is a replacement
                page that informs the user of healthier and more eco-friendly
                replacements for certain ingredients.
              </span>
            </span>
          </p>
          <ul className={styles.foodiecoHighlanderEngineer}>
            <li className={styles.blankLine}>
              <span className={styles.myFirstHackathonWhereIWon1}>
                <span>
                  <b>&nbsp;</b>
                </span>
              </span>
            </li>
            <li className={styles.blankLine}>
              <span>
                <span className={styles.foodiecoHighlanderEngineer2}>
                  <i
                    className={styles.foodieco}
                  >{`Love Thy Neighbourhood - `}</i>
                  <b className={styles.hackTheValley}>
                    Recess Hacks 2.0 (2022/07)
                  </b>
                </span>
              </span>
            </li>
          </ul>
          <p className={styles.myFirstHackathonWhereIWon}>
            <span className={styles.myFirstHackathonWhereIWon1}>
              <span>
                Since COVID-19 has started, the virtual environment and
                quarantine made people numb to the lack of social interaction
                within the community. In-person interactions diminished and
                connections in neighborhoods are lost. People got distant and
                are more used to online socialization. They rarely meet new
                people
              </span>
            </span>
          </p>
          <p className={styles.myFirstHackathonWhereIWon}>
            <span className={styles.myFirstHackathonWhereIWon1}>
              <span>
                Our team figured out a solution to this problem. We created a
                webpage called “NeighborHood” where people can access
                information about nearby community events. When they log into
                their account, they can choose the community that they want to
                join. After the log-in process, they will see a list of
                community events in their regions. They can also post community
                events that they are hosting or participating in. This webpage
                will connect people by inviting them to various face-to-face
                regional events.
              </span>
            </span>
          </p>
          <ul className={styles.foodiecoHighlanderEngineer}>
            <li className={styles.blankLine}>
              <span className={styles.myFirstHackathonWhereIWon1}>
                <span>
                  <b>&nbsp;</b>
                </span>
              </span>
            </li>
            <li className={styles.blankLine}>
              <span>
                <span className={styles.foodiecoHighlanderEngineer2}>
                  <i className={styles.foodieco}>{`HealThyme - `}</i>
                  <b className={styles.hackTheValley}>
                    Hack The Valley (2022/09)
                  </b>
                </span>
              </span>
            </li>
          </ul>
          <p className={styles.myFirstHackathonWhereIWon}>
            <span className={styles.myFirstHackathonWhereIWon1}>
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
          <ul className={styles.readBetterJamhacks72023}>
            <li className={styles.blankLine}>
              <span className={styles.myFirstHackathonWhereIWon1}>
                <span>&nbsp;</span>
              </span>
            </li>
            <li className={styles.blankLine}>
              <span className={styles.readBetterJamhacks720232}>
                <i className={styles.foodieco}>{`Read Better - `}</i>
                <b className={styles.hackTheValley}>JamHacks 7 (2023/06)</b>
              </span>
            </li>
          </ul>
          <p className={styles.atJamhacks7A}>
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
          <ul className={styles.communityChangemakerChalleng}>
            <li className={styles.blankLine}>
              <b className={styles.foodiecoHighlanderEngineer2}>
                Community Changemaker Challenge (2022/12)
              </b>
            </li>
          </ul>
          <p className={styles.inTheCommunity}>
            In the Community Changemaker Challenge, my team collaborated to
            propose a solution to a chronic problem in the community. For
            students who struggle to find post-secondary pathways, we designed
            an event week with university program fairs, workplaces visits, and
            peer support. We were awarded Most Synchronized and Organized,
            Strong Pitch, and Best Overall Project.
          </p>
          <p className={styles.myFirstHackathonWhereIWon}>
            <span className={styles.foodiecoHighlanderEngineer2}>
              <b>&nbsp;</b>
            </span>
          </p>
          <ul className={styles.bodyInDepth202302}>
            <li className={styles.blankLine}>
              <span className={styles.foodiecoHighlanderEngineer2}>
                <i className={styles.bodyInDepth}>Body In Depth</i>
                <b className={styles.hackTheValley}> (2023/02)</b>
              </span>
            </li>
          </ul>
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
        <div className={styles.button2} onClick={onButtonContainer2Click}>
          <div className={styles.buttonInner} />
          <b className={styles.demoVideo1}>Pitch Video</b>
        </div>
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
        <div className={styles.button3} onClick={onButtonContainer3Click}>
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
        <div className={styles.button4} onClick={onButtonContainer4Click}>
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
        <div className={styles.button5} onClick={onButtonContainer5Click}>
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
