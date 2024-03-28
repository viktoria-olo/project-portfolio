import { Headline } from "../components/Headline";
import { Image } from "../components/Image";
import { Button } from "../components/Button";
import linkedin from "/icons/linkedin.svg";
import github from "/icons/github.svg";
import stackOverflow from "/icons/stackOverflow.svg";
import "./ContactInfo.css";

export const ContactInfo = () => {
  return (
    <section className="contact-section">
      <Headline headlineStyle="section-headline" headline="Let's Talk" />
      <Image
        className="profile-picture"
        link="/images/Portrait_BW.png"
        altText="profile picture"
      />
      <div className="contact-info-div">
        <h2>Viktoria Olofsson</h2>
        <h2>+46(0)72 246 91 44</h2>
        <h3>viktoriaolofsson@gmail.com</h3>
      </div>
      <div className="contact-btn-div">
        <Button
          buttonStyle="contact-btn"
          icon={linkedin}
          altText="linkedIn logo"
          link="https://www.linkedin.com/in/viktoria-olofsson-%E7%BE%85%E8%96%87-81462bb6/"
        />
        <Button
          buttonStyle="contact-btn"
          icon={github}
          altText="GitHub logo"
          link="https://github.com/viktoria-olo"
        />
        <Button
          buttonStyle="contact-btn"
          icon={stackOverflow}
          altText="Stack Overflow icon"
          link="https://stackoverflow.com/users/23123189/vik"
        />
      </div>
    </section>
  );
};
