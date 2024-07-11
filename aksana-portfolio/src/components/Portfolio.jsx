export const Portfolio = () => {
    return (
    <div className="portfolio">
        <h2>Portfolio</h2>
        <div className="flex-container-projects" id="work">
                    <div className="container-projects" id="container">
                        <div className="task-board" id="project">
                            <a href="https://aksanah.github.io/task-board/">
                                <div className="label-projects">
                                    <h3>Task Board</h3>
                                    <p>HTML/CSS</p>
                                </div>
                            </a>
                        </div>
                    </div>
               
                    <div className="container-projects" id="container">
                        <div className="weather-dashboard" id="project">
                            <a href="https://aksanah.github.io/weather-dashboard/">
                                <div className="label-projects">
                                    <h3>Weather Dashboard</h3>
                                    <p>HTML/CSS</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="container-projects" id="container">
                        <div className="note-taker" id="project">
                            <a href="https://note-taker-4px8.onrender.com/">
                                <div className="label-projects">
                                    <h3>Note Taker</h3>
                                    <p>HTML/CSS/JavaScript</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="container-projects" id="container">
                        <div className="tech-blog" id="project">
                            <a href="https://tech-blog-jo8m.onrender.com/">
                                <div className="label-projects">
                                    <h3>Tech Blog</h3>
                                    <p>HTML/CSS/JavaScript</p>
                                </div>
                            </a>
                        </div>
                    </div>
               </div>  
        
    </div>
    );

  };
  
  export default Portfolio;