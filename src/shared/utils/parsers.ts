import { ISfc } from '../types'

export const getParsedSfc = (sfcs: ISfc[]): string[][] => {
  const parsedItems: string[][] = []
  sfcs.forEach((value, index) => {
    const cells = [value.name, value.version, value.sfc_type.name]
    parsedItems.push(cells)
  })
  return parsedItems
}
//
// export const getParsedVulns = (vulns: IVulnerability[]): string[][] => {
//   const parsedItems: string[][] = []
//
//   vulns.forEach((value) => {
//     const cells = [
//       value.name || '-',
//       value.version || '-',
//       value.sfc_type?.name || '-',
//       value.vulnerabilities.map(v => v.name).join(', ')
//     ]
//     parsedItems.push(cells)
//   })
//   return parsedItems
// }
