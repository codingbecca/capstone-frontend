import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

import PatternDetail from "../components/PatternDetail";
import PatternForm from "../components/PatternForm";
import { createPattern, editPattern, getPattern } from "../api/pattern";

const emptyPattern = {
  foot_circ: "",
  foot_length: "",
  thigh_circ: "",
  sock_length: "",
  stitch_gauge: "",
  row_gauge: "",
  pattern_repeat: "",
  title: "",
};

export default function PatternGenerator() {
  const { patternId } = useParams();
  const [pattern, setPattern] = useState(emptyPattern);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate()

  const isNewPattern = !patternId;

  useEffect(() => {
    if (isNewPattern) {
      setPattern(emptyPattern);
    } else {
      const fetchPattern = async () => {
        try {
          const pattern = await getPattern(patternId);
          setPattern(pattern);
        } catch (e) {
          console.error(e);
        }
      };

      fetchPattern();
    }
  }, [patternId]);

  const handleSave = async () => {
    try {
        if(!isNewPattern) {
            await editPattern(pattern._id, pattern)
        } else {
            await createPattern(pattern)
        }
        // setPattern(emptyPattern);
        setIsSubmitted(false);
        navigate(`/patterns/${pattern._id}`)
    } catch (e) {
        console.error(e)
    }
  }

  return (
    <div>
      <main>
        <PatternForm
          formData={pattern}
          setFormData={setPattern}
          setIsSubmitted={setIsSubmitted}
        />
        {isSubmitted && (
          <div>
            <PatternDetail {...pattern} />
            <button onClick={handleSave}>{isNewPattern ? "Save Pattern" : "Update Pattern"}</button>
          </div>
        )}
      </main>
    </div>
  );
}
