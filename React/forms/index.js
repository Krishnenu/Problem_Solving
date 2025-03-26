import submitForm from "./submitForm";
import { useState, useRef, useEffect } from "react";

export default function App() {
  // const [text, setText] = useState({ name: "", email: "", text: "" });
  // const onchnageHandler = (event) => {
  //   // if (event.tartget.value) {
  //   setText((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  //   // }
  // };

  // console.log(text);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const textRef = useRef(null);
  // console.log(nameRef.current, emailRef.current, textRef.current);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name: nameRef.current?.value || "",
      email: emailRef.current?.value || "",
      text: textRef.current?.value || "",
    };

    console.log("Form Data:", formData);
    submitForm(formData);
  }; // Assuming `submitForm` accepts form data as an argument.

  return (
    <form
      // Ignore the onSubmit prop, it's used by GFE to
      // intercept the form submit event to check your solution.
      onSubmit={handleSubmit}
    >
      <div>
        <div>
          <label>name</label>
        </div>
        <div>
          <input
            ref={nameRef}
            // value={text.name}
            name="name"
            type="text"
            //onChange={(event) => onchnageHandler(event)}
          />
        </div>
      </div>
      <div>
        <label>Email</label>
      </div>
      <div>
        <input
          ref={emailRef}
          //value={text.email}
          type="email"
          name="email"
          // onChange={(event) => onchnageHandler(event)}
        />
      </div>
      <div>
        <label>Message</label>
      </div>
      <div>
        <textarea
          ref={textRef}
          // value={text.text}
          type="text"
          name="text"
          // onChange={(event) => onchnageHandler(event)}
        />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
}
