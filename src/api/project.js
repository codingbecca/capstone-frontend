import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL

// create a new project
export async function createProject(projectInfo){ 
    const res = await axios.post(`${BASE_URL}/api/projects`, projectInfo)

    return res.data
}

// get all projects
export async function getProjects() {
    const res = await axios.get(`${BASE_URL}/api/projects`)

    return res.data
}