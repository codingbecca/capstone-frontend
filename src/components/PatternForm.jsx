export default function NewPatternForm() {
  return (
    <div>
      <form action="">
        <label htmlFor="title">Pattern title:</label>
        <input type="text" name="title" id="title" required />
        <label htmlFor="footCirc">Foot circumference(in): </label>
        <input type="number" name="foot_circ" id="footCirc" min={0} required />
        <label htmlFor="footLength">Foot length (in):</label>
        <input
          type="number"
          name="foot_length"
          id="footLength"
          min={0}
          required
        />
        <label htmlFor="thighCirc">Thigh circumference (in): </label>
        <input
          type="number"
          name="thigh_circ"
          id="thighCirc"
          min={0}
          required
        />
        <label htmlFor="sockLength">Desired sock height (in):</label>
        <input
          type="number"
          name="sock_length"
          id="sockLength"
          min={0}
          required
        />
        <label htmlFor="stitchGauge">Stitches per inch:</label>
        <input
          type="number"
          name="stitch_gauge"
          id="stitchGauge"
          min={0}
          required
        />
        <label htmlFor="rowGauge">Rows per inch:</label>
        <input type="number" name="row_gauge" id="rowGauge" min={0} required />
        <label htmlFor="patternRepeat">Pattern repeat length:</label>
        <input
          type="number"
          name="pattern_repeat"
          id="patternRepeat"
          min={0}
          required
        />
        <button type="submit">Generate Pattern</button>
      </form>
    </div>
  );
}
