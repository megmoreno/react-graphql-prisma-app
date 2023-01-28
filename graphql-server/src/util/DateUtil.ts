export function getSundayOfCurrentWeek(currentDate: Date) {
  const dayOfWeek = currentDate.getDay()
  const diff = currentDate.getDate() - dayOfWeek
  return new Date(currentDate.setDate(diff))
}
