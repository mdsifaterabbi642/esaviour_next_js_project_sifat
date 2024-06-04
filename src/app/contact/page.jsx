import Navbar from "@/components/Navbar/Navbar";
import ContactHero from "@/components/ContactHero/ContactHero";
import ContactFormAddress from "@/components/ContactFormAddress/ContactFormAddress";
import Footer2 from "@/components/Footer/Footer2";

export const metadata = {
  title: {
    absolute: "Contact | Digital Marketing for Startups",
  },
  description:
    "eSaviour Limited is committed to elevating your brand`s digital presence. Connect with the gateway to enhance digital marketing for startups.",
  alternates: {
    canonical: "./", // Use "./" for the base URL
  },
  keywords: "", // Add your desired keywords here
};

const Contact = () => {
  return (
    <>
      <div className="overflow-x-hidden overflow-y-hidden">
        <Navbar />
        <ContactHero />
        <ContactFormAddress />
        <Footer2 />
      </div>
    </>
  );
};

export default Contact;
