import FAQAboutAdmin from "@/components/admin-components/aboutAdminComponents/FAQAboutAdmin";
import HeroAboutAdmin from "@/components/admin-components/aboutAdminComponents/HeroAboutAdmin";
import Section1AboutAdmin from "@/components/admin-components/aboutAdminComponents/Section1AboutAdmin";
import Section2AboutAdmin from "@/components/admin-components/aboutAdminComponents/Section2AboutAdmin";
import Section3AboutAdmin from "@/components/admin-components/aboutAdminComponents/Section3AboutAdmin";
import Section4AboutAdmin from "@/components/admin-components/aboutAdminComponents/Section4AboutAdmin";
import Section6AboutAdmin from "@/components/admin-components/aboutAdminComponents/Section6AboutAdmin";
import Section7AboutAdmin from "@/components/admin-components/aboutAdminComponents/Section7AboutAdmin";
import Section8AboutAdmin from "@/components/admin-components/aboutAdminComponents/Section8AboutAdmin";

const AboutAdminPage = () => {
  return (
    <>
      <div className="lg:w-[90%] xl:w-[90%] mx-auto py-[100px] h-screen overflow-y-auto">
        <HeroAboutAdmin />
        <Section1AboutAdmin />
        <Section2AboutAdmin />
        <Section3AboutAdmin />
        <Section4AboutAdmin />
        <Section6AboutAdmin />
        <Section7AboutAdmin />
        <Section8AboutAdmin />
        <FAQAboutAdmin />
      </div>
    </>
  );
};

export default AboutAdminPage;
