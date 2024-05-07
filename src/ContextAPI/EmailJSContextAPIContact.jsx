"use client";
import { createContext, useContext, useEffect, useState } from "react";

const MyContactObj = createContext();

const EmailJSContactProvider = ({ children }) => {
  const [contactEmail, setContactEmail] = useState({
    name: "",
    email: "",
    whatsapp: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    //set default values for contactEmail
    setContactEmail({
      name: "Mohammad Ashraful",
      email: "ashraful@gmail.com",
      whatsapp: "+0123146521",
      subject: "Subject Line for Ashraful Email",
      message: "Ashraful is the first star of Bangladesh cricket",
    });
  }, []);

  return (
    <MyContactObj.Provider value={{ contactEmail, setContactEmail }}>
      {children}
    </MyContactObj.Provider>
  );
};

//creating custom hook

const useMyContactObj = () => {
  const checkContactData = useContext(MyContactObj);

  if (!checkContactData) {
    throw new Error(
      "useMyContactObj must be used within a EmailJSContactProvider"
    );
  }

  const { contactEmail, setContactEmail } = checkContactData; //destructure contactEmail, setContactEmail

  return { contactEmail, setContactEmail };
};

export { useMyContactObj, EmailJSContactProvider };
