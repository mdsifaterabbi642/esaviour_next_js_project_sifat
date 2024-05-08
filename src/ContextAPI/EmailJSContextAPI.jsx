"use client";
import { createContext, useContext, useEffect, useState } from "react";

const EmailJSOBJ = createContext();

const EmailJSProvider = ({ children }) => {
  const [emailData, setEmailData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    // Set default values for emailData
    setEmailData({
      name: "Tamim", // Replace with default name
      email: "tamin@gmail.com", // Replace with default email
      phone: "+1234567890", // Replace with default phone number (optional)
      message: "Message for Tamim", // Empty message by default
    });
  }, []);

  return (
    <EmailJSOBJ.Provider value={{ emailData, setEmailData }}>
      {children}
    </EmailJSOBJ.Provider>
  );
};

//creating custom hook

const useEmailJS = () => {
  const contextCheck = useContext(EmailJSOBJ);

  if (!contextCheck) {
    throw new Error("useEmailJS must be used within a EmailJSProvider");
  }

  const { emailData, setEmailData } = contextCheck; // Destructure emailData and setEmailData
  return { emailData, setEmailData };
};

export { useEmailJS, EmailJSProvider };
