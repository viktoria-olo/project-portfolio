import { Headline } from "../components/Headline";
import { Image } from "../components/Image";
import { Button } from "../components/Button";
import "./ContactInfo.css";

export const ContactInfo = () => {
  return (
    <div className="contact-div">
      <Headline headlineStyle="section-headline" headline="Let's Talk" />
      <Image
        className="profile-picture"
        link="../../public/images/Portrait_BW.png"
        altText="profile picture"
      />
      <h2>Viktoria Olofsson</h2>
      <h2>+46 (0)72 246 91 44</h2>
      <h3>viktoriaolofsson@gmail.com</h3>
      <div>
        <Button
          icon="../../public/icons/linkedin.svg"
          altText="linkedIn logo"
          link="https://www.linkedin.com/in/viktoria-olofsson-%E7%BE%85%E8%96%87-81462bb6/"
        />
        <Button
          icon="../../public/icons/github.svg"
          altText="GitHub logo"
          link="https://github.com/viktoria-olo"
        />
        <Button
          icon="../../public/icons/StackOverflow.svg"
          altText="Stack Overflow icon"
          link="https://stackoverflow.com/users/23123189/vik"
        />
      </div>
    </div>
  );
};
