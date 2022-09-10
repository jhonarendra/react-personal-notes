const showFormattedDate = (date) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
  return new Date(date).toLocaleDateString('id-ID', options)
}

const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1)

export { showFormattedDate, capitalizeFirstLetter }
