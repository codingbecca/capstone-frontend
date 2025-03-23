import { useRef } from "react";
import {useReactToPrint} from "react-to-print"

import PatternDetail from "../components/PatternDetail";


export default function PatternDetailsPage() {
    const ref = useRef(null)

    const reactToPrintFn = useReactToPrint({
        title: "Toe up stocking", // todo: change to title of pattern
        contentRef: ref 
    })


    return(
        <div>
            <div ref={ref}>
                <PatternDetail />
            </div>
            <button onClick={() => reactToPrintFn()}>Print</button>
            <button>Edit</button>
        </div>
    )
}