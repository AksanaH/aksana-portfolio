export const Contact = () => {
    return (
      <div className="container-form">
        <h2>Contact</h2>
            <form>
                <div className="input">
                        <label>Name:</label>
                        <input type="text" id="name"></input>
                </div>
                <div className="input">
                        <label>Email address:</label>
                        <input type="email" id="email"></input>
                </div>
                <div className="input">
                        <label>Message:</label>
                        <input type="text" id="message"></input>
                </div>
                <button className="submit" type="submit">Submit</button>
            </form>
        </div> 
    );
  };

  export default Contact;