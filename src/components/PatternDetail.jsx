import {
  calculateFootSts,
  castOnSts,
  inBeforeGusset,
  patternStsOnFoot,
  patternFramingSts,
  gussetInc,
  gussetExp,
  wrappedSts,
  incEveryOtherRnd,
  incEvery8Rnds,
  incEvery10Rnds,
  legLength,
} from "../utils/patternMath.js";

export default function PatternDetail({
  footCirc,
  footLength,
  thighCirc,
  desiredLength,
  stitchGauge,
  rowGauge,
  patternRpt
}) {
    //numbers necessary for generating the pattern detail
    const footSts = calculateFootSts(footCirc, stitchGauge);
    const castOn = castOnSts(footCirc, stitchGauge);
    const inToGusset = inBeforeGusset(footLength, footCirc, stitchGauge, rowGauge);
    const patternSts = patternStsOnFoot(footCirc, stitchGauge, patternRpt);
    const framingSts = patternFramingSts(footCirc, stitchGauge, patternRpt);
    const gussetI = gussetInc(footCirc, stitchGauge);
    const gussetE = gussetExp(footCirc, stitchGauge);
    const wrapSts = wrappedSts(footCirc, stitchGauge);
    const stage1Inc = incEveryOtherRnd(thighCirc, footCirc, stitchGauge);
    const stage2Inc = incEvery8Rnds(thighCirc, footCirc, stitchGauge);
    const stage3Inc = incEvery10Rnds(thighCirc, footCirc, stitchGauge);
    const totalLength = legLength(desiredLength, rowGauge);

    return(
        <div>
            <h4>Toe</h4>
            <p>Using Judy's magic cast on or the Turkish cast on (or other choice of cast on for toe-up socks), cast on a total of {castOn} stitches</p>
            <p>Knit all stitches, placing a marker at BOR and at the halfway point</p>
            <ol>
                <li>k1, m1l, k to one stitch before marker, m1r, k2, m1l, knit to 1 stitch before BOR marker, m1r, k1</li>
                <li>knit around</li>
            </ol>
            <ul>
                <li>Repeat rounds 1 and 2 until you have a total of {footSts} stitches (a total of {(footSts - castOn) / 4} times)</li>
            </ul>

            <h4>Foot</h4>
            <ul>
                <li>knit {framingSts} stitches, work in pattern across next {patternSts} stitches, knit to EOR</li>
                <li>continue as established following accent pattern until sock measures {inToGusset} inches from end of toe</li>
            </ul>

            <h4>Gusset</h4>
            <ul>
                <li>knit {framingSts} stitches, work in pattern across next {patternSts} stitches, knit {framingSts}, k1, pm, m1r, k to one stitch before EOR, m1l, k1</li>
                <li>knit {framingSts} stitches, work in pattern across next {patternSts} stitches, knit to EOR</li>
            </ul>
            <ol>
                <li>knit {framingSts} stitches, work in pattern across next {patternSts} stitches, knit {framingSts} stitches, k1, m1r, k to marker, sm, k to marker, sm, k to one stitch before end, m1l, k1</li>
                <li>knit {framingSts} stitches, work in pattern across next {patternSts} stitches, knit to EOR</li>
            </ol>
            <ul>
                <li>repeat rounds 1 and 2 {gussetI - 1} more times (gusset increased a total of {gussetI} stitches)</li>
                <li>knit {framingSts} stitches, work in pattern across next {patternSts} stitches, k to marker, sm, k to next marker, sm, increase every by {gussetE} stitches before EOR</li>
                <li>knit {framingSts} stitches, work in pattern across next {patternSts} stitches, k {framingSts}, k1, increase evenly between here and marker, k 2 marker. HOLD HERE FOR HEEL TURN</li>
            </ul>

            <h4>Heel Turn</h4>
            <p>Worked over sole stitches only</p>
            <ol>
                <li>*k1, sl1* to 2 stitches before marker, wrap and turn</li>
                <li>p to 2 stitches before marker, wrap and turn</li>
                <li>k1, *sl1, k1* to 3 stitches before marker, wrap and turn</li>
                <li>p to 3 stitches before marker, wrap and turn</li>
                <li>sl1, *k1, sl1* to 4 stitches before marker, wrap and turn</li>
                <li>p to 4 stitches before marker, wrap and turn</li>
            </ol>
            <ul>
                <li>repeat as established, increasing the number of stitches before marker each row until there are {wrapSts + 1} stitches on each side, ending with an even row</li>
                <li>work as established to first wrap. Lift and knit all but the last wrapped stitch. On the last wrapped stitch, work the wrapped stitch and ssk at the same time. turn</li>
                <li>sl1, p to first wrap. Lift and purl all but the last wrapped stitch. On the last wrapped stitch, work the wrapped stitch and p2tog at the same time. turn</li>
            </ul>

            <h4>Heel Flap</h4>
            <p>You should be ready to work on the right side of the sock</p>
            <ol>
                <li>(rs) sl1, *k1, sl1* until 1 stitch before the first marker. rm, ssk, turn</li>
                <li>(ws) sl1, p until 1 stitch before the marker. rm, p2tog, turn</li>
                <li>sl1, k2, *sl1, k1* until 1 stitch before the gap, ssk, turn</li>
                <li>sl1, p until 1 stitch before the gap, p2tog, turn</li>
                <li>sl1, *k1, sl1* until 1 stitch before the gap, ssk, turn</li>
                <li>sl1, p until 1 stitch before the gap, p2tog, turn</li>
            </ol>
            <ul>
                <li>repeat rows 3 to 6 until there are 2 stitches outside each gap. you should have just worked a ws row</li>
            </ul>

            <h4>Leg</h4>
            <p>return to working in the round</p>
            <ul>
                <li>work sl1, k1 as established across heel flap until one stitch before the gap, ssk, k1</li>
                <li>knit {framingSts} stitches, work in pattern across next {patternSts} stitches, k {framingSts}, k1,, k2tog, knit to halfway through heel flap. move BOR marker to this point</li>
                <li>work in pattern around until sock measures {footLength} inches</li>
            </ul>
            <p>Increase Round: keeping pattern correct, m1l, work in pater to last st, m1r, p1</p>
            <ul>
                <li>work increase round every other round {stage1Inc} times</li>
                <li>work increase round every 8 rounds {stage2Inc} times</li>
                <li>work increase round every 10 rounds {stage3Inc} times</li>
                <li>work in pattern as established (keeping p1 seam) until the sock is {totalLength} inches long from heel</li>
            </ul>

            <h4>Cuff</h4>
            <p>This section uses a special double increase. The increase is noted as dinc and is worked as follows: m1p, lifted inc (worked as a knit stitch)</p>
            <ol>
                <li>Work 1x1 ribbing until last st, dinc, p1</li>
            </ol>
            <ul>
                <li>Work 3 rounds 1x1 ribbing</li>
            </ul>
            <ol start={5}>
                <li>k1, dinc, work 1x1 ribbing until end</li>
                <li>k1, dinc, work 1x1 ribbing until end</li>
            </ol>
            <ul>
                <li>Work 6 rounds 1x1 ribbing</li>
            </ul>
            <ol start={13}>
                <li>Work 1x1 ribbing to last st, dinc, p1</li>
                <li>Work 1x1 ribbing to last st, dinc, p1</li>
            </ol>
            <ul>
                <li>Work 12 rounds 1x1 ribbing</li>
            </ul>
            <ol start={27}>
                <li>k1, dinc, work 1x1 ribbing until end</li>
                <li>k1, dinc, work 1x1 ribbing until end</li>
            </ol>
            <ul>
                <li>Work 6 rounds 1x1 ribbing</li>
            </ul>
            <ol start={35}>
                <li>(eyelet round) 1x1 rib 3, *yo, k2tog, 1x1 rib 4 repeat from * to last 3 stitches, yo, k2tog, p1</li>
            </ol>
            <ul>
                <li>Work 4 rounds 1x1 ribbing</li>
                <li>Cast off using choice of cast off</li>
            </ul>
        </div>
    )

}
