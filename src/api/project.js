import axios from "axios";

// create a new project
export async function createProject(projectInfo){ 
    const res = await axios.post("/api/projects", projectInfo)

    return res.data
}