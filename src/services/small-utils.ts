// divide([1, 2, 3, 4, 5], 3) -> [[1, 2, 3], [4, 5]]
export const divide = <T>(list: T[], split: number): T[][] => list.reduce((acc, val) => {
  const last = acc[acc.length - 1]
  if (last.length === split) {
    acc.push([val])
    return acc
  } else {
    last.push(val)
    return acc
  }
}, [[]] as T[][])
