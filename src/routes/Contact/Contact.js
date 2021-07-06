import React, { useState } from "react";
import style from "./Contact.module.scss";
import { useHistory } from "react-router-dom";
import emailjs from "emailjs-com";

export default function Contact() {
  const history = useHistory();
  const [contactName, setContactName] = useState("");
  const [emailValueText, setEmailValueText] = useState("Send");

  function sendEmail(e) {
    e.preventDefault();
    setEmailValueText("Sending");
    console.log(e.target)
    emailjs
      .sendForm("gmail", "reactjs", e.target, "user_VHKO0voShu4pRYOknI1VE")
      .then(
        (result) => {
          setEmailValueText("Message sent");
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  return (
    <div className={style.container}>
      <div onClick={history.goBack} className={style.close}>
        close
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23.365"
          height="14.355"
          viewBox="0 0 23.365 14.355"
        >
          <g
            id="Group_17"
            data-name="Group 17"
            transform="translate(-1329.874 -52.714)"
          >
            <line
              id="Line_1"
              data-name="Line 1"
              x2="26.113"
              transform="translate(1330.249 53.364) rotate(30)"
              fill="none"
              stroke="#fff"
              stroke-width="1.5"
            />
            <line
              id="Line_7"
              data-name="Line 7"
              x2="26.113"
              transform="translate(1352.864 53.364) rotate(150)"
              fill="none"
              stroke="#fff"
              stroke-width="1.5"
            />
          </g>
        </svg>
      </div>
      <h1 className={style.h1}>Hello {contactName},</h1>
      <form onSubmit={sendEmail}>
        <input
          className={style.input}
          name="name"
          onChange={(e) => setContactName(e.target.value)}
          type="text"
          placeholder="Your name"
        />
        <input
          className={style.input}
          name="email"
          type="email"
          placeholder="Your email"
        />
        <input
          className={style.input}
          name="subject"
          type="name"
          placeholder="Email subject"
        />
        <textarea name="message" placeholder="Tell us about your project" />
        <input
          className={style.inputButton}
          type="submit"
          value={emailValueText}
        />

        {/* <div className={style.button} role="button" value="Send" type="submit">
          Send request
        </div> */}
      </form>
    </div>
  );
}
