export default function NewPatternForm({
  formData,
  setFormData,
  setIsSubmitted
}) {
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitted(true)

  };

  return (
    <div className="mt-6 rounded-lg">
      <form onSubmit={handleSubmit} className="bg-slate-800 shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md mx-auto">
        <label htmlFor="title" className="block tex-sm font-medium">Pattern title:</label>
        <p className="italic text-slate-400">Pattern title must be unique</p>
        <input
          className="my-1 p-1 block rounded-md border w-full border-slate-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
          type="text"
          name="title"
          id="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <div className="flex items-center flex-wrap justify-center">
        <label htmlFor="footCirc" className="w-1/2 tex-sm font-medium">Foot circumference (in): </label>
        <input
          className="my-1 p-1 ml-2 rounded-md border w-1/4 border-slate-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
          type="number"
          name="foot_circ"
          id="footCirc"
          min={0}
          step={0.01}
          value={formData.foot_circ}
          onChange={handleChange}
          required
        />
        <label htmlFor="footLength" className="w-1/2 tex-sm font-medium">Foot length (in):</label>
        <input
          className="my-1 p-1 ml-2 rounded-md border w-1/4 border-slate-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
          type="number"
          name="foot_length"
          id="footLength"
          min={0}
          step={0.01}
          value={formData.foot_length}
          onChange={handleChange}
          required
        />
        <label htmlFor="thighCirc" className="w-1/2 tex-sm font-medium">Thigh circumference (in): </label>
        <input
          className="my-1 p-1 ml-2 rounded-md border w-1/4 border-slate-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
          type="number"
          name="thigh_circ"
          id="thighCirc"
          min={0}
          step={0.01}
          value={formData.thigh_circ}
          onChange={handleChange}
          required
        />
        <label htmlFor="sockLength" className="w-1/2 tex-sm font-medium">Desired sock height (in):</label>
        <input
          className="my-1 p-1 ml-2 rounded-md border w-1/4 border-slate-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
          type="number"
          name="sock_length"
          id="sockLength"
          min={0}
          step={0.01}
          value={formData.sock_length}
          onChange={handleChange}
          required
        />
        <label htmlFor="stitchGauge" className="w-1/2 tex-sm font-medium">Stitches per inch:</label>
        <input
          className="my-1 p-1 ml-2 rounded-md border w-1/4 border-slate-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
          type="number"
          name="stitch_gauge"
          id="stitchGauge"
          min={0}
          step={0.01}
          value={formData.stitch_gauge}
          onChange={handleChange}
          required
        />
        <label htmlFor="rowGauge" className="w-1/2 tex-sm font-medium">Rows per inch:</label>
        <input
          className="my-1 p-1 ml-2 rounded-md border w-1/4 border-slate-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
          type="number"
          name="row_gauge"
          id="rowGauge"
          min={0}
          step={0.01}
          value={formData.row_gauge}
          onChange={handleChange}
          required
        />
        <label htmlFor="patternRepeat" className="w-1/2 tex-sm font-medium">Pattern repeat length:</label>
        <input
          className="my-1 p-1 ml-2 rounded-md border w-1/4 border-slate-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
          type="number"
          name="pattern_repeat"
          id="patternRepeat"
          min={0}
          value={formData.pattern_repeat}
          onChange={handleChange}
          required
        />
        </div>
        <br />
        <button type="submit" className="py-3 px-4 mt-4 mx-auto block font-semibold bg-slate-500 rounded-lg focus:bg-slate-400 focus:outline-none hover:bg-slate-400">Generate Pattern</button>
      </form>
    </div>
  );
}
