import { Button } from "./Button";
import { Image } from "../components/Image";
import { List } from "./List";
import "./ProjectCards.css";

export const ProjectCards = ({ projects }) => {
  const imageLinks = {
    774386088: "../../public/images/happy-thoughts.jpg", // Happy Thoughts
    759009670: "../../public/images/books.jpg", // Library
    768010316: "../../public/images/music-record.jpg", // Music Releases
    770952235: "../../public/images/survey-clipboard.jpg", // Survey
    763691885: "../../public/images/weather.jpg", // Weather App
  };

  return (
    <>
      {projects && (
        <div className="project-cards-div">
          {projects.map((project) => {
            if (
              project.id !== 756390333 &&
              project.id !== 749447525 &&
              project.id !== 752195534 &&
              project.id !== 777377015
            ) {
              return (
                <div className="project-card" key={project.id}>
                  <Image
                    className="project-image"
                    link={imageLinks[project.id]}
                    altText="project image"
                  />
                  <h2>
                    {project.name.replace("project", "").replace(/-/g, " ")}
                  </h2>
                  <p>{project.description}</p>
                  <List topics={project.topics} />
                  <Button
                    buttonStyle="project-btn live-demo-btn"
                    icon="../../public/icons/Live-Demo.svg"
                    altText="view the page button"
                    link={project.homepage}
                    buttonText="Live demo"
                  />
                  <Button
                    buttonStyle="project-btn view-code-btn"
                    icon="../../public/icons/github.svg"
                    altText="view the code button"
                    link={project.html_url}
                    buttonText="View the code"
                  />
                </div>
              );
            }
            return null;
          })}
        </div>
      )}
    </>
  );
};
