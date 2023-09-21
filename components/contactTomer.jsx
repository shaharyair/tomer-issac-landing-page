"use client";

import { useState } from "react";
import { z } from "zod";
import Dialog from "./dialog";
import Button from "./button";

// Define validation schemas
const fullNameSchema = z
  .string()
  .min(2)
  .max(50)
  .regex(/[a-zA-Z א-ת]+/);
const phoneNumberSchema = z.string().regex(/[0][\d]{0,9}/);

const ContactTomer = () => {
  const [dialog, setDialog] = useState("");
  const [emailData, setEmailData] = useState({
    fullName: "",
    phoneNumber: "",
  });

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      // Validate the form data using zod schemas
      const validatedData = {
        fullName: fullNameSchema.parse(emailData.fullName),
        phoneNumber: phoneNumberSchema.parse(emailData.phoneNumber),
      };

      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validatedData),
      });

      if (response.ok) {
        console.log("Email sent successfully!");
        setDialog("פרטים נשלחו!\nאחזור אליכם בקרוב 📸");
      } else {
        console.error("Error sending email:", response.statusText);
      }
    } catch (error) {
      console.error("Error sending email:", error.message);
      setDialog("שליחת האימייל נכשלה.");
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
        <div
          className="flex w-full max-w-5xl flex-col items-center justify-center gap-6 p-6 text-center lg:flex-row lg:gap-14"
          style={{ direction: "rtl" }}
        >
          <h1 className="drop-shadow-stroke whitespace-nowrap text-3xl font-semibold text-white lg:text-4xl">
            צור קשר
          </h1>
          <form
            onSubmit={sendEmail}
            className="flex w-[90%] max-w-[350px] flex-col items-center justify-center gap-6 rounded-md bg-white p-6 text-right drop-shadow-md lg:w-full lg:max-w-none lg:flex-row"
          >
            <input
              type="text"
              name="fullName"
              placeholder="שם מלא"
              pattern="[a-zA-Z א-ת]+"
              title="שם מלא צריך לכלול רק אותיות בעברית או באנגלית."
              value={emailData.fullName}
              onChange={handleChange}
              className="w-full max-w-[500px] rounded-md bg-gray-300 px-5 py-3 text-right placeholder:text-gray-700"
              required
            />
            <input
              type="text"
              name="phoneNumber"
              placeholder="מספר טלפון"
              pattern="[0][\d]{0,9}"
              input="numeric"
              title="מספר הטלפון צריך לכלול רק מספרים ו10 ספרות."
              value={emailData.phoneNumber}
              onChange={handleChange}
              className="w-full max-w-[500px] rounded-md bg-gray-300 px-5 py-3 text-right placeholder:text-gray-700"
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
