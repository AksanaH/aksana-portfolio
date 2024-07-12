export const Resume = () => {
  return (
    <div className="resume">
      <h2>Resume</h2>
        <a href="../public/resume/Aksana-Hlebik-resume.pdf" download="Aksana-Hlebik-resume"> Download Resume </a>
        <h3>Front-end Proficiencies</h3>
          <ul className="skills-list"> 
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuerry</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>      

          <h3>Back-end Proficiencies</h3>
          <ul className="skills-list"> 
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>PostgreSql, Sequalize</li>
            <li>MongoDB, Mongoose</li>
          </ul> 
              
        
    </div> 
  );
};

export default Resume;