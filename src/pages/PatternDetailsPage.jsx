import { useEffect, useRef, useState } from "react";
import {useReactToPrint} from "react-to-print"
import { useNavigate, useParams } from "react-router";

import PatternDetail from "../components/PatternDetail";
import { getPattern, deletePattern } from "../api/pattern";


export default function PatternDetailsPage() {
    const [pattern, setPattern] = useState(null)

    
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

    if(!pattern) return <p className="text-center p-4">Pattern loading...</p>

    return(
        <div className="p-2">
            <div ref={ref}>
                <PatternDetail {...pattern} />
            </div>
            <div className="text-center">

            <button onClick={() => reactToPrintFn()} className="py-3 px-4 mt-4 m-2 font-semibold bg-slate-500 rounded-lg focus:bg-slate-400 focus:outline-none hover:bg-slate-400">Print</button>
            <button onClick={() => navigate(`/patterns/${pattern._id}/edit`)} className="py-3 px-4 mt-4 m-2 font-semibold bg-slate-500 rounded-lg focus:bg-slate-400 focus:outline-none hover:bg-slate-400">Edit</button>
            <button onClick={handleDelete} className="py-3 px-4 mt-4 m-2 font-semibold bg-slate-500 rounded-lg focus:bg-slate-400 focus:outline-none hover:bg-slate-400">Delete</button>
            </div>
        </div>
    )
}