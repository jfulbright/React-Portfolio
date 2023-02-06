import React, { useState } from "react";
import "./style.css";

// Here we import a helper function that will check if the email is valid
import { validateEmail } from "../../utils/helpers";

function Form() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Clear error message if user changes their email address
    setErrorMessage("");

    // Based on the input type, we set the state of either email, username, and password
    if (inputValue === null) {
      console.log("Field is empty");
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleBlur = (e) => {
    // Validating that the field has a value when user loses focus.
    const { target } = e;
    const inputName = target.name;
    const inputValue = target.value;
    if (!inputValue) {
      alert(`Not so fast partner. Give us a "${inputName}"`);
    } else {
      return;
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !name) {
      setErrorMessage("Email is invalid or Name is empty");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
    }

    // Alert the user their first and last name, clear the inputs
    alert(`Hello ${name}! Thanks for sending your message: ${message}`);

    setName("");
    setMessage("");
    setEmail("");
  };

  return (
    <div className="form-content">
      <form className="form">
        <input
          value={name}
          name="name"
          class="form-control"
          onChange={handleInputChange}
          onBlur={handleBlur}
          type="text"
          placeholder="Name"
        />
        <input
          value={email}
          name="email"
          class="form-control"
          onChange={handleInputChange}
          onBlur={handleBlur}
          type="email"
          placeholder="Email"
        />
        <textarea
          value={message}
          name="message"
          class="form-control"
          onChange={handleInputChange}
          onBlur={handleBlur}
          type="textarea"
          placeholder="Message"
        />
        <button type="button" className="btn-primary" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
