import { useEffect, useRef, useState } from "react";
import {useReactToPrint} from "react-to-print"

import PatternDetail from "../components/PatternDetail";
import { useNavigate, useParams } from "react-router";
import { getPattern, deletePattern } from "../api/pattern";


export default function PatternDetailsPage() {
    const [pattern, setPattern] = useState()

    
    const ref = useRef(null)
    const {patternId} = useParams()
    const navigate = useNavigate()
    
    useEffect(() => {
        const fetchPattern = async() =>{
            try {
                const fetchedPattern = await getPattern(patternId)
                setPattern(fetchedPattern)
            } catch (e) {
                console.error(e)
            }
        }
        fetchPattern()
    }, [patternId])

    const reactToPrintFn = useReactToPrint({
        title: pattern?.title || 'New Pattern', 
        contentRef: ref 
    })

    const handleDelete = async() => {
        await deletePattern(patternId)
        navigate('/patterns')
    }


    return(
        <div>
            <div ref={ref}>
                <PatternDetail {...pattern} />
            </div>
            <button onClick={() => reactToPrintFn()}>Print</button>
            <button onClick={() => navigate(`/patterns/${pattern._id}/edit`)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}