import PatternDetail from "../components/PatternDetail";
import NewPatternForm from "../components/NewPatternForm";

export default function PatternGenerator(){
    return(
        <div>
            <main>
                <NewPatternForm />
                <PatternDetail />
                <button>Save Pattern</button>
            </main>
        </div>
    )
}