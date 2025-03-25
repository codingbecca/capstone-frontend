import { useState } from "react";
import { createProject } from "../api/project";

const emptyProject = {
  saveToRavelry: false,
  projectDetails: {
    completed: "",
    made_for: "",
    name: "",
    notes: "",
    started: "",
  },
};

export default function ProjectForm() {
  const [formData, setFormData] = useState(emptyProject);

  const handleRootChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.checked,
    }));
  };

  const handleProjectDetailsChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      projectDetails: {
        ...prevFormData.projectDetails,
        [e.target.name]: e.target.value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createProject(formData);
    setFormData(emptyProject);
  };

  return (
    <div className="mt-6 rounded-lg">
      <form
        action=""
        onSubmit={handleSubmit}
        className="bg-slate-800 shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md mx-auto"
      >
        <label htmlFor="name" className="block tex-sm font-medium">
          Project name:
        </label>
        <p className="italic text-slate-400">Project name must be unique</p>
        <input
          className="my-1 p-1 block rounded-md border w-full border-slate-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
          type="text"
          name="name"
          id="name"
          value={formData.projectDetails.name}
          onChange={handleProjectDetailsChange}
          required
        />

        <div className="flex items-center flex-wrap justify-center">
          <label htmlFor="madeFor" className="w-1/4 tex-sm font-medium">
            Made for:
          </label>
          <input
            className="my-1 p-1 ml-2 rounded-md border w-2/3 border-slate-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
            type="text"
            name="made_for"
            id="madeFor"
            value={formData.projectDetails.made_for}
            onChange={handleProjectDetailsChange}
          />

          <label htmlFor="notes" className="w-1/4 tex-sm font-medium">
            Notes:
          </label>
          <textarea
            className="my-1 p-1 ml-2 rounded-md border w-2/3 border-slate-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
            name="notes"
            id="notes"
            value={formData.projectDetails.notes}
            onChange={handleProjectDetailsChange}
          ></textarea>
        </div>
        <div className="text-center">
          <input
            className="m-3 bg-slate-500"
            type="checkbox"
            name="saveToRavelry"
            id="saveToRavelry"
            checked={formData.saveToRavelry}
            onChange={handleRootChange}
          />
          <label htmlFor="saveToRavelry" className="w-1/4 tex-sm font-medium">
            Save to Ravelry
          </label>
        </div>

        <button
          type="submit"
          className="py-3 px-4 mt-4 mx-auto block font-semibold bg-slate-500 rounded-lg focus:bg-slate-400 focus:outline-none hover:bg-slate-400"
        >
          Save
        </button>
      </form>
    </div>
  );
}
