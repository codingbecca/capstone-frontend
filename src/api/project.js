import axios from "axios";

export async function createProject(projectInfo){ 
    const res = await axios.post("/api/projects", projectInfo)

    return res.data
}