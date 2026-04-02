import { useEffect, useState } from "react";
import { getProjects } from "../services/api";
import ProjectCard from "../components/ProjectCard";
import "../styles/Projects.css";

function Projects() {
  const fakeData = [
    {
      id: 1,
      title: "Personal Portfolio",
      description:
        "A personal portfolio website built with React and hosted on GitHub Pages.",
      technologies: "React, CSS, GitHub Pages",
      githubUrl: "",
    },
    {
      id: 2,
      title: "Task Manager API",
      description:
        "A RESTful API for managing tasks, built with Node.js and Express.",
      technologies: "Node.js, Express, MongoDB",
      githubUrl: "",
    },
    {
      id: 3,
      title: "Weather App",
      description:
        "A weather forecasting app that uses the OpenWeatherMap API to display current weather conditions.",
      technologies: "React, OpenWeatherMap API",
      githubUrl: "",
    },
    {
      id: 4,
      title: "E-commerce Website",
      description:
        "An e-commerce website built with Django and React, featuring user authentication and a shopping cart.",
      technologies: "Django, React, PostgreSQL",
      githubUrl: "",
    },
  ];
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects()
      .then((data) => {
        if (data && data.length > 0) {
          setProjects(data);
        } else {
          setProjects(fakeData);
        }
      })
      .catch((err) => {
        console.error("Backend not reachable, using fake data: ", err);
        setProjects(fakeData);
      });
  }, []);

  return (
    <div className="projects-page">
      <h2 className="projects-header">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
