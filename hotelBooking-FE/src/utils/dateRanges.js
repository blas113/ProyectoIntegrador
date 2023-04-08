import { isWithinInterval } from "date-fns"

const isWithinRange = (date, range) => {
  return isWithinInterval(date, { start: range[0], end: range[1] })
}

export const isWithinRanges = (date, ranges) => {
  return ranges.some(range => isWithinRange(date, range))
}