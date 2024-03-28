import { ContactInfo } from "./ContactInfo";
import { FeaturedProjects } from "./FeaturedProjects";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Skills } from "./Skills";
import { Tech } from "./Tech";

export const Home = () => {
  return (
    <>
      <Header />
      <Tech />
      <FeaturedProjects />
      <Skills />
      <ContactInfo />
      <Footer />
    </>
  );
};
