import { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { useNavigate, useParams } from "react-router";

import PatternDetail from "../components/PatternDetail";
import MessageDiv from "../components/MessageDiv";
import { getPattern, deletePattern } from "../api/pattern";

export default function PatternDetailsPage() {
  const [pattern, setPattern] = useState(null);
  const [message, setMessage] = useState(null); //holds error message
  const [isDisabled, setIsDisabled] = useState(false);

  const ref = useRef(null);
  const { patternId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPattern = async () => {
      try {
        const fetchedPattern = await getPattern(patternId);
        setPattern(fetchedPattern);
      } catch (e) {
        console.error(e);
        setMessage(
            e.response?.data?.message || "An error occurred while fetching pattern."
          );
      }
    };
    fetchPattern();
  }, [patternId]);

  const reactToPrintFn = useReactToPrint({
    title: pattern?.title || "New Pattern",
    contentRef: ref,
    onAfterPrint: () => setIsDisabled(false)
  });

  const handlePrint = () => {
    setIsDisabled(true)
    reactToPrintFn()
  }

  const handleDelete = async () => {
    try {
      setIsDisabled(true);
      await deletePattern(patternId);
      navigate("/patterns");
    } catch (e) {
      console.error(e);
      setMessage(
        e.response?.data?.message || "An error occurred while deleting pattern."
      );
    }
  };

  const handleEdit = () => {
    setIsDisabled(true);
    navigate(`/patterns/${pattern._id}/edit`)
  }

  if (!pattern) return <p className="text-center p-4">Pattern loading...</p>;

  return (
    <div className="p-2">
      {/* Error Message Box */}
      {message && (
        <MessageDiv
          message={message}
          messageType="error"
          setMessage={setMessage}
        />
      )}
      <div ref={ref}>
        <PatternDetail {...pattern} />
      </div>
      <div className="text-center">
        <button
          onClick={handlePrint}
          disabled={isDisabled}
          className="py-3 px-4 mt-4 m-2 font-semibold bg-slate-500 rounded-lg cursor-pointer focus:bg-slate-400 focus:outline-none hover:bg-slate-400 disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-auto"
        >
          Print
        </button>
        <button
          onClick={handleEdit}
          disabled={isDisabled}
          className="py-3 px-4 mt-4 m-2 font-semibold bg-slate-500 rounded-lg cursor-pointer focus:bg-slate-400 focus:outline-none hover:bg-slate-400 disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-auto"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          disabled={isDisabled}
          className="py-3 px-4 mt-4 m-2 font-semibold bg-slate-500 rounded-lg cursor-pointer focus:bg-slate-400 focus:outline-none hover:bg-slate-400 disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-auto"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
