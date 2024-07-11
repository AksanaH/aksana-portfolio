export const Portfolio = () => {
    return (
      <div className="portfolio">
        <h2>Portfolio</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui provident consequuntur vel omnis quisquam rem harum, maxime expedita, ullam ut dolore! Distinctio eos minima voluptatum totam id hic! Sapiente debitis quia illum officia obcaecati provident nulla odio molestiae suscipit quasi.</p>
        <div className="container-projects" id="work">
                    <div className="horiseon-code-refactor">
                        <a href="https://aksanah.github.io/horiseon-code-refactor/">
                            <div className="label-projects">
                                <h3>Horiseon Marketing Agency</h3>
                                <p>HTML/CSS</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="flex-container-projects">
                    <div className="coffe-cafe" id="container">
                        <a href=" ">
                            <div className="label-projects">
                                <h3>Coffe cafe</h3>
                                <p>HTML/CSS</p>
                            </div>
                        </a>
                    </div>
                    <div className="hangman" id="container">
                        <a href=" ">
                            <div className="label-projects">
                                <h3>Hangman</h3>
                                <p>HTML/CSS/JavaScript</p>
                            </div>
                        </a>
                    </div>
                    <div className="furniture-store" id="container">
                        <a href=" ">
                            <div className="label-projects">
                                <h3>Furniture store</h3>
                                <p>HTML/CSS/JavaScript</p>
                            </div>
                        </a>
                    </div>
                    <div className="cats" id="container">
                        <a href=" ">
                            <div className="label-projects">
                                <h3>Cats</h3>
                                <p>HTML/CSS</p>
                            </div>
                        </a>
                    </div>
                </div>  
      </div>
    );

  };export default Portfolio;