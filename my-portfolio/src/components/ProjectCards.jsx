import { Button } from "./Button";
import { Image } from "../components/Image";

export const ProjectCards = ({ projects }) => {
  const imageLinks = {
    774386088: "../../public/images/happy-thoughts.jpg", // Happy Thoughts
    759009670: "../../public/images/books.jpg", // Library
    768010316: "../../public/images/music-record.jpg", // Music Releases
    770952235: "../../public/images/survey-clipboard.jpg", // Survey
    763691885: "../../public/images/weather.jpg", // Weather App
  };
  /*
  <Button
      icon="../../public/icons/Live-Demo-Button.svg"
      altText="view the page"
      link={netlifyLinks[project.id]}
     />*/

  return (
    <>
      {projects && (
        <div>
          {projects.map((project) => {
            if (
              project.id !== 756390333 &&
              project.id !== 749447525 &&
              project.id !== 752195534 &&
              project.id !== 777377015
            ) {
              return (
                <div key={project.id}>
                  <Image
                    className="project-image"
                    link={imageLinks[project.id]}
                    altText="project image"
                  />
                  <h2>
                    {project.name.replace("project", "").replace(/-/g, " ")}
                  </h2>
                  <p>{project.description}</p>
                  <p>{project.topics}</p>
                  <Button
                    icon="../../public/icons/View-Code-Button.svg"
                    altText="view the code button"
                    link={project.html_url}
                  />
                  <Button
                    icon="../../public/icons/Live-Demo-Button.svg"
                    altText="view the page"
                    link={project.homepage}
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
