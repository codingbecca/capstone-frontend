import { useEffect, useState } from "react";
import { Link } from "react-router";

import PatternSummary from "../components/PatternSummary";
import MessageDiv from "../components/MessageDiv";
import { getPatterns } from "../api/pattern";
import { useDispatch, useSelector } from "react-redux";
import { setPatterns } from "../store/patternsSlice";

export default function PatternsPage() {
  const [message, setMessage] = useState(null); // Holds error message
  const dispatch = useDispatch();
  const patterns = useSelector((state) => state.patterns);

  useEffect(() => {
    const fetchPatterns = async () => {
      try {
        const allPatterns = await getPatterns();
        dispatch(setPatterns(allPatterns));
      } catch (e) {
        console.error("Failed to fetch patterns", e);
        setMessage(
          e.response?.data?.message ||
            "An error occurred while fetching patterns."
        );
      }
    };
    fetchPatterns();
  }, [dispatch]);

  if (patterns.length === 0) {
    return <p className="text-center p-4">Loading patterns...</p>;
  }

  return (
    <div>
      {/* Error Message Box */}
      {message && (
        <MessageDiv
          message={message}
          messageType="error"
          setMessage={setMessage}
        />
      )}
      <div className="flex flex-wrap m-15 bg-slate-800 px-6 rounded-xl justify-around items-center">
        {patterns.map((pattern) => (
          <div className="w-1/4">
            <Link to={`/patterns/${pattern._id}`} key={pattern._id}>
              <PatternSummary pattern={pattern} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
