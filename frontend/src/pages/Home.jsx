import "../styles/Home.css";
import { useNavigate } from "react-router-dom";
import profile from "../assets/profile.jpg";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="home-left">
        <h1>Hi, I'm Faruk 👋</h1>
        <h2>Backend Developer (.NET)</h2>
        <p>
          I build scalable backend systems and modern web applications using
          .NET technologies.
        </p>

        <button onClick={() => navigate("/projects")} className="home-btn">
          View My Projects →
        </button>
      </div>

      <div className="home-right">
        <img src={profile} alt="Faruk" />
      </div>
    </div>
  );
}

export default Home;
