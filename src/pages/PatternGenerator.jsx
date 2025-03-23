import PatternDetail from "../components/PatternDetail";
import PatternForm from "../components/PatternForm";

export default function PatternGenerator(){
    return(
        <div>
            <main>
                <PatternForm />
                <PatternDetail />
                <button>Save Pattern</button>
            </main>
        </div>
    )
}