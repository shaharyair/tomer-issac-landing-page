"use client";

import { useState } from "react";
import Dialog from "./dialog";
import Button from "./button";

const ContactTomer = () => {
  const [dialog, setDialog] = useState("");
  const [emailData, setEmailData] = useState({
    fullName: "",
    phoneNumber: "",
  });

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      });

      if (response.ok) {
        console.log("Email sent successfully!");
        setDialog("! פרטים נשלחו");
      } else {
        console.error("Error sending email:", response.statusText);
      }
    } catch (error) {
      console.error("Error sending email:", error.message);
      setDialog(error.message);
    } finally {
      setEmailData({
        fullName: "",
        phoneNumber: "",
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailData({ ...emailData, [name]: value });
  };

  return (
    <>
      {dialog && <Dialog message={dialog} onClick={() => setDialog(false)} />}
      <div className="flex items-center justify-center ">
        <div className="container flex w-full flex-col items-center justify-center gap-6 p-6 text-center lg:flex-row lg:gap-14">
          <h1 className="text-3xl font-semibold text-white drop-shadow-md lg:order-2 lg:text-4xl">
            צרו קשר
          </h1>
          <form
            onSubmit={sendEmail}
            className="flex w-full flex-col items-center justify-center gap-6 rounded-md bg-white p-6 text-right drop-shadow-md lg:w-[60%] lg:flex-row"
          >
            <input
              type="text"
              name="phoneNumber"
              placeholder="מספר טלפון"
              pattern="[0][\d]{0,9}"
              input="numeric"
              title="מספר הטלפון צריך לכלול רק מספרים ו10 ספרות."
              value={emailData.phoneNumber}
              onChange={handleChange}
              className="w-full max-w-[500px] rounded-md bg-gray-200 px-5 py-3 text-right placeholder:text-gray-500"
              required
            />
            <input
              type="text"
              name="fullName"
              placeholder="שם מלא"
              pattern="[a-zA-Z א-ת]+"
              title="שם מלא צריך לכלול רק אותיות בעברית או באנגלית."
              value={emailData.fullName}
              onChange={handleChange}
              className="w-full max-w-[500px] rounded-md bg-gray-200 px-5 py-3 text-right placeholder:text-gray-500"
              required
            />
            <Button
              className="bg-black px-6 py-3"
              disabled={!emailData.fullName || !emailData.phoneNumber}
              type="submit"
            >
              שלח/י
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactTomer;
