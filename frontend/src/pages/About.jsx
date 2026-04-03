import "../styles/About.css";
import { FaServer, FaDatabase, FaCode } from "react-icons/fa";
import ExperienceCard from "../components/ExperienceCard";

function About() {
  const handleFlip = (e) => {
    e.currentTarget.classList.toggle("active");
  };

  return (
    <div className="about">
      <div className="about-container">
        <h1>about me</h1>

        <p className="about-intro">
          I'm a <strong>Backend Developer focused on .NET</strong>, passionate
          about building scalable, efficient, and real-world applications. I
          enjoy turning complex problems into clean, maintainable solutions.
        </p>

        <p>
          I graduated from <strong>Mathematics Engineering</strong> and gained
          hands-on experience through internships where I worked with
          technologies like{" "}
          <strong>.NET, Dapper, RabbitMQ, and JWT Authentication</strong>.
        </p>

        <p>
          Currently, I am improving my skills by building{" "}
          <strong>full-stack applications</strong> using React and .NET,
          focusing on clean architecture and real-world scenarios.
        </p>

        {/* Skills */}
        <div className="about-section">
          <h2>tech stack</h2>
          <div className="skills-grid">
            <div className="flip-card" onClick={handleFlip}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <FaServer className="skill-icon" />
                  <h3>Backend</h3>
                </div>

                <div className="flip-card-back">
                  <p>C#, .NET, ASP.NET Core, REST API, JWT, RabbitMQ</p>
                </div>
              </div>
            </div>

            <div className="flip-card" onClick={handleFlip}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <FaDatabase className="skill-icon" />
                  <h3>Database</h3>
                </div>
                <div className="flip-card-back">
                  <p>SQL Server, Entity Framework, Dapper</p>
                </div>
              </div>
            </div>

            <div className="flip-card" onClick={handleFlip}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <FaCode className="skill-icon" />
                  <h3>Frontend</h3>
                </div>
                <div className="flip-card-back">
                  <p>React, HTML, CSS, JavaScript</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Highlight */}
        <div className="about-section">
          <h2>experience</h2>
          <ExperienceCard title="Software Development Intern @Software Persona">
            <p>
              I participated in a software internship program at Software
              Persona, where I received training in SQL, JavaScript, mobile
              development, and Blender, and applied this knowledge in a
              comprehensive project. Throughout the project, I gained end-to-end
              experience from UI/UX design to web development, database
              creation, and mobile prototyping. This process helped me improve
              my analytical thinking, problem-solving, and multidisciplinary
              development skills.
            </p>
          </ExperienceCard>

          <ExperienceCard title="Software Development Intern (Backend) @Nesine">
            <p>
              Worked on real-world backend systems using .NET. Developed
              services, implemented authentication, and collaborated with QA
              teams in Agile processes.
            </p>
          </ExperienceCard>

          <ExperienceCard title="Software Development Intern (Backend) @Uyumsoft">
            <p>
              During my internship at Uyumsoft, I received training in C#, .NET,
              Entity Framework Core, SQL, and MVC, and developed hands-on
              projects using these technologies. This experience helped me build
              a solid foundation in backend development principles and improve
              my software development skills.
            </p>
          </ExperienceCard>
        </div>

        {/* Goals */}
        <div className="about-section">
          <h2>goals</h2>
          <p>
            My goal is to become a strong backend developer who builds scalable
            systems and contributes to impactful products. I am actively looking
            for opportunities where I can grow and create value.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
