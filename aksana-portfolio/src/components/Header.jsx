import { NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <div className = "root-layout">
            <header>
                <nav>
                    <h1>Aksana Hlebik</h1>
                    <NavLink to="/">About me</NavLink>
                    <NavLink to="portfolio">Portfolio</NavLink>
                    <NavLink to="contact">Contact</NavLink>
                    <NavLink to="resume">Resume</NavLink>
                </nav>
            </header>
      </div>
    );
  };