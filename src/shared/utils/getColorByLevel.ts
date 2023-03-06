export const COLORS = [
  '#0FD100',
  '#FAC712',
  '#F9761D',
  '#FF1D1D'
]

export const getColorByLevel = (level: number | undefined) => {
  if (!level) return '#0FD100'
  const color = COLORS[level]
  if (!color) return '#0FD100'
  return color
}
