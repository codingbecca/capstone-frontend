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
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="title">Pattern title:</label>
        <input
          type="text"
          name="title"
          id="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <label htmlFor="footCirc">Foot circumference(in): </label>
        <input
          type="number"
          name="foot_circ"
          id="footCirc"
          min={0}
          step={0.01}
          value={formData.foot_circ}
          onChange={handleChange}
          required
        />
        <label htmlFor="footLength">Foot length (in):</label>
        <input
          type="number"
          name="foot_length"
          id="footLength"
          min={0}
          step={0.01}
          value={formData.foot_length}
          onChange={handleChange}
          required
        />
        <label htmlFor="thighCirc">Thigh circumference (in): </label>
        <input
          type="number"
          name="thigh_circ"
          id="thighCirc"
          min={0}
          step={0.01}
          value={formData.thigh_circ}
          onChange={handleChange}
          required
        />
        <label htmlFor="sockLength">Desired sock height (in):</label>
        <input
          type="number"
          name="sock_length"
          id="sockLength"
          min={0}
          step={0.01}
          value={formData.sock_length}
          onChange={handleChange}
          required
        />
        <label htmlFor="stitchGauge">Stitches per inch:</label>
        <input
          type="number"
          name="stitch_gauge"
          id="stitchGauge"
          min={0}
          step={0.01}
          value={formData.stitch_gauge}
          onChange={handleChange}
          required
        />
        <label htmlFor="rowGauge">Rows per inch:</label>
        <input
          type="number"
          name="row_gauge"
          id="rowGauge"
          min={0}
          step={0.01}
          value={formData.row_gauge}
          onChange={handleChange}
          required
        />
        <label htmlFor="patternRepeat">Pattern repeat length:</label>
        <input
          type="number"
          name="pattern_repeat"
          id="patternRepeat"
          min={0}
          step={0.01}
          value={formData.pattern_repeat}
          onChange={handleChange}
          required
        />
        <button type="submit">Generate Pattern</button>
      </form>
    </div>
  );
}
