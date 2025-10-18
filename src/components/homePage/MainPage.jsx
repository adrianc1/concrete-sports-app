import "../homePage/homePageStyles/mainPage.css";
import { Link } from "react-router";
import { RiContactsLine } from "react-icons/ri";
import { RiMegaphoneLine } from "react-icons/ri";
import { IoSchoolOutline } from "react-icons/io5";
import { PiUsers } from "react-icons/pi";
import { MdOutlineAddBusiness } from "react-icons/md";
import { GiLion } from "react-icons/gi";
import { Calendar } from "lucide-react";
import ScrollToTop from "../../layout/ScrollToTop";

function MainPage() {
  return (
    <>
      <h3 className="recent-scores-title">Recent Scores</h3>

      <div className="recent-container">
        <div className="recent-games">
          <div className="game-card game-1">
            <div className="game-info">
              <div className="game-date">SAT Oct 17</div>
              <div className="sport-name">Boys Football</div>
            </div>
            <div className="team-container">
              <div className="home-team-name">Concrete</div>
              <div className="home-team-score">24 </div>
            </div>
            <div className="team-container">
              <div className="away-team-name">Charles Wright</div>
              <div className="away-team-score">48</div>
            </div>
          </div>
          <div className="game-card game-2">
            <div className="game-info">
              <div className="game-date">SAT Oct 17</div>
              <div className="sport-name">Boys Football</div>
            </div>
            <div className="team-container">
              <div className="home-team-name">Concrete</div>
              <div className="home-team-score">24 </div>
            </div>
            <div className="team-container">
              <div className="away-team-name">Charles Wright</div>
              <div className="away-team-score">48</div>
            </div>
          </div>
          <div className="game-card game-3">
            <div className="game-info">
              <div className="game-date">SAT Oct 17</div>
              <div className="sport-name">Boys Football</div>
            </div>
            <div className="team-container">
              <div className="home-team-name">Concrete</div>
              <div className="home-team-score">24 </div>
            </div>
            <div className="team-container">
              <div className="away-team-name">Charles Wright</div>
              <div className="away-team-score">48</div>
            </div>
          </div>
          <div className="game-card game-4">
            <div className="game-info">
              <div className="game-date">SAT Oct 17</div>
              <div className="sport-name">Boys Football</div>
            </div>
            <div className="team-container">
              <div className="home-team-name">Concrete</div>
              <div className="home-team-score">24 </div>
            </div>
            <div className="team-container">
              <div className="away-team-name">Charles Wright</div>
              <div className="away-team-score">48</div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-page">
        <ScrollToTop />

        {/* TEAM SCHEDULES */}

        <Link to="/schedules" className="icon-container">
          <div className="icon">
            <Calendar size={40} />
          </div>
          <div className="icon-title">
            Team <br /> Schedules
          </div>
        </Link>

        {/* SPONSERS */}

        <Link to="/sponsors" className="icon-container">
          <div className="icon">
            <MdOutlineAddBusiness />
          </div>
          <div className="icon-title">
            Sponsors
            <br />
            List
          </div>
        </Link>

        {/* Announcements */}

        <Link to="/updates" className="icon-container">
          <div className="icon">
            <RiMegaphoneLine />
          </div>
          <div className="icon-title">
            Team <br />
            Updates
          </div>
        </Link>

        {/* COACH CONTACT */}
        <Link to="/contact" className="icon-container">
          <div className="icon">
            <RiContactsLine />
          </div>
          <div className="icon-title">
            Coach <br /> Connect
          </div>
        </Link>

        {/* PLAYER OF THE MONTH */}

        <Link to="/playersOfTheMonth" className="icon-container">
          <div className="icon">
            <PiUsers />
          </div>
          <div className="icon-title">
            Players Of <br /> The Month
          </div>
        </Link>

        {/* BOOSTER */}
        <Link to="/boosters" className="icon-container">
          <div className="icon">
            <GiLion />
          </div>
          <div className="icon-title">
            Booster <br /> Club
          </div>
        </Link>
      </div>
    </>
  );
}

export default MainPage;
