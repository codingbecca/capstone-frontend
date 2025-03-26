// helper function to calculate the numbers for the pattern
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
  foot_circ,
  foot_length,
  thigh_circ,
  sock_length,
  stitch_gauge,
  row_gauge,
  pattern_repeat,
  title
}) {
    //numbers necessary for generating the pattern detail
    const footSts = calculateFootSts(foot_circ, stitch_gauge);
    const castOn = castOnSts(foot_circ, stitch_gauge);
    const inToGusset = inBeforeGusset(foot_length, foot_circ, stitch_gauge, row_gauge);
    const patternSts = patternStsOnFoot(foot_circ, stitch_gauge, pattern_repeat);
    const framingSts = patternFramingSts(foot_circ, stitch_gauge, pattern_repeat);
    const gussetI = gussetInc(foot_circ, stitch_gauge);
    const gussetE = gussetExp(foot_circ, stitch_gauge);
    const wrapSts = wrappedSts(foot_circ, stitch_gauge);
    const stage1Inc = incEveryOtherRnd(thigh_circ, foot_circ, stitch_gauge);
    const stage2Inc = incEvery8Rnds(thigh_circ, foot_circ, stitch_gauge);
    const stage3Inc = incEvery10Rnds(thigh_circ, foot_circ, stitch_gauge);
    const totalLength = legLength(sock_length, row_gauge);

    return(
        <div className="p-6">
            <h3 className="text-3xl font-bold text-center">{title}</h3>
            <h4 className="text-2xl font-semibold text-center border-b-1 mb-2 mt-3">Toe</h4>
            <p>Using Judy's magic cast on or the Turkish cast on (or other choice of cast on for toe-up socks), cast on a total of {castOn} stitches</p>
            <p>Knit all stitches, placing a marker at BOR and at the halfway point</p>
            <ol className="list-decimal px-15">
                <li>k1, m1l, k to one stitch before marker, m1r, k2, m1l, knit to 1 stitch before BOR marker, m1r, k1</li>
                <li>knit around</li>
            </ol>
            <ul className="list-disc px-15">
                <li>Repeat rounds 1 and 2 until you have a total of {footSts} stitches (a total of {(footSts - castOn) / 4} times)</li>
            </ul>

            <h4 className="text-2xl font-semibold text-center border-b-1 mb-2 mt-3">Foot</h4>
            <ul className="list-disc px-15">
                <li>k{framingSts}, work in pattern across next {patternSts} stitches, knit to EOR</li>
                <li>continue as established following accent pattern until sock measures {inToGusset} inches from end of toe</li>
            </ul>

            <h4 className="text-2xl font-semibold text-center border-b-1 mb-2 mt-3">Gusset</h4>
            <ul className="list-disc px-15">
                <li>k{framingSts}, work in pattern across next {patternSts} stitches, k{framingSts}, k1, pm, m1r, k to one stitch before EOR, m1l, k1</li>
                <li>knit {framingSts} stitches, work in pattern across next {patternSts} stitches, knit to EOR</li>
            </ul>
            <ol className="list-decimal px-15">
                <li>k{framingSts}, work in pattern across next {patternSts} stitches, k{framingSts}, k1, m1r, k to marker, sm, k to marker, sm, k to one stitch before end, m1l, k1</li>
                <li>k{framingSts}, work in pattern across next {patternSts} stitches, knit to EOR</li>
            </ol>
            <ul className="list-disc px-15">
                <li>repeat rounds 1 and 2 {gussetI - 1} more times (gusset increased a total of {gussetI} stitches)</li>
                <li>k{framingSts}, work in pattern across next {patternSts} stitches, k to marker, sm, k to next marker, sm, increase evenly by {gussetE} stitches before EOR</li>
                <li>knit {framingSts} stitches, work in pattern across next {patternSts} stitches, k {framingSts}, k1, increase evenly by {gussetE} stitches between here and marker, k 2 marker. HOLD HERE FOR HEEL TURN</li>
            </ul>

            <h4 className="text-2xl font-semibold text-center border-b-1 mb-2 mt-3">Heel Turn</h4>
            <p>Worked over sole stitches only</p>
            <ol className="list-decimal px-15">
                <li>*k1, sl1* to 2 stitches before marker, wrap and turn</li>
                <li>p to 2 stitches before marker, wrap and turn</li>
                <li>k1, *sl1, k1* to 3 stitches before marker, wrap and turn</li>
                <li>p to 3 stitches before marker, wrap and turn</li>
                <li>sl1, *k1, sl1* to 4 stitches before marker, wrap and turn</li>
                <li>p to 4 stitches before marker, wrap and turn</li>
            </ol>
            <ul className="list-disc px-15">
                <li>repeat as established, increasing the number of stitches before marker each row until there are {wrapSts + 1} stitches on each side, ending with an even row</li>
                <li>work as established to first wrap. Lift and knit all but the last wrapped stitch. On the last wrapped stitch, work the wrapped stitch and ssk at the same time. turn</li>
                <li>sl1, p to first wrap. Lift and purl all but the last wrapped stitch. On the last wrapped stitch, work the wrapped stitch and p2tog at the same time. turn</li>
            </ul>

            <h4 className="text-2xl font-semibold text-center border-b-1 mb-2 mt-3">Heel Flap</h4>
            <p>You should be ready to work on the right side of the sock</p>
            <ol className="list-decimal px-15">
                <li>(rs) sl1, *k1, sl1* until 1 stitch before the first marker. rm, ssk, turn</li>
                <li>(ws) sl1, p until 1 stitch before the marker. rm, p2tog, turn</li>
                <li>sl1, k2, *sl1, k1* until 1 stitch before the gap, ssk, turn</li>
                <li>sl1, p until 1 stitch before the gap, p2tog, turn</li>
                <li>sl1, *k1, sl1* until 1 stitch before the gap, ssk, turn</li>
                <li>sl1, p until 1 stitch before the gap, p2tog, turn</li>
            </ol>
            <ul className="list-disc px-15">
                <li>repeat rows 3 to 6 until there are 2 stitches outside each gap. you should have just worked a ws row</li>
            </ul>

            <h4 className="text-2xl font-semibold text-center border-b-1 mb-2 mt-3">Leg</h4>
            <p>return to working in the round</p>
            <ul className="list-disc px-15">
                <li>work sl1, k1 as established across heel flap until one stitch before the gap, ssk, k1</li>
                <li>k{framingSts}, work in pattern across next {patternSts} stitches, k {framingSts}, k1, k2tog, knit to halfway through heel flap. move BOR marker to this point</li>
                <li>work in pattern around until sock measures {foot_length} inches</li>
            </ul>
            <p>Increase Round: keeping pattern correct, m1l, work in pater to last st, m1r, p1</p>
            <ul className="list-disc px-15">
                <li>work increase round every other round {stage1Inc} times</li>
                <li>work increase round every 8 rounds {stage2Inc} times</li>
                <li>work increase round every 10 rounds {stage3Inc} times</li>
                <li>work in pattern as established (keeping p1 seam) until the sock is {totalLength} inches long from heel</li>
            </ul>

            <h4 className="text-2xl font-semibold text-center border-b-1 mb-2 mt-3">Cuff</h4>
            <p>This section uses a special double increase. The increase is noted as dinc and is worked as follows: m1p, lifted inc (worked as a knit stitch)</p>
            <ol className="list-decimal px-15">
                <li>Work 1x1 ribbing until last st, dinc, p1</li>
            </ol>
            <ul className="list-disc px-15">
                <li>Work 3 rounds 1x1 ribbing</li>
            </ul>
            <ol className="list-decimal px-15" start={5}>
                <li>k1, dinc, work 1x1 ribbing until end</li>
                <li>k1, dinc, work 1x1 ribbing until end</li>
            </ol>
            <ul className="list-disc px-15">
                <li>Work 6 rounds 1x1 ribbing</li>
            </ul>
            <ol className="list-decimal px-15" start={13}>
                <li>Work 1x1 ribbing to last st, dinc, p1</li>
                <li>Work 1x1 ribbing to last st, dinc, p1</li>
            </ol>
            <ul className="list-disc px-15">
                <li>Work 12 rounds 1x1 ribbing</li>
            </ul>
            <ol className="list-decimal px-15" start={27}>
                <li>k1, dinc, work 1x1 ribbing until end</li>
                <li>k1, dinc, work 1x1 ribbing until end</li>
            </ol>
            <ul className="list-disc px-15">
                <li>Work 6 rounds 1x1 ribbing</li>
            </ul>
            <ol className="list-decimal px-15" start={35}>
                <li>(eyelet round) 1x1 rib 3, *yo, k2tog, 1x1 rib 4 repeat from * to last 3 stitches, yo, k2tog, p1</li>
            </ol>
            <ul className="list-disc px-15">
                <li>Work 4 rounds 1x1 ribbing</li>
                <li>Cast off using choice of cast off</li>
            </ul>
        </div>
    )

}
