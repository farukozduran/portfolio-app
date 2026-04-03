import { useState } from 'react';
import "../styles/ExperienceCard.css";

function ExperienceCard({ title, children }) {
    const [open, setOpen] = useState(false);

    return(
        <div className={`exp-card ${open ? "open" : ""}`}>
            <div className="exp-header" onClick={() => setOpen(!open)}>
                <h3>{title}</h3>
            </div>

            <div className="exp-body">
                {children}
            </div>
        </div>
    );
}

export default ExperienceCard;