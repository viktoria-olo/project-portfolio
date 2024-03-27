import { useEffect, useState } from "react";
import { Headline } from "../components/Headline";
import { ProjectCards } from "../components/ProjectCards";
import "./FeaturedProjects.css";

export const FeaturedProjects = () => {
  const [projects, setProjects] = useState(null);
  const url = "https://api.github.com/users/viktoria-olo/repos";

  const fetchProjects = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching data", error));
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <section className="featured-projects-section">
      <Headline colour="blue-text" headline="Featured Projects" />
      <ProjectCards projects={projects} />
    </section>
  );
};
