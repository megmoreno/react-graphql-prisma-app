export function getSundayOfCurrentWeek(currentDate: Date) {
  const dayOfWeek = currentDate.getDay()
  const diff = currentDate.getDate() - dayOfWeek
  return new Date(currentDate.setDate(diff))
}

export function getSaturdayOfCurrentWeek(currentDate: Date) {
  const dayOfWeek = currentDate.getDay()
  const numDaysToAdd = 6 - dayOfWeek
  const diff = currentDate.getDate() + numDaysToAdd
  return new Date(currentDate.setDate(diff))
}
