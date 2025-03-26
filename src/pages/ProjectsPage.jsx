import { useEffect, useState } from "react";
import { Link } from "react-router";

import MessageDiv from "../components/MessageDiv";
import { getProjects } from "../api/project";
import ProjectSummary from "../components/ProjectSummary";

export default function ProjectsPage() {
  const [message, setMessage] = useState(null); // Holds error message
  const [projects, setProjects] = useState([]);

  // fetches all projects from db on component's first render
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const allProjects = await getProjects();
        setProjects(allProjects);
      } catch (e) {
        console.error("Failed to fetch projects", e);
        setMessage(e.message || "An error occurred while fetching projects.");
      }
    };
    fetchProjects();
  }, []);

  if (projects.length === 0) {
    return (
      <div>
        {/* Error Message Box */}
        {message && (
          <MessageDiv
            message={message}
            messageType="error"
            setMessage={setMessage}
          />
        )}
        <p className="text-center p-4">Loading projects...</p>{" "}
      </div>
    );
  }

  return (
    <div>
      {/* Error Message Box */}
      {message && (
        <MessageDiv
          message={message}
          messageType="error"
          setMessage={setMessage}
        />
      )}

      {/* project summaries section */}
      <div className="flex flex-wrap m-15 bg-slate-800 px-6 rounded-xl justify-around items-center">
        {projects.map((project) => (
          <div className="w-1/4" key={project._id}>
            {/* <Link to={`/projects/${project._id}`} > */}
            <ProjectSummary project={project} />
            {/* </Link> */}
          </div>
        ))}
      </div>
    </div>
  );
}
