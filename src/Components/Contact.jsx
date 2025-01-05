import { useState } from "react";

export default function Contact() {
  const [formInput, setFormInput] = useState({
    UserName: "",
    userAge: "",
    userEmail: "",
    userPassword: "",
  });
  function submitForm(event) {
    event.preventDefault();
  }
  return (
    <div className="contact component text-center text-dark">
      <h1 className="text-uppercase pb-4"> contact section </h1>
      <i className="fa-solid fa-star pb-4"></i>

      <form>
        <div className="mb-5">
          <label htmlFor="exampleInputName" className="htmlForm-label">
            User Name:
          </label>{" "}
          <br></br>
          <input
            value={formInput.UserName}
            onChange={(event) => {
              setFormInput({ ...formInput, UserName: event.target.value });
            }}
            type="text"
            className="htmlForm-control"
            id="exampleInputName"
            aria-describedby="NameHelp"
            placeholder="User Name"
          />
          <div id="emailHelp" className="htmlForm-text"></div>
        </div>

        <div className="mb-5">
          <label htmlFor="exampleInputAge" className="htmlForm-label">
            User Age:
          </label>{" "}
          <br></br>
          <input
            value={formInput.userAge}
            onChange={(event) => {
              setFormInput({ ...formInput, userAge: event.target.value });
            }}
            type="number"
            className="htmlForm-control"
            id="exampleInputAge"
            aria-describedby="AgeHelp"
            placeholder="User Age"
          />
          <div id="emailHelp" className="htmlFormEmail"></div>
        </div>

        <div className="mb-5">
          <label htmlFor="exampleInputEmail1" className="htmlForm-label">
            User Email:
          </label>{" "}
          <br></br>
          <input
            value={formInput.userEmail}
            onChange={(event) => {
              setFormInput({ ...formInput, userEmail: event.target.value });
            }}
            type="email"
            className="htmlForm-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="User Email"
          />
          <div id="emailHelp" className="htmlForm-text"></div>
        </div>

        <div className="mb-5">
          <label htmlFor="exampleInputPassword1" className="htmlForm-label">
            User Password:
          </label>{" "}
          <br></br>
          <input
            value={formInput.userPassword}
            onChange={(event) => {
              setFormInput({ ...formInput, userPassword: event.target.value });
            }}
            type="password"
            className="htmlForm-control"
            id="exampleInputPassword1"
            placeholder="User Password:"
          />
        </div>
        <button
          onClick={submitForm}
          type="submit"
          className="btn btn-primary mb-3"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
