import "../styles/CvButton.css";
import { FaFilePdf } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import cv from "../assets/cv.pdf";

function CvButton() {
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  return (
    <a href={cv} target="_blank" className={isHomePage ? "cv-floating-btn home" : "cv-floating-btn"}>
      View My CV {FaFilePdf()}
    </a>
  );
}

export default CvButton;