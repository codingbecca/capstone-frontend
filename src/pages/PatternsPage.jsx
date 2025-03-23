import { useEffect, useState } from "react"
import { Link } from "react-router"

import PatternSummary from "../components/PatternSummary"
import { getPatterns } from "../api/pattern"


export default function PatternsPage(){
    const [patterns, setPatterns] = useState([])

    useEffect(() => {
        const fetchPatterns = async() => {
            try {
                const allPatterns = await getPatterns()
                setPatterns(allPatterns)
            } catch (e) {
                console.error("Failed to fetch patterns", e)
            }
        }
        fetchPatterns()
    }, [])
    
    return(
        patterns.map(pattern => (
            <Link to={`/patterns/${pattern._id}`} key={pattern._id}>
                <PatternSummary pattern={pattern} />
            </Link>
        ))
    )
}