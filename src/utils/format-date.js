
const formatDate = (timeFormat) => {
  let date = new Date(timeFormat)
  let months =['Januari', 'Februari', 'Marrt', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober',	'November', 'Desember']
  return date.getDate() + ' ' + months[date.getMonth()] + ' '  + date.getFullYear()
}

export default formatDate
