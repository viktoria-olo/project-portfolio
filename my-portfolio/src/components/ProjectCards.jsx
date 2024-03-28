import { Button } from "./Button";
import { Image } from "../components/Image";
import { List } from "./List";
import github from "/icons/github.svg";
import liveDemo from "/icons/liveDemo.svg";
import "./ProjectCards.css";
import repoImages from "../sections/repoImages.json";

export const ProjectCards = ({ projects }) => {
  return (
    <>
      {projects && (
        <div className="project-cards-div">
          {projects.map((project) => {
            const repoImage = repoImages.find(
              (img) => img.repoID === project.id
            );
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
                    link={repoImage?.imageUrl}
                    altText={repoImage?.altText}
                  />
                  <h2>
                    {project.name.replace("project", "").replace(/-/g, " ")}
                  </h2>
                  <p>{project.description}</p>
                  <List topics={project.topics} />
                  <Button
                    buttonStyle="project-btn live-demo-btn"
                    icon={liveDemo}
                    altText="view the page button"
                    link={project.homepage}
                    buttonText="Live demo"
                  />
                  <Button
                    buttonStyle="project-btn view-code-btn"
                    icon={github}
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
