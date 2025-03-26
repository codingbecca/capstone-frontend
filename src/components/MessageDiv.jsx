// an error/success div component

export default function MessageDiv({ message, messageType, setMessage }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-slate-900/50 z-50">
      <div
        className={`p-4 m-4 rounded-lg text-center w-md mx-auto ${
          messageType === "success"
            ? "bg-green-500 text-white"
            : "bg-red-500 text-white"
        }`}
      >
        <p>{message}</p>
        <button
          onClick={() => setMessage(null)}
          className="mt-2 px-4 py-2 bg-white text-black rounded-lg"
        >
          OK
        </button>
      </div>
    </div>
  );
}
