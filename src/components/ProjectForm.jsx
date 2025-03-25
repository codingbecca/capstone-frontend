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
            [e.target.name]: e.target.value
        }
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createProject(formData)
    setFormData(emptyProject)
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">Project name:</label>
        <p>Project name must be unique</p>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.projectDetails.name}
          onChange={handleProjectDetailsChange}
          required
        />

        <label htmlFor="madeFor">Made for:</label>
        <input
          type="text"
          name="made_for"
          id="madeFor"
          value={formData.projectDetails.made_for}
          onChange={handleProjectDetailsChange}
        />

        <label htmlFor="notes">Notes:</label>
        <textarea
          name="notes"
          id="notes"
          value={formData.projectDetails.notes}
          onChange={handleProjectDetailsChange}
        ></textarea>

        <input
          type="checkbox"
          name="saveToRavelry"
          id="saveToRavelry"
          checked={formData.saveToRavelry}
          onChange={handleRootChange}
        />
        <label htmlFor="saveToRavelry">Save to Ravelry</label>

        <button type="submit">Save</button>
      </form>
    </div>
  );
}
