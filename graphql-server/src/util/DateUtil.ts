export function getSundayOfCurrentWeek(currentDate: Date) {
  const dayOfWeek = currentDate.getUTCDay()
  const newDate = currentDate.getUTCDate() - dayOfWeek
  return new Date(currentDate.setUTCDate(newDate))
}

export function getSaturdayOfCurrentWeek(currentDate: Date) {
  const dayOfWeek = currentDate.getUTCDay()
  const numDaysToAdd = 6 - dayOfWeek
  const newDate = currentDate.getUTCDate() + numDaysToAdd
  return new Date(currentDate.setUTCDate(newDate))
}
