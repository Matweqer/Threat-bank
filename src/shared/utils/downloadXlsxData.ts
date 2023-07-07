export const downloadXlsxData = (data: BlobPart) => {
  const resultFileBlob = new Blob([data], {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  })
  const link = document.createElement('a')
  link.href = URL.createObjectURL(resultFileBlob)
  link.style.display = 'none'
  link.download = 'result'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
