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
        <div className="flex flex-wrap m-15 bg-slate-800 px-6 rounded-xl justify-around items-center">
            {patterns.map(pattern => (
                <div className="w-1/4">
                    
                <Link to={`/patterns/${pattern._id}`} key={pattern._id}>
                    <PatternSummary pattern={pattern} />
                </Link>
                </div>
            ))}
        </div>
    )
}