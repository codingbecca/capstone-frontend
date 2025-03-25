import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

import PatternDetail from "../components/PatternDetail";
import PatternForm from "../components/PatternForm";
import MessageDiv from "../components/MessageDiv";

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
  const [isSubmitted, setIsSubmitted] = useState(false); // boolean used to toggle pattern details visibility
  const [message, setMessage] = useState(null); // Holds error message
  const navigate = useNavigate();

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
          setMessage(
            e.response?.data?.message ||
              "An error occurred while generating pattern."
          );
        }
      };

      fetchPattern();
    }
  }, [patternId]);

  const handleSave = async () => {
    try {
      if (!isNewPattern) {
        await editPattern(pattern._id, pattern);
      } else {
        await createPattern(pattern);
      }

      navigate(`/patterns/${pattern._id}`);
    } catch (e) {
      console.error(e);
      setMessage(
        e.response?.data?.message || "An error occurred while saving pattern."
      );
    }
  };

  return (
    <div className="p-2">
      <main>
        <PatternForm
          formData={pattern}
          setFormData={setPattern}
          setIsSubmitted={setIsSubmitted}
        />
        {/* Error Message Box */}
        {message && (
          <MessageDiv
            message={message}
            messageType="error"
            setMessage={setMessage}
          />
        )}
        {isSubmitted && (
          <div>
            <PatternDetail {...pattern} />
            <button
              onClick={handleSave}
              className="py-3 px-4 mt-4 mx-auto block font-semibold bg-slate-500 rounded-lg focus:bg-slate-400 focus:outline-none hover:bg-slate-400"
            >
              {isNewPattern ? "Save Pattern" : "Update Pattern"}
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
