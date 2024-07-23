import { useState } from 'react';

import { validateEmail, checkMessage, checkName } from '../utils/helpers';


export const Contact = () => {
  const [name, setName] = useState('');

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    
  
    const handleInputChange = (e) => {
      // Getting the value and name of the input which triggered the change
      const { target } = e;
      const inputType = target.name;
      const inputValue = target.value;
  
      // Based on the input type, we set the state of either email, username, and password
      if (inputType === 'email') {
        setEmail(inputValue);
      } else if (inputType === 'name') {
        setName(inputValue);
      } else {
        setMessage(inputValue);
      }
    };
    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
    
        // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
        if (!validateEmail(email) || !name) {
          setErrorMessage('Email or username is invalid');
          // We want to exit out of this code block if something is wrong so that the user can correct it
          return;
          // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
        }
        if (!checkMessage(message)) {
          setErrorMessage(
            `Message is required`
          );
          return;
        }
        if (!checkName(name)) {
            setErrorMessage(
              `Insert name plasee`
            );
            return;
          }
    
        // If everything goes according to plan, we want to clear out the input after a successful registration.
        setName('');
        setMessage('');
        setEmail('');
      };
    return (
      <div className="container-form">
        <h2>Contact</h2>
            <form onSubmit={handleFormSubmit}>
                <div className="input">
                        <label>Name:</label>
                        <input type="text" id="name" onChange={handleInputChange} value={name} name="name" placeholder="name"></input>
                </div>
                <div className="input">
                        <label>Email address:</label>
                        <input type="email" id="email" onChange={handleInputChange} value={email} name="email"  placeholder="email"></input>
                </div>
                <div className="input">
                        <label>Message:</label>
                        <textarea id="message" rows="10" required onChange={handleInputChange} value={message} name="message"  placeholder="message"></textarea>
                </div>
                <button className="submit" type="submit">Submit</button>
            </form>
            {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
        </div> 
    );
  };

  export default Contact;