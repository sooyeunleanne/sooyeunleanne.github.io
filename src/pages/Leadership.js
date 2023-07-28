import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Leadership.module.css";
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

  const onTurtleHacksImageClick = useCallback(() => {
    window.open("https://www.turtlehacks.com/");
  }, []);

  return (
    <div className={styles.leadership}>
      <img className={styles.leadershipChild} alt="" src="/rectangle-1.svg" />
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
      </div>
      <div className={styles.texts}>
        <b className={styles.extracurriculars}>Extracurriculars</b>
        <b className={styles.studentLeadership}>Student Leadership</b>
        <div className={styles.laurelHeightsSecondaryContainer}>
          <p className={styles.laurelHeightsSecondary}>
            Laurel heights Secondary School
          </p>
          <p className={styles.sep2021}>Sep 2021 - Jun 2023</p>
        </div>
        <div className={styles.keyClubExecutiveContainer}>
          <p className={styles.keyClubInternationalGlobal}>
            <b className={styles.mathletesExecutive}>
              <span className={styles.keyClubExecutive}>
                Key Club Executive
              </span>
              <span>{` (Jun 2020 - Jun 2023) `}</span>
            </b>
          </p>
          <p className={styles.keyClubInternationalGlobal}>
            <b className={styles.mathletesExecutive}>
              <span
                className={styles.keyClubExecutive}
              >{`Key Club International: Global Relations Committee `}</span>
            </b>
            <span>
              <b className={styles.mathletesExecutive}>(Dec 2021 - Jun 2022)</b>
            </span>
          </p>
          <p className={styles.keyClubInternationalGlobal}>
            <span>
              <span className={styles.iHaveBeen}>
                I have been a Key Club executive since grade 10: Junior Exec in
                grade 10, Vice President in grade 11, and President in grade 12.
                Since Key Club focuses on inclusiveness and leadership,
                providing an environment in which everyone is respected has
                always been my priority. The 3 years developed me into a
                committed leader who knows the value of diversity and respect.
              </span>
            </span>
          </p>
          <p className={styles.keyClubInternationalGlobal}>
            <span>
              <span className={styles.iHaveBeen}>
                Over the past four years in Key Club, giving numerous leadership
                workshops and activities, I constantly practiced host and
                post-heroic leadership; specifically improving in my project and
                team management skills along with interpersonal communication
                skills. 
              </span>
            </span>
          </p>
          <p className={styles.keyClubInternationalGlobal}>
            <span>
              <span
                className={styles.iHaveBeen}
              >{`I also served in the Global relations Committee of Key Club International, as an Eastern Canada District representative. I organized events to spread Key Club internationally and promote diversity and inclusion within Key Clubs. `}</span>
            </span>
          </p>
          <p className={styles.keyClubInternationalGlobal}>
            <span>
              <span className={styles.iHaveBeen}>&nbsp;</span>
            </span>
          </p>
          <p className={styles.keyClubInternationalGlobal}>
            <b className={styles.mathletesExecutive}>
              <span
                className={styles.keyClubExecutive}
              >{`Mathletes Executive `}</span>
            </b>
            <span>
              <b className={styles.mathletesExecutive}>(Jun 2021 - Jun 2023)</b>
            </span>
          </p>
          <p className={styles.keyClubInternationalGlobal}>
            <span>
              <span
                className={styles.iHaveBeen}
              >{`Being a Mathletes executive was one of the most valuable experiences. Teaching math to grades nine to twelve over the years, I was learning. The students who were there needed my help and bought my sincerity. Preparing for and teaching lessons, I continuously developed my time management and coaching skills, along with my communication skills. `}</span>
            </span>
          </p>
          <p className={styles.keyClubInternationalGlobal}>
            <span>
              <span className={styles.iHaveBeen}>
                In 2022, apart from the weekly lessons, we hosted a Math
                Olympiad targeted towards our school students who are interested
                in learning mathematics. As one of the organizers, I improved a
                lot in project management, interpersonal communication,
                accountability, and emotional intelligence.
              </span>
            </span>
          </p>
          <p className={styles.keyClubInternationalGlobal}>
            <span>
              <span className={styles.iHaveBeen}>&nbsp;</span>
            </span>
          </p>
          <p className={styles.keyClubInternationalGlobal}>
            <b className={styles.mathletesExecutive}>
              <span
                className={styles.keyClubExecutive}
              >{`Logistics Executive at TurtleHacks `}</span>
            </b>
            <span>
              <b className={styles.mathletesExecutive}>(Jun 2022 - May 2022)</b>
            </span>
          </p>
          <p className={styles.keyClubInternationalGlobal}>
            <span>
              <span className={styles.iHaveBeen}>
                I served as a Logistics Executive of TurtleHacks, a high-school
                led hackathon that happened in May. I reached out to various
                workshop leaders, sponsors, and organizations to organize the
                hackathon. The logistics team collaborated to figure out all the
                behind-the-stage work, such as food, venue, activities/events to
                be hosted, workshops, and many more. 
              </span>
            </span>
          </p>
          <p className={styles.servingInTheLogisticsTeam}>
            <span>
              <span className={styles.iHaveBeen}>
                Serving in the logistics team taught me the importance of
                unrecognized work that acts as the basis of the events. After
                this experience, I was able to appreciate the tech crew, props
                team, and logistics team of every event for all their hard work
                behind the scenes. 
              </span>
            </span>
          </p>
        </div>
        <div className={styles.gradWeekProjectContainer}>
          <p className={styles.keyClubInternationalGlobal}>
            <b className={styles.mathletesExecutive}>
              <span
                className={styles.keyClubExecutive}
              >{`Grad Week Project Organizer `}</span>
            </b>
            <span>
              <b className={styles.mathletesExecutive}>
                (February - June 2023)
              </b>
            </span>
          </p>
          <p className={styles.keyClubInternationalGlobal}>
            <span>
              <span>
                <span className={styles.iHaveBeen}>
                  As part of the Grad Week project group of our school
                  leadership, I helped organize senior backyard bash, grad
                  breakfast, and prom. My position was mainly a
                  planner/facilitator. Serving as a grad group organizer helped
                  me realize the true importance of leadership in our school
                  community: bringing joy into students’ high school lives and
                  giving them more memorable experiences.
                </span>
              </span>
            </span>
          </p>
          <p className={styles.blankLine4}>
            <span>
              <span>&nbsp;</span>
            </span>
          </p>
          <p className={styles.keyClubInternationalGlobal}>
            <b className={styles.mathletesExecutive}>
              <span className={styles.keyClubExecutive}>
                Horizons Leadership Conference Organizer
              </span>
            </b>
            <span>
              <b className={styles.mathletesExecutive}> (February 2023)</b>
            </span>
          </p>
          <p className={styles.keyClubInternationalGlobal}>
            <span>
              <span className={styles.iHaveBeen}>
                For the Horizons Leadership Conference, I served as an organizer
                in the decorations team in decorating the stage and preparing
                for other necessary materials to enhance the experience for the
                attendees. I also served as a spirit leader, leading the spirit
                group with various icebreaker activities and bringing them
                closer. 
              </span>
            </span>
          </p>
        </div>
        <b className={styles.leadership2}>Leadership</b>
      </div>
      <img
        className={styles.lineDecorationsIcon}
        alt=""
        src="/line-decorations.svg"
      />
      <div className={styles.images}>
        <img className={styles.mathletesIcon} alt="" src="/mathletes@2x.png" />
        <img className={styles.keyClubIcon} alt="" src="/key-club@2x.png" />
        <img
          className={styles.turtlehacksIcon}
          alt=""
          src="/turtlehacks@2x.png"
          onClick={onTurtleHacksImageClick}
        />
        <img className={styles.lhssIcon} alt="" src="/lhss@2x.png" />
        <div className={styles.labelTurtlehacks}>
          Click to visit our website
        </div>
      </div>
    </div>
  );
};

export default Leadership;
