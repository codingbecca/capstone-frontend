import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL

// create a new pattern
export async function createPattern(patternDetails){
    const res = await axios.post(`${BASE_URL}/api/patterns`, patternDetails);

    return res.data
}

// get all patterns
export async function getPatterns(){
    const res = await axios.get(`${BASE_URL}/api/patterns`);

    return res.data
}

// get a specific pattern
export async function getPattern(patternId) {
    const res = await axios.get(`${BASE_URL}/api/patterns/${patternId}`)
    return res.data
}

// update a pattern
export async function editPattern(patternId, patternDetails) {
    const res = await axios.patch(`${BASE_URL}/api/patterns/${patternId}`, patternDetails)

    return res.data
}

// delete a pattern
export async function deletePattern(patternId) {
    await axios.delete(`${BASE_URL}/api/patterns/${patternId}`)
}