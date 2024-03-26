import { Button } from "./Button";

export const ProjectCards = ({ projects }) => {
  const netlifyLinks = {
    756390333: "https://chipper-starburst-234ce1.netlify.app/", // Chatbot
    774386088: "https://flourishing-mooncake-e332de.netlify.app/", // Happy Thoughts
    759009670: "https://sparkling-cajeta-657abb.netlify.app/", // Library
    768010316: "https://heroic-crisp-8a05fa.netlify.app/", // Music Releases
    749447525: "https://imaginative-croissant-f2713d.netlify.app/", // News Site
    752195534: "https://cosmic-ganache-90f1e4.netlify.app/", // Pizza ordering
    777377015: null, // Project Portfolio
    770952235: "https://ornate-basbousa-d697b8.netlify.app/", // Survey
    763691885: "https://marvelous-empanada-370879.netlify.app/", // Weather App
  };
  return (
    <>
      {projects && (
        <div>
          {projects.map((project) => (
            <div key={project.id}>
              <h2>{project.name.replace("project", "").replace(/-/g, " ")}</h2>
              <p>{project.description}</p>
              <Button
                icon="../../public/icons/View-Code-Button.svg"
                altText="view the code button"
                link={project.html_url}
              />
              {netlifyLinks[project.id] && (
                <Button
                  icon="../../public/icons/Live-Demo-Button.svg"
                  altText="view the page"
                  link={netlifyLinks[project.id]}
                />
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
};
