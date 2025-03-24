import { useEffect } from "react"
import { Link } from "react-router"

import PatternSummary from "../components/PatternSummary"
import { getPatterns } from "../api/pattern"
import { useDispatch, useSelector } from "react-redux"
import { setPatterns } from "../store/patternsSlice"


export default function PatternsPage(){
    const dispatch = useDispatch();
    const patterns = useSelector(state => state.patterns)

    useEffect(() => {
        const fetchPatterns = async() => {
            try {
                const allPatterns = await getPatterns()
                dispatch(setPatterns(allPatterns))
            } catch (e) {
                console.error("Failed to fetch patterns", e)
            }
        }
        fetchPatterns()
    }, [dispatch])
    
    return(
        patterns.map(pattern => (
            <Link to={`/patterns/${pattern._id}`} key={pattern._id}>
                <PatternSummary pattern={pattern} />
            </Link>
        ))
    )
}