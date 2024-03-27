import { Headline } from "../components/Headline";
import { Image } from "../components/Image";
import "./Header.css";

export const Header = () => {
  return (
    <div className="header-div">
      <Image
        className="profile-picture"
        link="../../public/images/Portrait_BW.png"
        altText="profile picture"
      />
      <h2>Hi, I'm Viktoria Olofsson</h2>
      <Headline headlineStyle="profile-headline" headline="Web Developer" />

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  );
};
