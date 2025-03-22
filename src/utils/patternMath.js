//helper function to round to the nearest even number
const roundEven = (num) => {
    return 2 * Math.round(num / 2)
}

export const calculateFootSts = (footCirc, stitchGauge) => {
    return roundEven(footCirc * stitchGauge * 0.9)
}

export const castOn = (footCirc, stitchGauge) => {
    return roundEven(calculateFootSts(footCirc, stitchGauge) / 6) * 2
}

export const inBeforeGusset = (footLength, footCirc, stitchGauge, rowGauge) => {
    return Number((footLength - (calculateFootSts(footCirc, stitchGauge) / rowGauge) - 0.25).toFixed(4))
}

export const patternStsOnFoot = (footCirc, stitchGauge, patternRepeat) => {
    return Math.floor(calculateFootSts(footCirc, stitchGauge) / 2 / patternRepeat) * patternRepeat
}

export const patternFramingSts = (footCirc, stitchGauge, patternRepeat) => {
    return (calculateFootSts(footCirc, stitchGauge) - patternStsOnFoot(footCirc, stitchGauge, patternRepeat))/2
}

export const soleSts = (footCirc, stitchGauge) => {
    return calculateFootSts(footCirc, stitchGauge) / 2
}

export const gussetInc = (footCirc, stitchGauge) => {
    return calculateFootSts(footCirc, stitchGauge) / 4
}

export const gussetExp = (footCirc, stitchGauge) => {
    return Math.round(calculateFootSts(footCirc, stitchGauge) / 10)
}

export const wrappedSts = (footCirc, stitchGauge) => {
    return Math.floor((Math.ceil(calculateFootSts(footCirc, stitchGauge) * 0.3) - 2) / 2)
}

// leg shaping -- this requires multiple helper functions and may be refactored later
const totalInc = (thighCirc, footCirc, stitchGauge) => {
    return roundEven(thighCirc * stitchGauge * 0.9) - calculateFootSts(footCirc, stitchGauge) - 14
}

const stageI = (thighCirc, footCirc, stitchGauge) => {
    return roundEven(totalInc(thighCirc, footCirc, stitchGauge))
}

const stageIIandIII = (thighCirc, footCirc, stitchGauge) => {
    return (totalInc(thighCirc, footCirc, stitchGauge) - stageI(thighCirc, footCirc, stitchGauge)) / 2
}

export const incEveryOtherRnd = (thighCirc, footCirc, stitchGauge) => {
    return stageI(thighCirc, footCirc, stitchGauge) / 2
}

export const incEvery8Rnds = (thighCirc, footCirc, stitchGauge) => {
    return Math.round(stageIIandIII(thighCirc, footCirc, stitchGauge) / 2)
}

export const incEvery10Rnds = (thighCirc, footCirc, stitchGauge) => {
    return (totalInc(thighCirc, footCirc, stitchGauge) / 2 ) - incEveryOtherRnd(thighCirc, footCirc, stitchGauge) - incEvery8Rnds(thighCirc, footCirc, stitchGauge)
}

export const legLength = (desiredLength, rowGauge) => {
    return Number((desiredLength - (39/rowGauge)).toFixed(2))
}